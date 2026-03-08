<template>
  <div class="md:m-3 m-0 md:ml-0 bg-slate-100 flex">
    <Sidebar :open="sidebarOpen" />

    <div class="flex flex-col lg:pl-[84px] sm:pl-[70px] p-[0px] w-full">
      <div class="">
        <TopNavbar @toggle-sidebar="toggleSidebar" />
      </div>
      <main class="sm:p-4 p-2">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Sidebar from '@/components/Sidebar.vue'
import TopNavbar from '@/components/TopNav.vue'
const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>
