export function useCashInBankChart() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    datasets: [
      {
        data: [18, 14, 26, 22, 30, 27, 23, 19, 26, 18, 18, 33],
        borderColor: '#3b82f6',
        borderWidth: 3,
        tension: 0.45,
        pointRadius: 4,
        pointHoverRadius: 0,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#3b82f6',
        pointBorderWidth: 2,
        fill: false,
      },
    ],
  }

  const highlightPlugin = {
    id: 'cashInBankHighlight',

    beforeDatasetsDraw(chart) {
      const { ctx, chartArea, scales } = chart
      if (!chartArea) return

      const x = scales.x

      const startX = x.getPixelForValue(9) // Oct
      const endX = x.getPixelForValue(11) // Dec

      ctx.save()

      ctx.fillStyle = 'rgba(147,197,253,0.35)'
      ctx.fillRect(startX, chartArea.top, endX - startX, chartArea.bottom - chartArea.top)

      ctx.strokeStyle = 'rgba(148,163,184,0.7)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(chartArea.left, chartArea.bottom - 2)
      ctx.lineTo(chartArea.right, chartArea.bottom - 2)
      ctx.stroke()

      ctx.restore()
    },
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
      x: {
        display: false,
        grid: { display: false },
      },

      y: {
        display: false,
        grid: { display: false },
        suggestedMin: 10,
        suggestedMax: 36,
      },
    },
  }

  return { chartData, chartOptions, highlightPlugin }
}
