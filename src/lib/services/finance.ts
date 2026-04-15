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
    },
    workingCapital: {
      outstandingCustomerDraws: totalReceived * 0.35,
      committedSupplierReleases: totalSent * 0.55,
      unbilledChangeOrderAllowance: 6400
    },
    alerts: [
      "Riverfront Tower lobby is nearing install while elevator access still needs final confirmation.",
      "Aspen Estates material is at warehouse but should not be released until painter deficiencies close.",
      "Parkland Phase 2 is ready for final bill and holdback tracking."
    ],
    scorecard: [
      { label: "Gross cash in", value: totalReceived, helper: "Builder draws and deposits booked" },
      { label: "Cash out to suppliers", value: totalSent, helper: "Material and supplier release schedule" },
      { label: "Indirect leakage", value: totalExpenses + totalRentals, helper: "Freight, QA, and rental overhead" }
    ],
    collections: sent.map((payment, index) => ({
      project: payment.projectName,
      paidOut: Number(payment.amount || 0),
      cashIn: Number(received[index % received.length]?.amount || 0),
      notes: payment.notes
    }))
      .slice(0, 4)
  };
}

export async function getFinanceById(id: string) {
  return {
    id,
    name: `Finance ${id}`,
    status: "active"
  };
}

export const getfinanceById = getFinanceById;











