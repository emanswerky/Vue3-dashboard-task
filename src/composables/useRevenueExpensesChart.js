export function useRevenueExpensesChart() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [220, 640, 720, 560, 300, 220, 280, 260, 360, 640, 820, 760],
        borderRadius: 14,
        barThickness: 14,
        backgroundColor: '#2563eb',
      },
      {
        data: [180, 600, 880, 720, 760, 420, 520, 600, 760, 860, 920, 780],
        borderRadius: 14,
        barThickness: 14,
        backgroundColor: '#ec4899',
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
      x: {
        grid: { display: false },
        ticks: { color: '#64748b' },
      },
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(15,23,42,0.08)' },
        ticks: { color: '#64748b' },
        border: { display: false },
      },
    },
  }

  return { chartData, chartOptions }
}
