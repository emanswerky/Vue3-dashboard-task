<template>
  <section class="rounded-2xl bg-white p-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)] h-full">
    <div class="mb-4">
      <h3 class="text-sm font-extrabold text-blue-600">Goal Completion</h3>
    </div>

    <div class="space-y-4">
      <div v-for="row in goalRows" :key="row.key" class="flex items-center gap-3">
        <span class="w-10 text-sm text-gray-500">{{ row.label }}</span>

        <div
          class="rounded-full h-10 overflow-hidden flex"
          :style="{ width: row.blue + row.pink + '%' }"
        >
          <div class="bg-pink-500" :style="{ width: row.pink + '%' }"></div>
          <div class="bg-blue-500 rounded-r-full" :style="{ width: row.blue + '%' }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useGoalCompletion } from '/src/composables/useGoalCompletion'

const { goalRows } = useGoalCompletion()
</script>
