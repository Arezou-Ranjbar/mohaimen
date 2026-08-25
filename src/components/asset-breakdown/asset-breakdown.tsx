import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from 'chart.js'
import { Link } from 'react-router-dom'
import { Doughnut } from 'react-chartjs-2'
import { assets, totalAssetsValue } from '../../config/assets'
import AssetShareCard from '../asset-share-card/asset-share-card'

ChartJS.register(ArcElement, Tooltip, Legend)

const chartData: ChartData<'doughnut'> = {
  labels: assets.map((asset) => asset.label),
  datasets: [
    {
      data: assets.map((asset) => asset.amount),
      backgroundColor: assets.map((asset) => asset.color),
      borderWidth: 0,
      hoverOffset: 4,
    },
  ],
}

const chartOptions: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: true,
  cutout: '72%',
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
}

export default function AssetBreakdown() {
  return (
    <section className="flex h-full flex-col rounded-xl border border-border bg-surface-secondary p-4">
      <h2 className="mb-4 text-base font-semibold text-right text-foreground">
        تفکیک دارایی‌ها
      </h2>

      <div className="flex min-h-0 flex-1 flex-col gap-4 lg:flex-row lg:items-stretch">
        <div className="relative mx-auto h-52 w-52 shrink-0">
          <Doughnut data={chartData} options={chartOptions} />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-semibold text-foreground">
              {totalAssetsValue}
            </p>
            <p className="mt-1 text-xs text-muted">ارزش کل دارایی‌ها</p>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 lg:h-52 lg:flex-none lg:basis-[min(100%,18rem)]">
          {assets.map((asset) => (
            <AssetShareCard
              key={asset.label}
              icon={asset.icon}
              label={asset.label}
              value={asset.value}
              shareLabel={asset.shareLabel}
              color={asset.color}
            />
          ))}
        </div>
      </div>

      <Link
        to="/assets-status"
        className="mt-4 flex h-10 items-center justify-center rounded-lg bg-primary-500/10 text-sm font-medium text-primary-500 transition-colors hover:bg-primary-500/15"
      >
        جزئیات کامل دارایی‌ها
      </Link>
    </section>
  )
}
