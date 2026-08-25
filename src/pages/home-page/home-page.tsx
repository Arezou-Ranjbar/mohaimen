import AssetBreakdown from '../../components/asset-breakdown/asset-breakdown'
import EconomicStatusSummary from '../../components/economic-status-summary/economic-status-summary'
import IncomeAndCredits from '../../components/income-and-credits/income-and-credits'

export default function HomePage() {
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <EconomicStatusSummary />

      <div className="grid min-w-0 grid-cols-1 items-stretch gap-4 xl:h-[25rem] xl:max-h-[25rem] xl:grid-cols-2">
        <div className="min-w-0 xl:h-full">
          <AssetBreakdown />
        </div>
        <div className="min-w-0 xl:h-full">
          <IncomeAndCredits />
        </div>
      </div>
    </div>
  )
}
