import { Route, Routes } from 'react-router-dom'
import AccountingSystem from './pages/accounting-system/accounting-system'
import AssetsStatus from './pages/assets-status/assets-status'
import HomePage from './pages/home-page/home-page'
import IdentityInformation from './pages/identity-information/identity-information'
import IncomeStatus from './pages/income-status/income-status'
import MonetaryAndCredit from './pages/monetary-and-credit/monetary-and-credit'
import PaymentAndRefund from './pages/payment-and-refund/payment-and-refund'
import Transactions from './pages/transactions/transactions'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/identity-information" element={<IdentityInformation />} />
      <Route path="/income-status" element={<IncomeStatus />} />
      <Route path="/assets-status" element={<AssetsStatus />} />
      <Route path="/monetary-and-credit" element={<MonetaryAndCredit />} />
      <Route path="/accounting-system" element={<AccountingSystem />} />
      <Route path="/payment-and-refund" element={<PaymentAndRefund />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
  )
}
