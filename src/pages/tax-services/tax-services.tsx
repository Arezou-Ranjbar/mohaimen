import { Link } from 'react-router-dom'
import TaxServiceCard from '../../components/tax-service-card/tax-service-card'
import { taxServices } from '../../config/tax-services'

export default function TaxServicesPage() {
  return (
    <section className="rounded-xl border border-border bg-surface-secondary p-4">
      <h1 className="mb-4 text-right text-lg font-semibold text-foreground">
        خدمات مالیاتی
      </h1>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {taxServices.map((service) => (
          <TaxServiceCard
            key={service.to}
            to={service.to}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
      <Link
        to="/"
        className="mt-6 inline-flex text-sm font-medium text-primary-500 hover:text-primary-600"
      >
        بازگشت به صفحه اصلی
      </Link>
    </section>
  )
}
