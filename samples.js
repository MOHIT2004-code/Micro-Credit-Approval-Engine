// Sample applications for quick demos. Each one lands on a different decision.
export const SAMPLES = [
  {
    label: 'Strong applicant',
    values: {
      fullName: 'Asha Verma', age: 29, employmentType: 'salaried', employmentYears: 4,
      monthlyIncome: 85000, existingMonthlyEmi: 5000, loanAmount: 150000, tenureMonths: 24,
      creditHistoryYears: 6, missedPayments: 0, creditUtilisation: 22, recentEnquiries: 1, hasDefault: false,
    },
  },
  {
    label: 'Borderline',
    values: {
      fullName: 'Ravi Kulkarni', age: 34, employmentType: 'self-employed', employmentYears: 2,
      monthlyIncome: 40000, existingMonthlyEmi: 6000, loanAmount: 300000, tenureMonths: 36,
      creditHistoryYears: 3, missedPayments: 1, creditUtilisation: 55, recentEnquiries: 3, hasDefault: false,
    },
  },
  {
    label: 'High risk',
    values: {
      fullName: 'Karan Mehta', age: 24, employmentType: 'gig', employmentYears: 0.5,
      monthlyIncome: 18000, existingMonthlyEmi: 3000, loanAmount: 150000, tenureMonths: 24,
      creditHistoryYears: 1, missedPayments: 3, creditUtilisation: 85, recentEnquiries: 5, hasDefault: true,
    },
  },
];

export const EMPTY = {
  fullName: '', age: '', employmentType: 'salaried', employmentYears: '',
  monthlyIncome: '', existingMonthlyEmi: '', loanAmount: '', tenureMonths: '',
  creditHistoryYears: '', missedPayments: '', creditUtilisation: '', recentEnquiries: '', hasDefault: false,
};
