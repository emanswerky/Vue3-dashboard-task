<template>
  <section class="rounded-2xl bg-white p-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-extrabold text-blue-600">NetFlow</h3>
    </div>

    <div class="h-[100px]">
      <Chart
        type="line"
        :data="chartData"
        :options="chartOptions"
        :plugins="[highlightPlugin]"
        class="h-full w-full"
      />
    </div>
  </section>
</template>

<script setup>
import Chart from 'primevue/chart'
import { useNetFlowChart } from '@/composables/useNetFlowChart'

const { chartData, chartOptions, highlightPlugin } = useNetFlowChart()
</script>
