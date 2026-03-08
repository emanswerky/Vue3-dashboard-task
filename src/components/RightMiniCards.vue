<template>
  <div class="sm:flex lg:flex-col flex-row lg:gap-0 gap-4 lg:my-0 my-4">
    <div class="w-full sm:w-1/2 md:w-full">
      <ProfitLossCard />
    </div>
    <div class="w-full sm:w-1/2 md:w-full">
      <GoalCompletionCard />
    </div>
  </div>
</template>

<script setup>
import ProfitLossCard from '/src/components/charts/ProfitLossCard.vue'
import GoalCompletionCard from '/src/components/charts/GoalCompletionCard.vue'
</script>
