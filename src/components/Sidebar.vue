<template>
  <aside
    class="fixed left-0 top-0 h-screen lg:w-[84px] w-[64px] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:translate-x-0 transition-transform duration-300"
    :class="open ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="flex h-full flex-col items-center py-6">
      <!-- Top spacing -->
      <div class="w-[60px] h-[60px]">
        <img :src="logo" class="" />
      </div>

      <!-- Main items -->
      <nav class="mt-6 flex flex-col items-center justify-center gap-4 h-full">
        <div class="md:hidden flex flex-col items-center justify-center gap-4">
          <button class="relative" v-for="a in topActions" :key="a.key">
            <div
              class="p-1 w-[25px] h-[25px] rounded-full bg-black flex items-center justify-center shadow-md"
            >
              <img :src="a.icon" :class="a.key !== 'ai' ? 'w-[20px] h-[20px]' : ''" />
              <span
                v-if="a.badge"
                class="absolute top-1 right-1 w-[10px] h-[10px] rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center"
              >
                {{ a.badge }}
              </span>
            </div>
          </button>
        </div>
        <button v-for="a in sidebarItems" :key="a.key">
          <div
            v-if="a.key === 'layout'"
            class="bg-black md:bg-[#48a5e7] flex items-center justify-center rounded-full w-[30px] h-[30px]"
          >
            <img :src="a.icon" class="w-[16px] h-[16px]" />
          </div>

          <div v-else-if="a.key === 'hr'" class="w-[30px] h-[30px]">
            <img :src="a.icon" class="w-full h-full" />
          </div>
          <div v-else class="w-[20px] h-[20px]">
            <img :src="a.icon" class="w-full h-full" />
          </div>
        </button>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { sidebarItems, logo } from '@/constants/icons'
import { topActions } from '@/constants/icons'

defineProps({
  open: Boolean,
})
</script>
