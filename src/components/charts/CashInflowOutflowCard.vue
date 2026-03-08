<template>
  <section>
    <div class="rounded-[24px] bg-white p-2">
      <div class="mb-3">
        <h3 class="text-sm font-extrabold text-slate-900">Cash Inflow vs outflow</h3>
      </div>

      <div class="h-[280px]">
        <Chart
          class="h-full w-full"
          type="line"
          :data="chartData"
          :options="chartOptions"
          :plugins="[highlightPlugin]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Chart from 'primevue/chart'
import { useCashInflowOutflowChart } from '@/composables/useCashInflowOutflowChart'
const { chartData, chartOptions, highlightPlugin } = useCashInflowOutflowChart()
</script>
