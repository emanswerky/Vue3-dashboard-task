<template>
  <section
    class="w-full bg-[#4499e3] h-full rounded-[28px] rounded-bl-[28px] md:rounded-bl-[0px] p-3"
  >
    <!-- الكارت الأول -->
    <ForecastBudgetTunerCard />

    <!-- فاصل مع زر متداخل فوق بداية الكارت الثاني -->
    <div class="relative">
      <!-- زر Generate (Overlay) -->
      <div class="flex items-center justify-center">
        <button
          class="absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-1/2 shadow-[0_8px_30px_rgb(0,0,0,0.12),inset_0_-4px_8px_rgba(0,0,0,0.05)] flex items-center gap-2 px-10 py-3 bg-white border border-white/80 rounded-2xl"
        >
          <span
            class="text-xl font-bold bg-gradient-to-r from-[#3b82f6] to-[#a855f7] bg-clip-text text-transparent"
          >
            Generate
          </span>

          <img :src="sparkle" class="" />
        </button>
      </div>

      <!-- مساحة عشان الزر ما يقطعش محتوى الكارت الثاني -->
      <div class="h-5"></div>

      <!-- الكارت الثاني -->
      <CashFlowTunerCard />
    </div>
  </section>
</template>

<script setup>
import ForecastBudgetTunerCard from '@/components/ui/ForecastBudgetTunerCard.vue'
import CashFlowTunerCard from '@/components/ui/CashFlowTunerCard.vue'
import { sparkle } from '@/constants/icons'
</script>
