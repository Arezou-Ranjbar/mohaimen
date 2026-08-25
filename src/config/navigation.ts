export type NavigationItem = {
  to: string
  label: string
  icon: string
  end?: boolean
}

export const navigationItems: NavigationItem[] = [
  {
    to: '/',
    label: 'صفحه اصلی',
    icon: '/Home.svg',
    end: true,
  },
  {
    to: '/identity-information',
    label: 'اطلاعات هویتی',
    icon: '/User, Profile.svg',
  },
  {
    to: '/income-status',
    label: 'وضعیت درآمد',
    icon: '/Moneybag.svg',
  },
  {
    to: '/assets-status',
    label: 'وضعیت دارایی‌ها',
    icon: '/Home.svg',
  },
  {
    to: '/monetary-and-credit',
    label: 'پولی و اعتباری',
    icon: '/money-banknote-calculator.svg',
  },
  {
    to: '/accounting-system',
    label: 'نظام حسابی',
    icon: '/invoice-accounting-document.svg',
  },
  {
    to: '/payment-and-refund',
    label: 'پرداخت و استرداد',
    icon: '/Wallet.svg',
  },
  {
    to: '/transactions',
    label: 'معاملات',
    icon: '/invoice-accounting-document.svg',
  },
]
