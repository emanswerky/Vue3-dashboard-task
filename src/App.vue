<template>
  <section>
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
    <!-- <router-view /> -->
  </section>
</template>

<script setup>
import Dashboard from '/src/pages/Dashboard.vue'
import DashboardLayout from '/src/layouts/DashboardLayout.vue'
</script>
<style scoped></style>
