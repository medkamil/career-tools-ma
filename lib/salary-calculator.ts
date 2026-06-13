export interface SalaryBreakdown {
  gross: number;
  cnss: number;
  amo: number;
  socialTotal: number;
  netBeforeExpenses: number;
  professionalExpenses: number;
  netTaxable: number;
  netTaxableAnnual: number;
  irAnnual: number;
  irMonthly: number;
  netSalary: number;
}

const CNSS_RATE = 0.0674;
const CNSS_CAP = 6000;
const AMO_RATE = 0.0226;
const PRO_EXPENSES_RATE = 0.20;
const PRO_EXPENSES_CAP_MONTHLY = 2500;
const MONTHS = 12;

const TAX_BRACKETS: { min: number; max: number | null; rate: number; deduction: number }[] = [
  { min: 0, max: 40000, rate: 0, deduction: 0 },
  { min: 40001, max: 60000, rate: 0.10, deduction: 4000 },
  { min: 60001, max: 80000, rate: 0.20, deduction: 10000 },
  { min: 80001, max: 100000, rate: 0.30, deduction: 18000 },
  { min: 100001, max: 180000, rate: 0.34, deduction: 22000 },
  { min: 180001, max: null, rate: 0.38, deduction: 29200 },
];

function computeCNSS(gross: number): number {
  const capped = Math.min(gross, CNSS_CAP);
  return capped * CNSS_RATE;
}

function computeAMO(gross: number): number {
  return gross * AMO_RATE;
}

function computeProfessionalExpenses(netBeforeExpenses: number): number {
  const calculated = netBeforeExpenses * PRO_EXPENSES_RATE;
  return Math.min(calculated, PRO_EXPENSES_CAP_MONTHLY);
}

function computeAnnualIR(netTaxableAnnual: number): number {
  for (const bracket of TAX_BRACKETS) {
    if (netTaxableAnnual > bracket.min && (bracket.max === null || netTaxableAnnual <= bracket.max)) {
      const taxableInBracket = netTaxableAnnual - bracket.min;
      const bracketTax = taxableInBracket * bracket.rate;
      return Math.max(0, bracketTax);
    }
  }
  const topBracket = TAX_BRACKETS[TAX_BRACKETS.length - 1];
  const taxableAbove = netTaxableAnnual - topBracket.min;
  return Math.max(0, taxableAbove * topBracket.rate);
}

export function calculateSalary(gross: number): SalaryBreakdown {
  const cnss = computeCNSS(gross);
  const amo = computeAMO(gross);
  const socialTotal = cnss + amo;
  const netBeforeExpenses = gross - socialTotal;
  const professionalExpenses = computeProfessionalExpenses(netBeforeExpenses);
  const netTaxable = netBeforeExpenses - professionalExpenses;
  const netTaxableAnnual = netTaxable * MONTHS;
  const irAnnual = computeAnnualIR(netTaxableAnnual);
  const irMonthly = irAnnual / MONTHS;
  const netSalary = gross - socialTotal - irMonthly;

  return {
    gross: round(gross),
    cnss: round(cnss),
    amo: round(amo),
    socialTotal: round(socialTotal),
    netBeforeExpenses: round(netBeforeExpenses),
    professionalExpenses: round(professionalExpenses),
    netTaxable: round(netTaxable),
    netTaxableAnnual: round(netTaxableAnnual),
    irAnnual: round(irAnnual),
    irMonthly: round(irMonthly),
    netSalary: round(netSalary),
  };
}

function round(value: number): number {
  return Math.round(value * 100) / 100;
}

export function formatMAD(value: number): string {
  return new Intl.NumberFormat("ar-MA", {
    style: "currency",
    currency: "MAD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatPercent(value: number, total: number): number {
  if (total === 0) return 0;
  return round((value / total) * 100);
}
