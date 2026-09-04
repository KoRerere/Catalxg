<script setup lang="ts">
import SiteToTop from '~/components/layout/SiteToTop.vue'
import SiteWhatsApp from '~/components/layout/SiteWhatsApp.vue'
import SiteHeader from '~/components/layout/SiteHeader.vue'
import SiteFooter from '~/components/layout/SiteFooter.vue'
import SiteOffCanvas from '~/components/layout/SiteOffCanvas.vue'
import ProductCard from '~/components/product/ProductCard.vue'
const products = [{"title":"NAD+ 1,000mg","price":"169.00","href":"/product/nad-1000mg/","pid":"","image":"Terui_NAD-scaled.jpg"},{"title":"Glow 70mg (R&D Only)","price":"89.99","href":"/product/glow-70mg/","pid":"","image":"68c1536f91f1bf8bc2347d1e_Glow-1.jpg"},{"title":"Tirzepatide 40mg (R&D Only)","price":"119.99","href":"/product/tirzepatide/","pid":"","image":"68c1601181d8523257133acd_Tirzepatide-3.jpg"}]
const productsGrid1 = [{"title":"NAD+ 1,000mg","price":"169.00","href":"/product/nad-1000mg/","pid":"","image":"Terui_NAD-scaled.jpg"},{"title":"Glow 70mg (R&D Only)","price":"89.99","href":"/product/glow-70mg/","pid":"","image":"68c1536f91f1bf8bc2347d1e_Glow-1.jpg"},{"title":"Tirzepatide 40mg (R&D Only)","price":"119.99","href":"/product/tirzepatide/","pid":"","image":"68c1601181d8523257133acd_Tirzepatide-3.jpg"}]
const payload = {
  "title": "BPC-157 &amp; TB-500 40mg (R&amp;D Only) - Terui Health care",
  "meta": [
    {
      "http-equiv": "X-UA-Compatible",
      "content": "IE=edge"
    },
    {
      "http-equiv": "Content-Type",
      "content": "text/html; charset=utf-8"
    },
    {
      "name": "viewport",
      "content": "width=device-width, initial-scale=1"
    },
    {
      "name": "description",
      "content": "‍Each BPC-157 &amp; TB-500 40mg Pen Kit Includes: ‍Pre-filled Research pen (40mg total: 20mg BPC-157 + 20mg TB-500) Research information sheet"
    },
    {
      "name": "robots",
      "content": "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
    },
    {
      "property": "og:locale",
      "content": "en_US"
    },
    {
      "property": "og:type",
      "content": "product"
    },
    {
      "property": "og:title",
      "content": "BPC-157 &amp; TB-500 40mg (R&amp;D Only) - Terui Health care"
    },
    {
      "property": "og:description",
      "content": "‍Each BPC-157 &amp; TB-500 40mg Pen Kit Includes: ‍Pre-filled Research pen (40mg total: 20mg BPC-157 + 20mg TB-500) Research information sheet"
    },
    {
      "property": "og:url",
      "content": "/product/bpc-157-and-tb-500/"
    },
    {
      "property": "og:site_name",
      "content": "terui Health care"
    },
    {
      "property": "og:updated_time",
      "content": "2026-08-28T08:24:26+00:00"
    },
    {
      "property": "og:image",
      "content": "/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1.png"
    },
    {
      "property": "og:image:secure_url",
      "content": "/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1.png"
    },
    {
      "property": "og:image:width",
      "content": "1536"
    },
    {
      "property": "og:image:height",
      "content": "1024"
    },
    {
      "property": "og:image:alt",
      "content": "BPC-157 &#038; TB-500 40mg (R&#038;D Only)"
    },
    {
      "property": "og:image:type",
      "content": "image/png"
    },
    {
      "property": "product:price:amount",
      "content": "129.99"
    },
    {
      "property": "product:price:currency",
      "content": "GBP"
    },
    {
      "property": "product:availability",
      "content": "instock"
    },
    {
      "name": "twitter:card",
      "content": "summary_large_image"
    },
    {
      "name": "twitter:title",
      "content": "BPC-157 &amp; TB-500 40mg (R&amp;D Only) - Terui Health care"
    },
    {
      "name": "twitter:description",
      "content": "‍Each BPC-157 &amp; TB-500 40mg Pen Kit Includes: ‍Pre-filled Research pen (40mg total: 20mg BPC-157 + 20mg TB-500) Research information sheet"
    },
    {
      "name": "twitter:image",
      "content": "/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1.png"
    },
    {
      "name": "twitter:label1",
      "content": "Price"
    },
    {
      "name": "twitter:data1",
      "content": "&pound;129.99"
    },
    {
      "name": "twitter:label2",
      "content": "Availability"
    },
    {
      "name": "twitter:data2",
      "content": "In stock"
    },
    {
      "name": "description",
      "content": "A combined BPC-157 and TB-500 formulation (20mg each), supplied in a 40mg pre-filled research device.\n\nProduced exclusively for controlled laboratory R&amp;D applications. Provided in sealed batches to support compound stability analysis, delivery mechanism evaluation, and formulation studies.\nNot for human or veterinary consumption.\n\n‍Each BPC-157 &amp; TB-500 40mg Pen Kit Includes:\n‍Pre-filled Research pen (40mg total: 20mg BPC-157 +"
    },
    {
      "property": "og:locale",
      "content": "en_US"
    },
    {
      "property": "og:type",
      "content": "article"
    },
    {
      "property": "og:site_name",
      "content": "Terui Health care"
    },
    {
      "property": "og:title",
      "content": "BPC-157 &amp; TB-500 40mg (R&amp;D Only) - Terui Health care"
    },
    {
      "property": "og:description",
      "content": "A combined BPC-157 and TB-500 formulation (20mg each), supplied in a 40mg pre-filled research device.\n\nProduced exclusively for controlled laboratory R&amp;D applications. Provided in sealed batches to support compound stability analysis, delivery mechanism evaluation, and formulation studies.\nNot for human or veterinary consumption.\n\n‍Each BPC-157 &amp; TB-500 40mg Pen Kit Includes:\n‍Pre-filled Research pen (40mg total: 20mg BPC-157 +"
    },
    {
      "property": "og:url",
      "content": "/product/bpc-157-and-tb-500/"
    },
    {
      "property": "article:modified_time",
      "content": "2026-08-28T08:24:26+00:00"
    },
    {
      "property": "og:image",
      "content": "/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1.png"
    },
    {
      "property": "og:image:width",
      "content": "1536"
    },
    {
      "property": "og:image:height",
      "content": "1024"
    },
    {
      "property": "og:image:type",
      "content": "image/png"
    },
    {
      "name": "generator",
      "content": "WordPress 7.1"
    },
    {
      "name": "ti-site-data",
      "content": "eyJyIjoiMTowITc6MCEzMDowIiwibyI6Imh0dHBzOlwvXC9hbGx1dmljYXJlLmNvbT90aS1vbmxpbmUtdXNlcnMtZ29vZ2xlPTEmYW1wO3A9JTJGcHJvZHVjdCUyRmJwYy0xNTctYW5kLXRiLTUwMCUyRiZhbXA7X3dwbm9uY2U9NjhjYTdkOWNiYSJ9"
    }
  ],
  "link": [
    {
      "rel": "canonical",
      "href": "/product/bpc-157-and-tb-500/"
    },
    {
      "rel": "dns-prefetch",
      "href": "//code.jivosite.com"
    },
    {
      "rel": "alternate",
      "type": "application/rss+xml",
      "title": "Terui Health care &raquo; Feed",
      "href": "/feed/"
    },
    {
      "rel": "alternate",
      "type": "application/rss+xml",
      "title": "Terui Health care &raquo; Comments Feed",
      "href": "/comments/feed/"
    },
    {
      "rel": "icon",
      "href": "/terui_logo-SIngle.svg?v=1",
      "type": "image/svg+xml"
    },
    {
      "rel": "alternate",
      "type": "application/rss+xml",
      "title": "Terui Health care &raquo; BPC-157 &#038; TB-500 40mg (R&#038;D Only) Comments Feed",
      "href": "/product/bpc-157-and-tb-500/feed/"
    },
    {
      "rel": "alternate",
      "title": "oEmbed (JSON)",
      "type": "application/json+oembed",
      "href": "/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fteruicare.com%2Fproduct%2Fbpc-157-and-tb-500%2F"
    },
    {
      "rel": "alternate",
      "title": "oEmbed (XML)",
      "type": "text/xml+oembed",
      "href": "/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fteruicare.com%2Fproduct%2Fbpc-157-and-tb-500%2F&#038;format=xml"
    },
    {
      "rel": "stylesheet",
      "id": "ht_ctc_main_css-css",
      "href": "/wp-content/plugins/click-to-chat-for-whatsapp/new/inc/assets/css/main.css?ver=4.43",
      "media": "all"
    },
    {
      "rel": "stylesheet",
      "id": "photoswipe-css",
      "href": "/wp-content/plugins/woocommerce/assets/css/photoswipe/photoswipe.min.css?ver=10.9.1",
      "media": "all"
    },
    {
      "rel": "stylesheet",
      "id": "photoswipe-default-skin-css",
      "href": "/wp-content/plugins/woocommerce/assets/css/photoswipe/default-skin/default-skin.min.css?ver=10.9.1",
      "media": "all"
    },
    {
      "rel": "stylesheet",
      "id": "wt-smart-coupon-for-woo-css",
      "href": "/wp-content/plugins/wt-smart-coupons-for-woocommerce/public/css/wt-smart-coupon-public.css?ver=2.3.0",
      "media": "all"
    },
    {
      "rel": "stylesheet",
      "id": "fusion-dynamic-css-css",
      "href": "/wp-content/uploads/fusion-styles/816f664524a9f3ad33eb38c8e3bf326b.min.css?ver=3.15.2",
      "media": "all"
    },
    {
      "rel": "https://api.w.org/",
      "href": "/wp-json/"
    },
    {
      "rel": "alternate",
      "title": "JSON",
      "type": "application/json",
      "href": "/wp-json/wp/v2/product/3447"
    },
    {
      "rel": "EditURI",
      "type": "application/rsd+xml",
      "title": "RSD",
      "href": "/xmlrpc.php?rsd"
    },
    {
      "rel": "shortlink",
      "href": "/?p=3447"
    },
    {
      "rel": "preload",
      "href": "/wp-content/themes/Avada/includes/lib/assets/fonts/icomoon/awb-icons.woff",
      "as": "font",
      "type": "font/woff",
      "crossorigin": ""
    },
    {
      "rel": "preload",
      "href": "/wp-content/themes/Avada/includes/lib/assets/fonts/fontawesome/webfonts/fa-brands-400.woff2",
      "as": "font",
      "type": "font/woff2",
      "crossorigin": ""
    },
    {
      "rel": "preload",
      "href": "/wp-content/themes/Avada/includes/lib/assets/fonts/fontawesome/webfonts/fa-regular-400.woff2",
      "as": "font",
      "type": "font/woff2",
      "crossorigin": ""
    },
    {
      "rel": "preload",
      "href": "/wp-content/themes/Avada/includes/lib/assets/fonts/fontawesome/webfonts/fa-solid-900.woff2",
      "as": "font",
      "type": "font/woff2",
      "crossorigin": ""
    },
    {
      "rel": "preload",
      "href": "/wp-content/uploads/fusion-icons/Avada-Vegan-Store-v1.8/fonts/Avada-Vegan-Store.ttf?p6k74q",
      "as": "font",
      "type": "font/ttf",
      "crossorigin": ""
    },
    {
      "rel": "stylesheet",
      "id": "wc-blocks-style-css",
      "href": "/wp-content/plugins/woocommerce/assets/client/blocks/wc-blocks.css?ver=wc-10.9.1",
      "media": "all"
    },
    {
      "rel": "stylesheet",
      "href": "/local-commerce.css"
    }
  ],
  "style": [
    "img:is([sizes=auto i],[sizes^=\"auto,\" i]){contain-intrinsic-size:3000px 1500px}\n/*# sourceURL=wp-img-auto-sizes-contain-inline-css */",
    ":root{--wp-block-synced-color:#7a00df;--wp-block-synced-color--rgb:122,0,223;--wp-bound-block-color:var(--wp-block-synced-color);--wp-editor-canvas-background:#ddd;--wp-admin-theme-color:#007cba;--wp-admin-theme-color--rgb:0,124,186;--wp-admin-theme-color-darker-10:#006ba1;--wp-admin-theme-color-darker-10--rgb:0,107,160.5;--wp-admin-theme-color-darker-20:#005a87;--wp-admin-theme-color-darker-20--rgb:0,90,135;--wp-admin-border-width-focus:2px}@media (min-resolution:192dpi){:root{--wp-admin-border-width-focus:1.5px}}.wp-element-button{cursor:pointer}:root .has-very-light-gray-background-color{background-color:#eee}:root .has-very-dark-gray-background-color{background-color:#313131}:root .has-very-light-gray-color{color:#eee}:root .has-very-dark-gray-color{color:#313131}:root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background{background:linear-gradient(135deg,#00d084,#0693e3)}:root .has-purple-crush-gradient-background{background:linear-gradient(135deg,#34e2e4,#4721fb 50%,#ab1dfe)}:root .has-hazy-dawn-gradient-background{background:linear-gradient(135deg,#faaca8,#dad0ec)}:root .has-subdued-olive-gradient-background{background:linear-gradient(135deg,#fafae1,#67a671)}:root .has-atomic-cream-gradient-background{background:linear-gradient(135deg,#fdd79a,#004a59)}:root .has-nightshade-gradient-background{background:linear-gradient(135deg,#330968,#31cdcf)}:root .has-midnight-gradient-background{background:linear-gradient(135deg,#020381,#2874fc)}:root{--wp--preset--font-size--normal:16px;--wp--preset--font-size--huge:42px}.has-regular-font-size{font-size:1em}.has-larger-font-size{font-size:2.625em}.has-normal-font-size{font-size:var(--wp--preset--font-size--normal)}.has-huge-font-size{font-size:var(--wp--preset--font-size--huge)}:root .has-text-align-center{text-align:center}:root .has-text-align-left{text-align:left}:root .has-text-align-right{text-align:right}.has-fit-text{white-space:nowrap!important}#end-resizable-editor-section{display:none}.aligncenter{clear:both}.items-justified-left{justify-content:flex-start}.items-justified-center{justify-content:center}.items-justified-right{justify-content:flex-end}.items-justified-space-between{justify-content:space-between}.screen-reader-text{word-wrap:normal!important;border:0;clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;word-break:normal!important}.screen-reader-text:focus{background-color:#ddd;clip-path:none;color:#444;display:block;font-size:1em;height:auto;left:5px;line-height:normal;padding:15px 23px 14px;text-decoration:none;top:5px;width:auto;z-index:100000}html :where(.has-border-color){border-style:solid}html :where([style^=border-color],[style*=\";border-color\"],[style*=\"; border-color\"]){border-style:solid}html :where([style^=border-top-color],[style*=\";border-top-color\"],[style*=\"; border-top-color\"]){border-top-style:solid}html :where([style^=border-right-color],[style*=\";border-right-color\"],[style*=\"; border-right-color\"]){border-right-style:solid}html :where([style^=border-bottom-color],[style*=\";border-bottom-color\"],[style*=\"; border-bottom-color\"]){border-bottom-style:solid}html :where([style^=border-left-color],[style*=\";border-left-color\"],[style*=\"; border-left-color\"]){border-left-style:solid}html :where([style^=border-width],[style*=\";border-width\"],[style*=\"; border-width\"]){border-style:solid}html :where([style^=border-top-width],[style*=\";border-top-width\"],[style*=\"; border-top-width\"]){border-top-style:solid}html :where([style^=border-right-width],[style*=\";border-right-width\"],[style*=\"; border-right-width\"]){border-right-style:solid}html :where([style^=border-bottom-width],[style*=\";border-bottom-width\"],[style*=\"; border-bottom-width\"]){border-bottom-style:solid}html :where([style^=border-left-width],[style*=\";border-left-width\"],[style*=\"; border-left-width\"]){border-left-style:solid}html :where(img[class*=wp-image-]){height:auto;max-width:100%}:where(figure){margin:0 0 1em}html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:var(--wp-admin--admin-bar--height,0px)}@media screen and (max-width:600px){html :where(.is-position-sticky){--wp-admin--admin-bar--position-offset:0px}}\n\n/*# sourceURL=/wp-includes/css/dist/block-library/common.min.css */",
    "/*! This file is auto-generated */\n.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}\n/*# sourceURL=/wp-includes/css/classic-themes.min.css */",
    ":root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--awb-color-1: #ffffff;--wp--preset--color--awb-color-2: #f2f2f2;--wp--preset--color--awb-color-3: #e5e5e5;--wp--preset--color--awb-color-4: #eb5d01;--wp--preset--color--awb-color-5: #ffa42d;--wp--preset--color--awb-color-6: #494949;--wp--preset--color--awb-color-7: #2d2d2d;--wp--preset--color--awb-color-8: #141414;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgb(6,147,227) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgb(252,185,0) 0%,rgb(255,105,0) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgb(255,105,0) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 12.75px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 25.5px;--wp--preset--font-size--x-large: 42px;--wp--preset--font-size--normal: 17px;--wp--preset--font-size--xlarge: 34px;--wp--preset--font-size--huge: 51px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);--wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);}.wp-block-button{--wp--preset--dimension--25: 25%;--wp--preset--dimension--50: 50%;--wp--preset--dimension--75: 75%;--wp--preset--dimension--100: 100%;}:where(body) { margin: 0; }:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}:root :where(.wp-element-button, .wp-block-button__link){background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;font-style: inherit;font-weight: inherit;letter-spacing: inherit;line-height: inherit;padding-top: calc(0.667em + 2px);padding-right: calc(1.333em + 2px);padding-bottom: calc(0.667em + 2px);padding-left: calc(1.333em + 2px);text-decoration: none;text-transform: inherit;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-awb-color-1-color{color: var(--wp--preset--color--awb-color-1) !important;}.has-awb-color-2-color{color: var(--wp--preset--color--awb-color-2) !important;}.has-awb-color-3-color{color: var(--wp--preset--color--awb-color-3) !important;}.has-awb-color-4-color{color: var(--wp--preset--color--awb-color-4) !important;}.has-awb-color-5-color{color: var(--wp--preset--color--awb-color-5) !important;}.has-awb-color-6-color{color: var(--wp--preset--color--awb-color-6) !important;}.has-awb-color-7-color{color: var(--wp--preset--color--awb-color-7) !important;}.has-awb-color-8-color{color: var(--wp--preset--color--awb-color-8) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-awb-color-1-background-color{background-color: var(--wp--preset--color--awb-color-1) !important;}.has-awb-color-2-background-color{background-color: var(--wp--preset--color--awb-color-2) !important;}.has-awb-color-3-background-color{background-color: var(--wp--preset--color--awb-color-3) !important;}.has-awb-color-4-background-color{background-color: var(--wp--preset--color--awb-color-4) !important;}.has-awb-color-5-background-color{background-color: var(--wp--preset--color--awb-color-5) !important;}.has-awb-color-6-background-color{background-color: var(--wp--preset--color--awb-color-6) !important;}.has-awb-color-7-background-color{background-color: var(--wp--preset--color--awb-color-7) !important;}.has-awb-color-8-background-color{background-color: var(--wp--preset--color--awb-color-8) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-awb-color-1-border-color{border-color: var(--wp--preset--color--awb-color-1) !important;}.has-awb-color-2-border-color{border-color: var(--wp--preset--color--awb-color-2) !important;}.has-awb-color-3-border-color{border-color: var(--wp--preset--color--awb-color-3) !important;}.has-awb-color-4-border-color{border-color: var(--wp--preset--color--awb-color-4) !important;}.has-awb-color-5-border-color{border-color: var(--wp--preset--color--awb-color-5) !important;}.has-awb-color-6-border-color{border-color: var(--wp--preset--color--awb-color-6) !important;}.has-awb-color-7-border-color{border-color: var(--wp--preset--color--awb-color-7) !important;}.has-awb-color-8-border-color{border-color: var(--wp--preset--color--awb-color-8) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}.has-normal-font-size{font-size: var(--wp--preset--font-size--normal) !important;}.has-xlarge-font-size{font-size: var(--wp--preset--font-size--xlarge) !important;}.has-huge-font-size{font-size: var(--wp--preset--font-size--huge) !important;}\n/*# sourceURL=global-styles-inline-css */",
    ".woocommerce form .form-row .required { visibility: visible; }\n/*# sourceURL=woocommerce-inline-inline-css */",
    "img#wpstats{display:none}",
    "@media screen and (max-width: 800px){.fusion-no-small-visibility{display:none !important;}body .sm-text-align-center{text-align:center !important;}body .sm-text-align-left{text-align:left !important;}body .sm-text-align-right{text-align:right !important;}body .sm-text-align-justify{text-align:justify !important;}body .sm-flex-align-center{justify-content:center !important;}body .sm-flex-align-flex-start{justify-content:flex-start !important;}body .sm-flex-align-flex-end{justify-content:flex-end !important;}body .sm-mx-auto{margin-left:auto !important;margin-right:auto !important;}body .sm-ml-auto{margin-left:auto !important;}body .sm-mr-auto{margin-right:auto !important;}body .fusion-absolute-position-small{position:absolute;top:auto;width:100%;}.awb-sticky.awb-sticky-small{ position: sticky; top: var(--awb-sticky-offset,0); }}@media screen and (min-width: 801px) and (max-width: 1100px){.fusion-no-medium-visibility{display:none !important;}body .md-text-align-center{text-align:center !important;}body .md-text-align-left{text-align:left !important;}body .md-text-align-right{text-align:right !important;}body .md-text-align-justify{text-align:justify !important;}body .md-flex-align-center{justify-content:center !important;}body .md-flex-align-flex-start{justify-content:flex-start !important;}body .md-flex-align-flex-end{justify-content:flex-end !important;}body .md-mx-auto{margin-left:auto !important;margin-right:auto !important;}body .md-ml-auto{margin-left:auto !important;}body .md-mr-auto{margin-right:auto !important;}body .fusion-absolute-position-medium{position:absolute;top:auto;width:100%;}.awb-sticky.awb-sticky-medium{ position: sticky; top: var(--awb-sticky-offset,0); }}@media screen and (min-width: 1101px){.fusion-no-large-visibility{display:none !important;}body .lg-text-align-center{text-align:center !important;}body .lg-text-align-left{text-align:left !important;}body .lg-text-align-right{text-align:right !important;}body .lg-text-align-justify{text-align:justify !important;}body .lg-flex-align-center{justify-content:center !important;}body .lg-flex-align-flex-start{justify-content:flex-start !important;}body .lg-flex-align-flex-end{justify-content:flex-end !important;}body .lg-mx-auto{margin-left:auto !important;margin-right:auto !important;}body .lg-ml-auto{margin-left:auto !important;}body .lg-mr-auto{margin-right:auto !important;}body .fusion-absolute-position-large{position:absolute;top:auto;width:100%;}.awb-sticky.awb-sticky-large{ position: sticky; top: var(--awb-sticky-offset,0); }}",
    ".woocommerce-product-gallery{ opacity: 1 !important; }",
    ".fusion-woo-cart-1 table tr > *{padding-bottom:16px;}.fusion-woo-cart-1 tr .label{width:100px;font-size:15px;font-family:inherit;font-style:normal;font-weight:400;}.fusion-woo-cart-1 .woocommerce-grouped-product-list label,.fusion-woo-cart-1 .woocommerce-grouped-product-list label a,.fusion-woo-cart-1 .woocommerce-grouped-product-list .amount{font-size:15px;font-family:inherit;font-style:normal;font-weight:400;}.fusion-woo-cart-1 table.variations select{height:48px;font-size:15px;border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-right-radius:8px;border-bottom-left-radius:8px;}.fusion-woo-cart-1 table.variations .select-arrow{font-size:calc( ( 15px ) * .75 ) !important;}.fusion-woo-cart-1 table.variations .avada-color-select{margin-right:8px;height:40px;width:40px;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-right-radius:50px;border-bottom-left-radius:50px;}.fusion-woo-cart-1 table.variations .avada-image-select{margin-right:8px;}.fusion-woo-cart-1 table.variations .avada-button-select{margin-right:8px;height:40px;padding-top:2px;padding-right:24px;padding-bottom:0px;padding-left:24px;border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-right-radius:8px;border-bottom-left-radius:8px;font-size:15px;color:hsla(var(--awb-color6-h),var(--awb-color6-s),var(--awb-color6-l),calc(var(--awb-color6-a) - 50%));}.fusion-woo-cart-1 table.variations .avada-color-select[data-checked],.fusion-woo-cart-1 table.variations .avada-image-select[data-checked],.fusion-woo-cart-1 table.variations .avada-button-select[data-checked]{border-color:var(--awb-color6);color:var(--awb-color6);}.fusion-woo-cart-1 table.variations .avada-color-select:hover,.fusion-woo-cart-1 table.variations .avada-image-select:hover,.fusion-woo-cart-1 table.variations .avada-button-select:hover{border-color:hsla(var(--awb-color6-h),var(--awb-color6-s),var(--awb-color6-l),calc(var(--awb-color6-a) - 50%));color:var(--awb-color6);}.fusion-woo-cart-1 table.variations .avada-color-select:focus:not( [data-checked] ),.fusion-woo-cart-1 table.variations .avada-image-select:focus:not( [data-checked] ),.fusion-woo-cart-1 table.variations .avada-button-select:focus:not( [data-checked] ){border-color:hsla(var(--awb-color6-h),var(--awb-color6-s),var(--awb-color6-l),calc(var(--awb-color6-a) - 50%));}.fusion-woo-cart-1 table.variations .avada-color-select span{border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-right-radius:50px;border-bottom-left-radius:50px;}.fusion-woo-cart-1 table.variations .avada-color-select:focus,.fusion-woo-cart-1 table.variations .avada-image-select:focus,.fusion-woo-cart-1 table.variations .avada-button-select:focus{color:var(--awb-color6);}.fusion-woo-cart-1 .woocommerce-variation .price{flex-direction:row-reverse;font-family:inherit;font-style:normal;font-weight:400;}.fusion-woo-cart-1 .woocommerce-variation .price del{margin-left:0.5em;font-family:inherit;font-style:normal;font-weight:400;}.fusion-woo-cart-1 .woocommerce-variation .woocommerce-variation-description,.fusion-woo-cart-1 .woocommerce-variation .price > .amount,.fusion-woo-cart-1 .woocommerce-variation .price ins .amount,.fusion-woo-cart-1 .woocommerce-variation .price del .amount,.fusion-woo-cart-1 .stock,.fusion-woo-cart-1 .woocommerce-variation .woocommerce-variation-availability{font-family:inherit;font-style:normal;font-weight:400;}.fusion-woo-cart-1 .reset_variations{display:none !important;}.fusion-woo-cart-1 .fusion-button-wrapper{margin-top:8px;margin-bottom:8px;}.fusion-body #main .fusion-woo-cart-1 .quantity input[type=\"number\"].qty{height:54px;width:64px;font-size:17px;border-top-width:1px;border-right-width:0px;border-bottom-width:1px;border-left-width:0px;}.fusion-body #main .fusion-woo-cart-1 .quantity input[type=\"button\"]{height:54px;width:54px;font-size:17px;border-top-width:1px;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;background-color:var(--awb-color1);}.fusion-woo-cart-1 .quantity{width:calc( 64px + 54px + 54px );font-size:17px;}.fusion-woo-cart-1 .quantity .minus{border-top-left-radius:8px;border-bottom-left-radius:8px;}.fusion-woo-cart-1 .quantity .plus{border-top-right-radius:8px;border-bottom-right-radius:8px;}.fusion-body #main .fusion-woo-cart-1 .quantity input[type=\"button\"]:hover,.fusion-body #main .fusion-woo-cart-1 .quantity input[type=\"button\"]:focus{background-color:var(--awb-color2);border-color:var(--awb-color3);}.fusion-body .fusion-woo-cart-1 .fusion-button-wrapper .button{padding:17px 40px;line-height:21px;font-size:18px;}.fusion-body .fusion-woo-cart-1 .fusion-button-wrapper .button:hover{background:var(--awb-color7);background-image:linear-gradient( to top, var(--awb-color7), var(--awb-color7) );}",
    ".ht_ctc_entry_animation{animation-duration:0.4s;animation-fill-mode:both;animation-delay:0s;animation-iteration-count:1;}\t\t\t@keyframes ht_ctc_anim_corner {0% {opacity: 0;transform: scale(0);}100% {opacity: 1;transform: scale(1);}}.ht_ctc_an_entry_corner {animation-name: ht_ctc_anim_corner;animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);transform-origin: bottom var(--side, right);}"
  ],
  "htmlAttrs": {
    "class": "avada-html-layout-wide avada-html-header-position-top avada-is-100-percent-template avada-has-page-background-pattern",
    "lang": "en-US",
    "prefix": "og: https://ogp.me/ns#"
  },
  "bodyAttrs": {
    "class": "wp-singular product-template-default single single-product postid-3447 wp-theme-Avada wp-child-theme-Avada-Child-Theme theme-Avada woocommerce woocommerce-page woocommerce-no-js awb-no-sidebars fusion-image-hovers fusion-pagination-sizing fusion-button_type-flat fusion-button_span-no fusion-button_gradient-linear avada-image-rollover-circle-yes avada-image-rollover-yes avada-image-rollover-direction-left fusion-body ltr fusion-sticky-header no-tablet-sticky-header no-mobile-sticky-header no-mobile-slidingbar no-mobile-totop fusion-disable-outline fusion-sub-menu-fade mobile-logo-pos-left layout-wide-mode avada-has-boxed-modal-shadow-none layout-scroll-offset-full avada-has-zero-margin-offset-top fusion-top-header menu-text-align-center fusion-woo-product-design-classic fusion-woo-shop-page-columns-4 fusion-woo-related-columns-4 fusion-woo-archive-page-columns-3 avada-has-woo-gallery-disabled woo-outofstock-badge-top_bar mobile-menu-design-classic fusion-show-pagination-text fusion-header-layout-v3 avada-responsive avada-footer-fx-none avada-menu-highlight-style-bar fusion-search-form-clean fusion-main-menu-search-overlay fusion-avatar-circle avada-dropdown-styles avada-blog-layout-large avada-blog-archive-layout-large avada-header-shadow-no avada-menu-icon-position-left avada-has-megamenu-shadow avada-has-mobile-menu-search avada-has-main-nav-search-icon avada-has-breadcrumb-mobile-hidden avada-has-titlebar-hide avada-header-border-color-full-transparent avada-has-pagination-width_height avada-flyout-menu-direction-fade avada-ec-views-v1 awb-link-decoration"
  },
  "script": [
    {
      "innerHTML": "window._wca = window._wca || [];"
    },
    {
      "innerHTML": "{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"Organization\",\"@id\":\"/#organization\",\"name\":\"terui Health care\"},{\"@type\":\"WebSite\",\"@id\":\"/#website\",\"url\":\"https://teruicare.com\",\"name\":\"terui Health care\",\"publisher\":{\"@id\":\"/#organization\"},\"inLanguage\":\"en-US\"},{\"@type\":\"ImageObject\",\"@id\":\"/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1.png\",\"url\":\"/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1.png\",\"width\":\"1536\",\"height\":\"1024\",\"inLanguage\":\"en-US\"},{\"@type\":\"ItemPage\",\"@id\":\"/product/bpc-157-and-tb-500/#webpage\",\"url\":\"/product/bpc-157-and-tb-500/\",\"name\":\"BPC-157 &amp; TB-500 40mg (R&amp;D Only) - Terui Health care\",\"datePublished\":\"2025-11-25T18:10:20+00:00\",\"dateModified\":\"2026-08-28T08:24:26+00:00\",\"isPartOf\":{\"@id\":\"/#website\"},\"primaryImageOfPage\":{\"@id\":\"/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1.png\"},\"inLanguage\":\"en-US\"},{\"@type\":\"Product\",\"name\":\"BPC-157 &amp; TB-500 40mg (R&amp;D Only) - Terui Health care\",\"description\":\"\\u200dEach BPC-157 &amp; TB-500 40mg Pen Kit Includes: \\u200dPre-filled Research pen (40mg total: 20mg BPC-157 + 20mg TB-500) Research information sheet\",\"category\":\"Uncategorized\",\"mainEntityOfPage\":{\"@id\":\"/product/bpc-157-and-tb-500/#webpage\"},\"image\":[{\"@type\":\"ImageObject\",\"url\":\"/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1.png\",\"height\":\"1024\",\"width\":\"1536\"}],\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.27\",\"bestRating\":\"5\",\"ratingCount\":\"11\",\"reviewCount\":\"11\"},\"review\":[{\"@type\":\"Review\",\"@id\":\"/product/bpc-157-and-tb-500/#li-comment-645\",\"description\":\"I had my doubts about ordering BPC-157 &amp; TB-500 from an online store. My previous experiences made me cautious. However, Terui showed up with exceptional service. The product arrived within a few days and has shown more promise than I expected. I will definitely be ordering from here again!\",\"datePublished\":\"2026-03-16 17:59:22\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":\"4\",\"bestRating\":\"5\",\"worstRating\":\"1\"},\"author\":{\"@type\":\"Person\",\"name\":\"Sophie Hall\"}},{\"@type\":\"Review\",\"@id\":\"/product/bpc-157-and-tb-500/#li-comment-640\",\"description\":\"I was hesitant to order BPC-157 online, but Terui Healthcare\\u2019s positive reviews prompted me to try. My order arrived quickly and in great condition. I noticed a real difference in my healing time, which amazed me. This experience has turned me into a committed customer!\",\"datePublished\":\"2026-03-16 17:39:01\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":\"4\",\"bestRating\":\"5\",\"worstRating\":\"1\"},\"author\":{\"@type\":\"Person\",\"name\":\"Samuel Perez\"}},{\"@type\":\"Review\",\"@id\":\"/product/bpc-157-and-tb-500/#li-comment-587\",\"description\":\"Initially, I felt hesitant ordering BPC-157 &amp; TB-500 online due to previous negative experiences elsewhere. Terui proved to be a trustworthy service. The products arrived on time and in great condition. I've seen clear improvements in my recovery and will be looking to order again soon!\",\"datePublished\":\"2026-03-13 10:32:08\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":\"4\",\"bestRating\":\"5\",\"worstRating\":\"1\"},\"author\":{\"@type\":\"Person\",\"name\":\"Amanda Scott\"}},{\"@type\":\"Review\",\"@id\":\"/product/bpc-157-and-tb-500/#li-comment-582\",\"description\":\"I was unable to order using the discount code, but i still played my order and I got exactly what i wanted.\",\"datePublished\":\"2026-03-13 10:11:39\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":\"3\",\"bestRating\":\"5\",\"worstRating\":\"1\"},\"author\":{\"@type\":\"Person\",\"name\":\"William Sylvester\"}},{\"@type\":\"Review\",\"@id\":\"/product/bpc-157-and-tb-500/#li-comment-581\",\"description\":\"I previously avoided online supplement shopping for fear of scams. But after reading glowing reviews, I decided to try BPC-157 &amp; TB-500 from Terui Care. To my delight, the process was smooth, and my order arrived quickly. I have been amazed by the quality of the peptide; it has significantly improved my recovery after workouts. Now, I confidently recommend this service to others!\",\"datePublished\":\"2026-03-13 10:08:42\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":\"5\",\"bestRating\":\"5\",\"worstRating\":\"1\"},\"author\":{\"@type\":\"Person\",\"name\":\"Anthony Green\"}},{\"@type\":\"Review\",\"@id\":\"/product/bpc-157-and-tb-500/#li-comment-578\",\"description\":\"Initially, I hesitated to order BPC-157 &amp; TB-500 due to past experiences with unreliable online services. However, the reviews for Terui Healthcare were convincing, and I gave it a shot. The order arrived quickly and in perfect condition. I've seen a noticeable improvement in my rehabilitation since using it. I will definitely be returning for more!\",\"datePublished\":\"2026-03-13 09:31:29\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":\"5\",\"bestRating\":\"5\",\"worstRating\":\"1\"},\"author\":{\"@type\":\"Person\",\"name\":\"Jessica Davis\"}},{\"@type\":\"Review\",\"@id\":\"/product/bpc-157-and-tb-500/#li-comment-575\",\"description\":\"I must admit I was worried about ordering peptides like BPC-157 online. The skepticism came from previous experiences with other companies. But Terui Healthcare proved me wrong! The shipping was quick, and the product's quality was high. I noticed a significant reduction in recovery time after workouts. I\\u2019m now a devoted customer!\",\"datePublished\":\"2026-03-13 08:45:04\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":\"4\",\"bestRating\":\"5\",\"worstRating\":\"1\"},\"author\":{\"@type\":\"Person\",\"name\":\"Brain Wilson\"}},{\"@type\":\"Review\",\"@id\":\"/product/bpc-157-and-tb-500/#li-comment-570\",\"description\":\"I was skeptical when I ordered BPC-157 &amp; TB-500 for the first time. I\\u2019ve heard horror stories about online purchases, but after seeing positive feedback, I gave it a shot. The process was smooth, and my order arrived within just a few days. The quality of the peptides was evident when I used them for recovery. I felt improvements in my healing time and couldn't be happier. I have since placed more orders!\",\"datePublished\":\"2026-03-13 08:29:59\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":\"4\",\"bestRating\":\"5\",\"worstRating\":\"1\"},\"author\":{\"@type\":\"Person\",\"name\":\"Michael Gray\"}},{\"@type\":\"Review\",\"@id\":\"/product/bpc-157-and-tb-500/#li-comment-552\",\"description\":\"I received my BPC-157 order and I\\u2019m thrilled.\",\"datePublished\":\"2026-03-12 23:55:55\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":\"4\",\"bestRating\":\"5\",\"worstRating\":\"1\"},\"author\":{\"@type\":\"Person\",\"name\":\"Kevin Brown\"}},{\"@type\":\"Review\",\"@id\":\"/product/bpc-157-and-tb-500/#li-comment-62\",\"description\":\"I've struggled with weight my entire adult life. I tried every diet, pill, and exercise plan... This isn't just a product; it's the key I was missing. The quality is pristine, and the results speak for themselves. Thank you, Teruicare, for providing a reliable source for what feels like a medical miracle.\",\"datePublished\":\"2026-01-19 22:14:07\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":\"5\",\"bestRating\":\"5\",\"worstRating\":\"1\"},\"author\":{\"@type\":\"Person\",\"name\":\"Marcus Chen\"}},{\"@type\":\"Review\",\"@id\":\"/product/bpc-157-and-tb-500/#li-comment-61\",\"description\":\"As a biochemist, I am exceptionally critical about sourcing my research peptides. I will not compromise on purity or supplier integrity. My experience with Teruicare's Retatrutide has been outstanding on every metric. First, the website is professional and transparent (RD-only labeling is crucial). Second, the shipping was discreet, fast, and the package included a detailed CoA (Certificate of Analysis) that matched the batch on the vial. This is a level of verification most suppliers gloss over. The product itself is in a lyophilized cake that reconstitutes clearly and easily. In my protocol, the effects have been precisely as described in the literature: significant impact on glucose control and satiety signals. This is a top-tier, lab-grade product from a vendor that understands its serious clientele. Highly recommended for knowledgeable users.\",\"datePublished\":\"2026-01-19 21:44:32\",\"reviewRating\":{\"@type\":\"Rating\",\"ratingValue\":\"5\",\"bestRating\":\"5\",\"worstRating\":\"1\"},\"author\":{\"@type\":\"Person\",\"name\":\"Sarah J.\",\"url\":\"https://teruicare.com\"}}],\"offers\":{\"@type\":\"Offer\",\"price\":\"129.99\",\"priceCurrency\":\"GBP\",\"priceValidUntil\":\"2027-12-31\",\"availability\":\"http://schema.org/InStock\",\"itemCondition\":\"NewCondition\",\"url\":\"/product/bpc-157-and-tb-500/\",\"seller\":{\"@type\":\"Organization\",\"@id\":\"/\",\"name\":\"terui Health care\",\"url\":\"https://teruicare.com\",\"logo\":\"\"}},\"@id\":\"/product/bpc-157-and-tb-500/#richSnippet\"}]}"
    },
    {
      "src": "/wp-includes/js/jquery/jquery.min.js?ver=3.7.1"
    },
    {
      "src": "/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.10.9.1"
    },
    {
      "innerHTML": "\nvar wc_add_to_cart_params = {\"ajax_url\":\"/wp-admin/admin-ajax.php\",\"wc_ajax_url\":\"/?wc-ajax=%%endpoint%%\",\"i18n_view_cart\":\"View cart\",\"cart_url\":\"/cart-2/\",\"is_cart\":\"\",\"cart_redirect_after_add\":\"no\"};\n//# sourceURL=wc-add-to-cart-js-extra\n"
    },
    {
      "src": "/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=10.9.1"
    },
    {
      "src": "/wp-content/plugins/woocommerce/assets/js/zoom/jquery.zoom.min.js?ver=1.7.21-wc.10.9.1"
    },
    {
      "src": "/wp-content/plugins/woocommerce/assets/js/flexslider/jquery.flexslider.min.js?ver=2.7.2-wc.10.9.1"
    },
    {
      "src": "/wp-content/plugins/woocommerce/assets/js/photoswipe/photoswipe.min.js?ver=4.1.1-wc.10.9.1"
    },
    {
      "src": "/wp-content/plugins/woocommerce/assets/js/photoswipe/photoswipe-ui-default.min.js?ver=4.1.1-wc.10.9.1"
    },
    {
      "innerHTML": "\nvar wc_single_product_params = {\"i18n_required_rating_text\":\"Please select a rating\",\"i18n_rating_options\":[\"1 of 5 stars\",\"2 of 5 stars\",\"3 of 5 stars\",\"4 of 5 stars\",\"5 of 5 stars\"],\"i18n_product_gallery_trigger_text\":\"View full-screen image gallery\",\"review_rating_required\":\"yes\",\"flexslider\":{\"rtl\":false,\"animation\":\"slide\",\"smoothHeight\":true,\"directionNav\":true,\"controlNav\":\"thumbnails\",\"slideshow\":false,\"animationSpeed\":500,\"animationLoop\":false,\"allowOneSlide\":false,\"prevText\":\"\\u003Ci class=\\\"awb-icon-angle-left\\\"\\u003E\\u003C/i\\u003E\",\"nextText\":\"\\u003Ci class=\\\"awb-icon-angle-right\\\"\\u003E\\u003C/i\\u003E\"},\"zoom_enabled\":\"1\",\"zoom_options\":[],\"photoswipe_enabled\":\"1\",\"photoswipe_options\":{\"shareEl\":false,\"closeOnScroll\":false,\"history\":false,\"hideAnimationDuration\":0,\"showAnimationDuration\":0},\"flexslider_enabled\":\"1\"};\n//# sourceURL=wc-single-product-js-extra\n"
    },
    {
      "src": "/wp-content/plugins/woocommerce/assets/js/frontend/single-product.min.js?ver=10.9.1"
    },
    {
      "src": "/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.10.9.1"
    },
    {
      "innerHTML": "\nvar woocommerce_params = {\"ajax_url\":\"/wp-admin/admin-ajax.php\",\"wc_ajax_url\":\"/?wc-ajax=%%endpoint%%\",\"i18n_password_show\":\"Show password\",\"i18n_password_hide\":\"Hide password\"};\n//# sourceURL=woocommerce-js-extra\n"
    },
    {
      "src": "/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=10.9.1"
    },
    {
      "innerHTML": "\nvar WTSmartCouponOBJ = {\"ajaxurl\":\"/wp-admin/admin-ajax.php\",\"wc_ajax_url\":\"/?wc-ajax=\",\"nonces\":{\"public\":\"3770739632\",\"apply_coupon\":\"0e0931151c\"},\"labels\":{\"please_wait\":\"Please wait...\",\"choose_variation\":\"Please choose a variation\",\"error\":\"Error !!!\"},\"shipping_method\":[],\"payment_method\":\"\",\"is_cart\":\"\"};\n//# sourceURL=wt-smart-coupon-for-woo-js-extra\n"
    },
    {
      "src": "/wp-content/plugins/wt-smart-coupons-for-woocommerce/public/js/wt-smart-coupon-public.js?ver=2.3.0"
    },
    {
      "src": "https://stats.wp.com/s-202635.js"
    },
    {
      "src": "//code.jivosite.com/widget/msJNhEnfDV"
    },
    {
      "src": "/local-commerce.js"
    },
    {
      "innerHTML": "\n\t\t\tvar doc = document.documentElement;\n\t\t\tdoc.setAttribute( 'data-useragent', navigator.userAgent );\n\t\t",
      "tagPosition": "bodyClose"
    },
    {
      "src": "/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js",
      "tagPosition": "bodyClose"
    },
    {
      "innerHTML": "window.off_canvas_2892 = {\"type\":\"sliding-bar\",\"width\":\"\",\"width_medium\":\"\",\"width_small\":\"\",\"height\":\"full\",\"custom_height\":\"\",\"custom_height_medium\":\"\",\"custom_height_small\":\"\",\"horizontal_position\":\"flex-start\",\"horizontal_position_medium\":\"\",\"horizontal_position_small\":\"\",\"vertical_position\":\"flex-end\",\"vertical_position_medium\":\"\",\"vertical_position_small\":\"\",\"content_layout\":\"column\",\"align_content\":\"flex-start\",\"valign_content\":\"flex-start\",\"content_wrap\":\"wrap\",\"enter_animation\":\"slideShort\",\"enter_animation_direction\":\"left\",\"enter_animation_speed\":\"1.0\",\"enter_animation_timing\":\"ease\",\"exit_animation\":\"slideShort\",\"exit_animation_direction\":\"left\",\"exit_animation_speed\":\"1.0\",\"exit_animation_timing\":\"ease\",\"off_canvas_state\":\"closed\",\"sb_height\":\"\",\"position\":\"left\",\"transition\":\"push\",\"css_class\":\"\",\"css_id\":\"\",\"sb_enter_animation\":\"slideShort\",\"sb_enter_animation_speed\":\"1.0\",\"sb_enter_animation_timing\":\"ease\",\"sb_exit_animation\":\"slideShort\",\"sb_exit_animation_speed\":\"1.0\",\"sb_exit_animation_timing\":\"ease\",\"background_color\":\"#ffffff\",\"background_image\":\"\",\"background_position\":\"left top\",\"background_repeat\":\"repeat\",\"background_size\":\"\",\"background_custom_size\":\"\",\"background_blend_mode\":\"none\",\"oc_scrollbar\":\"hidden\",\"oc_scrollbar_background\":\"#f2f3f5\",\"oc_scrollbar_handle_color\":\"#65bc7b\",\"margin\":{\"top\":\"\"},\"padding\":{\"top\":\"\",\"bottom\":\"\"},\"box_shadow\":\"no\",\"box_shadow_position\":\"\",\"box_shadow_blur\":\"0\",\"box_shadow_spread\":\"0\",\"box_shadow_color\":\"\",\"border_radius\":\"\",\"border_width\":\"\",\"border_color\":\"\",\"overlay\":\"yes\",\"overlay_z_index\":\"\",\"overlay_page_scrollbar\":\"yes\",\"overlay_background_color\":\"rgba(0,0,0,0.8)\",\"overlay_background_image\":\"\",\"overlay_background_position\":\"left top\",\"overlay_background_repeat\":\"repeat\",\"overlay_background_size\":\"\",\"overlay_background_custom_size\":\"\",\"overlay_background_blend_mode\":\"none\",\"overlay_close_on_click\":\"yes\",\"close_on_anchor_click\":\"no\",\"close_on_esc\":\"yes\",\"auto_close_after_time\":\"\",\"close_button\":\"yes\",\"close_button_position\":\"right\",\"show_close_button_after_time\":\"\",\"close_button_margin\":{\"top\":\"32px\",\"right\":\"32px\"},\"close_button_color\":\"\",\"close_button_color_hover\":\"\",\"close_icon_size\":\"14\",\"close_button_custom_icon\":\"fusion-prefix-awb-vegan-storeclose\",\"on_page_load\":\"no\",\"time_on_page\":\"no\",\"time_on_page_duration\":\"\",\"on_scroll\":\"no\",\"scroll_direction\":\"up\",\"scroll_to\":\"position\",\"scroll_position\":\"\",\"scroll_element\":\"\",\"on_click\":\"no\",\"on_click_element\":\"\",\"exit_intent\":\"no\",\"after_inactivity\":\"no\",\"inactivity_duration\":\"\",\"on_add_to_cart\":\"no\",\"publish_date_after\":\"\",\"publish_date_until\":\"\",\"frequency\":\"forever\",\"frequency_xtimes\":\"\",\"frequency_xdays\":\"\",\"after_x_page_views\":\"no\",\"number_of_page_views\":\"\",\"after_x_sessions\":\"no\",\"number_of_sessions\":\"\",\"when_arriving_from\":\"\",\"users\":\"all\",\"users_roles\":\"\",\"device\":\"\",\"status_css_animations\":\"desktop\",\"main_padding\":{\"top\":\"0px\",\"bottom\":\"0px\"},\"dynamic_content_preview_type\":\"product\",\"preview_product\":[\"281\"],\"has_js_rules\":false};",
      "tagPosition": "bodyClose"
    },
    {
      "innerHTML": "window.off_canvas_3099 = {\"type\":\"popup\",\"width\":\"550px\",\"width_medium\":\"\",\"width_small\":\"\",\"height\":\"fit\",\"custom_height\":\"\",\"custom_height_medium\":\"\",\"custom_height_small\":\"\",\"horizontal_position\":\"center\",\"horizontal_position_medium\":\"\",\"horizontal_position_small\":\"\",\"vertical_position\":\"flex-end\",\"vertical_position_medium\":\"\",\"vertical_position_small\":\"\",\"content_layout\":\"column\",\"align_content\":\"flex-start\",\"valign_content\":\"flex-start\",\"content_wrap\":\"wrap\",\"enter_animation\":\"slide\",\"enter_animation_direction\":\"up\",\"enter_animation_speed\":\"2.0\",\"enter_animation_timing\":\"ease\",\"exit_animation\":\"slide\",\"exit_animation_direction\":\"down\",\"exit_animation_speed\":\"2.0\",\"exit_animation_timing\":\"ease\",\"off_canvas_state\":\"closed\",\"sb_height\":\"\",\"position\":\"left\",\"transition\":\"overlap\",\"css_class\":\"\",\"css_id\":\"\",\"sb_enter_animation\":\"slideShort\",\"sb_enter_animation_speed\":0.5,\"sb_enter_animation_timing\":\"ease\",\"sb_exit_animation\":\"slideShort\",\"sb_exit_animation_speed\":0.5,\"sb_exit_animation_timing\":\"ease\",\"background_color\":\"#ffffff\",\"background_image\":\"\",\"background_position\":\"left top\",\"background_repeat\":\"repeat\",\"background_size\":\"\",\"background_custom_size\":\"\",\"background_blend_mode\":\"none\",\"oc_scrollbar\":\"default\",\"oc_scrollbar_background\":\"#f2f3f5\",\"oc_scrollbar_handle_color\":\"#65bc7b\",\"margin\":{\"bottom\":\"48px\",\"left\":\"48px\",\"right\":\"\"},\"padding\":\"\",\"box_shadow\":\"no\",\"box_shadow_position\":\"\",\"box_shadow_blur\":\"0\",\"box_shadow_spread\":\"0\",\"box_shadow_color\":\"\",\"border_radius\":{\"top_left\":\"8px\",\"top_right\":\"8px\",\"bottom_right\":\"8px\",\"bottom_left\":\"8px\"},\"border_width\":\"\",\"border_color\":\"\",\"overlay\":\"yes\",\"overlay_z_index\":\"\",\"overlay_page_scrollbar\":\"yes\",\"overlay_background_color\":\"hsla(var(--awb-color8-h),var(--awb-color8-s),var(--awb-color8-l),calc(var(--awb-color8-a) - 80%))\",\"overlay_background_image\":\"\",\"overlay_background_position\":\"left top\",\"overlay_background_repeat\":\"repeat\",\"overlay_background_size\":\"\",\"overlay_background_custom_size\":\"\",\"overlay_background_blend_mode\":\"none\",\"overlay_close_on_click\":\"yes\",\"close_on_anchor_click\":\"no\",\"close_on_esc\":\"yes\",\"auto_close_after_time\":\"16\",\"close_button\":\"yes\",\"close_button_position\":\"right\",\"show_close_button_after_time\":\"\",\"close_button_margin\":\"\",\"close_button_color\":\"var(--awb-color1)\",\"close_button_color_hover\":\"var(--awb-color5)\",\"close_icon_size\":\"12\",\"close_button_custom_icon\":\"fusion-prefix-awb-vegan-storeclose\",\"on_page_load\":\"no\",\"time_on_page\":\"yes\",\"time_on_page_duration\":\"8\",\"on_scroll\":\"no\",\"scroll_direction\":\"up\",\"scroll_to\":\"position\",\"scroll_position\":\"\",\"scroll_element\":\"\",\"on_click\":\"no\",\"on_click_element\":\"\",\"exit_intent\":\"no\",\"after_inactivity\":\"no\",\"inactivity_duration\":\"\",\"on_add_to_cart\":\"no\",\"publish_date_after\":\"\",\"publish_date_until\":\"\",\"frequency\":\"forever\",\"frequency_xtimes\":\"\",\"frequency_xdays\":\"\",\"after_x_page_views\":\"no\",\"number_of_page_views\":\"\",\"after_x_sessions\":\"no\",\"number_of_sessions\":\"\",\"when_arriving_from\":\"\",\"users\":\"all\",\"users_roles\":\"\",\"device\":\"\",\"status_css_animations\":\"desktop\",\"main_padding\":{\"top\":\"0px\",\"bottom\":\"0px\"},\"dynamic_content_preview_type\":\"product\",\"preview_product\":[\"281\"],\"conditions_enabled\":\"yes\",\"layout_conditions\":\"{\\\"singular_product\\\":{\\\"label\\\":\\\"All Products\\\",\\\"type\\\":\\\"singular\\\",\\\"mode\\\":\\\"include\\\",\\\"singular\\\":\\\"singular_product\\\"}}\",\"has_js_rules\":false};",
      "tagPosition": "bodyClose"
    },
    {
      "innerHTML": "window.off_canvas_1369 = {\"type\":\"popup\",\"width\":\"550px\",\"width_medium\":\"\",\"width_small\":\"\",\"height\":\"fit\",\"custom_height\":\"\",\"custom_height_medium\":\"\",\"custom_height_small\":\"\",\"horizontal_position\":\"center\",\"horizontal_position_medium\":\"center\",\"horizontal_position_small\":\"center\",\"vertical_position\":\"flex-end\",\"vertical_position_medium\":\"center\",\"vertical_position_small\":\"center\",\"content_layout\":\"column\",\"align_content\":\"flex-start\",\"valign_content\":\"flex-start\",\"content_wrap\":\"wrap\",\"enter_animation\":\"slide\",\"enter_animation_direction\":\"up\",\"enter_animation_speed\":\"1.5\",\"enter_animation_timing\":\"ease\",\"exit_animation\":\"slide\",\"exit_animation_direction\":\"down\",\"exit_animation_speed\":\"1.5\",\"exit_animation_timing\":\"ease\",\"off_canvas_state\":\"closed\",\"sb_height\":\"\",\"position\":\"left\",\"transition\":\"overlap\",\"css_class\":\"\",\"css_id\":\"\",\"sb_enter_animation\":\"slideShort\",\"sb_enter_animation_speed\":0.5,\"sb_enter_animation_timing\":\"ease\",\"sb_exit_animation\":\"slideShort\",\"sb_exit_animation_speed\":0.5,\"sb_exit_animation_timing\":\"ease\",\"background_color\":\"#ffffff\",\"background_image\":\"\",\"background_position\":\"left top\",\"background_repeat\":\"repeat\",\"background_size\":\"auto\",\"background_custom_size\":{\"width\":\"\",\"height\":\"\"},\"background_blend_mode\":\"none\",\"oc_scrollbar\":\"custom\",\"oc_scrollbar_background\":\"var(--awb-color1)\",\"oc_scrollbar_handle_color\":\"var(--awb-color6)\",\"margin\":{\"top\":\"\",\"right\":\"\",\"bottom\":\"32px\",\"left\":\"\"},\"padding\":{\"top\":\"\",\"right\":\"\",\"bottom\":\"\",\"left\":\"\"},\"box_shadow\":\"no\",\"box_shadow_position\":{\"vertical\":\"\",\"horizontal\":\"\"},\"box_shadow_blur\":\"0\",\"box_shadow_spread\":\"0\",\"box_shadow_color\":\"\",\"border_radius\":{\"top_left\":\"8px\",\"top_right\":\"8px\",\"bottom_right\":\"8px\",\"bottom_left\":\"8px\"},\"border_width\":{\"top\":\"\",\"right\":\"\",\"bottom\":\"\",\"left\":\"\"},\"border_color\":\"\",\"overlay\":\"yes\",\"overlay_z_index\":\"\",\"overlay_page_scrollbar\":\"yes\",\"overlay_background_color\":\"rgba(0,0,0,0.8)\",\"overlay_background_image\":\"\",\"overlay_background_position\":\"left top\",\"overlay_background_repeat\":\"repeat\",\"overlay_background_size\":\"auto\",\"overlay_background_custom_size\":{\"width\":\"\",\"height\":\"\"},\"overlay_background_blend_mode\":\"none\",\"overlay_close_on_click\":\"yes\",\"close_on_anchor_click\":\"no\",\"close_on_esc\":\"yes\",\"auto_close_after_time\":\"\",\"close_button\":\"yes\",\"close_button_position\":\"right\",\"show_close_button_after_time\":\"\",\"close_button_margin\":{\"top\":\"\",\"right\":\"-40px\",\"bottom\":\"\",\"left\":\"\"},\"close_button_color\":\"var(--awb-color1)\",\"close_button_color_hover\":\"var(--awb-color3)\",\"close_icon_size\":\"16\",\"close_button_custom_icon\":\"fusion-prefix-awb-vegan-storeclose\",\"on_page_load\":\"no\",\"time_on_page\":\"no\",\"time_on_page_duration\":\"\",\"on_scroll\":\"no\",\"scroll_direction\":\"up\",\"scroll_to\":\"position\",\"scroll_position\":\"\",\"scroll_element\":\"\",\"on_click\":\"no\",\"on_click_element\":\"\",\"exit_intent\":\"no\",\"after_inactivity\":\"no\",\"inactivity_duration\":\"\",\"on_add_to_cart\":\"yes\",\"publish_date_after\":\"\",\"publish_date_until\":\"\",\"frequency\":\"forever\",\"frequency_xtimes\":\"\",\"frequency_xdays\":\"\",\"after_x_page_views\":\"no\",\"number_of_page_views\":\"\",\"after_x_sessions\":\"no\",\"number_of_sessions\":\"\",\"when_arriving_from\":\"\",\"users\":\"all\",\"users_roles\":\"\",\"device\":\"\",\"status_css_animations\":\"desktop\",\"main_padding\":{\"top\":\"0px\",\"bottom\":\"0px\"},\"dynamic_content_preview_type\":\"product\",\"preview_product\":[\"557\"],\"conditions_enabled\":\"yes\",\"preview_post\":\"0\",\"preview_page\":\"0\",\"preview_review\":\"0\",\"preview_avada_portfolio\":\"0\",\"preview_avada_faq\":\"0\",\"preview_archives\":\"post\",\"has_js_rules\":false};",
      "tagPosition": "bodyClose"
    },
    {
      "innerHTML": "var fusionNavIsCollapsed=function(e){var t,n;window.innerWidth<=e.getAttribute(\"data-breakpoint\")?(e.classList.add(\"collapse-enabled\"),e.classList.remove(\"awb-menu_desktop\"),e.classList.contains(\"expanded\")||window.dispatchEvent(new CustomEvent(\"fusion-mobile-menu-collapsed\",{detail:{nav:e}})),(n=e.querySelectorAll(\".menu-item-has-children.expanded\")).length&&n.forEach(function(e){e.querySelector(\".awb-menu__open-nav-submenu_mobile\").setAttribute(\"aria-expanded\",\"false\")})):(null!==e.querySelector(\".menu-item-has-children.expanded .awb-menu__open-nav-submenu_click\")&&e.querySelector(\".menu-item-has-children.expanded .awb-menu__open-nav-submenu_click\").click(),e.classList.remove(\"collapse-enabled\"),e.classList.add(\"awb-menu_desktop\"),null!==e.querySelector(\".awb-menu__main-ul\")&&e.querySelector(\".awb-menu__main-ul\").removeAttribute(\"style\")),e.classList.add(\"no-wrapper-transition\"),clearTimeout(t),t=setTimeout(()=>{e.classList.remove(\"no-wrapper-transition\")},400),e.classList.remove(\"loading\")},fusionRunNavIsCollapsed=function(){var e,t=document.querySelectorAll(\".awb-menu\");for(e=0;e<t.length;e++)fusionNavIsCollapsed(t[e])};function avadaGetScrollBarWidth(){var e,t,n,l=document.createElement(\"p\");return l.style.width=\"100%\",l.style.height=\"200px\",(e=document.createElement(\"div\")).style.position=\"absolute\",e.style.top=\"0px\",e.style.left=\"0px\",e.style.visibility=\"hidden\",e.style.width=\"200px\",e.style.height=\"150px\",e.style.overflow=\"hidden\",e.appendChild(l),document.body.appendChild(e),t=l.offsetWidth,e.style.overflow=\"scroll\",t==(n=l.offsetWidth)&&(n=e.clientWidth),document.body.removeChild(e),jQuery(\"html\").hasClass(\"awb-scroll\")&&10<t-n?10:t-n}fusionRunNavIsCollapsed(),window.addEventListener(\"fusion-resize-horizontal\",fusionRunNavIsCollapsed);",
      "tagPosition": "bodyClose"
    },
    {
      "innerHTML": "\n{\"prefetch\":[{\"source\":\"document\",\"where\":{\"and\":[{\"href_matches\":\"/*\"},{\"not\":{\"href_matches\":[\"/wp-*.php\",\"/wp-admin/*\",\"/wp-content/uploads/*\",\"/wp-content/*\",\"/wp-content/plugins/*\",\"/wp-content/themes/Avada-Child-Theme/*\",\"/wp-content/themes/Avada/*\",\"/*\\\\?(.+)\"]}},{\"not\":{\"selector_matches\":\"a[rel~=\\\"nofollow\\\"]\"}},{\"not\":{\"selector_matches\":\".no-prefetch, .no-prefetch a\"}}]},\"eagerness\":\"conservative\"}]}\n",
      "tagPosition": "bodyClose"
    },
    {
      "innerHTML": "\n\t\t(function () {\n\t\t\tvar c = document.body.className;\n\t\t\tc = c.replace(/woocommerce-no-js/, 'woocommerce-js');\n\t\t\tdocument.body.className = c;\n\t\t})();\n\t",
      "tagPosition": "bodyClose"
    },
    {
      "innerHTML": "\nvar ht_ctc_chat_var = {\"number\":\"447988032817\",\"pre_filled\":\"\",\"dis_m\":\"show\",\"dis_d\":\"show\",\"css\":\"cursor: pointer; z-index: 99999999;\",\"pos_d\":\"position: fixed; bottom: 15px; left: 15px;\",\"pos_m\":\"position: fixed; bottom: 15px; left: 15px;\",\"side_d\":\"left\",\"side_m\":\"left\",\"schedule\":\"no\",\"se\":\"150\",\"ani\":\"no-animation\",\"page_id\":\"3447\",\"url_target_d\":\"_blank\",\"ga\":\"yes\",\"gtm\":\"1\",\"fb\":\"yes\",\"webhook_format\":\"json\",\"g_init\":\"default\",\"g_an_event_name\":\"click to chat\",\"gtm_event_name\":\"Click to Chat\",\"pixel_event_name\":\"Click to Chat by HoliThemes\"};\nvar ht_ctc_variables = {\"g_an_event_name\":\"click to chat\",\"gtm_event_name\":\"Click to Chat\",\"pixel_event_type\":\"trackCustom\",\"pixel_event_name\":\"Click to Chat by HoliThemes\",\"g_an_params_v4\":[{\"key\":\"number\",\"value\":\"{number}\"},{\"key\":\"title\",\"value\":\"{title}\"},{\"key\":\"url\",\"value\":\"{url}\"}],\"g_an_params\":[\"g_an_param_1\",\"g_an_param_2\",\"g_an_param_3\"],\"g_an_param_1\":{\"key\":\"number\",\"value\":\"{number}\"},\"g_an_param_2\":{\"key\":\"title\",\"value\":\"{title}\"},\"g_an_param_3\":{\"key\":\"url\",\"value\":\"{url}\"},\"pixel_params_v4\":[{\"key\":\"Category\",\"value\":\"Click to Chat for WhatsApp\"},{\"key\":\"ID\",\"value\":\"{number}\"},{\"key\":\"Title\",\"value\":\"{title}\"},{\"key\":\"URL\",\"value\":\"{url}\"}],\"pixel_params\":[\"pixel_param_1\",\"pixel_param_2\",\"pixel_param_3\",\"pixel_param_4\"],\"pixel_param_1\":{\"key\":\"Category\",\"value\":\"Click to Chat for WhatsApp\"},\"pixel_param_2\":{\"key\":\"ID\",\"value\":\"{number}\"},\"pixel_param_3\":{\"key\":\"Title\",\"value\":\"{title}\"},\"pixel_param_4\":{\"key\":\"URL\",\"value\":\"{url}\"},\"gtm_params_v4\":[{\"key\":\"type\",\"value\":\"chat\"},{\"key\":\"number\",\"value\":\"{number}\"},{\"key\":\"title\",\"value\":\"{title}\"},{\"key\":\"url\",\"value\":\"{url}\"},{\"key\":\"ref\",\"value\":\"dataLayer push\"}],\"gtm_params\":[\"gtm_param_1\",\"gtm_param_2\",\"gtm_param_3\",\"gtm_param_4\",\"gtm_param_5\"],\"gtm_param_1\":{\"key\":\"type\",\"value\":\"chat\"},\"gtm_param_2\":{\"key\":\"number\",\"value\":\"{number}\"},\"gtm_param_3\":{\"key\":\"title\",\"value\":\"{title}\"},\"gtm_param_4\":{\"key\":\"url\",\"value\":\"{url}\"},\"gtm_param_5\":{\"key\":\"ref\",\"value\":\"dataLayer push\"}};\n//# sourceURL=ht_ctc_app_js-js-extra\n",
      "tagPosition": "bodyClose"
    },
    {
      "src": "/wp-content/plugins/click-to-chat-for-whatsapp/new/inc/assets/js/app.js?ver=4.43",
      "tagPosition": "bodyClose"
    },
    {
      "src": "/wp-includes/js/comment-reply.min.js?ver=7.1",
      "tagPosition": "bodyClose"
    },
    {
      "src": "/wp-content/plugins/jetpack/jetpack_vendor/automattic/woocommerce-analytics/build/woocommerce-analytics-client.js?minify=false&#038;ver=8d8bb846cc19ac858460",
      "tagPosition": "bodyClose"
    },
    {
      "src": "/wp-content/plugins/woocommerce/assets/js/sourcebuster/sourcebuster.min.js?ver=10.9.1",
      "tagPosition": "bodyClose"
    },
    {
      "innerHTML": "\nvar wc_order_attribution = {\"params\":{\"lifetime\":1.0000000000000000818030539140313095458623138256371021270751953125e-5,\"session\":30,\"base64\":false,\"ajaxurl\":\"/wp-admin/admin-ajax.php\",\"prefix\":\"wc_order_attribution_\",\"allowTracking\":true},\"fields\":{\"source_type\":\"current.typ\",\"referrer\":\"current_add.rf\",\"utm_campaign\":\"current.cmp\",\"utm_source\":\"current.src\",\"utm_medium\":\"current.mdm\",\"utm_content\":\"current.cnt\",\"utm_id\":\"current.id\",\"utm_term\":\"current.trm\",\"utm_source_platform\":\"current.plt\",\"utm_creative_format\":\"current.fmt\",\"utm_marketing_tactic\":\"current.tct\",\"session_entry\":\"current_add.ep\",\"session_start_time\":\"current_add.fd\",\"session_pages\":\"session.pgs\",\"session_count\":\"udata.vst\",\"user_agent\":\"udata.uag\"}};\n//# sourceURL=wc-order-attribution-js-extra\n",
      "tagPosition": "bodyClose"
    },
    {
      "src": "/wp-content/plugins/woocommerce/assets/js/frontend/order-attribution.min.js?ver=10.9.1",
      "tagPosition": "bodyClose"
    },
    {
      "innerHTML": "\n_stq = window._stq || [];\n_stq.push([ \"view\", {\"v\":\"ext\",\"blog\":\"251775682\",\"post\":\"3447\",\"tz\":\"0\",\"srv\":\"teruicare.com\",\"j\":\"1:16.1.2\"} ]);\n_stq.push([ \"clickTrackerInit\", \"251775682\", \"3447\" ]);\n//# sourceURL=jetpack-stats-js-before\n",
      "tagPosition": "bodyClose"
    },
    {
      "src": "https://stats.wp.com/e-202635.js",
      "tagPosition": "bodyClose"
    },
    {
      "src": "//code.jivosite.com/widget/msJNhEnfDV?ver=1.3.6.1",
      "tagPosition": "bodyClose"
    },
    {
      "src": "/wp-content/uploads/fusion-scripts/494b8a670abccf6baa6b808a6a21520f.min.js?ver=3.15.2",
      "tagPosition": "bodyClose"
    },
    {
      "innerHTML": "\n\t\t\t\tjQuery( document ).ready( function() {\n\t\t\t\t\tvar ajaxurl = '/wp-admin/admin-ajax.php';\n\t\t\t\t\tif ( 0 < jQuery( '.fusion-login-nonce' ).length ) {\n\t\t\t\t\t\tjQuery.get( ajaxurl, { 'action': 'fusion_login_nonce' }, function( response ) {\n\t\t\t\t\t\t\tjQuery( '.fusion-login-nonce' ).html( response );\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\t",
      "tagPosition": "bodyClose"
    },
    {
      "innerHTML": "{\"@context\":\"https:\\/\\/schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Shop\",\"item\":\"\\/shop-2\\/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Uncategorized\",\"item\":\"\\/product-category\\/uncategorized\\/\"}]}",
      "tagPosition": "bodyClose"
    },
    {
      "innerHTML": "\n\t\t\t(function() {\n\t\t\t\twindow.wcAnalytics = window.wcAnalytics || {};\n\t\t\t\tconst wcAnalytics = window.wcAnalytics;\n\n\t\t\t\t// Set the assets URL for webpack to find the split assets.\n\t\t\t\twcAnalytics.assets_url = '/wp-content/plugins/jetpack/jetpack_vendor/automattic/woocommerce-analytics/src/../build/';\n\n\t\t\t\t// Set the REST API tracking endpoint URL.\n\t\t\t\t\t\t\t\twcAnalytics.trackEndpoint = \"/wp-json/woocommerce-analytics/v1/track\";\n\n\t\t\t\t// Set common properties for all events.\n\t\t\t\twcAnalytics.commonProps = {\"ui\":0,\"blog_id\":251775682,\"store_id\":\"f994daec-1e04-4eb6-b7e0-34d727ae25a3\",\"url\":\"https://teruicare.com\",\"woo_version\":\"10.9.1\",\"wp_version\":\"7.1\",\"store_admin\":0,\"device\":\"desktop\",\"store_currency\":\"GBP\",\"timezone\":\"+00:00\",\"is_guest\":1};\n\n\t\t\t\t// Set the event queue.\n\t\t\t\twcAnalytics.eventQueue = [];\n\n\t\t\t\t// Features.\n\t\t\t\twcAnalytics.features = {\n\t\t\t\t\tch: false,\n\t\t\t\t\tsessionTracking: false,\n\t\t\t\t\tproxy: false,\n\t\t\t\t};\n\n\t\t\t\twcAnalytics.breadcrumbs = [\"Shop\",\"Uncategorized\",\"BPC-157 \\u0026#038; TB-500 40mg (R\\u0026#038;D Only)\"];\n\n\t\t\t\t// Page context flags.\n\t\t\t\twcAnalytics.pages = {\n\t\t\t\t\tisAccountPage: false,\n\t\t\t\t\tisCart: false,\n\t\t\t\t};\n\t\t\t})();\n\t\t",
      "tagPosition": "bodyClose"
    }
  ]
}
const _ba = {"data-awb-post-id":"3447"}; payload.bodyAttrs = Object.assign({ class: "wp-singular product-template-default single single-product postid-3447 wp-theme-Avada wp-child-theme-Avada-Child-Theme theme-Avada woocommerce woocommerce-page woocommerce-no-js awb-no-sidebars fusion-image-hovers fusion-pagination-sizing fusion-button_type-flat fusion-button_span-no fusion-button_gradient-linear avada-image-rollover-circle-yes avada-image-rollover-yes avada-image-rollover-direction-left fusion-body ltr fusion-sticky-header no-tablet-sticky-header no-mobile-sticky-header no-mobile-slidingbar no-mobile-totop fusion-disable-outline fusion-sub-menu-fade mobile-logo-pos-left layout-wide-mode avada-has-boxed-modal-shadow-none layout-scroll-offset-full avada-has-zero-margin-offset-top fusion-top-header menu-text-align-center fusion-woo-product-design-classic fusion-woo-shop-page-columns-4 fusion-woo-related-columns-4 fusion-woo-archive-page-columns-3 avada-has-woo-gallery-disabled woo-outofstock-badge-top_bar mobile-menu-design-classic fusion-show-pagination-text fusion-header-layout-v3 avada-responsive avada-footer-fx-none avada-menu-highlight-style-bar fusion-search-form-clean fusion-main-menu-search-overlay fusion-avatar-circle avada-dropdown-styles avada-blog-layout-large avada-blog-archive-layout-large avada-header-shadow-no avada-menu-icon-position-left avada-has-megamenu-shadow avada-has-mobile-menu-search avada-has-main-nav-search-icon avada-has-breadcrumb-mobile-hidden avada-has-titlebar-hide avada-header-border-color-full-transparent avada-has-pagination-width_height avada-flyout-menu-direction-fade avada-ec-views-v1 awb-link-decoration" }, _ba);
useHead(payload)
</script>

<template>
<a class="skip-link screen-reader-text" href="#content">Skip to content</a>

	<div id="boxed-wrapper">
		
		<div id="wrapper" class="fusion-wrapper">
			<div id="home" style="position:relative;top:-1px;"></div>
												  <SiteHeader/>		<div id="sliders-container" class="fusion-slider-visibility">
					</div>
											
			<section class="fusion-page-title-bar fusion-tb-page-title-bar"><div class="fusion-fullwidth fullwidth-box fusion-builder-row-4 fusion-flex-container has-pattern-background has-mask-background nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" style="--awb-border-sizes-top:0px;--awb-border-sizes-bottom:1px;--awb-border-sizes-left:0px;--awb-border-sizes-right:0px;--awb-border-radius-top-left:0px;--awb-border-radius-top-right:0px;--awb-border-radius-bottom-right:0px;--awb-border-radius-bottom-left:0px;--awb-flex-wrap:wrap;"><div class="fusion-builder-row fusion-row fusion-flex-align-items-flex-start fusion-flex-content-wrap" style="max-width:1248px;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column fusion-builder-column-8 fusion_builder_column_1_1 1_1 fusion-flex-column" style="--awb-padding-top:32px;--awb-padding-bottom:28px;--awb-bg-size:cover;--awb-width-large:100%;--awb-flex-grow:0;--awb-flex-shrink:0;--awb-margin-top-large:0px;--awb-spacing-right-large:1.92%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:1.92%;--awb-width-medium:100%;--awb-order-medium:0;--awb-flex-grow-medium:0;--awb-flex-shrink-medium:0;--awb-spacing-right-medium:1.92%;--awb-spacing-left-medium:1.92%;--awb-width-small:100%;--awb-order-small:0;--awb-flex-grow-small:0;--awb-flex-shrink-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><nav class="fusion-breadcrumbs fusion-breadcrumbs-1" style="--awb-breadcrumb-sep:&#039;|&#039;;" aria-label="Breadcrumb"><ol class="awb-breadcrumb-list"><li class="fusion-breadcrumb-item awb-breadcrumb-sep"><a href="/shop-2/" class="fusion-breadcrumb-link"><span>Shop</span></a></li><li class="fusion-breadcrumb-item awb-breadcrumb-sep"><a href="/product-category/uncategorized/" class="fusion-breadcrumb-link"><span>Uncategorized</span></a></li><li class="fusion-breadcrumb-item" aria-current="page"><span class="breadcrumb-leaf">BPC-157 &#038; TB-500 40mg (R&#038;D Only)</span></li></ol></nav></div></div></div></div>
</section>
						<main id="main" class="clearfix width-100">
				<div class="fusion-row" style="max-width:100%;">

<section id="content" style="">
									<div id="post-3447" class="post-3447 product type-product status-publish has-post-thumbnail product_cat-uncategorized product_tag-bpc-157-and-tb-500 product_tag-bpc-157-and-tb-500-dosage product_tag-how-often-to-inject-bpc-157-and-tb-500 product_tag-how-to-take-bpc-157-and-tb-500 product_tag-how-to-take-tb-500-and-bpc-157 product_tag-tb-500-and-bpc-157 product_tag-what-is-tb-500-and-bpc-157 product_tag-where-to-buy-bpc-157-and-tb-500 first instock shipping-taxable purchasable product-type-simple">

				<div class="post-content">
					<div class="fusion-fullwidth fullwidth-box fusion-builder-row-5 fusion-flex-container has-pattern-background has-mask-background nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" style="--awb-border-radius-top-left:0px;--awb-border-radius-top-right:0px;--awb-border-radius-bottom-right:0px;--awb-border-radius-bottom-left:0px;--awb-padding-bottom:48px;--awb-flex-wrap:wrap;"><div class="fusion-builder-row fusion-row fusion-flex-align-items-flex-start fusion-flex-content-wrap" style="max-width:1248px;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column fusion-builder-column-9 fusion_builder_column_1_1 1_1 fusion-flex-column" style="--awb-padding-top:24px;--awb-padding-bottom:24px;--awb-bg-size:cover;--awb-width-large:100%;--awb-flex-grow:0;--awb-flex-shrink:0;--awb-margin-top-large:0px;--awb-spacing-right-large:1.92%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:1.92%;--awb-width-medium:100%;--awb-order-medium:0;--awb-flex-grow-medium:0;--awb-flex-shrink-medium:0;--awb-spacing-right-medium:1.92%;--awb-spacing-left-medium:1.92%;--awb-width-small:100%;--awb-order-small:0;--awb-flex-grow-small:0;--awb-flex-shrink-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-woo-notices-tb fusion-woo-notices-tb-1 alignment-text-left show-button-yes" style="--awb-padding-top:16px;--awb-padding-right:16px;--awb-padding-bottom:16px;--awb-padding-left:16px;--awb-font-size:15px;--awb-font-color:var(--awb-color6);--awb-border-sizes-top:1px;--awb-border-sizes-right:1px;--awb-border-sizes-bottom:1px;--awb-border-sizes-left:1px;--awb-border-radius-top-left:8px;--awb-border-radius-top-right:8px;--awb-border-radius-bottom-right:8px;--awb-border-radius-bottom-left:8px;--awb-border-style:dashed;--awb-background-color:hsla(calc(var(--awb-color4-h) + 115),var(--awb-color4-s),calc(var(--awb-color4-l) + 45%),var(--awb-color4-a));--awb-icon-size:18px;--awb-success-background-color:hsla(var(--awb-color4-h),var(--awb-color4-s),calc(var(--awb-color4-l) + 45%),var(--awb-color4-a));--awb-success-text-color:var(--awb-color6);--awb-error-background-color:hsla(calc(var(--awb-color4-h) + 270),var(--awb-color4-s),calc(var(--awb-color4-l) + 45%),var(--awb-color4-a));--awb-error-text-color:var(--awb-color6);"><div class="woocommerce-notices-wrapper"></div></div></div></div><div class="fusion-layout-column fusion_builder_column fusion-builder-column-10 fusion-flex-column" style="--awb-overflow:hidden;--awb-bg-size:cover;--awb-border-radius:8px 8px 8px 8px;--awb-width-large:55%;--awb-flex-grow:0;--awb-flex-shrink:0;--awb-margin-top-large:0px;--awb-spacing-right-large:3.4909090909091%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:3.4909090909091%;--awb-width-medium:55%;--awb-order-medium:0;--awb-flex-grow-medium:0;--awb-flex-shrink-medium:0;--awb-spacing-right-medium:3.4909090909091%;--awb-spacing-left-medium:3.4909090909091%;--awb-width-small:100%;--awb-order-small:0;--awb-flex-grow-small:0;--awb-flex-shrink-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-woo-product-images fusion-woo-product-images-1" style="--awb-product-images-width:800px;" data-type="simple" data-zoom_enabled="1" data-photoswipe_enabled="1"><div class="avada-single-product-gallery-wrapper avada-product-images-element">
<div class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-5 images" data-columns="5" style="opacity: 0; transition: opacity .25s ease-in-out;">
	<div class="woocommerce-product-gallery__wrapper">
		<div data-thumb="/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-100x100.png" data-thumb-alt="BPC-157 &amp; TB-500 40mg (R&amp;D Only)" data-thumb-srcset="/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-66x66.png 66w, /wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-100x100.png 100w, /wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-150x150.png 150w" data-thumb-sizes="(max-width: 100px) 100vw, 100px" class="woocommerce-product-gallery__image"><a href="/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1.png"><img decoding="async" width="700" height="467" src="/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-700x467.png" class="wp-post-image lazyload" alt="BPC-157 &amp; TB-500 40mg (R&amp;D Only)" data-caption="" data-src="/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1.png" data-large_image="/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1.png" data-large_image_width="1536" data-large_image_height="1024" srcset="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%271536%27%20height%3D%271024%27%20viewBox%3D%270%200%201536%201024%27%3E%3Crect%20width%3D%271536%27%20height%3D%271024%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E" data-orig-src="/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-700x467.png" data-srcset="/wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-200x133.png 200w, /wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-300x200.png 300w, /wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-400x267.png 400w, /wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-500x333.png 500w, /wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-600x400.png 600w, /wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-700x467.png 700w, /wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-768x512.png 768w, /wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-800x533.png 800w, /wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-1024x683.png 1024w, /wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1-1200x800.png 1200w, /wp-content/uploads/2025/11/68c1522d14a3f9e08f5e017b_BPC157-TB500-1.png 1536w" data-sizes="auto"/></a></div>	</div>
</div>
</div>
</div><div class="fusion-image-element " style="--awb-margin-top:16px;--awb-max-width:150px;--awb-caption-title-font-family:var(--h2_typography-font-family);--awb-caption-title-font-weight:var(--h2_typography-font-weight);--awb-caption-title-font-style:var(--h2_typography-font-style);--awb-caption-title-size:var(--h2_typography-font-size);--awb-caption-title-transform:var(--h2_typography-text-transform);--awb-caption-title-line-height:var(--h2_typography-line-height);--awb-caption-title-letter-spacing:var(--h2_typography-letter-spacing);"><span class=" fusion-imageframe imageframe-none imageframe-2 hover-type-none"><img decoding="async" width="292" height="282" title="Vegan Organic Food" src="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27292%27%20height%3D%27282%27%20viewBox%3D%270%200%20292%20282%27%3E%3Crect%20width%3D%27292%27%20height%3D%27282%27%20fill-opacity%3D%220%22%2F%3E%3C%2Fsvg%3E" data-orig-src="https://saddlebrown-chinchilla-978528.hostingersite.com/wp-content/uploads/2024/01/organic-stamp-2.png" alt class="lazyload img-responsive wp-image-1911"/></span></div></div></div><div class="fusion-layout-column fusion_builder_column fusion-builder-column-11 fusion-flex-column fusion-animated" style="--awb-padding-right:16px;--awb-padding-left:16px;--awb-padding-top-small:32px;--awb-bg-size:cover;--awb-width-large:45%;--awb-flex-grow:0;--awb-flex-shrink:0;--awb-margin-top-large:0px;--awb-spacing-right-large:4.2666666666667%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:4.2666666666667%;--awb-width-medium:45%;--awb-order-medium:0;--awb-flex-grow-medium:0;--awb-flex-shrink-medium:0;--awb-spacing-right-medium:4.2666666666667%;--awb-spacing-left-medium:4.2666666666667%;--awb-width-small:100%;--awb-order-small:0;--awb-flex-grow-small:0;--awb-flex-shrink-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;" data-animationType="fadeInUp" data-animationDuration="1.0" data-animationOffset="top-into-view"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-text fusion-text-7 fusion-text-no-margin" style="--awb-font-size:var(--awb-typography5-font-size);--awb-line-height:var(--awb-typography5-line-height);--awb-letter-spacing:var(--awb-typography5-letter-spacing);--awb-text-transform:var(--awb-typography5-text-transform);--awb-margin-bottom:0px;--awb-text-font-family:var(--awb-typography5-font-family);--awb-text-font-weight:var(--awb-typography5-font-weight);--awb-text-font-style:var(--awb-typography5-font-style);"></div><div class="fusion-title title fusion-title-2 fusion-sep-none fusion-title-text fusion-title-size-one" style="--awb-margin-top:6px;--awb-margin-bottom:10px;--awb-font-size:32px;"><h1 class="fusion-title-heading title-heading-left" style="margin:0;font-size:1em;">BPC-157 &#038; TB-500 40mg (R&#038;D Only)</h1></div><div class="fusion-woo-rating-tb fusion-woo-rating-tb-1" style="--awb-icon-size:15px;--awb-count-font-size:15px;--awb-icon-color:var(--awb-color5);--awb-count-color:var(--awb-color4);">
	<div class="woocommerce-product-rating">
		<div class="star-rating" role="img" aria-label="Rated 4.27 out of 5"><span style="width:85.4%">Rated <strong class="rating">4.27</strong> out of 5 based on <span class="rating">11</span> customer ratings</span></div>								<a href="#reviews" class="woocommerce-review-link" rel="nofollow">(<span class="count">11</span> customer reviews)</a>
						</div>

</div><div class="fusion-separator fusion-full-width-sep" style="align-self: center;margin-left: auto;margin-right: auto;margin-top:24px;margin-bottom:24px;width:100%;"><div class="fusion-separator-border sep-single sep-solid" style="--awb-height:20px;--awb-amount:20px;border-color:var(--awb-color3);border-top-width:1px;"></div></div><div class="fusion-woo-short-description-tb fusion-woo-short-description-tb-1" style="--awb-margin-bottom:8px;"><div class="woocommerce-product-details__short-description">
	<p>‍<strong>Each BPC-157 &amp; TB-500 40mg Pen Kit Includes:<br/>
‍</strong>Pre-filled Research pen (40mg total: 20mg BPC-157 + 20mg TB-500)<br/>
Research information sheet</p>
</div>
</div><div class="fusion-woo-price-tb fusion-woo-price-tb-1 sale-position-right floated has-badge badge-position-right" style="--awb-margin-bottom:24px;--awb-price-font-size:24px;--awb-price-letter-spacing:var(--awb-typography3-letter-spacing);--awb-sale-font-size:14px;--awb-badge-font-size:14px;--awb-badge-border-size:0px;--awb-price-color:hsla(calc(var(--awb-color4-h) + 270),calc(var(--awb-color4-s) + 20%),calc(var(--awb-color4-l) + 10%),var(--awb-color4-a));--awb-sale-color:hsla(var(--awb-color6-h),var(--awb-color6-s),var(--awb-color6-l),calc(var(--awb-color6-a) - 50%));--awb-badge-text-color:hsla(var(--awb-color5-h),var(--awb-color5-s),calc(var(--awb-color5-l) - 10%),var(--awb-color5-a));--awb-badge-bg-color:hsla(var(--awb-color5-h),var(--awb-color5-s),var(--awb-color5-l),calc(var(--awb-color5-a) - 90%));--awb-badge-border-color:var(--awb-color6);--awb-price-line-height:var(--awb-typography3-line-height);--awb-price-text-transform:var(--awb-typography3-text-transform);--awb-border-radius:0px 0px 0px 0px;--awb-price-font-family:var(--awb-typography3-font-family);--awb-price-font-weight:var(--awb-typography3-font-weight);--awb-price-font-style:var(--awb-typography3-font-style);--awb-sale-font-family:inherit;--awb-sale-font-style:normal;--awb-sale-font-weight:400;--awb-stock-font-family:inherit;--awb-stock-font-style:normal;--awb-stock-font-weight:400;--awb-badge-font-family:inherit;--awb-badge-font-style:normal;--awb-badge-font-weight:400;"><p class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol" translate="no">&pound;</span>129.99</bdi></span></p>
</div><div class="fusion-woo-cart fusion-woo-cart-1" data-type="simple" data-layout="floated">
	
	<form class="cart" action="/product/bpc-157-and-tb-500/" method="post" enctype='multipart/form-data'>
		<div class="fusion-button-wrapper">
		<div class="quantity">
		<label class="screen-reader-text" for="quantity_6a92cf33b6f5a">BPC-157 &amp; TB-500 40mg (R&amp;D Only) quantity</label>
	<input type="number" id="quantity_6a92cf33b6f5a" class="input-text qty text" name="quantity" value="1" aria-label="Product quantity" min="1" step="1" placeholder="" inputmode="numeric" autocomplete="off"/>
	</div>

		<button type="submit" name="add-to-cart" value="3447" class="single_add_to_cart_button button alt"><i class="awb-vegan-storecart button-icon-left" aria-hidden="true"></i>Add to cart</button>

		</div>	</form>

	
</div><div class="fusion-meta-tb fusion-meta-tb-1 stacked" style="--awb-border-bottom:0px;--awb-border-top:0px;--awb-item-padding-bottom:16px;--awb-height:36px;--awb-font-size:15px;--awb-margin-top:32px;--awb-text-color:var(--awb-color6);--awb-link-color:var(--awb-color4);--awb-alignment-medium:flex-start;--awb-alignment-small:flex-start;"><span class="fusion-tb-categories">Categories: <a href="/product-category/uncategorized/" rel="tag">Uncategorized</a></span><span class="fusion-meta-tb-sep"></span><span class="fusion-tb-tags">Tags: <a href="/product-tag/bpc-157-and-tb-500/" rel="tag">bpc 157 and tb 500</a>, <a href="/product-tag/bpc-157-and-tb-500-dosage/" rel="tag">bpc 157 and tb 500 dosage</a>, <a href="/product-tag/how-often-to-inject-bpc-157-and-tb-500/" rel="tag">how often to inject bpc 157 and tb 500</a>, <a href="/product-tag/how-to-take-bpc-157-and-tb-500/" rel="tag">how to take bpc 157 and tb 500</a>, <a href="/product-tag/how-to-take-tb-500-and-bpc-157/" rel="tag">how to take tb 500 and bpc 157</a>, <a href="/product-tag/tb-500-and-bpc-157/" rel="tag">tb 500 and bpc 157</a>, <a href="/product-tag/what-is-tb-500-and-bpc-157/" rel="tag">what is tb 500 and bpc 157</a>, <a href="/product-tag/where-to-buy-bpc-157-and-tb-500/" rel="tag">where to buy bpc 157 and tb 500</a></span><span class="fusion-meta-tb-sep"></span></div><div class="fusion-sharing-box fusion-sharing-box-1 has-icon-taglines icon-taglines-placement-after" style="background-color:hsla(var(--awb-color1-h),var(--awb-color1-s),var(--awb-color1-l),calc(var(--awb-color1-a) - 100%));padding:0;--awb-margin-top:0px;--awb-margin-left:-8px;--awb-wrapper-padding-top:0px;--awb-wrapper-padding-right:0px;--awb-wrapper-padding-bottom:0px;--awb-wrapper-padding-left:0px;--awb-icon-tagline-color:var(--awb-color6);--awb-icon-tagline-color-hover:var(--awb-color8);--awb-tagline-text-size:15px;--awb-icon-size:15px;--awb-separator-border-color:#cccccc;--awb-separator-border-sizes:0px;--awb-alignment:flex-start;--awb-layout:row;--awb-alignment-small:space-between;--awb-stacked-align-small:center;" data-title="BPC-157 &#038; TB-500 40mg (R&#038;D Only)" data-description="A combined BPC-157 and TB-500 formulation (20mg each), supplied in a 40mg pre-filled research device.

Produced exclusively for controlled laboratory R&amp;D applications. Provided in sealed batches to support compound stability analysis, delivery mechanism evaluation, and formulation studies.
Not for human or veterinary consumption.

‍Each BPC-157 &amp; TB-500 40mg Pen Kit Includes:
‍Pre-filled Research pen (40mg total: 20mg BPC-157 +" data-link="/product/bpc-157-and-tb-500/"><div class="fusion-social-networks sharingbox-shortcode-icon-wrapper sharingbox-shortcode-icon-wrapper-1"><span><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fteruicare.com%2Fproduct%2Fbpc-157-and-tb-500%2F&amp;t=BPC-157%20%26%23038%3B%20TB-500%2040mg%20%28R%26%23038%3BD%20Only%29" target="_blank" rel="noreferrer" title="Facebook" aria-label="Facebook" data-placement="top" data-toggle="tooltip" data-title="Facebook" data-><i class="fusion-social-network-icon fusion-tooltip fusion-facebook awb-icon-facebook" style="color:#3b5998;" aria-hidden="true"></i><div class="fusion-social-network-icon-tagline">Share </div></a></span><span><a href="https://x.com/intent/post?text=BPC-157%20%26%20TB-500%2040mg%20%28R%26D%20Only%29&amp;url=https%3A%2F%2Fteruicare.com%2Fproduct%2Fbpc-157-and-tb-500%2F" target="_blank" rel="noopener noreferrer" title="X" aria-label="X" data-placement="top" data-toggle="tooltip" data-title="X" data-><i class="fusion-social-network-icon fusion-tooltip fusion-twitter awb-icon-twitter" style="color:#000000;" aria-hidden="true"></i><div class="fusion-social-network-icon-tagline"> Tweet </div></a></span><span><a href="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fteruicare.com%2Fproduct%2Fbpc-157-and-tb-500%2F&amp;description=A%20combined%20BPC-157%20and%20TB-500%20formulation%20%2820mg%20each%29%2C%20supplied%20in%20a%2040mg%20pre-filled%20research%20device.%0D%0A%0D%0AProduced%20exclusively%20for%20controlled%20laboratory%20R%26amp%3BD%20applications.%20Provided%20in%20sealed%20batches%20to%20support%20compound%20stability%20analysis%2C%20delivery%20mechanism%20evaluation%2C%20and%20formulation%20studies.%0D%0ANot%20for%20human%20or%20veterinary%20consumption.%0D%0A%0D%0A%E2%80%8DEach%20BPC-157%20%26amp%3B%20TB-500%2040mg%20Pen%20Kit%20Includes%3A%0D%0A%E2%80%8DPre-filled%20Research%20pen%20%2840mg%20total%3A%2020mg%20BPC-157%20%2B&amp;media=" target="_blank" rel="noopener noreferrer" title="Pinterest" aria-label="Pinterest" data-placement="top" data-toggle="tooltip" data-title="Pinterest" data-><i class="fusion-social-network-icon fusion-tooltip fusion-pinterest awb-icon-pinterest" style="color:#bd081c;" aria-hidden="true"></i><div class="fusion-social-network-icon-tagline"> Pinterest </div></a></span><span><a href="/cdn-cgi/l/email-protection#417e3234232b2422357c0311026c70747664737164737764737271727964720364737115036c74717164737175712c2664737164737913647377647372717279647203056473710e2f2d3864737867202c317a232e25387c2935353132647200647307647307202d2d343728222033246f222e2c64730731332e253422356473072331226c7074766c202f256c35236c747171647307" target="_self" title="Email" aria-label="Email" data-placement="top" data-toggle="tooltip" data-title="Email"><i class="fusion-social-network-icon fusion-tooltip fusion-mail awb-icon-mail" style="color:#000000;" aria-hidden="true"></i><div class="fusion-social-network-icon-tagline"> Email</div></a></span></div></div></div></div></div></div><div class="fusion-fullwidth fullwidth-box fusion-builder-row-6 fusion-flex-container has-pattern-background has-mask-background fusion-parallax-none nonhundred-percent-fullwidth non-hundred-percent-height-scrolling lazyload" style="--awb-border-radius-top-left:0px;--awb-border-radius-top-right:0px;--awb-border-radius-bottom-right:0px;--awb-border-radius-bottom-left:0px;--awb-padding-top:32px;--awb-padding-bottom:32px;--awb-background-color:hsla(var(--awb-color5-h),calc(var(--awb-color5-s) + 38%),calc(var(--awb-color5-l) + 38%),var(--awb-color5-a));--awb-background-size:cover;--awb-flex-wrap:wrap;" data-bg="https://saddlebrown-chinchilla-978528.hostingersite.com/wp-content/uploads/2024/01/section-bg-3.png"><div class="fusion-builder-row fusion-row fusion-flex-align-items-flex-start fusion-flex-justify-content-center fusion-flex-content-wrap" style="max-width:1248px;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column fusion-builder-column-12 fusion_builder_column_4_5 4_5 fusion-flex-column" style="--awb-bg-size:cover;--awb-border-color:var(--awb-color3);--awb-border-style:solid;--awb-width-large:80%;--awb-flex-grow:0;--awb-flex-shrink:0;--awb-margin-top-large:0px;--awb-spacing-right-large:2.4%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:2.4%;--awb-width-medium:80%;--awb-order-medium:0;--awb-flex-grow-medium:0;--awb-flex-shrink-medium:0;--awb-spacing-right-medium:2.4%;--awb-spacing-left-medium:2.4%;--awb-width-small:100%;--awb-order-small:0;--awb-flex-grow-small:0;--awb-flex-shrink-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-builder-row fusion-builder-row-inner fusion-row fusion-flex-align-items-flex-start fusion-flex-justify-content-center fusion-flex-content-wrap" style="width:104% !important;max-width:104% !important;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-5 fusion_builder_column_inner_1_3 1_3 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:33.333333333333%;--awb-margin-top-large:0px;--awb-spacing-right-large:5.76%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:5.76%;--awb-width-medium:33.333333333333%;--awb-order-medium:0;--awb-spacing-right-medium:5.76%;--awb-spacing-left-medium:5.76%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><ul style="--awb-size:19px;--awb-iconcolor:var(--awb-color4);--awb-line-height:32.3px;--awb-icon-width:32.3px;--awb-icon-height:32.3px;--awb-icon-margin:13.3px;--awb-content-margin:45.6px;" class="fusion-checklist fusion-checklist-1 fusion-checklist-default type-icons"><li class="fusion-li-item" style=""><span class="icon-wrapper circle-no"><i class="fusion-li-icon awb-vegan-storecheck-solid" aria-hidden="true"></i></span><div class="fusion-li-item-content"><b>Money Back Guarantee</b></div></li></ul></div></div><div class="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-6 fusion_builder_column_inner_1_3 1_3 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:33.333333333333%;--awb-margin-top-large:0px;--awb-spacing-right-large:5.76%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:5.76%;--awb-width-medium:33.333333333333%;--awb-order-medium:0;--awb-spacing-right-medium:5.76%;--awb-spacing-left-medium:5.76%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><ul style="--awb-size:19px;--awb-iconcolor:var(--awb-color4);--awb-line-height:32.3px;--awb-icon-width:32.3px;--awb-icon-height:32.3px;--awb-icon-margin:13.3px;--awb-content-margin:45.6px;" class="fusion-checklist fusion-checklist-2 fusion-checklist-default type-icons"><li class="fusion-li-item" style=""><span class="icon-wrapper circle-no"><i class="fusion-li-icon awb-vegan-storecheck-solid" aria-hidden="true"></i></span><div class="fusion-li-item-content"><b>Top Quality Vegan Item</b></div></li></ul></div></div><div class="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-7 fusion_builder_column_inner_1_3 1_3 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:33.333333333333%;--awb-margin-top-large:0px;--awb-spacing-right-large:5.76%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:5.76%;--awb-width-medium:33.333333333333%;--awb-order-medium:0;--awb-spacing-right-medium:5.76%;--awb-spacing-left-medium:5.76%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><ul style="--awb-size:19px;--awb-iconcolor:var(--awb-color4);--awb-line-height:32.3px;--awb-icon-width:32.3px;--awb-icon-height:32.3px;--awb-icon-margin:13.3px;--awb-content-margin:45.6px;" class="fusion-checklist fusion-checklist-3 fusion-checklist-default type-icons"><li class="fusion-li-item" style=""><span class="icon-wrapper circle-no"><i class="fusion-li-icon awb-vegan-storecheck-solid" aria-hidden="true"></i></span><div class="fusion-li-item-content"><b>Fast &amp; Secure Checkout</b></div></li></ul></div></div></div></div></div></div></div><div class="fusion-fullwidth fullwidth-box fusion-builder-row-7 fusion-flex-container has-pattern-background has-mask-background nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" style="--awb-border-radius-top-left:0px;--awb-border-radius-top-right:0px;--awb-border-radius-bottom-right:0px;--awb-border-radius-bottom-left:0px;--awb-padding-top:64px;--awb-padding-bottom:72px;--awb-flex-wrap:wrap;"><div class="fusion-builder-row fusion-row fusion-flex-align-items-flex-start fusion-flex-justify-content-center fusion-flex-content-wrap" style="max-width:1248px;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column fusion-builder-column-13 fusion_builder_column_4_5 4_5 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:80%;--awb-flex-grow:0;--awb-flex-shrink:0;--awb-margin-top-large:0px;--awb-spacing-right-large:2.4%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:2.4%;--awb-width-medium:80%;--awb-order-medium:0;--awb-flex-grow-medium:0;--awb-flex-shrink-medium:0;--awb-spacing-right-medium:2.4%;--awb-spacing-left-medium:2.4%;--awb-width-small:100%;--awb-order-small:0;--awb-flex-grow-small:0;--awb-flex-shrink-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-title title fusion-title-3 fusion-sep-none fusion-title-text fusion-title-size-three" style="--awb-margin-bottom:24px;"><h3 class="fusion-title-heading title-heading-left" style="margin:0;">product description</h3></div><div class="fusion-content-tb fusion-content-tb-1"><p>A combined BPC-157 and TB-500 formulation (20mg each), supplied in a 40mg pre-filled research device.</p>
<p>Produced exclusively for controlled laboratory R&amp;D applications. Provided in sealed batches to support compound stability analysis, delivery mechanism evaluation, and formulation studies.<br/>
Not for human or veterinary consumption.</p>
<p>‍<strong>Each BPC-157 &amp; TB-500 40mg Pen Kit Includes:<br/>
‍</strong>Pre-filled Research pen (40mg total: 20mg BPC-157 + 20mg TB-500)<br/>
Research information sheet <a href="https://synedicas.com/" target="_blank" rel="noopener">synedica</a></p>
<p>‍<strong>Storage:<br/>
&#8211; Store refrigerated (2–8°C). Do not freeze.<br/>
&#8211; Supplied in fixed-volume sealed format for laboratory analysis.</strong><strong>‍</strong><br/>
‍<br/>
<strong>Delivery: </strong>Dispatched with a cold pack<br/>
‍<strong>Tracked 2 DAY UK Delivery</strong>.</p>
<p>Research &amp; Development purposes only. Not for human or veterinary consumption. <a href="https://teruicare.com">Terui Healthcare</a></p>
</div><div class="fusion-title title fusion-title-4 fusion-sep-none fusion-title-text fusion-title-size-four" style="--awb-margin-bottom:32px;--awb-margin-bottom-small:32px;"><h4 class="fusion-title-heading title-heading-left" style="margin:0;">additional information</h4></div><div class="fusion-woo-additional-info-tb fusion-woo-additional-info-tb-1" style="--awb-border-color:var(--awb-color1);--awb-table-cell-backgroundcolor:hsla(var(--awb-color2-h),var(--awb-color2-s),var(--awb-color2-l),calc(var(--awb-color2-a) - 50%));--awb-heading-cell-backgroundcolor:var(--awb-color2);--awb-cell-padding-top:16px;--awb-cell-padding-bottom:16px;--awb-cell-padding-left:24px;">

</div></div></div></div></div><div class="fusion-fullwidth fullwidth-box fusion-builder-row-8 fusion-flex-container has-pattern-background has-mask-background nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" style="--awb-border-radius-top-left:0px;--awb-border-radius-top-right:0px;--awb-border-radius-bottom-right:0px;--awb-border-radius-bottom-left:0px;--awb-padding-top:64px;--awb-padding-bottom:72px;--awb-background-color:hsla(var(--awb-color5-h),calc(var(--awb-color5-s) + 38%),calc(var(--awb-color5-l) + 38%),var(--awb-color5-a));--awb-flex-wrap:wrap;"><div class="fusion-builder-row fusion-row fusion-flex-align-items-flex-start fusion-flex-justify-content-center fusion-flex-content-wrap" style="max-width:1248px;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column fusion-builder-column-14 fusion_builder_column_4_5 4_5 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:80%;--awb-flex-grow:0;--awb-flex-shrink:0;--awb-margin-top-large:0px;--awb-spacing-right-large:2.4%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:2.4%;--awb-width-medium:80%;--awb-order-medium:0;--awb-flex-grow-medium:0;--awb-flex-shrink-medium:0;--awb-spacing-right-medium:2.4%;--awb-spacing-left-medium:2.4%;--awb-width-small:100%;--awb-order-small:0;--awb-flex-grow-small:0;--awb-flex-shrink-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-title title fusion-title-5 fusion-sep-none fusion-title-text fusion-title-size-three" style="--awb-margin-bottom:32px;"><h3 class="fusion-title-heading title-heading-left" style="margin:0;">product reviews</h3></div><div class="fusion-woo-reviews-tb fusion-woo-reviews-tb-1 woo-reviews-hide-heading" style="--awb-border-size:1px;--awb-stars-color:var(--awb-color5);--awb-rating-box-bg-color:var(--awb-color1);--awb-rating-box-active-bg-color:hsla(var(--awb-color5-h),calc(var(--awb-color5-s) + 37%),calc(var(--awb-color5-l) + 30%),var(--awb-color5-a));--awb-button-gradient-top-hover:var(--awb-color4);--awb-button-background-image-hover:linear-gradient( to top, var(--awb-color4), var(--awb-color4) );"><div id="reviews" class="woocommerce-Reviews">
	<div id="comments">
		<h2 class="woocommerce-Reviews-title">
			11 reviews for <span>BPC-157 &#038; TB-500 40mg (R&#038;D Only)</span>		</h2>

					<ol class="commentlist">
				<li class="review byuser comment-author-motivate bypostauthor even thread-even depth-1" id="li-comment-61">

	<div id="comment-61" class="comment_container">

		<img alt='' src='https://secure.gravatar.com/avatar/69ab00af79245d81699999cc06b15a49c829ef50cd5c40ac81a0e363cc74ae0c?s=60&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/69ab00af79245d81699999cc06b15a49c829ef50cd5c40ac81a0e363cc74ae0c?s=120&#038;d=mm&#038;r=g 2x' class='avatar avatar-60 photo' height='60' width='60'/>
		<div class="comment-text">

			<div class="star-rating" role="img" aria-label="Rated 5 out of 5"><span style="width:100%">Rated <strong class="rating">5</strong> out of 5</span></div>
	<p class="meta">
		<strong class="woocommerce-review__author">Sarah J. </strong>
				<span class="woocommerce-review__dash">&ndash;</span> <time class="woocommerce-review__published-date" datetime="2026-01-19T21:44:32+00:00">January 19, 2026</time>
	</p>

	<div class="description"><p>As a biochemist, I am exceptionally critical about sourcing my research peptides. I will not compromise on purity or supplier integrity. My experience with Teruicare&#8217;s Retatrutide has been outstanding on every metric. First, the website is professional and transparent (RD-only labeling is crucial). Second, the shipping was discreet, fast, and the package included a detailed CoA (Certificate of Analysis) that matched the batch on the vial. This is a level of verification most suppliers gloss over. The product itself is in a lyophilized cake that reconstitutes clearly and easily. In my protocol, the effects have been precisely as described in the literature: significant impact on glucose control and satiety signals. This is a top-tier, lab-grade product from a vendor that understands its serious clientele. Highly recommended for knowledgeable users.</p>
</div>
		</div>
	</div>
</li>
<li class="review odd alt thread-odd thread-alt depth-1" id="li-comment-62">

	<div id="comment-62" class="comment_container">

		<img alt='' src='https://secure.gravatar.com/avatar/572dac23ab3d2a294ebaf68119c7c6ed17cad6acf1aa7c3dc14076abbfb02d78?s=60&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/572dac23ab3d2a294ebaf68119c7c6ed17cad6acf1aa7c3dc14076abbfb02d78?s=120&#038;d=mm&#038;r=g 2x' class='avatar avatar-60 photo' height='60' width='60'/>
		<div class="comment-text">

			<div class="star-rating" role="img" aria-label="Rated 5 out of 5"><span style="width:100%">Rated <strong class="rating">5</strong> out of 5</span></div>
	<p class="meta">
		<strong class="woocommerce-review__author">Marcus Chen </strong>
				<span class="woocommerce-review__dash">&ndash;</span> <time class="woocommerce-review__published-date" datetime="2026-01-19T22:14:07+00:00">January 19, 2026</time>
	</p>

	<div class="description"><p>I&#8217;ve struggled with weight my entire adult life. I tried every diet, pill, and exercise plan&#8230; This isn&#8217;t just a product; it&#8217;s the key I was missing. The quality is pristine, and the results speak for themselves. Thank you, Teruicare, for providing a reliable source for what feels like a medical miracle.</p>
</div>
		</div>
	</div>
</li>
<li class="review even thread-even depth-1" id="li-comment-552">

	<div id="comment-552" class="comment_container">

		<img alt='' src='https://secure.gravatar.com/avatar/1aaf6b5c6e84c970918c994778a1f708fd2d1ee512e04f981f6cbd0027186ae0?s=60&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/1aaf6b5c6e84c970918c994778a1f708fd2d1ee512e04f981f6cbd0027186ae0?s=120&#038;d=mm&#038;r=g 2x' class='avatar avatar-60 photo' height='60' width='60'/>
		<div class="comment-text">

			<div class="star-rating" role="img" aria-label="Rated 4 out of 5"><span style="width:80%">Rated <strong class="rating">4</strong> out of 5</span></div>
	<p class="meta">
		<strong class="woocommerce-review__author">Kevin Brown </strong>
				<span class="woocommerce-review__dash">&ndash;</span> <time class="woocommerce-review__published-date" datetime="2026-03-12T23:55:55+00:00">March 12, 2026</time>
	</p>

	<div class="description"><p>I received my BPC-157 order and I’m thrilled.</p>
</div>
		</div>
	</div>
</li>
<li class="review odd alt thread-odd thread-alt depth-1" id="li-comment-570">

	<div id="comment-570" class="comment_container">

		<img alt='' src='https://secure.gravatar.com/avatar/25c4e04f24c53ff9ecdd12bdb7b215ca0f69b8ef86c423d643c91f3be8be844e?s=60&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/25c4e04f24c53ff9ecdd12bdb7b215ca0f69b8ef86c423d643c91f3be8be844e?s=120&#038;d=mm&#038;r=g 2x' class='avatar avatar-60 photo' height='60' width='60'/>
		<div class="comment-text">

			<div class="star-rating" role="img" aria-label="Rated 4 out of 5"><span style="width:80%">Rated <strong class="rating">4</strong> out of 5</span></div>
	<p class="meta">
		<strong class="woocommerce-review__author">Michael Gray </strong>
				<span class="woocommerce-review__dash">&ndash;</span> <time class="woocommerce-review__published-date" datetime="2026-03-13T08:29:59+00:00">March 13, 2026</time>
	</p>

	<div class="description"><p>I was skeptical when I ordered BPC-157 &amp; TB-500 for the first time. I’ve heard horror stories about online purchases, but after seeing positive feedback, I gave it a shot. The process was smooth, and my order arrived within just a few days. The quality of the peptides was evident when I used them for recovery. I felt improvements in my healing time and couldn&#8217;t be happier. I have since placed more orders!</p>
</div>
		</div>
	</div>
</li>
<li class="review even thread-even depth-1" id="li-comment-575">

	<div id="comment-575" class="comment_container">

		<img alt='' src='https://secure.gravatar.com/avatar/481ead68435c4d226a1cb41dba2ebf658c7f7246dfb290b2c59da229a0d95ecb?s=60&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/481ead68435c4d226a1cb41dba2ebf658c7f7246dfb290b2c59da229a0d95ecb?s=120&#038;d=mm&#038;r=g 2x' class='avatar avatar-60 photo' height='60' width='60'/>
		<div class="comment-text">

			<div class="star-rating" role="img" aria-label="Rated 4 out of 5"><span style="width:80%">Rated <strong class="rating">4</strong> out of 5</span></div>
	<p class="meta">
		<strong class="woocommerce-review__author">Brain Wilson </strong>
				<span class="woocommerce-review__dash">&ndash;</span> <time class="woocommerce-review__published-date" datetime="2026-03-13T08:45:04+00:00">March 13, 2026</time>
	</p>

	<div class="description"><p>I must admit I was worried about ordering peptides like BPC-157 online. The skepticism came from previous experiences with other companies. But Terui Healthcare proved me wrong! The shipping was quick, and the product&#8217;s quality was high. I noticed a significant reduction in recovery time after workouts. I’m now a devoted customer!</p>
</div>
		</div>
	</div>
</li>
<li class="review odd alt thread-odd thread-alt depth-1" id="li-comment-578">

	<div id="comment-578" class="comment_container">

		<img alt='' src='https://secure.gravatar.com/avatar/72c1ddfa85f0aa345e32533e0250065a1aeee4e6827d5f695ded91d3df7e64f7?s=60&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/72c1ddfa85f0aa345e32533e0250065a1aeee4e6827d5f695ded91d3df7e64f7?s=120&#038;d=mm&#038;r=g 2x' class='avatar avatar-60 photo' height='60' width='60'/>
		<div class="comment-text">

			<div class="star-rating" role="img" aria-label="Rated 5 out of 5"><span style="width:100%">Rated <strong class="rating">5</strong> out of 5</span></div>
	<p class="meta">
		<strong class="woocommerce-review__author">Jessica Davis </strong>
				<span class="woocommerce-review__dash">&ndash;</span> <time class="woocommerce-review__published-date" datetime="2026-03-13T09:31:29+00:00">March 13, 2026</time>
	</p>

	<div class="description"><p>Initially, I hesitated to order BPC-157 &amp; TB-500 due to past experiences with unreliable online services. However, the reviews for Terui Healthcare were convincing, and I gave it a shot. The order arrived quickly and in perfect condition. I&#8217;ve seen a noticeable improvement in my rehabilitation since using it. I will definitely be returning for more!</p>
</div>
		</div>
	</div>
</li>
<li class="review even thread-even depth-1" id="li-comment-581">

	<div id="comment-581" class="comment_container">

		<img alt='' src='https://secure.gravatar.com/avatar/9f742b6a5b79ac1bdc362ee61dd44f0e73fc8b6b01907eda28fa1854af991e36?s=60&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/9f742b6a5b79ac1bdc362ee61dd44f0e73fc8b6b01907eda28fa1854af991e36?s=120&#038;d=mm&#038;r=g 2x' class='avatar avatar-60 photo' height='60' width='60'/>
		<div class="comment-text">

			<div class="star-rating" role="img" aria-label="Rated 5 out of 5"><span style="width:100%">Rated <strong class="rating">5</strong> out of 5</span></div>
	<p class="meta">
		<strong class="woocommerce-review__author">Anthony Green </strong>
				<span class="woocommerce-review__dash">&ndash;</span> <time class="woocommerce-review__published-date" datetime="2026-03-13T10:08:42+00:00">March 13, 2026</time>
	</p>

	<div class="description"><p>I previously avoided online supplement shopping for fear of scams. But after reading glowing reviews, I decided to try BPC-157 &amp; TB-500 from Terui Care. To my delight, the process was smooth, and my order arrived quickly. I have been amazed by the quality of the peptide; it has significantly improved my recovery after workouts. Now, I confidently recommend this service to others!</p>
</div>
		</div>
	</div>
</li>
<li class="review odd alt thread-odd thread-alt depth-1" id="li-comment-582">

	<div id="comment-582" class="comment_container">

		<img alt='' src='https://secure.gravatar.com/avatar/569577bde109ba0de0e1842d7dfb7cba482b8d5166c65b1607cbc4f7212afb92?s=60&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/569577bde109ba0de0e1842d7dfb7cba482b8d5166c65b1607cbc4f7212afb92?s=120&#038;d=mm&#038;r=g 2x' class='avatar avatar-60 photo' height='60' width='60'/>
		<div class="comment-text">

			<div class="star-rating" role="img" aria-label="Rated 3 out of 5"><span style="width:60%">Rated <strong class="rating">3</strong> out of 5</span></div>
	<p class="meta">
		<strong class="woocommerce-review__author">William Sylvester </strong>
				<span class="woocommerce-review__dash">&ndash;</span> <time class="woocommerce-review__published-date" datetime="2026-03-13T10:11:39+00:00">March 13, 2026</time>
	</p>

	<div class="description"><p>I was unable to order using the discount code, but i still played my order and I got exactly what i wanted.</p>
</div>
		</div>
	</div>
</li>
<li class="review even thread-even depth-1" id="li-comment-587">

	<div id="comment-587" class="comment_container">

		<img alt='' src='https://secure.gravatar.com/avatar/011ad8c21bc3e8e2b1672248a94fd31fbfba21f5201987aa77309a95781f7484?s=60&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/011ad8c21bc3e8e2b1672248a94fd31fbfba21f5201987aa77309a95781f7484?s=120&#038;d=mm&#038;r=g 2x' class='avatar avatar-60 photo' height='60' width='60'/>
		<div class="comment-text">

			<div class="star-rating" role="img" aria-label="Rated 4 out of 5"><span style="width:80%">Rated <strong class="rating">4</strong> out of 5</span></div>
	<p class="meta">
		<strong class="woocommerce-review__author">Amanda Scott </strong>
				<span class="woocommerce-review__dash">&ndash;</span> <time class="woocommerce-review__published-date" datetime="2026-03-13T10:32:08+00:00">March 13, 2026</time>
	</p>

	<div class="description"><p>Initially, I felt hesitant ordering BPC-157 &amp; TB-500 online due to previous negative experiences elsewhere. Terui proved to be a trustworthy service. The products arrived on time and in great condition. I&#8217;ve seen clear improvements in my recovery and will be looking to order again soon!</p>
</div>
		</div>
	</div>
</li>
<li class="review odd alt thread-odd thread-alt depth-1" id="li-comment-640">

	<div id="comment-640" class="comment_container">

		<img alt='' src='https://secure.gravatar.com/avatar/98e6489c5967e2b6f4b43de082f12eaf1fde8f8c6763d3acbdce85041166d46b?s=60&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/98e6489c5967e2b6f4b43de082f12eaf1fde8f8c6763d3acbdce85041166d46b?s=120&#038;d=mm&#038;r=g 2x' class='avatar avatar-60 photo' height='60' width='60'/>
		<div class="comment-text">

			<div class="star-rating" role="img" aria-label="Rated 4 out of 5"><span style="width:80%">Rated <strong class="rating">4</strong> out of 5</span></div>
	<p class="meta">
		<strong class="woocommerce-review__author">Samuel Perez </strong>
				<span class="woocommerce-review__dash">&ndash;</span> <time class="woocommerce-review__published-date" datetime="2026-03-16T17:39:01+00:00">March 16, 2026</time>
	</p>

	<div class="description"><p>I was hesitant to order BPC-157 online, but Terui Healthcare’s positive reviews prompted me to try. My order arrived quickly and in great condition. I noticed a real difference in my healing time, which amazed me. This experience has turned me into a committed customer!</p>
</div>
		</div>
	</div>
</li>
<li class="review even thread-even depth-1" id="li-comment-645">

	<div id="comment-645" class="comment_container">

		<img alt='' src='https://secure.gravatar.com/avatar/d800a72e6fc6023cf51a6323da872b702ac98375a7892dddb6b27f86df66de34?s=60&#038;d=mm&#038;r=g' srcset='https://secure.gravatar.com/avatar/d800a72e6fc6023cf51a6323da872b702ac98375a7892dddb6b27f86df66de34?s=120&#038;d=mm&#038;r=g 2x' class='avatar avatar-60 photo' height='60' width='60'/>
		<div class="comment-text">

			<div class="star-rating" role="img" aria-label="Rated 4 out of 5"><span style="width:80%">Rated <strong class="rating">4</strong> out of 5</span></div>
	<p class="meta">
		<strong class="woocommerce-review__author">Sophie Hall </strong>
				<span class="woocommerce-review__dash">&ndash;</span> <time class="woocommerce-review__published-date" datetime="2026-03-16T17:59:22+00:00">March 16, 2026</time>
	</p>

	<div class="description"><p>I had my doubts about ordering BPC-157 &amp; TB-500 from an online store. My previous experiences made me cautious. However, Terui showed up with exceptional service. The product arrived within a few days and has shown more promise than I expected. I will definitely be ordering from here again!</p>
</div>
		</div>
	</div>
</li>
			</ol>

						</div>

			<div id="review_form_wrapper">
			<div id="review_form">
					<div id="respond" class="comment-respond">
		<span id="reply-title" class="comment-reply-title" role="heading" aria-level="3">Add a review <small><a rel="nofollow" id="cancel-comment-reply-link" href="/product/bpc-157-and-tb-500/#respond" style="display:none;">Cancel reply</a></small></span><form action="/wp-comments-post.php" method="post" id="commentform" class="comment-form"><p class="comment-notes"><span id="email-notes">Your email address will not be published.</span> <span class="required-field-message">Required fields are marked <span class="required">*</span></span></p><div class="comment-form-rating"><label for="rating" id="comment-form-rating-label">Your rating&nbsp;<span class="required">*</span></label><select name="rating" id="rating" required>
						<option value="">Rate&hellip;</option>
						<option value="5">Perfect</option>
						<option value="4">Good</option>
						<option value="3">Average</option>
						<option value="2">Not that bad</option>
						<option value="1">Very poor</option>
					</select></div><p class="comment-form-comment"><label for="comment">Your review&nbsp;<span class="required">*</span></label><textarea id="comment" name="comment" cols="45" rows="8" required></textarea></p><p class="comment-form-author"><label for="author">Name&nbsp;<span class="required">*</span></label><input id="author" name="author" type="text" autocomplete="name" value="" size="30" required/></p>
<p class="comment-form-email"><label for="email">Email&nbsp;<span class="required">*</span></label><input id="email" name="email" type="email" autocomplete="email" value="" size="30" required/></p>
<p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes"/> <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>
<p class="form-submit"><input name="submit" type="submit" id="submit" class="submit" value="Submit"/> <input type='hidden' name='comment_post_ID' value='3447' id='comment_post_ID'/>
<input type='hidden' name='comment_parent' id='comment_parent' value='0'/>
</p></form>	</div>
				</div>
		</div>
	
	<div class="clear"></div>
</div>
</div></div></div></div></div><div class="fusion-fullwidth fullwidth-box fusion-builder-row-9 fusion-flex-container has-pattern-background has-mask-background nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" style="--awb-border-radius-top-left:0px;--awb-border-radius-top-right:0px;--awb-border-radius-bottom-right:0px;--awb-border-radius-bottom-left:0px;--awb-padding-top:64px;--awb-padding-bottom:80px;--awb-flex-wrap:wrap;"><div class="fusion-builder-row fusion-row fusion-flex-align-items-flex-start fusion-flex-justify-content-center fusion-flex-content-wrap" style="max-width:1248px;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column fusion-builder-column-15 fusion_builder_column_1_1 1_1 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:100%;--awb-flex-grow:0;--awb-flex-shrink:0;--awb-margin-top-large:0px;--awb-spacing-right-large:1.92%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:1.92%;--awb-width-medium:100%;--awb-order-medium:0;--awb-flex-grow-medium:0;--awb-flex-shrink-medium:0;--awb-spacing-right-medium:1.92%;--awb-spacing-left-medium:1.92%;--awb-width-small:100%;--awb-order-small:0;--awb-flex-grow-small:0;--awb-flex-shrink-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-title title fusion-title-6 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-three" style="--awb-margin-bottom:48px;--awb-margin-bottom-small:48px;"><h3 class="fusion-title-heading title-heading-center" style="margin:0;">related vegan products</h3></div><div class="fusion-post-cards fusion-post-cards-1 fusion-grid-archive fusion-grid-columns-3" style="--awb-column-spacing:24px;--awb-dots-align:center;--awb-columns:3;--awb-active-filter-border-size:3px;--awb-filters-height:36px;--awb-row-spacing:32px;"><ul class="fusion-grid fusion-grid-3 fusion-flex-align-items-stretch fusion-grid-posts-cards">



  <ProductCard
    v-for="p in productsGrid1"
    :key="p.pid"
    :title="p.title"
    :price="p.price"
    :image="p.image"
    :href="p.href"
    :product-id="p.pid"
  />
</ul></div></div></div></div></div>
				</div>
			</div>
			</section>
						
					</div>  
				</main>  
				
				
								
					  <SiteFooter :email-hash="'582b39343d2b183934342d2e313b392a3d763b3735'" :copyright-style="'padding-top:32px;padding-bottom:44px;'"/>
																</div> 
		</div> 
				<a class="fusion-one-page-text-link fusion-page-load-link" tabindex="-1" href="#" aria-hidden="true">Page load link</a>

		<div class="avada-footer-scripts">
			<SiteOffCanvas :id="2892" type="sliding-bar" style-vars="--awb-horizontal-position:flex-start;--awb-vertical-position:flex-end;--awb-overlay-background-color:rgba(0,0,0,0.8);--awb-height:100dvh;--awb-box-shadow:;--awb-background-color:#ffffff;--awb-content-layout:column;--awb-align-content:flex-start;--awb-valign-content:flex-start;--awb-content-wrap:wrap;--awb-close-button-margin-top:32px;--awb-close-button-margin-right:32px;--awb-close-icon-size:14px;"><div class="awb-off-canvas" tabindex="-1"><button class="off-canvas-close awb-vegan-storeclose close-position-right" aria-label="Close"></button><div class="awb-off-canvas-inner content-layout-column" style=""><div class="off-canvas-content"><div class="fusion-fullwidth fullwidth-box fusion-builder-row-12 fusion-flex-container has-pattern-background has-mask-background nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" style="--awb-border-radius-top-left:0px;--awb-border-radius-top-right:0px;--awb-border-radius-bottom-right:0px;--awb-border-radius-bottom-left:0px;--awb-padding-top:40px;--awb-padding-bottom:40px;--awb-min-height:100vh;--awb-flex-wrap:wrap;"><div class="fusion-builder-row fusion-row fusion-flex-align-items-flex-start fusion-flex-align-content-space-between fusion-flex-content-wrap" style="max-width:1248px;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column fusion-builder-column-26 fusion_builder_column_1_1 1_1 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:100%;--awb-flex-grow:0;--awb-flex-shrink:0;--awb-margin-top-large:0px;--awb-spacing-right-large:1.92%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:1.92%;--awb-width-medium:100%;--awb-order-medium:0;--awb-flex-grow-medium:0;--awb-flex-shrink-medium:0;--awb-spacing-right-medium:1.92%;--awb-spacing-left-medium:1.92%;--awb-width-small:100%;--awb-order-small:0;--awb-flex-grow-small:0;--awb-flex-shrink-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-image-element " style="--awb-margin-bottom:32px;--awb-max-width:160px;--awb-caption-title-font-family:var(--h2_typography-font-family);--awb-caption-title-font-weight:var(--h2_typography-font-weight);--awb-caption-title-font-style:var(--h2_typography-font-style);--awb-caption-title-size:var(--h2_typography-font-size);--awb-caption-title-transform:var(--h2_typography-text-transform);--awb-caption-title-line-height:var(--h2_typography-line-height);--awb-caption-title-letter-spacing:var(--h2_typography-letter-spacing);"><span class=" fusion-imageframe imageframe-none imageframe-5 hover-type-none"><img src="/terui_logo.svg" alt="Terui Health care" style="display:block;height:auto;max-width:100%;width:633px;"></span></div><div class="fusion-builder-row fusion-builder-row-inner fusion-row fusion-flex-align-items-flex-start fusion-flex-align-content-space-between fusion-flex-content-wrap" style="width:104% !important;max-width:104% !important;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-14 fusion_builder_column_inner_1_1 1_1 fusion-flex-column" style="--awb-padding-top:16px;--awb-padding-right:24px;--awb-padding-bottom:16px;--awb-padding-left:24px;--awb-overflow:hidden;--awb-bg-color:hsla(var(--awb-color4-h),var(--awb-color4-s),var(--awb-color4-l),calc(var(--awb-color4-a) - 90%));--awb-bg-color-hover:hsla(var(--awb-color4-h),var(--awb-color4-s),var(--awb-color4-l),calc(var(--awb-color4-a) - 90%));--awb-bg-size:cover;--awb-border-radius:8px 8px 8px 8px;--awb-width-large:100%;--awb-margin-top-large:0px;--awb-spacing-right-large:1.92%;--awb-margin-bottom-large:32px;--awb-spacing-left-large:1.92%;--awb-width-medium:100%;--awb-order-medium:0;--awb-spacing-right-medium:1.92%;--awb-spacing-left-medium:1.92%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-text fusion-text-14 fusion-text-no-margin" style="--awb-content-alignment:center;--awb-margin-bottom:-5px;"><p><span class="fusion-dynamic-cart-count-wrapper" data-singular=" Item" data-plural=" Items"><span class="fusion-dynamic-cart-count">0</span> Items</span> in your Cart</p>
</div><div class="fusion-text fusion-text-15 fusion-text-no-margin" style="--awb-content-alignment:center;--awb-font-size:var(--awb-typography5-font-size);--awb-line-height:var(--awb-typography5-line-height);--awb-letter-spacing:var(--awb-typography5-letter-spacing);--awb-text-transform:var(--awb-typography5-text-transform);--awb-margin-top:6px;--awb-margin-bottom:0px;--awb-text-font-family:var(--awb-typography5-font-family);--awb-text-font-weight:var(--awb-typography5-font-weight);--awb-text-font-style:var(--awb-typography5-font-style);"><p><u><a href="/cart/">View your Cart</a></u></p>
</div></div></div></div><nav class="awb-menu awb-menu_column awb-menu_em-click mobile-mode-collapse-to-button awb-menu_icons-left awb-menu_dc-yes mobile-trigger-fullwidth-off awb-menu_mobile-toggle awb-menu_indent-left mobile-size-full-absolute loading mega-menu-loading awb-menu_desktop awb-menu_v-stacked awb-submenu_cm_toggle" style="--awb-font-size:var(--awb-typography3-font-size);--awb-line-height:var(--awb-typography3-line-height);--awb-text-transform:var(--awb-typography3-text-transform);--awb-items-padding-top:10px;--awb-items-padding-bottom:10px;--awb-letter-spacing:var(--awb-typography3-letter-spacing);--awb-active-color:var(--awb-color5);--awb-submenu-items-padding-top:16px;--awb-submenu-items-padding-bottom:16px;--awb-submenu-space:32px;--awb-submenu-font-size:15px;--awb-main-justify-content:flex-start;--awb-mobile-justify:flex-start;--awb-mobile-caret-left:auto;--awb-mobile-caret-right:0;--awb-fusion-font-family-typography:var(--awb-typography3-font-family);--awb-fusion-font-weight-typography:var(--awb-typography3-font-weight);--awb-fusion-font-style-typography:var(--awb-typography3-font-style);--awb-fusion-font-family-submenu-typography:inherit;--awb-fusion-font-style-submenu-typography:normal;--awb-fusion-font-weight-submenu-typography:400;--awb-fusion-font-family-mobile-typography:inherit;--awb-fusion-font-style-mobile-typography:normal;--awb-fusion-font-weight-mobile-typography:400;" aria-label="Off Canvas Menu" data-breakpoint="0" data-count="5" data-transition-type="fade" data-transition-time="300"><ul id="menu-off-canvas-menu" class="fusion-menu awb-menu__main-ul awb-menu__main-ul_column"><li id="menu-item-3587" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-3587 awb-menu__li awb-menu__main-li awb-menu__main-li_regular" data-item-id="3587"><span class="awb-menu__main-background-default awb-menu__main-background-default_fade"></span><span class="awb-menu__main-background-active awb-menu__main-background-active_fade"></span><a href="/" class="awb-menu__main-a awb-menu__main-a_regular"><span class="menu-text">Home</span></a></li><li id="menu-item-3588" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3588 awb-menu__li awb-menu__main-li awb-menu__main-li_regular" data-item-id="3588"><span class="awb-menu__main-background-default awb-menu__main-background-default_fade"></span><span class="awb-menu__main-background-active awb-menu__main-background-active_fade"></span><a href="/contact/" class="awb-menu__main-a awb-menu__main-a_regular"><span class="menu-text">Contact</span></a></li><li id="menu-item-3590" class="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-3590 awb-menu__li awb-menu__main-li awb-menu__main-li_regular" data-item-id="3590"><span class="awb-menu__main-background-default awb-menu__main-background-default_fade"></span><span class="awb-menu__main-background-active awb-menu__main-background-active_fade"></span><a href="/shop-2/" class="awb-menu__main-a awb-menu__main-a_regular"><span class="menu-text">Shop</span></a></li><li id="menu-item-3589" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3589 awb-menu__li awb-menu__main-li awb-menu__main-li_regular" data-item-id="3589"><span class="awb-menu__main-background-default awb-menu__main-background-default_fade"></span><span class="awb-menu__main-background-active awb-menu__main-background-active_fade"></span><a href="/news-recipes/" class="awb-menu__main-a awb-menu__main-a_regular"><span class="menu-text">News &#038; Recipes</span></a></li></ul></nav></div></div><div class="fusion-layout-column fusion_builder_column fusion-builder-column-27 fusion_builder_column_1_1 1_1 fusion-flex-column" style="--awb-padding-top:40px;--awb-padding-bottom:40px;--awb-bg-size:cover;--awb-border-color:var(--awb-color3);--awb-border-top:1px;--awb-border-style:solid;--awb-width-large:100%;--awb-flex-grow:0;--awb-flex-shrink:0;--awb-margin-top-large:0px;--awb-spacing-right-large:1.92%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:1.92%;--awb-width-medium:100%;--awb-order-medium:0;--awb-flex-grow-medium:0;--awb-flex-shrink-medium:0;--awb-spacing-right-medium:1.92%;--awb-spacing-left-medium:1.92%;--awb-width-small:100%;--awb-order-small:0;--awb-flex-grow-small:0;--awb-flex-shrink-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-title title fusion-title-13 fusion-sep-none fusion-title-text fusion-title-size-five" style="--awb-margin-top:0px;"><h5 class="fusion-title-heading title-heading-left" style="margin:0;">get in touch</h5></div><div class="fusion-text fusion-text-16 fusion-text-no-margin" style="--awb-margin-bottom:4px;"><p>123 Main Street, Queens, NY 11435</p>
</div><div class="fusion-text fusion-text-17 fusion-text-no-margin" style="--awb-margin-bottom:4px;"><p>Phone: +1 800 555 5555</p>
</div><div class="fusion-text fusion-text-18 fusion-text-no-margin" style="--awb-margin-bottom:4px;"><p>Email: <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="c1a2aeafb5a0a2b581a0b7a0a5a0eca2aeacb1a0afb8efa2aeac">[email&#160;protected]</a></p>
</div><div class="fusion-social-links fusion-social-links-2" style="--awb-margin-top:24px;--awb-margin-right:0px;--awb-margin-bottom:0px;--awb-margin-left:0px;--awb-box-border-top:0px;--awb-box-border-right:0px;--awb-box-border-bottom:0px;--awb-box-border-left:0px;--awb-box-padding-top:12px;--awb-box-padding-right:12px;--awb-box-padding-bottom:12px;--awb-box-padding-left:12px;--awb-icon-colors-hover:var(--awb-color1);--awb-box-colors-hover:var(--awb-color7);--awb-box-border-color:var(--awb-color3);--awb-box-border-color-hover:var(--awb-color4);"><div class="fusion-social-networks boxed-icons color-type-custom"><div class="fusion-social-networks-wrapper"><a class="fusion-social-network-icon fusion-tooltip fusion-facebook awb-icon-facebook" style="color:var(--awb-color6);font-size:16px;width:16px;background-color:var(--awb-color2);border-color:var(--awb-color2);border-radius:8px;" data-placement="top" data-title="Facebook" data-toggle="tooltip" title="Facebook" aria-label="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ThemeFusion-101565403356430/"></a><a class="fusion-social-network-icon fusion-tooltip fusion-twitter awb-icon-twitter" style="color:var(--awb-color6);font-size:16px;width:16px;background-color:var(--awb-color2);border-color:var(--awb-color2);border-radius:8px;" data-placement="top" data-title="X" data-toggle="tooltip" title="X" aria-label="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/theme_fusion"></a><a class="fusion-social-network-icon fusion-tooltip fusion-instagram awb-icon-instagram" style="color:var(--awb-color6);font-size:16px;width:16px;background-color:var(--awb-color2);border-color:var(--awb-color2);border-radius:8px;" data-placement="top" data-title="Instagram" data-toggle="tooltip" title="Instagram" aria-label="instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/themefusion/"></a><a class="fusion-social-network-icon fusion-tooltip fusion-youtube awb-icon-youtube" style="color:var(--awb-color6);font-size:16px;width:16px;background-color:var(--awb-color2);border-color:var(--awb-color2);border-radius:8px;" data-placement="top" data-title="YouTube" data-toggle="tooltip" title="YouTube" aria-label="youtube" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@AvadaVideos"></a></div></div></div></div></div></div></div>
</div></div></div></SiteOffCanvas><SiteOffCanvas :id="3099" type="popup" style-vars="--awb-horizontal-position:center;--awb-vertical-position:flex-end;--awb-overlay-background-color:hsla(var(--awb-color8-h),var(--awb-color8-s),var(--awb-color8-l),calc(var(--awb-color8-a) - 80%));--awb-width:550px;--awb-margin-bottom:48px;--awb-margin-left:48px;--awb-box-shadow:;--awb-border-top-left-radius:8px;--awb-border-top-right-radius:8px;--awb-border-bottom-right-radius:8px;--awb-border-bottom-left-radius:8px;--awb-background-color:#ffffff;--awb-content-layout:column;--awb-align-content:flex-start;--awb-valign-content:flex-start;--awb-content-wrap:wrap;--awb-close-button-color:var(--awb-color1);--awb-close-icon-size:12px;--awb-close-button-color-hover:var(--awb-color5);"><div class="awb-off-canvas" tabindex="-1"><button class="off-canvas-close awb-vegan-storeclose close-position-right" aria-label="Close"></button><div class="awb-off-canvas-inner content-layout-column" style=""><div class="off-canvas-content"><div class="fusion-fullwidth fullwidth-box fusion-builder-row-13 fusion-flex-container has-pattern-background has-mask-background fusion-parallax-none nonhundred-percent-fullwidth non-hundred-percent-height-scrolling lazyload" style="--awb-border-radius-top-left:0px;--awb-border-radius-top-right:0px;--awb-border-radius-bottom-right:0px;--awb-border-radius-bottom-left:0px;--awb-background-image:linear-gradient(180deg, rgba(255,255,255,0) 0%,hsla(var(--awb-color8-h),var(--awb-color8-s),var(--awb-color8-l),calc(var(--awb-color8-a) - 30%)) 100%);;--awb-background-size:cover;--awb-flex-wrap:wrap;" data-bg="https://saddlebrown-chinchilla-978528.hostingersite.com/wp-content/uploads/2024/01/vegan-cta-bg-mobile.jpg" data-bg-gradient="linear-gradient(180deg, rgba(255,255,255,0) 0%,hsla(var(--awb-color8-h),var(--awb-color8-s),var(--awb-color8-l),calc(var(--awb-color8-a) - 30%)) 100%)"><div class="fusion-builder-row fusion-row fusion-flex-align-items-flex-start fusion-flex-content-wrap" style="max-width:1248px;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column fusion-builder-column-28 fusion_builder_column_1_1 1_1 fusion-flex-column" style="--awb-padding-top:32px;--awb-padding-right:16px;--awb-padding-bottom:40px;--awb-padding-left:16px;--awb-bg-size:cover;--awb-width-large:100%;--awb-flex-grow:0;--awb-flex-shrink:0;--awb-margin-top-large:0px;--awb-spacing-right-large:1.92%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:1.92%;--awb-width-medium:100%;--awb-order-medium:0;--awb-flex-grow-medium:0;--awb-flex-shrink-medium:0;--awb-spacing-right-medium:1.92%;--awb-spacing-left-medium:1.92%;--awb-width-small:100%;--awb-order-small:0;--awb-flex-grow-small:0;--awb-flex-shrink-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-title title fusion-title-14 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-four" style="--awb-text-color:var(--awb-color1);--awb-margin-bottom:10px;"><h4 class="fusion-title-heading title-heading-center" style="margin:0;">get additional 20% discount</h4></div><div class="fusion-text fusion-text-19 fusion-text-no-margin" style="--awb-content-alignment:center;--awb-line-height:1;--awb-text-color:hsla(var(--awb-color1-h),var(--awb-color1-s),var(--awb-color1-l),calc(var(--awb-color1-a) - 30%));--awb-margin-bottom:18px;"><p>Sign up &amp; save on your order</p>
</div><div class="fusion-form fusion-form-builder fusion-form-form-wrapper fusion-form-3104 has-icon-alignment" style="--awb-tooltip-text-color:#ffffff;--awb-tooltip-background-color:#333333;--awb-form-input-height:60px;--awb-form-font-size:15px;--awb-form-placeholder-color:hsla(var(--awb-color6-h),var(--awb-color6-s),var(--awb-color6-l),calc(var(--awb-color6-a) - 50%));--awb-form-text-color:var(--awb-color8);--awb-form-border-width-top:0px;--awb-form-border-width-bottom:0px;--awb-form-border-width-right:0px;--awb-form-border-width-left:0px;--awb-form-border-radius:8px;--awb-icon-alignment-top:0px;--awb-icon-alignment-bottom:0px;--awb-icon-alignment-font-size:15px;" data-form-id="3104" data-config="{&quot;form_id&quot;:&quot;3104&quot;,&quot;form_post_id&quot;:&quot;3104&quot;,&quot;post_id&quot;:3447,&quot;form_type&quot;:&quot;ajax&quot;,&quot;confirmation_type&quot;:&quot;message&quot;,&quot;redirect_url&quot;:&quot;&quot;,&quot;field_labels&quot;:{&quot;email&quot;:&quot;&quot;},&quot;field_logics&quot;:{&quot;email&quot;:&quot;&quot;},&quot;field_types&quot;:{&quot;email&quot;:&quot;email&quot;},&quot;nonce_method&quot;:&quot;ajax&quot;,&quot;form_views&quot;:&quot;ajax&quot;,&quot;form_views_counting&quot;:&quot;all&quot;}"><form action="/product/bpc-157-and-tb-500/" method="post" class="fusion-form fusion-form-3104"><div class="fusion-fullwidth fullwidth-box fusion-builder-row-13-1 fusion-flex-container has-pattern-background has-mask-background nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" style="--awb-border-radius-top-left:0px;--awb-border-radius-top-right:0px;--awb-border-radius-bottom-right:0px;--awb-border-radius-bottom-left:0px;--awb-padding-right:0px;--awb-padding-left:0px;--awb-flex-wrap:wrap;"><div class="fusion-builder-row fusion-row fusion-flex-align-items-center fusion-flex-content-wrap" style="width:104% !important;max-width:104% !important;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column fusion-builder-column-29 fusion_builder_column_2_3 2_3 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:66.666666666667%;--awb-flex-grow:0;--awb-flex-shrink:0;--awb-margin-top-large:0px;--awb-spacing-right-large:2.88%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:2.88%;--awb-width-medium:66.666666666667%;--awb-order-medium:0;--awb-flex-grow-medium:0;--awb-flex-shrink-medium:0;--awb-spacing-right-medium:2.88%;--awb-spacing-left-medium:2.88%;--awb-width-small:100%;--awb-order-small:0;--awb-flex-grow-small:0;--awb-flex-shrink-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-form-field fusion-form-email-field fusion-form-label-above" style="" data-form-id="3104"><input type="email" autocomplete="off" data-empty-notice="Please enter a valid email" name="email" id="email" value="" class="fusion-form-input" required="true" aria-required="true" placeholder="Enter your email .. *" data-holds-private-data="false"/></div></div></div><div class="fusion-layout-column fusion_builder_column fusion-builder-column-30 fusion_builder_column_1_3 1_3 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:33.333333333333%;--awb-flex-grow:0;--awb-flex-shrink:0;--awb-margin-top-large:0px;--awb-spacing-right-large:5.76%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:5.76%;--awb-width-medium:33.333333333333%;--awb-order-medium:0;--awb-flex-grow-medium:0;--awb-flex-shrink-medium:0;--awb-spacing-right-medium:5.76%;--awb-spacing-left-medium:5.76%;--awb-width-small:100%;--awb-order-small:0;--awb-flex-grow-small:0;--awb-flex-shrink-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div><a class="fusion-button button-flat fusion-button-default-size button-custom fusion-button-default button-2 fusion-button-span-yes fusion-button-default-type" style="--button_accent_color:var(--awb-color1);--button_accent_hover_color:var(--awb-color1);--button_border_hover_color:var(--awb-color1);--button_gradient_top_color:var(--awb-color5);--button_gradient_bottom_color:var(--awb-color5);--button_gradient_top_color_hover:var(--awb-color4);--button_gradient_bottom_color_hover:var(--awb-color4);--button_text_transform:uppercase;--button_font_size:15px;" target="_self" data-hover="bg_slide_right" href="#"><span class="fusion-button-text awb-button__text awb-button__text--default">subscribe</span></a></div></div></div></div></div><input type="hidden" name="fusion_privacy_store_ip_ua" value="false"><input type="hidden" name="fusion_privacy_expiration_interval" value="48"><input type="hidden" name="privacy_expiration_action" value="anonymize"></form></div><div class="fusion-builder-row fusion-builder-row-inner fusion-row fusion-flex-align-items-flex-start fusion-flex-content-wrap" style="width:104% !important;max-width:104% !important;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-15 fusion_builder_column_inner_1_1 1_1 fusion-flex-column" style="--awb-padding-top-small:16px;--awb-bg-size:cover;--awb-width-large:100%;--awb-margin-top-large:0px;--awb-spacing-right-large:1.92%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:1.92%;--awb-width-medium:100%;--awb-order-medium:0;--awb-spacing-right-medium:1.92%;--awb-spacing-left-medium:1.92%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-text fusion-text-20 fusion-text-no-margin" style="--awb-content-alignment:center;--awb-font-size:13px;--awb-text-color:hsla(var(--awb-color1-h),var(--awb-color1-s),var(--awb-color1-l),calc(var(--awb-color1-a) - 30%));--awb-margin-bottom:0px;"><p>By subscribing you agreed to our <a href="#"><u>Store Plolicy</u></a></p>
</div></div></div></div></div></div></div></div>
</div></div></div></SiteOffCanvas><SiteOffCanvas :id="1369" type="popup" style-vars="--awb-horizontal-position:center;--awb-horizontal-position-medium:center;--awb-horizontal-position-small:center;--awb-vertical-position:flex-end;--awb-vertical-position-medium:center;--awb-vertical-position-small:center;--awb-overlay-background-color:rgba(0,0,0,0.8);--awb-width:550px;--awb-margin-bottom:32px;--awb-box-shadow:;--awb-border-top-left-radius:8px;--awb-border-top-right-radius:8px;--awb-border-bottom-right-radius:8px;--awb-border-bottom-left-radius:8px;--awb-background-color:#ffffff;--awb-oc-scrollbar-handle-color:var(--awb-color6);--awb-oc-scrollbar-background:var(--awb-color1);--awb-content-layout:column;--awb-align-content:flex-start;--awb-valign-content:flex-start;--awb-content-wrap:wrap;--awb-close-button-margin-right:-40px;--awb-close-button-color:var(--awb-color1);--awb-close-icon-size:16px;--awb-close-button-color-hover:var(--awb-color3);"><div class="awb-off-canvas" tabindex="-1"><button class="off-canvas-close awb-vegan-storeclose close-position-right" aria-label="Close"></button><div class="awb-off-canvas-inner content-layout-column" style=""><div class="off-canvas-content"><div class="fusion-fullwidth fullwidth-box fusion-builder-row-14 fusion-flex-container has-pattern-background has-mask-background nonhundred-percent-fullwidth non-hundred-percent-height-scrolling" style="--awb-border-radius-top-left:0px;--awb-border-radius-top-right:0px;--awb-border-radius-bottom-right:0px;--awb-border-radius-bottom-left:0px;--awb-background-color:var(--awb-color1);--awb-flex-wrap:wrap;"><div class="fusion-builder-row fusion-row fusion-flex-align-items-flex-start fusion-flex-content-wrap" style="max-width:1248px;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column fusion-builder-column-31 fusion_builder_column_1_1 1_1 fusion-flex-column" style="--awb-padding-top:32px;--awb-padding-bottom:16px;--awb-bg-size:cover;--awb-width-large:100%;--awb-flex-grow:0;--awb-flex-shrink:0;--awb-margin-top-large:0px;--awb-spacing-right-large:1.92%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:1.92%;--awb-width-medium:100%;--awb-order-medium:0;--awb-flex-grow-medium:0;--awb-flex-shrink-medium:0;--awb-spacing-right-medium:1.92%;--awb-spacing-left-medium:1.92%;--awb-width-small:100%;--awb-order-small:0;--awb-flex-grow-small:0;--awb-flex-shrink-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-builder-row fusion-builder-row-inner fusion-row fusion-flex-align-items-flex-start fusion-flex-content-wrap" style="width:104% !important;max-width:104% !important;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-16 fusion_builder_column_inner_1_1 1_1 fusion-flex-column" style="--awb-overflow:hidden;--awb-bg-color:hsla(var(--awb-color4-h),var(--awb-color4-s),var(--awb-color4-l),calc(var(--awb-color4-a) - 90%));--awb-bg-color-hover:hsla(var(--awb-color4-h),var(--awb-color4-s),var(--awb-color4-l),calc(var(--awb-color4-a) - 90%));--awb-bg-size:cover;--awb-border-radius:8px 8px 8px 8px;--awb-width-large:100%;--awb-margin-top-large:0px;--awb-spacing-right-large:1.92%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:1.92%;--awb-width-medium:100%;--awb-order-medium:0;--awb-spacing-right-medium:1.92%;--awb-spacing-left-medium:1.92%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="fusion-title title fusion-title-15 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-div" style="--awb-margin-top:16px;--awb-font-size:15px;"><div class="fusion-title-heading title-heading-center title-heading-tag" style="margin:0;text-transform:none;font-size:1em;">Product has been added to your cart.</div></div></div></div></div><div class="awb-woo-mini-cart awb-woo-mini-cart-1 hide-buttons hide-subtotal" style="--awb-remove-icon-color:var(--awb-color6);--awb-remove-icon-bg-color:var(--awb-color3);--awb-product-title-color:var(--awb-color7);--awb-product-price-color:var(--awb-color8);--awb-margin-top:8px;--awb-margin-bottom:24px;--awb-product-title-font-size:15px;--awb-product-title-letter-spacing:var(--awb-typography4-letter-spacing);--awb-product-title-line-height:var(--awb-typography4-line-height);--awb-product-title-text-transform:var(--awb-typography4-text-transform);--awb-product-title-font-family:var(--awb-typography4-font-family);--awb-product-title-font-weight:var(--awb-typography4-font-weight);--awb-product-title-font-style:var(--awb-typography4-font-style);--awb-links-justify:center;"><div class="widget_shopping_cart_content">

	<p class="woocommerce-mini-cart__empty-message">No products in the cart.</p>


</div></div><div class="fusion-builder-row fusion-builder-row-inner fusion-row fusion-flex-align-items-flex-start fusion-flex-content-wrap" style="width:104% !important;max-width:104% !important;margin-left: calc(-4% / 2 );margin-right: calc(-4% / 2 );"><div class="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-17 fusion_builder_column_inner_1_2 1_2 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:50%;--awb-margin-top-large:0px;--awb-spacing-right-large:3.84%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:3.84%;--awb-width-medium:50%;--awb-order-medium:0;--awb-spacing-right-medium:3.84%;--awb-spacing-left-medium:3.84%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="sm-text-align-center"><a class="fusion-button button-flat button-large button-custom fusion-button-default button-3 fusion-button-span-yes fusion-button-default-type" style="--button_accent_color:var(--awb-color1);--button_accent_hover_color:var(--awb-color1);--button_border_hover_color:var(--awb-color5);--button_gradient_top_color:var(--awb-color5);--button_gradient_bottom_color:var(--awb-color5);--button_gradient_top_color_hover:var(--awb-color4);--button_gradient_bottom_color_hover:var(--awb-color4);--button_margin-bottom:16px;" target="_self" data-hover="bg_slide_right" href="/cart-2/"><span class="fusion-button-text awb-button__text awb-button__text--default"><span class="fusion-dynamic-cart-count-wrapper" data-singular=" Item" data-plural=" Items"><span class="fusion-dynamic-cart-count">0</span> Items</span></span></a></div></div></div><div class="fusion-layout-column fusion_builder_column_inner fusion-builder-nested-column-18 fusion_builder_column_inner_1_2 1_2 fusion-flex-column" style="--awb-bg-size:cover;--awb-width-large:50%;--awb-margin-top-large:0px;--awb-spacing-right-large:3.84%;--awb-margin-bottom-large:0px;--awb-spacing-left-large:3.84%;--awb-width-medium:50%;--awb-order-medium:0;--awb-spacing-right-medium:3.84%;--awb-spacing-left-medium:3.84%;--awb-width-small:100%;--awb-order-small:0;--awb-spacing-right-small:1.92%;--awb-spacing-left-small:1.92%;"><div class="fusion-column-wrapper fusion-column-has-shadow fusion-flex-justify-content-flex-start fusion-content-layout-column"><div class="sm-text-align-center"><a class="fusion-button button-flat button-large button-custom fusion-button-default button-4 fusion-button-span-yes fusion-button-default-type" style="--button_accent_color:var(--awb-color1);--button_accent_hover_color:var(--awb-color1);--button_border_hover_color:var(--awb-color5);--button_gradient_top_color:var(--awb-color7);--button_gradient_bottom_color:var(--awb-color7);--button_gradient_top_color_hover:var(--awb-color4);--button_gradient_bottom_color_hover:var(--awb-color4);" target="_self" data-hover="bg_slide_right" href="/cart-2/"><span class="fusion-button-text awb-button__text awb-button__text--default">view cart</span><i class="awb-vegan-storecart awb-button__icon awb-button__icon--default button-icon-right" aria-hidden="true"></i></a></div></div></div></div></div></div></div></div>
</div></div></div></SiteOffCanvas>
		
									  <SiteWhatsApp :page-id="3447"/><div id="photoswipe-fullscreen-dialog" class="pswp" tabindex="-1" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Full screen image">
	<div class="pswp__bg"></div>
	<div class="pswp__scroll-wrap">
		<div class="pswp__container">
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
			<div class="pswp__item"></div>
		</div>
		<div class="pswp__ui pswp__ui--hidden">
			<div class="pswp__top-bar">
				<div class="pswp__counter"></div>
				<button class="pswp__button pswp__button--zoom" aria-label="Zoom in/out"></button>
				<button class="pswp__button pswp__button--fs" aria-label="Toggle fullscreen"></button>
				<button class="pswp__button pswp__button--share" aria-label="Share"></button>
				<button class="pswp__button pswp__button--close" aria-label="Close (Esc)"></button>
				<div class="pswp__preloader">
					<div class="pswp__preloader__icn">
						<div class="pswp__preloader__cut">
							<div class="pswp__preloader__donut"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
				<div class="pswp__share-tooltip"></div>
			</div>
			<button class="pswp__button pswp__button--arrow--left" aria-label="Previous (arrow left)"></button>
			<button class="pswp__button pswp__button--arrow--right" aria-label="Next (arrow right)"></button>
			<div class="pswp__caption">
				<div class="pswp__caption__center"></div>
			</div>
		</div>
	</div>
</div>
	
	










				
						
				</div>

			  <SiteToTop/>
</template>
