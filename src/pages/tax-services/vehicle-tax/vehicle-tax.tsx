import ServicePage from '../../../components/service-page/service-page'
import VehicleTaxCalculator from '../../../components/vehicle-tax-calculator/vehicle-tax-calculator'

export default function VehicleTax() {
  return (
    <ServicePage title="مالیات خودرو" description="پرداخت مالیات خودرو">
      <div className="rounded-xl border border-border bg-surface p-4">
        <VehicleTaxCalculator />
      </div>
    </ServicePage>
  )
}
