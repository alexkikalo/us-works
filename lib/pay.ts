/** Full-time equivalent hours/year for rough hourly ↔ salary conversion */
export const FTE_HOURS = 2080;

export type PayType = "hourly" | "salary";

export type PayRange = {
  type: PayType;
  min: number;
  max: number;
};

export function hourlyToAnnual(hourly: number): number {
  return Math.round(hourly * FTE_HOURS);
}

export function annualToHourly(annual: number): number {
  return Math.round((annual / FTE_HOURS) * 100) / 100;
}

export function formatMoney(n: number, as: PayType): string {
  if (as === "hourly") {
    return `$${n % 1 === 0 ? n.toFixed(0) : n.toFixed(2)}/hr`;
  }
  if (n >= 1000) {
    const k = n / 1000;
    return `$${k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)}k`;
  }
  return `$${n.toLocaleString()}`;
}

export function formatPayRange(pay: PayRange, prefer: PayType = pay.type): {
  primary: string;
  secondary: string;
} {
  if (prefer === "hourly") {
    if (pay.type === "hourly") {
      return {
        primary: `${formatMoney(pay.min, "hourly")} – ${formatMoney(pay.max, "hourly")}`,
        secondary: `≈ ${formatMoney(hourlyToAnnual(pay.min), "salary")} – ${formatMoney(hourlyToAnnual(pay.max), "salary")}/yr FTE`,
      };
    }
    return {
      primary: `${formatMoney(annualToHourly(pay.min), "hourly")} – ${formatMoney(annualToHourly(pay.max), "hourly")} (est.)`,
      secondary: `${formatMoney(pay.min, "salary")} – ${formatMoney(pay.max, "salary")}/yr posted`,
    };
  }

  // prefer salary
  if (pay.type === "salary") {
    return {
      primary: `${formatMoney(pay.min, "salary")} – ${formatMoney(pay.max, "salary")}/yr`,
      secondary: `≈ ${formatMoney(annualToHourly(pay.min), "hourly")} – ${formatMoney(annualToHourly(pay.max), "hourly")} FTE`,
    };
  }
  return {
    primary: `≈ ${formatMoney(hourlyToAnnual(pay.min), "salary")} – ${formatMoney(hourlyToAnnual(pay.max), "salary")}/yr FTE`,
    secondary: `${formatMoney(pay.min, "hourly")} – ${formatMoney(pay.max, "hourly")} posted`,
  };
}

/** Midpoint in annual $ for filtering */
export function payMidAnnual(pay: PayRange): number {
  const mid = (pay.min + pay.max) / 2;
  return pay.type === "hourly" ? hourlyToAnnual(mid) : mid;
}
