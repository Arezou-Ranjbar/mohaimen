import TrendMetricCard from '../trend-metric-card/trend-metric-card'

const incomeChart = [12, 18, 15, 22, 19, 28, 24, 32, 29, 36, 34, 40]
const creditChart = [20, 24, 18, 26, 22, 30, 27, 33, 29, 35, 31, 38]

export default function IncomeAndCredits() {
  return (
    <section className="flex h-fit flex-col gap-2 rounded-xl border border-border bg-surface-secondary p-3">
      <h2 className="text-sm font-semibold text-foreground">
        درآمد و اعتبارات
      </h2>

      <div className="flex flex-col gap-2">
        <TrendMetricCard
          title="کل درآمد سالانه"
          value="۲۴,۰۰۰,۰۰۰,۰۰۰"
          unit="ریال"
          chartData={incomeChart}
          footerLeft={
            <span className="inline-flex items-center gap-1 font-medium">
              <span aria-hidden="true">↑</span>
              ۱۲.۳ درصد
            </span>
          }
          footerRight="رشد نسبت به سال قبل"
        />

        <TrendMetricCard
          title="تسهیلات بانکی"
          value="۲۴,۰۰۰,۰۰۰,۰۰۰"
          unit="ریال"
          chartData={creditChart}
          footerLeft={
            <span className="font-medium text-foreground">
              ۱,۳۰۰,۰۰۰,۰۰۰ ریال
            </span>
          }
          footerRight="مانده بدهی"
        />
      </div>
    </section>
  )
}
