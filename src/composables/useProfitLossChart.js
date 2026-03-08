export function useProfitLossChart() {
  const raw = [-7, -3, -6, -2, -12, 2, 6, 5, 9]

  const chartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    datasets: [
      {
        data: raw.map((v) => (v < 0 ? v : null)),
        borderColor: '#ec4899',
        backgroundColor: (ctx) => makePinkGradient(ctx),
        borderWidth: 3,
        tension: 0.45,
        pointRadius: 4,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#ec4899',
        pointBorderWidth: 2,
        fill: { target: { value: 0 } },
      },
      {
        data: raw.map((v) => (v > 0 ? v : null)),
        borderColor: '#2563eb',
        backgroundColor: (ctx) => makeBlueGradient(ctx),
        borderWidth: 3,
        stepped: 'after',
        pointRadius: 0,
        fill: { target: { value: 0 } },
      },
      {
        data: raw.map(() => 0),
        borderColor: 'rgba(148,163,184,0.75)',
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false, grid: { display: false } },
      y: { display: false, grid: { display: false }, suggestedMin: -14, suggestedMax: 12 },
    },
  }

  return { chartData, chartOptions }
}

function makeBlueGradient({ chart }) {
  const { ctx, chartArea } = chart
  if (!chartArea) return 'rgba(37,99,235,0.25)'

  const g = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom)
  g.addColorStop(0, 'rgba(37,99,235,0.55)')
  g.addColorStop(0.55, 'rgba(37,99,235,0.20)')
  g.addColorStop(1, 'rgba(37,99,235,0)')
  return g
}

function makePinkGradient({ chart }) {
  const { ctx, chartArea } = chart
  if (!chartArea) return 'rgba(236,72,153,0.25)'

  const g = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom)
  g.addColorStop(0, 'rgba(236,72,153,0)')
  g.addColorStop(0.55, 'rgba(236,72,153,0.18)')
  g.addColorStop(1, 'rgba(236,72,153,0.55)')
  return g
}
