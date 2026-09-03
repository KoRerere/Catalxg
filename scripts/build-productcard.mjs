import fs from 'node:fs'

// Builds app/components/product/ProductCard.vue from the extracted Avada product card.
// Product cards are data-driven: title, price, image, link, category, product id.
let card = fs.readFileSync('artifacts/shop-card.html', 'utf8')

// Individual data points to parametrize.
const titleText = (card.match(/title-heading[^>]*>\s*<a[^>]*>([^<]*)<\/a>/) || [])[1] || 'PRODUCT'
const metaText = (card.match(/fusion-tb-categories[^>]*>\s*<a[^>]*>([^<]*)<\/a>/) || [])[1] || 'Category'
const prodId = (card.match(/data-product_id="(\d+)"/) || [])[1] || '0'
const imgPath = (card.match(/src="([^"]*wp-content[^"]*\.(?:png|jpg|jpeg|webp))"/) || [])[1] || '/wp-content/uploads/placeholder.png'

const sfc = `<script setup lang="ts">
// ProductCard: reusable data-driven Avada product card.
defineProps<{
  title: string
  price?: string
  image?: string
  href?: string
  category?: string
  productId?: string | number
}>()
</script>

<template>
  <li class="fusion-layout-column fusion_builder_column fusion-flex-column post-card fusion-grid-column fusion-post-cards-grid-column product-grid-view product type-product" style="--awb-padding-top:8px;--awb-padding-right:8px;--awb-padding-bottom:8px;--awb-padding-left:8px;--awb-overflow:hidden;--awb-bg-color:var(--awb-color1);--awb-bg-size:cover;--awb-border-color:var(--awb-color3);--awb-border-top:1px;--awb-border-right:1px;--awb-border-bottom:1px;--awb-border-left:1px;--awb-border-radius:10px 10px 10px 10px;">
    <div class="fusion-column-wrapper fusion-flex-justify-content-flex-start fusion-content-layout-column">
      <div class="fusion-classic-product-image-wrapper fusion-woo-product-image fusion-post-card-image has-aspect-ratio images" data-layout="rollover" style="--awb-border-radius-top-left:8px;--awb-border-radius-top-right:8px;--awb-border-radius-bottom-right:8px;--awb-border-radius-bottom-left:8px;--awb-aspect-ratio:1.25;">
        <div class="woocommerce-product-gallery__image fusion-image-wrapper" aria-haspopup="true">
          <div class="fusion-woo-badges-wrapper"></div>
          <img decoding="async" :src="image || '${imgPath}'" class="attachment-full size-full lazyload wp-post-image" alt="" loading="lazy" />
          <div class="fusion-rollover">
            <div class="fusion-rollover-content">
              <div class="cart-loading"><a href="/cart-2/"><i class="awb-icon-spinner" aria-hidden="true"></i><div class="view-cart">View Cart</div></a></div>
              <a class="fusion-link-wrapper" :href="href || '#'" :aria-label="title"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="fusion-meta-tb floated" style="--awb-border-bottom:0px;--awb-border-top:0px;--awb-height:48px;--awb-font-size:14px;--awb-margin:16px;">
        <span class="fusion-tb-categories"><a href="#" rel="tag">{{ category || '${metaText}' }}</a></span>
        <span class="fusion-meta-tb-sep"></span>
      </div>
      <div class="fusion-title fusion-sep-none fusion-title-text fusion-title-size-five" style="--awb-margin-top:0px;--awb-margin-right:16px;--awb-margin-bottom:6px;--awb-margin-left:16px;--awb-link-color:var(--awb-color8);">
        <h5 class="fusion-title-heading title-heading-left" style="margin:0;"><a :href="href || '#'" class="awb-custom-text-color awb-custom-text-hover-color" target="_self">{{ title }}</a></h5>
      </div>
      <div class="fusion-woo-price-tb sale-position-right floated has-badge badge-position-right" style="--awb-margin-bottom:4px;--awb-margin-left:16px;--awb-margin-right:16px;">
        <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#163;</span>{{ price || '0.00' }}</bdi></span></span>
      </div>
      <div class="fusion-separator fusion-full-width-sep" style="align-self:center;margin-left:auto;margin-right:auto;flex-grow:1;width:100%;"></div>
      <div class="fusion-builder-row fusion-builder-row-inner fusion-row fusion-flex-align-items-flex-start fusion-flex-content-wrap">
        <div class="fusion-layout-column fusion_builder_column_inner fusion-flex-column" style="--awb-padding-top:8px;--awb-padding-right:16px;--awb-padding-bottom:8px;--awb-padding-left:16px;--awb-width-large:100%;">
          <div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column">
            <div class="fusion-woo-cart fusion-post-card-cart awb-add-to-cart-style-button awb-product-style-link">
              <a :href="(href || '#') + '?add-to-cart=' + (productId || '${prodId}')" aria-describedby="woocommerce_loop_add_to_cart_link_describedby" data-quantity="1" class="fusion-post-card-cart-add-to-cart button-default add_to_cart_button ajax_add_to_cart" :data-product_id="String(productId || '${prodId}')" data-product_sku="" rel="nofollow"><i class="awb-vegan-storecart button-icon-left" aria-hidden="true"></i>Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
`

fs.writeFileSync('app/components/product/ProductCard.vue', sfc)
console.log('ProductCard.vue written:', sfc.length, 'bytes')
