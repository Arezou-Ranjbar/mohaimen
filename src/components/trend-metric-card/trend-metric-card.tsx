import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from 'chart.js'
import type { ReactNode } from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)

type TrendMetricCardProps = {
  title: string
  value: string
  unit?: string
  footerLeft: ReactNode
  footerRight: string
  chartData: number[]
}

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
      borderColor: '#1f9f55',
    },
    point: {
      radius: 0,
      hoverRadius: 0,
    },
  },
}

export default function TrendMetricCard({
  title,
  value,
  unit,
  footerLeft,
  footerRight,
  chartData,
}: TrendMetricCardProps) {
  const data: ChartData<'line'> = {
    labels: chartData.map((_, index) => String(index)),
    datasets: [
      {
        data: chartData,
        fill: true,
        backgroundColor: 'rgba(31, 159, 85, 0.12)',
        borderColor: '#1f9f55',
        pointRadius: chartData.map((_, index) =>
          index === Math.floor(chartData.length * 0.65) ? 4 : 0,
        ),
        pointBackgroundColor: '#1f9f55',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
      },
    ],
  }

  return (
    <div className="flex flex-col rounded-xl border border-border bg-surface p-4">
      <p className="text-sm text-right text-muted">{title}</p>
      <p className="mt-1 flex justify-end items-baseline gap-1 text-xl font-semibold text-foreground">
        <span>{value}</span>
        {unit ? <span className="text-sm font-medium text-muted">{unit}</span> : null}
      </p>

      <div className="mt-3 h-20 w-full">
        <Line data={data} options={chartOptions} />
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 text-sm">
        <div className="text-primary-500">{footerLeft}</div>
        <span className="text-muted">{footerRight}</span>
      </div>
    </div>
  )
}
