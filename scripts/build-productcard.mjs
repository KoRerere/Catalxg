import fs from 'node:fs'

// Builds ProductCard.vue from the FULL original product card markup so the card
// keeps the exact original height/aspect. Data points (image/title/price/link/id)
// are bound to Vue props via targeted replacements.
let card = fs.readFileSync('artifacts/shop-card-full.html', 'utf8')

const ORIG_PID = '3447'
const ORIG_HREF = '/product/bpc-157-and-tb-500/'
const ORIG_TITLE = 'BPC-157 &#038; TB-500 40mg (R&#038;D Only)'
const ORIG_CAT = 'Uncategorized'

function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') }

let c = card
// 1) product image: bound to :src
c = c.replace(/<img decoding="async"([^>]*)src="[^"]*"/, '<img decoding="async"$1:src="image || \'\'"')
// 2) price: bind <bdi>£XX.XX</bdi>
c = c.replace(/(<bdi>[^<]*?<span class="woocommerce-Price-currencySymbol"[^>]*>[^<]*<\/span>)([0-9.,]+)(<\/bdi>)/, '$1{{ price }}$3')
// 3) product id on the add-to-cart anchor
c = c.replace(/data-product_id="\d+"/g, ':data-product_id="String(productId || \'\')"')
// 4) title: aria-label attribute -> :aria-label, <a> text -> {{ title }}
c = c.replace('aria-label="' + ORIG_TITLE + '"', ':aria-label="title"')
c = c.replace(new RegExp('>' + esc(ORIG_TITLE) + '<', 'g'), '>{{ title }}<')
// 5) category text
c = c.replace(new RegExp(esc(ORIG_CAT), 'g'), '{{ category }}')
// 6) product href (title link + rollover link + image link) — keep the add-to-cart
//    link (which carries ?add-to-cart=) separate for the cartHref binding.
c = c.replace(/(<a[^>]*href=")[^"]*add-to-cart=[^"]*"/, '$1BIND_CART_HREF"')
c = c.replace(/href="\/product\/bpc-157-and-tb-500\/"/g, ':href="href"')
c = c.replace(/href="BIND_CART_HREF"/g, ':href="cartHref"')

const sfc = `<script setup lang="ts">
// ProductCard: reusable data-driven Avada product card (full original markup).
import { computed } from 'vue'
const props = withDefaults(defineProps<{
  title?: string
  price?: string
  image?: string
  href?: string
  category?: string
  productId?: string | number
}>(), { title: '', price: '', image: '', href: '#', category: 'Uncategorized', productId: '' })

const cartHref = computed(() => (props.href && props.href !== '#' ? props.href : '/shop-2/') + '?add-to-cart=' + (props.productId || ''))
</script>

<template>
${c}
</template>
`
fs.writeFileSync('app/components/product/ProductCard.vue', sfc)
console.log('ProductCard.vue written:', sfc.length, 'bytes')
