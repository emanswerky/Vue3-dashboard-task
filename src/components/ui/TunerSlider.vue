<template>
  <div class="w-full">
    <label class="text-[11px] lg:text-[8px] xl:text-[11px] font-medium text-slate-700">{{
      label
    }}</label>

    <div class="relative mt-1 h-8 w-full border-t-2">
      <!-- ✅ Track الرمادي (من البداية للنهاية) -->
      <div
        class="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[4px] rounded-full bg-slate-200"
      ></div>

      <!-- PrimeVue: range (أزرق) + handle -->
      <Slider
        v-model="model"
        unstyled
        class="absolute inset-0 w-full"
        :pt="{
          root: { class: 'relative w-full h-8' },

          range: {
            class: 'absolute left-0 top-1/2 -translate-y-1/2 h-[4px] bg-[#2F7DE1] rounded-full',
          },

          handle: {
            class:
              'absolute top-1/2 -translate-y-1/2 w-[37px] h-[22px] bg-white rounded-full border border-slate-200 shadow-md cursor-pointer',
          },
        }"
      />
    </div>
  </div>
</template>

<script setup>
import Slider from 'primevue/slider'
const model = defineModel({ type: Number, default: 35 })
defineProps({ label: String })
</script>
