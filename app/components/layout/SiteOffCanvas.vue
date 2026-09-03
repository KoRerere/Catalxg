<script setup lang="ts">
// Generic Avada off-canvas container. Avada's off-canvas JS keys on the wrapper's
// data-id/class, so the wrapper shape is preserved exactly. `type`/`styleVars` carry
// the per-instance panel type and --awb-* custom properties; each page's off-canvas
// content is passed through the default slot.
import { computed } from 'vue'

const props = defineProps<{
  id: string | number
  type?: 'sliding-bar' | 'popup'
  styleVars?: string
}>()

const typeClass = computed(() => props.type === 'popup' ? 'type-popup position-fixed' : 'type-sliding-bar position-left')
</script>

<template>
  <div
    :id="`awb-oc-${id}`"
    :class="['awb-off-canvas-wrap', typeClass, { 'hidden-scrollbar': type === 'sliding-bar' }]"
    :style="styleVars || undefined"
    :data-id="String(id)"
  >
    <div class="awb-off-canvas" tabindex="-1">
      <button class="off-canvas-close awb-vegan-storeclose close-position-right" aria-label="Close"></button>
      <div class="awb-off-canvas-inner content-layout-column" style="">
        <div class="off-canvas-content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
