<template>
  <div
    class="bg-white rounded-2xl shadow-sm p-3 flex flex-col justify-between transition-all duration-200 hover:shadow-md"
  >
    <p class="sm:text-[14px] text-[12px] font-semibold">
      {{ title }}
    </p>

    <div v-if="secondaryValue" class="flex justify-between h-full">
      <div class="">
        <p class="text-[22px]">{{ value }}</p>
        <p class="sm:text-[11px] text-[8px] text-gray-400 mt-0.5">{{ primaryLabel }}</p>
      </div>

      <div>
        <p class="sm:text-[22px] text-[20px]">{{ secondaryValue }}</p>
        <p class="sm:text-[11px] text-[8px] text-gray-400 mt-0.5">
          {{ secondaryLabel }}
        </p>
      </div>

      <span class="sm:text-[12px] text-[8px] text-gray-400">
        {{ footer }}
      </span>
    </div>
    <div v-else class="h-full">
      <div class="">
        <p class="sm:text-[22px] text-[20px] font-normal">
          {{ value }}
        </p>

        <p
          class="text-right text-[14px]"
          :class="deltaType === 'positive' ? 'text-emerald-600' : 'text-red-500'"
        >
          {{ delta }}
        </p>
      </div>

      <span class="sm:text-[12px] text-[8px] text-gray-400">
        {{ footer }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  delta: String,
  footer: {
    type: String,
    default: '',
  },
  deltaType: {
    type: String,
    default: 'positive',
  },
  secondaryValue: { type: [String, Number], default: null },
  primaryLabel: { type: String, default: '' },
  secondaryLabel: { type: String, default: '' },
})
</script>
