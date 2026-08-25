export type AssetItem = {
  icon: string
  label: string
  value: string
  shareLabel: string
  color: string
  amount: number
}

export const assetColors = {
  realEstate: '#5E72E4',
  vehicle: '#FFB848',
  stocks: '#2DCE89',
}

export const assets: AssetItem[] = [
  {
    icon: '/Wallet, Money.svg',
    label: 'املاک',
    value: '۴,۲۰۰,۰۰۰,۰۰۰',
    shareLabel: '۶۷.۷٪ از کل دارایی‌ها',
    color: assetColors.realEstate,
    amount: 4200000000,
  },
  {
    icon: '/car-open%20doors.svg',
    label: 'وسیله نقلیه',
    value: '۱,۲۰۰,۰۰۰,۰۰۰',
    shareLabel: '۱۹.۴٪ از کل دارایی‌ها',
    color: assetColors.vehicle,
    amount: 1200000000,
  },
  {
    icon: '/Business, Chart.svg',
    label: 'ارزش بورس',
    value: '۸۰۰,۰۰۰,۰۰۰',
    shareLabel: '۱۲.۹٪ از کل دارایی‌ها',
    color: assetColors.stocks,
    amount: 800000000,
  },
]

export const totalAssetsValue = '۶,۲۰۰,۰۰۰,۰۰۰'
