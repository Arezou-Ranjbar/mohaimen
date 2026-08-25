export type TaxServiceItem = {
  to: string
  title: string
  description: string
  icon: string
}

export const taxServices: TaxServiceItem[] = [
  {
    to: '/tax-services/rental-property',
    title: 'ملک اجاره‌ای',
    description: 'پرداخت مالیات اجاره',
    icon: '/home-house-line.svg',
  },
  {
    to: '/tax-services/empty-house',
    title: 'خانه خالی',
    description: 'پرداخت مالیات خانه خالی',
    icon: '/home-more-menu.svg',
  },
  {
    to: '/tax-services/luxury-house',
    title: 'خانه لوکس',
    description: 'پرداخت مالیات خانه لوکس',
    icon: '/home-more-menu.svg',
  },
  {
    to: '/tax-services/inheritance',
    title: 'ارث',
    description: 'پرداخت مالیات بر ارث',
    icon: '/Money, Banknote.svg',
  },
  {
    to: '/tax-services/vehicle-tax',
    title: 'مالیات خودرو',
    description: 'پرداخت مالیات خودرو',
    icon: '/document-car.svg',
  },
  {
    to: '/tax-services/exit-fee',
    title: 'عوارض خروج از کشور',
    description: 'پرداخت عوارض خروج',
    icon: '/space-shuttle.svg',
  },
]
