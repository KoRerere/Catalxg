/**
 * BOGO public side JS file.
 * Free product selection functionality.
 *
 * @since 2.0.0
 * @package Wt_Smart_Coupon
 */

jQuery(
	function ($) {
		"use strict";

		$( document ).on(
			'change',
			'.wbte_give_away_product_attr',
			function () {
				let attributes = {};
				const parent     = $( this ).closest( '.wbte_get_away_product' );
				parent.find( '.wbte_give_away_product_attr' ).each(
					function (index) {
						attributes[$( this ).attr( 'data-attribute_name' )] = $( this ).val();
					}
				);

				const coupon_id = parent.closest( '.wbte_sc_bogo_products' ).attr( 'coupon' );

				if ( "" == $( this ).val() ) {
					parent.find( 'input[name="variation_id"]' ).val( 0 );
					parent.find( 'input[name="wt_variation_options"]' ).val( JSON.stringify( attributes ) );
					return false;
				}

				let stop_checking = false;
				$.each(
					attributes,
					function ( key, value ) {
						if ( '' === value ) {
							stop_checking = true;
							return false;
						}
					}
				);
				if ( stop_checking ) { /** Not every attributes selected. */
					return;
				}

				const product_id = parent.attr( 'product-id' );

				const data = {
					'attributes'    : attributes,
					'product'       : product_id,
					'_wpnonce'      : WTSmartCouponOBJ.nonces.public,
					'coupon_id'     : coupon_id
				};

				$( '.wbte_sc_bogo_add_to_cart, .checkout-button' ).prop( 'disabled', true ).css( {'opacity':.5, 'cursor':'not-allowed'} );
				jQuery.ajax(
					{
						type: "POST",
						async: true,
						url: WTSmartCouponOBJ.wc_ajax_url + 'update_variation_id_on_choose',
						data: data,
						dataType: 'json',
						success:function (response) {
							const productList = parent.closest( '.wbte_sc_bogo_products' );
							if ( true === response.status ) {
								parent.find( 'input[name="variation_id"]' ).val( response.variation_id );
								parent.find( 'input[name="wt_variation_options"]' ).val( JSON.stringify( attributes ) );
								parent.find('.wbte_sc_bogo_variation_error').remove();
								wbteScUpdateSelectedCount( productList );
								if ( response.img_url && '' !== response.img_url ) {
									parent.find( '.wbte_product_image img' ).attr( 'src', response.img_url );
								}
								if ( response.price && '' !== response.price && response.discount && '' !== response.discount ) {
									parent.find( '.wbte_sc_bogo_product_price' ).html( response.price );
									parent.find( '.wbte_sc_bogo_product_discount_price' ).html( response.price - response.discount );
								}
								if ( response.discount && '' !== response.discount ) {
									parent.find( '.wbte_sc_bogo_product_discount_price' ).html( response.discount );
								}
							} else {
								wbteScUpdateSelectedCount( productList );
								parent.find( 'input[name="variation_id"]' ).val( 0 );

								if (false !== response.status_msg && "" !== response.status_msg.trim()) { /* check message was disabled or not */
									alert( response.status_msg );
								}
							}
						},
						error:function () {
							parent.find( 'input[name="variation_id"]' ).val( 0 );
							$( '.wbte_sc_bogo_add_to_cart, .checkout-button' ).prop( 'disabled', false ).css( {'opacity':1, 'cursor':'pointer'} );
							$( '.wbte_get_away_product' ).css( {'opacity':1, 'cursor':'default'} );
							alert( WTSmartCouponOBJ.labels.error );
						}
					}
				);
			}
		);

		$( document ).ready( function() {

			/** Handle product selection */
			$( document ).on( 'click', '.wbte_get_away_product', function( e ) {
				if ( $( e.target ).is( 'select, input, option' ) || $( e.target ).closest( 'select, input' ).length ) {
					return;
				}
				
				const parent = $( this );
				const productList = parent.closest( '.wbte_sc_bogo_products' );
				const isAnyCondition = 'any' === productList.data( 'condition' );
				const totalQty = Number.parseInt( productList.closest( '.wbte_sc_bogo_giveaway_products_container' ).find( '.giveaway-title' ).attr( 'data-total-qty' ) );
				
				if ( '1' === parent.attr( 'data-is_purchasable' ) ) {
					const currentSelectedQty = wbteScGetSelectedQuantityTotal( productList );
					
					if ( ! parent.hasClass( 'selected' ) ) {
						if ( currentSelectedQty >= totalQty ) {
							return; 
						}
						
						parent.find( 'input[name="wbte_sc_bogo_quantity"]' ).val( 1 );

						if ( isAnyCondition ) {
							/** For 'any' condition, deselect any previously selected product */
							productList.find( '.wbte_get_away_product.selected' ).each( function() {
								$( this ).removeClass( 'selected' );
							} );

							parent.find( 'input[name="wbte_sc_bogo_quantity"]' ).val( totalQty );
						}

						if ( 0 < parent.attr( 'data-free-qty-on-select' ) ) {
							parent.find( 'input[name="wbte_sc_bogo_quantity"]' ).val( parent.attr( 'data-free-qty-on-select' ) );
						}
					}
					
					parent.toggleClass( 'selected' );

					const variation_id = parent.find( '[name="variation_id"]' ).val() || 0;
					if ( 0 < parent.find( '.wbte_give_away_product_attr' ).length && ( '' === variation_id || '0' === variation_id ) ) {
						
						parent.find( '.wbte_sc_bogo_variation_error' ).remove();
						
						const errorHtml = '<div class="wbte_sc_bogo_variation_error" style="color: #dc3545; margin-top: 10px;"><i class="fas fa-exclamation-circle"></i> ' + WTSmartCouponOBJ.labels.choose_variation + '</div>';
						parent.find( '.wt_variations' ).after( errorHtml );
					}
					
					if ( ! parent.hasClass( 'selected' ) ) {
						parent.find( '.wbte_sc_bogo_variation_error' ).remove();
					}
					
					updateDisabledState( productList, isAnyCondition );
					wbteScUpdateSelectedCount( productList );
				}
			} );

			/** Handle quantity change */
			$( document ).on( 'change', 'input[name="wbte_sc_bogo_quantity"]', function() {
				const input = $( this );
				const parent = input.closest( '.wbte_get_away_product' );
				const productList = parent.closest( '.wbte_sc_bogo_products' );
				const totalQty = Number.parseInt( productList.closest( '.wbte_sc_bogo_giveaway_products_container' )
					.find( '.giveaway-title' ).attr( 'data-total-qty' ) );
				
				let newQty = Number.parseInt( input.val() ) || 0;
				const maxQty = Number.parseInt( input.attr( 'max' ) ) || 0;
				
				/** First ensure we don't exceed individual product's max quantity */
				if ( newQty > maxQty ) {
					newQty = maxQty;
					input.val( newQty );
				}
				
				/** Calculate total quantity excluding current product's quantity completely */
				let otherProductsQty = 0;
				productList.find( 'input[name="wbte_sc_bogo_quantity"]' ).closest( '.wbte_get_away_product.selected' ).find( 'input[name="wbte_sc_bogo_quantity"]' ).not( input ).each( function() {
					otherProductsQty += Number.parseInt( $( this ).val() ) || 0;
				} );
				
				/** Ensure total quantity doesn't exceed limit */
				if ( ( otherProductsQty + newQty ) > totalQty ) {
					newQty = totalQty - otherProductsQty;
					input.val( newQty );
				}
				
				/** Update selected state based on quantity */
				parent.toggleClass( 'selected', newQty > 0 );
				
				updateDisabledState( productList, 'any' === productList.data( 'condition' ) );
				wbteScUpdateSelectedCount( productList );
			} );

			function updateDisabledState( productList, isAnyCondition ) {
				const totalQty = Number.parseInt( productList.closest( '.wbte_sc_bogo_giveaway_products_container' )
					.find( '.giveaway-title' ).attr( 'data-total-qty' ) );
				const currentQty = wbteScGetSelectedQuantityTotal( productList );
				
				productList.find( '.wbte_get_away_product' ).each( function() {
					const product = $( this );
					if ( ! product.hasClass( 'selected' ) ) {
						if ( isAnyCondition && 0 < productList.find( '.selected' ).length ) {
							product.addClass( 'disabled' );
						} else {
							product.toggleClass( 'disabled', currentQty >= totalQty );
						}
					}
				} );
			}

			/** Add this handler after the existing click handlers */
			$( document ).on( 'click', '.wbte_sc_bogo_add_to_cart', function( e ) {
				e.preventDefault();
				
				const productList = $( '.wbte_sc_bogo_products' );
				const selectedProducts = productList.find( '.wbte_get_away_product.selected' );
				
				if ( 0 === selectedProducts.length ) {
					return;
				}

				let hasError = false;
				const products = [];

				$( '.wbte_sc_bogo_variation_error' ).remove();

				selectedProducts.each( function() {
					const parent_obj = $( this );
					
					/** Check if product is purchasable */
					if ( '1' !== parent_obj.attr( 'data-is_purchasable' ) ) {
						return;
					}

					/** Handle variation if exists */
					let variation_id = 0;
					const variation_id_obj = parent_obj.find( '[name="variation_id"]' );
					if ( 0 < variation_id_obj.length ) {
						if ( '' === variation_id_obj.val().trim() || '0' === variation_id_obj.val().trim() ) {
							const errorHtml = '<div class="wbte_sc_bogo_variation_error" style="color: #dc3545; margin-top: 10px;"><i class="fas fa-exclamation-circle"></i> ' + WTSmartCouponOBJ.labels.choose_variation + '</div>';
							parent_obj.find( '.wt_variations' ).after( errorHtml );
							hasError = true;
							return false;
						}
						variation_id = variation_id_obj.val();
					}

					const coupon_id  = parent_obj.closest( '.wbte_sc_bogo_products' ).attr( 'coupon' );
					const product_id = parent_obj.attr( 'product-id' );
					const free_qty   = parent_obj.find( 'input[name="wbte_sc_bogo_quantity"]' ).val() || 1;
					const variation_attributes = parent_obj.find( 'input[name="wt_variation_options"]' ).length > 0 
						? JSON.parse( parent_obj.find( 'input[name="wt_variation_options"]' ).val() ) 
						: '';

					if ( free_qty > 0 ) {
						products.push( {
							'product_id'  : product_id,
							'variation_id': variation_id,
							'attributes'  : variation_attributes,
							'coupon_id'   : coupon_id,
							'free_qty'    : free_qty
						} );
					}
				} );

				if ( hasError || 0 === products.length ) {
					return;
				}

				const data = {
					'_wpnonce': WTSmartCouponOBJ.nonces.public,
					'products': products
				};

				const html_back = $( this ).html();
				$( this ).html( WTSmartCouponOBJ.labels.please_wait );

				const all_btn_elm = $( '.wbte_sc_bogo_add_to_cart' );
				all_btn_elm.prop( 'disabled', true );

				if ( ! $( '.woocommerce-notices-wrapper' ).length ) {
					$( '#main' ).prepend( '<div class="woocommerce-notices-wrapper"></div>' );
				}

				$( '.woocommerce-notices-wrapper' ).html( '' );

				jQuery.ajax( {
					type: 'POST',
					async: true,
					url: WTSmartCouponOBJ.wc_ajax_url + 'wbte_choose_multiple_free_products',
					data: data,
					success: function( response ) {
						if ( response ) {
							globalThis.location.replace(globalThis.location.href.split('#')[0]);
						} else {
							$( '.woocommerce-notices-wrapper' ).html( response );
							$( 'html, body' ).stop( true, true ).animate( { scrollTop: ( $( '.woocommerce-notices-wrapper' ).offset().top - 70 ) }, 500 );

							$( this ).html( html_back );
							all_btn_elm.prop( 'disabled', false );
						}
					},
					error: function() {
						$( this ).html( html_back );
						all_btn_elm.prop( 'disabled', false );
						alert( WTSmartCouponOBJ.labels.error );
					}
				} );
			} );
		} );
	}
);

/** Update selected count */
const wbteScUpdateSelectedCount = ( function($){
	return function( productList ){
		const selectedQty = wbteScGetSelectedQuantityTotal( productList );
		const qtySpan = productList.closest( '.wbte_sc_bogo_giveaway_products_container' )
			.find( '.wbte_sc_bogo_products_selected_qty' );
		
		qtySpan.text( selectedQty );

		/** Disable/enable buttons based on selection */
		let totalSelectedQty = 0;
		$( '.wbte_sc_bogo_products .wbte_get_away_product.selected' ).each( function() {
			totalSelectedQty += Number.parseInt( $( this ).find( 'input[name="wbte_sc_bogo_quantity"]' ).val() ) || 0;
		} );
		const button = $( '.wbte_sc_bogo_add_to_cart' );
		if ( totalSelectedQty > 0 && 0 === $( '.wbte_sc_bogo_variation_error' ).length ) {
			button.prop( 'disabled', false ).css( { 'opacity': 1, 'cursor': 'pointer' } );
		} else {
			button.prop( 'disabled', true ).css( { 'opacity': 0.5, 'cursor': 'not-allowed' } );
		}
	}
} )(jQuery);

/** Calculate total selected quantity */
const wbteScGetSelectedQuantityTotal = ( function($){
	return function( productList ){
		let total = 0;
		productList.find( 'input[name="wbte_sc_bogo_quantity"]' ).closest( '.wbte_get_away_product.selected' ).find( 'input[name="wbte_sc_bogo_quantity"]' ).each( function() {
			total += Number.parseInt( $( this ).val() ) || 0;
		} );
		return total;
	}
} )(jQuery);