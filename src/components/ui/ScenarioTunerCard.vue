<template>
  <section class="w-full rounded-[28px] bg-white p-5 shadow-sm">
    <h3 class="text-[14px] font-bold text-slate-900">{{ title }}</h3>
    <p class="text-[12px]">{{ subtitle }}</p>

    <!-- Sliders -->
    <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-x-10 gap-y-2">
      <div v-for="s in sliders" :key="s.key">
        <TunerSlider v-model="s.value" :label="s.label" />
      </div>
    </div>

    <!-- Output Snapshot -->
    <div class="mt-2 rounded-[18px] bg-[#0B77D5] p-2">
      <div class="overflow-x-auto">
        <table class="w-full text-[12px] border-separate border-spacing-y-2">
          <thead>
            <tr class="font-semibold">
              <th class="text-left text-[13px] whitespace-nowrap text-white">
                {{ snapshotTitle }}
              </th>

              <th v-for="c in columns" :key="c" class="text-white text-center whitespace-nowrap">
                {{ c }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="r in rows" :key="r.label">
              <td class="opacity-95 whitespace-nowrap">{{ r.label }}</td>

              <td class="text-center whitespace-nowrap">
                {{ r.current }}
              </td>

              <td class="text-center whitespace-nowrap">
                {{ r.adjusted }}
              </td>

              <td class="text-white text-center whitespace-nowrap">
                {{ r.changes }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- AI Text -->
    <div class="mt-2 text-center">
      <div
        class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#32f3e9] via-[#4ac6e6] to-[#dc03f8] text-base tracking-tight"
      >
        {{ aiTitle }}
      </div>
      <p class="mt-2 mb-[20px] whitespace-pre-line text-[12px] leading-5">
        {{ aiText }}
      </p>
    </div>
  </section>
</template>

<script setup>
import TunerSlider from '@/components/ui/TunerSlider.vue'

defineProps({
  title: String,
  subtitle: String,
  sliders: Array,
  snapshotTitle: String,
  columns: Array,
  rows: Array,
  aiTitle: String,
  aiText: String,
})
</script>
