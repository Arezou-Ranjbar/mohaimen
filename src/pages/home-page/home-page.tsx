import AssetBreakdown from '../../components/asset-breakdown/asset-breakdown'
import EconomicStatusSummary from '../../components/economic-status-summary/economic-status-summary'
import IncomeAndCredits from '../../components/income-and-credits/income-and-credits'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <EconomicStatusSummary />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <AssetBreakdown />
        <IncomeAndCredits />
      </div>
    </div>
  )
}
