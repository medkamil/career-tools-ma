export interface CompensationInput {
  monthlySalary: number;
  yearsWorked: number;
  contractType: "CDI" | "CDD";
  leaveDaysRemaining: number;
  noticeServed: boolean;
  dismissalType: "economique" | "disciplinaire" | "faute" | "conventionnel";
}

export interface CompensationResult {
  licenciement: number;
  preavis: number;
  conge: number;
  total: number;
  details: {
    licenciementMonths: number;
    preavisDays: number;
    cddPremium: number;
  };
}

export function calculateCompensation(input: CompensationInput): CompensationResult {
  const { monthlySalary, yearsWorked, contractType, leaveDaysRemaining, dismissalType } = input;

  const dailySalary = monthlySalary / 26;

  // Indemnité de licenciement
  const licenciementMonths = Math.min(yearsWorked * 1.5, 36);
  let licenciementMultiplier = 1;
  if (dismissalType === "faute") licenciementMultiplier = 0;
  else if (dismissalType === "conventionnel") licenciementMultiplier = 0.5;
  const licenciement = licenciementMonths * monthlySalary * licenciementMultiplier;

  // Préavis
  let preavisDays = 0;
  if (contractType === "CDI") {
    if (yearsWorked < 1) preavisDays = 8;
    else if (yearsWorked < 5) preavisDays = 30;
    else if (yearsWorked < 10) preavisDays = 60;
    else preavisDays = 90;
  } else {
    preavisDays = 0;
  }
  const preavis = preavisDays * dailySalary;

  // Congé annuel
  const conge = leaveDaysRemaining * dailySalary;

  // CDD premium (10% of total salary)
  const cddPremium = contractType === "CDD" ? monthlySalary * yearsWorked * 12 * 0.1 : 0;

  const total = licenciement + preavis + conge + cddPremium;

  return {
    licenciement,
    preavis,
    conge,
    total,
    details: { licenciementMonths, preavisDays, cddPremium },
  };
}
