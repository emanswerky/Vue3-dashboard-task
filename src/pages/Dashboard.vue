<template>
  <section class="lg:flex justify-between">
    <div class="lg:w-3/5 w-full flex flex-col justify-between">
      <div class="bg-slate-100 pr-2">
        <kpisSection />
      </div>
      <div class="lg:flex items-center gap-4 lg:mt-0 mt-3">
        <div class="lg:w-3/5 w-full">
          <RevenueExpensesChart />
        </div>
        <div class="lg:w-1/3 w-full">
          <RightMiniCards />
        </div>
      </div>

      <div
        class="my-3 md:my-0 bg-[#4499e3] gap-4 p-4 lg:flex md:rounded-l-[28px] lg:rounded-br-[0px] lg:rounded-tr-[0px] rounded-[28px] shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
      >
        <div class="lg:w-3/5 w-full">
          <CashInflowOutflowCard />
        </div>
        <div class="lg:w-2/5 w-full space-y-4 lg:mt-0 mt-4">
          <CashInBankCard />
          <NetFlowCard />
        </div>
      </div>
    </div>
    <div class="lg:w-2/5 w-full lg:mt-0 mt-4">
      <ScenarioTunersSection />
    </div>
  </section>
</template>

<script setup>
import kpisSection from '/src/components/kpisSection.vue'
import RevenueExpensesChart from '/src/components/RevenueExpensesChart.vue'
import RightMiniCards from '/src/components/RightMiniCards.vue'
import CashInflowOutflowCard from '/src/components/CashInflowOutflowCard.vue'
import CashInBankCard from '@/components/CashInBankCard.vue'
import NetFlowCard from '@/components/NetFlowCard.vue'
import ScenarioTunersSection from '@/components/ScenarioTunersSection.vue'
</script>
