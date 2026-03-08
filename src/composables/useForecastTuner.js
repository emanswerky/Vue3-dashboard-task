import { reactive, computed } from 'vue'

export function useForecastTuner() {
  const sliders = reactive({
    revenueGrowth: 55,
    cosPercent: 45,
    opexChange: 60,
    seasonality: 50,
    pipelineConfidence: 52,
  })

  const output = computed(() => [
    {
      label: 'Gross Profit',
      current: '1,250,000',
      adjusted: '1,250,000',
      change: '–/–',
    },
    {
      label: 'Net Profit',
      current: '650,000',
      adjusted: '650,000',
      change: '–/–',
    },
    {
      label: 'OpEx',
      current: '600,000',
      adjusted: '600,000',
      change: '–/–',
    },
    {
      label: 'Gross Margin',
      current: '52%',
      adjusted: '52%',
      change: '–/–',
    },
  ])

  return { sliders, output }
}
