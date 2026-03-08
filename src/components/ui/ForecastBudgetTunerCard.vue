<template>
  <ScenarioTunerCard v-bind="forecast" />
</template>

<script setup>
import ScenarioTunerCard from '@/components/ui/ScenarioTunerCard.vue'
import { useScenarioTuners } from '@/composables/useScenarioTuners'

const { forecast } = useScenarioTuners()
</script>
