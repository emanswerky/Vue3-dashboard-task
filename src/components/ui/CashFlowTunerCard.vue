<template>
  <ScenarioTunerCard v-bind="cashflow" />
</template>

<script setup>
import ScenarioTunerCard from '@/components/ui/ScenarioTunerCard.vue'
import { useScenarioTuners } from '@/composables/useScenarioTuners'

const { cashflow } = useScenarioTuners()
</script>
