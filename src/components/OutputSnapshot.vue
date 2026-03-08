<template>
  <div class="rounded-[18px] bg-[#4499e3] px-6 py-4 text-white">
    <div class="grid grid-cols-[1fr_340px] items-center">
      <div class="text-[13px] font-extrabold">Output Snapshot:</div>

      <div class="grid grid-cols-3 text-[12px] font-bold text-white/95">
        <div class="text-center">Current</div>
        <div class="text-center">Adjusted</div>
        <div class="text-center">Changes</div>
      </div>
    </div>

    <div class="mt-2 grid grid-cols-[1fr_340px]">
      <div class="space-y-[6px] text-[12px] font-medium text-white/95">
        <div v-for="r in rows" :key="r.label">{{ r.label }}:</div>
      </div>

      <div class="grid grid-cols-3 text-[12px] font-semibold">
        <div class="space-y-[6px] text-center">
          <div v-for="r in rows" :key="r.label + '-c'">{{ r.current }}</div>
        </div>
        <div class="space-y-[6px] text-center">
          <div v-for="r in rows" :key="r.label + '-a'">{{ r.adjusted }}</div>
        </div>
        <div class="space-y-[6px] text-center text-white/90">
          <div v-for="r in rows" :key="r.label + '-ch'">{{ r.change }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  rows: { type: Array, required: true },
})
</script>
