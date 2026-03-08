<template>
  <header class="w-full">
    <div class="hidden md:block">
      <div class="backdrop-blur-md lg:px-6 px-3">
        <!-- Tabs -->
        <div class="flex justify-end ml-auto lg:w-11/12 w-full md:gap-4 gap-2">
          <div class="flex mx-auto gap-x-2 items-center">
            <button
              class="relative lg:w-[35px] w-[32px] lg:h-[35px] h-[32px] rounded-full bg-white flex items-center justify-center shadow-md"
            >
              <img :src="layout" class="lg:w-[18px] lg:h-[18px] w-[15px] h-[15px]" />
            </button>

            <div
              class="shadow-[0_8px_20px_rgba(0,0,0,0.18)] md:flex items-center m-auto bg-white border-2 h-fit rounded-full gap-1"
            >
              <button
                v-for="t in topTabs"
                :key="t.key"
                class="transition-all duration-300 ease-in-out lg:text-[14px] text-[12px] font-medium px-4 py-1 rounded-full tracking-wide"
                :class="
                  t.key === activeTab
                    ? 'bg-[#1f6fff] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                "
                @click="activeTab = t.key"
              >
                {{ t.label }}
              </button>
            </div>
          </div>

          <!-- Right section -->
          <div class="flex gap-4">
            <!-- Date pill -->
            <div class="flex m-auto gap-3">
              <div
                class="px-2 lg:px-6 py-2 rounded-full bg-white lg:text-[14px] text-[12px] font-medium text-slate-700"
              >
                {{ formattedDate }}
              </div>

              <button
                class="relative lg:w-[35px] w-[32px] lg:h-[35px] h-[32px] p-2 rounded-full bg-[#0b86df] flex items-center justify-center shadow-md"
              >
                <img :src="menue" class="w-[20px] h-[20px]" />
              </button>
            </div>

            <!-- Action group -->
            <div
              class="bg-[#4398e2] rounded-b-[22px] shadow-lg flex items-center gap-x-4 lg:p-5 p-2"
            >
              <button
                v-for="a in topActions"
                :key="a.key"
                class="relative p-1 lg:w-[35px] w-[32px] lg:h-[35px] h-[32px] rounded-full bg-[#0b86df] flex items-center justify-center shadow-md"
              >
                <img :src="a.icon" :class="a.key !== 'ai' ? 'w-[20px] h-[20px]' : ''" />

                <!-- Badge optional -->
                <span
                  v-if="a.badge"
                  class="absolute top-1 right-1 w-[12px] h-[12px] rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center"
                >
                  {{ a.badge }}
                </span>
              </button>
            </div>
          </div>
        </div>
        <DashboardHeader />
      </div>
    </div>
    <div
      class="md:hidden flex flex-wrap gap-1 items-center justify-center sm:gap-4 sm:p-4 pt-4 p-1"
    >
      <button
        class="sm:hidden z-50 w-[30px] h-[30px] p-2 rounded-full bg-[#0b86df] flex items-center justify-center shadow-md"
        @click="emit('toggle-sidebar')"
      >
        <img :src="menue" class="w-[15px] h-[15px]" />
      </button>
      <DashboardHeader />

      <div class="w-full">
        <div
          class="w-fit mx-auto shadow-[0_8px_20px_rgba(0,0,0,0.18)] flex items-center bg-white border-2 h-fit rounded-full gap-1"
        >
          <button
            v-for="t in topTabs"
            :key="t.key"
            class="transition-all duration-300 ease-in-out lg:text-[14px] text-[12px] font-medium px-3 py-1 rounded-full"
            :class="
              t.key === activeTab
                ? 'bg-[#1f6fff] text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900'
            "
            @click="activeTab = t.key"
          >
            {{ t.label }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { topTabs, topActions, menue, layout } from '@/constants/icons'

import DashboardHeader from '@/components/DashboardHeader.vue'

const emit = defineEmits(['toggle-sidebar'])

const activeTab = ref('finance')

const today = ref(new Date())

const formattedDate = computed(() => {
  return today.value.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
})
</script>
