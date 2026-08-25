import { useState } from 'react'
import ActionCard from '../action-card/action-card'
import Modal from '../modal/modal'

type ServiceKey = 'vehicle-tax' | 'self-declaration' | null

const services = [
  {
    key: 'vehicle-tax' as const,
    icon: '/car-open%20doors.svg',
    title: 'مالیات بر نقل و انتقال خودرو',
    description: 'پرداخت آنی نقل و انتقال انواع خودرو',
    buttonLabel: 'مالیات رو با تخفیف پرداخت کن',
    buttonVariant: 'soft' as const,
  },
  {
    key: 'self-declaration' as const,
    icon: '/car-open%20doors.svg',
    title: 'خوداظهاری',
    description: ' دارایی کارپوشه خود را تکمیل کنید',
    buttonLabel: 'خود اظهاری',
    buttonVariant: 'solid' as const,
  },
]

export default function ServiceActions() {
  const [activeService, setActiveService] = useState<ServiceKey>(null)

  const activeTitle =
    services.find((service) => service.key === activeService)?.title ?? ''

  return (
    <>
      <section className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
        {services.map((service) => (
          <ActionCard
            key={service.key}
            icon={service.icon}
            title={service.title}
            description={service.description}
            buttonLabel={service.buttonLabel}
            buttonVariant={service.buttonVariant}
            onAction={() => setActiveService(service.key)}
          />
        ))}
      </section>

      <Modal
        open={activeService !== null}
        title={activeTitle}
        onClose={() => setActiveService(null)}
      />
    </>
  )
}
