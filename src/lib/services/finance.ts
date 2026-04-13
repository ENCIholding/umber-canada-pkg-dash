import { getPaymentsSentList } from './payments-sent';
import { getPaymentsReceivedList } from './payments-received';
import { getExpensesList } from './expenses';
import { getRentalsList } from './rentals';

export async function getFinanceSummary() {
  const sent = await getPaymentsSentList();
  const received = await getPaymentsReceivedList();
  const expenses = await getExpensesList();
  const rentals = await getRentalsList();

  const totalSent = sent.reduce((sum, x) => sum + Number(x.amount || 0), 0);
  const totalReceived = received.reduce((sum, x) => sum + Number(x.amount || 0), 0);
  const totalExpenses = expenses.reduce((sum, x) => sum + Number(x.amount || 0), 0);
  const totalRentals = rentals.reduce((sum, x) => sum + Number(x.totalCost || 0), 0);

  return {
    totals: {
      paymentsSent: totalSent,
      paymentsReceived: totalReceived,
      expenses: totalExpenses,
      rentals: totalRentals,
      netCashFlow: totalReceived - totalSent - totalExpenses - totalRentals
    },
    counts: {
      paymentsSent: sent.length,
      paymentsReceived: received.length,
      expenses: expenses.length,
      rentals: rentals.length
    }
  };
}







