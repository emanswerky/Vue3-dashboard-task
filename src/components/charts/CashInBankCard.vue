<template>
  <section class="rounded-2xl bg-white p-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-extrabold text-blue-600">Cash In Bank</h3>
    </div>

    <div class="h-[140px]">
      <Chart type="line" :data="chartData" :options="chartOptions" :plugins="[highlightPlugin]" />
    </div>
  </section>
</template>

<script setup>
import Chart from 'primevue/chart'
import { useCashInBankChart } from '@/composables/useCashInBankChart'
const { chartData, chartOptions, highlightPlugin } = useCashInBankChart()
</script>
