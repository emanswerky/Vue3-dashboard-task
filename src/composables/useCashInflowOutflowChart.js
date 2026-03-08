export function useCashInflowOutflowChart() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    datasets: [
      {
        label: 'Inflow',
        data: [24, 14, 20, 18, 19, 26, 19, 22, 27, 23, 24, 31],
        borderColor: '#fff',
        borderWidth: 3,
        tension: 0.45,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 0,
        backgroundColor: (context) => {
          const { chart } = context
          const { ctx, chartArea } = chart
          if (!chartArea) return 'rgba(59,130,246,0.25)'

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom)
          gradient.addColorStop(0, 'rgba(59,130,246,0.6)')
          gradient.addColorStop(0.5, 'rgba(59,130,246,0.25)')
          gradient.addColorStop(1, 'rgba(59,130,246,0.05)')
          return gradient
        },
      },

      {
        label: 'Outflow',
        data: [18, 6, 12, 7, 7, 16, 7, 12, 16, 11, 13, 16],
        borderColor: '#fff',
        borderWidth: 3,
        tension: 0.45,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 0,
        backgroundColor: (context) => {
          const { chart } = context
          const { ctx, chartArea } = chart
          if (!chartArea) return 'rgba(244,114,182,0.25)'

          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom)
          gradient.addColorStop(0, 'rgba(244,114,182,0.02)')
          gradient.addColorStop(0.6, 'rgba(244,114,182,0.25)')
          gradient.addColorStop(1, 'rgba(244,114,182,0.7)')
          return gradient
        },
      },
    ],
  }

  const highlightPlugin = {
    id: 'highlightRight',
    beforeDatasetsDraw(chart) {
      const { ctx, chartArea, scales } = chart
      if (!chartArea) return

      const x = scales.x
      const startX = x.getPixelForValue(9)
      const endX = x.getPixelForValue(11)

      ctx.save()
      ctx.fillStyle = 'rgba(147,197,253,0.35)'
      ctx.fillRect(startX, chartArea.top, endX - startX + 40, chartArea.bottom - chartArea.top)
      ctx.restore()
    },
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#64748b' },
      },
      y: {
        display: false,
        grid: { display: false },
      },
    },
  }

  return { chartData, chartOptions, highlightPlugin }
}
