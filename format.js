const money = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
export const inr = (n) => money.format(n);

export const DECISIONS = {
  APPROVED: { label: 'Approved', tone: 'good' },
  MANUAL_REVIEW: { label: 'Needs manual review', tone: 'warn' },
  REJECTED: { label: 'Declined', tone: 'bad' },
};
