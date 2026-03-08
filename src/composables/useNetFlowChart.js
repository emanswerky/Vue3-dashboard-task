export function useNetFlowChart() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [2.8, 3.3, 3.0, 4.0, 4.8, 5.4, 5.0, 3.6, 0, -2.2, 0, 2.6],
        borderWidth: 3,
        tension: 0.45,
        fill: false, // ✅ لا يوجد أي gradient وردي
        pointRadius: (c) => (c.parsed.y < 0 ? 4 : 3.5),
        pointBackgroundColor: (c) => (c.parsed.y < 0 ? '#ef72b6' : '#ffffff'),
        pointBorderColor: (c) => (c.parsed.y < 0 ? '#ef72b6' : '#3b82f6'),
        pointBorderWidth: 2,
        segment: {
          borderColor: (s) => (s.p0.parsed.y < 0 || s.p1.parsed.y < 0 ? '#ef72b6' : '#3b82f6'),
        },
      },
    ],
  }

  const highlightPlugin = {
    id: 'highlight',
    beforeDatasetsDraw(chart) {
      const { ctx, chartArea, scales } = chart
      if (!chartArea) return

      const x = scales.x
      const y = scales.y

      const oct = x.getPixelForValue(9)
      const sep = x.getPixelForValue(8)
      const nov = x.getPixelForValue(10)
      const dec = x.getPixelForValue(11)

      const start = oct - (oct - sep) / 2
      const end = dec + (dec - nov) / 2
      const zeroY = y.getPixelForValue(0)

      ctx.save()

      // المنطقة الفاتحة يمين
      ctx.fillStyle = 'rgba(147,197,253,0.22)'
      ctx.fillRect(start, chartArea.top, end - start, chartArea.bottom - chartArea.top)

      // الخط الوردي الأفقي على مستوى خط الصفر
      ctx.strokeStyle = 'rgba(239,114,182,0.65)'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(chartArea.left, zeroY)
      ctx.lineTo(chartArea.right, zeroY)
      ctx.stroke()

      // الخط السفلي الرمادي
      ctx.strokeStyle = 'rgba(148,163,184,0.45)'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(chartArea.left, zeroY)
      ctx.lineTo(chartArea.right, zeroY)
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
        border: { display: false },
      },
      y: {
        display: false,
        grid: { display: false },
        border: { display: false },

        // ✅ هذا هو المفتاح: ينزل الخط الوردي لأسفل
        suggestedMin: -2,
        suggestedMax: 9,
      },
    },
  }

  return { chartData, chartOptions, highlightPlugin }
}
