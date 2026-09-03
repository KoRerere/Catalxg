<script setup lang="ts">
// Generic Avada off-canvas wrapper. Avada drives open/close via the off-canvas JS
// keyed on the element id/class, so the DOM shape (awb-off-canvas-wrap + inner
// awb-off-canvas + off-canvas-content) is preserved exactly. Each page injects its
// own off-canvas content through the default slot.
defineProps<{
  id: string | number
}>()
</script>

<template>
  <div
    :id="`awb-oc-${id}`"
    class="awb-off-canvas-wrap type-sliding-bar position-left hidden-scrollbar"
    :data-id="String(id)"
  >
    <div class="awb-off-canvas" tabindex="-1">
      <button
        class="off-canvas-close awb-vegan-storeclose close-position-right"
        aria-label="Close"
      ></button>
      <div class="awb-off-canvas-inner content-layout-column" style="">
        <div class="off-canvas-content">
          <!-- each page injects its own off-canvas content here -->
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
