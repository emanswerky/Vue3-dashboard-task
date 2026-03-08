import { ref } from 'vue'

export function useKpiCard() {
  const kpis = ref([
    {
      title: 'Revenue',
      value: 1400000,
      delta: '+4%',
      deltaType: 'positive',
      footer: 'vs previous month',
    },
    {
      title: 'Gross Profit',
      value: 1250000,
      delta: '+14%',
      deltaType: 'positive',
      footer: 'vs previous month',
    },
    {
      title: 'Op. Expenses',
      value: 600000,
      delta: '+34%',
      deltaType: 'positive',
      footer: 'vs previous month',
    },
    {
      title: 'Net Income',
      value: 650000,
      delta: '-25%',
      deltaType: 'negative',
      footer: 'vs previous month',
    },
    {
      title: 'Cash in Bank',
      value: 1700000,
      delta: '-25%',
      deltaType: 'negative',
      footer: 'vs previous month',
    },
    {
      title: 'Burn Rate',
      value: 750000,
      delta: '-15%',
      deltaType: 'negative',
      footer: 'vs previous month',
    },
    {
      title: 'Runway',
      value: 4.1,
      secondaryValue: 6.5,
      secondaryLabel: 'Net',
      primaryLabel: 'Gross',
      footer: null,
    },
  ])

  return { kpis }
}
