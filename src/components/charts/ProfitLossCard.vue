<template>
  <section class="rounded-2xl mb-2 p-2 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
    <div class="">
      <h3 class="text-sm font-extrabold">
        <span class="text-blue-600">Profit</span><span class="text-slate-900">/</span
        ><span class="text-pink-500">Loss</span>
      </h3>
    </div>

    <div class="h-[150px] rounded-2xl bg-white">
      <Chart type="line" :data="chartData" :options="chartOptions" class="h-full w-full" />
    </div>
  </section>
</template>

<script setup>
import Chart from 'primevue/chart'
import { useProfitLossChart } from '@/composables/useProfitLossChart'

const { chartData, chartOptions } = useProfitLossChart()
</script>
