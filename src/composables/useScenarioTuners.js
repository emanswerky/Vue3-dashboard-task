import { reactive } from 'vue'

export function useScenarioTuners() {
  const forecast = reactive({
    title: 'Forecast & Budget Tuner',
    subtitle: 'Adjust revenue, COS, and OPEX assumptions to see profit scenarios live.',
    sliders: [
      { key: 'revenueGrowth', label: 'Revenue Growth:', value: 35 },
      { key: 'cosPercent', label: 'COS % of Revenue', value: 55 },
      { key: 'opexChange', label: 'OpEx Change', value: 70 },
      { key: 'seasonality', label: 'Seasonality:', value: 60 },
      { key: 'pipelineConfidence', label: 'Pipeline Confidence', value: 50 },
    ],
    snapshotTitle: 'Output Snapshot:',
    columns: ['Current', 'Adjusted', 'Changes'],
    rows: [
      { label: 'Gross Profit:', current: '1,250,000', adjusted: '1,250,000', changes: '–/–' },
      { label: 'Net Profit:', current: '650,000', adjusted: '650,000', changes: '–/–' },
      { label: 'OpEx:', current: '600,000', adjusted: '600,000', changes: '–/–' },
      { label: 'Gross Margin:', current: '52%', adjusted: '52%', changes: '–/–' },
    ],
    aiTitle: 'Ledgers AI',
    aiText:
      '“These adjustments show how changes in revenue, costs, and spending can influence your profit.\nRaising revenue or lowering expenses generally improves your margins and supports healthier monthly results.”',
  })

  const cashflow = reactive({
    title: 'Cash Flow Scenario Tuner',
    subtitle:
      'Adjust inflow, outflow, and operational levers to see instant impact on runway and cash position.',
    sliders: [
      { key: 'inflowSensitivity', label: 'Inflow Sensitivity', value: 30 },
      { key: 'opexTightening', label: 'OpEx Tightening', value: 55 },
      { key: 'paymentTerms', label: 'Payment Terms', value: 75 },
    ],
    snapshotTitle: 'Output Snapshot:',
    columns: ['Current', 'Adjusted', 'Changes'],
    rows: [
      { label: 'Inflow', current: '1,420,000', adjusted: '1,420,000', changes: '–/–' },
      { label: 'Outflow', current: '540,000', adjusted: '540,000', changes: '–/–' },
      { label: 'Net Cash Flow', current: '880,000', adjusted: '880,000', changes: '–/–' },
      { label: 'Cash Balance', current: '58%', adjusted: '58%', changes: '–/–' },
    ],
    aiTitle: 'Ledgers AI',
    aiText:
      '“Adjusting inflow, outflow, and payment timing helps you see how your cash balance may shift month to month.\nHigher inflows or lighter spending usually support a stronger cash position.”',
  })

  return { forecast, cashflow }
}
