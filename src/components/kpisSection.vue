<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-7 gap-3">
    <KpiCard v-for="(item, index) in kpis" :key="index" v-bind="item" />
  </div>
</template>
<script setup>
import { useKpiCard } from '/src/composables/useKpiCard'
import KpiCard from '/src/components/KpiCard.vue'

const { kpis } = useKpiCard()
</script>
