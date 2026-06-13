export interface SalaryBreakdown {
  gross: number;
  cnss: number;
  amo: number;
  socialTotal: number;
  netBeforeExpenses: number;
  professionalExpenses: number;
  netTaxable: number;
  ir: number;
  netSalary: number;
}

const CNSS_RATE = 0.0674;
const CNSS_CAP = 6000;
const AMO_RATE = 0.0226;
const PRO_EXPENSES_RATE = 0.20;
const PRO_EXPENSES_CAP = 2500;

const TAX_BRACKETS: { min: number; max: number | null; rate: number; deduction: number }[] = [
  { min: 0, max: 3333, rate: 0, deduction: 0 },
  { min: 3334, max: 5000, rate: 0.10, deduction: 333 },
  { min: 5001, max: 6667, rate: 0.20, deduction: 833 },
  { min: 6668, max: 8333, rate: 0.30, deduction: 1500 },
  { min: 8334, max: 15000, rate: 0.34, deduction: 1833 },
  { min: 15001, max: null, rate: 0.38, deduction: 2433 },
];

function computeCNSS(gross: number): number {
  return Math.min(gross, CNSS_CAP) * CNSS_RATE;
}

function computeAMO(gross: number): number {
  return gross * AMO_RATE;
}

function computeProfessionalExpenses(value: number): number {
  return Math.min(value * PRO_EXPENSES_RATE, PRO_EXPENSES_CAP);
}

function computeIR(netTaxable: number): number {
  for (const b of TAX_BRACKETS) {
    if (netTaxable >= b.min && (b.max === null || netTaxable <= b.max)) {
      return Math.max(0, netTaxable * b.rate - b.deduction);
    }
  }
  const last = TAX_BRACKETS[TAX_BRACKETS.length - 1];
  return Math.max(0, netTaxable * last.rate - last.deduction);
}

export function calculateNetSalary(gross: number): SalaryBreakdown {
  const cnss = round(computeCNSS(gross));
  const amo = round(computeAMO(gross));
  const socialTotal = round(cnss + amo);
  const netBeforeExpenses = round(gross - socialTotal);
  const professionalExpenses = round(computeProfessionalExpenses(netBeforeExpenses));
  const netTaxable = round(netBeforeExpenses - professionalExpenses);
  const ir = round(computeIR(netTaxable));
  const netSalary = round(gross - socialTotal - ir);

  return { gross, cnss, amo, socialTotal, netBeforeExpenses, professionalExpenses, netTaxable, ir, netSalary };
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}

export function formatMAD(value: number): string {
  return new Intl.NumberFormat("ar-MA", { style: "currency", currency: "MAD", minimumFractionDigits: 2 }).format(value);
}

export function percentOf(value: number, total: number): number {
  return total === 0 ? 0 : round((value / total) * 100);
}
