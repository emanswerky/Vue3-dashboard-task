<template>
  <section class="rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
    <!-- Header -->
    <div class="mb-4 flex items-start justify-between gap-3">
      <div>
        <h3 class="text-sm font-extrabold text-slate-900">Revenue vs Expenses</h3>
      </div>
    </div>

    <!-- Chart -->
    <div class="h-[240px]">
      <Chart type="bar" :data="chartData" :options="chartOptions" class="h-full w-full" />
    </div>

    <!-- Footer -->
    <div class="mt-3 lg:text-[10px] text-[12px] flex items-center justify-center gap-1">
      <img :src="sparkle" class="w-[20px] h-[20px]" />

      <span> Losses in March and April driven by seasonality + marketing spikes </span>
    </div>
  </section>
</template>

<script setup>
import Chart from 'primevue/chart'

import { useRevenueExpensesChart } from '/src/composables/useRevenueExpensesChart'
import { sparkle } from '@/constants/icons'

const { chartData, chartOptions } = useRevenueExpensesChart()
</script>
