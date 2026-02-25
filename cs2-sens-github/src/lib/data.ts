export const MULTIPLIERS: Record<string, number> = {
  cs2: 1.0,
  valorant: 0.314,
  apex: 1.0,
  overwatch2: 10.6,
  r6: 12.2,
  fortnite: 0.708,
};

export const GAME_NAMES: Record<string, string> = {
  cs2: 'CS2',
  valorant: 'Valorant',
  apex: 'Apex Legends',
  overwatch2: 'Overwatch 2',
  r6: 'Rainbow Six Siege',
  fortnite: 'Fortnite',
};

export interface PairInfo {
  slug: string;
  from: string;
  to: string;
  fromName: string;
  toName: string;
  multiplierFrom: number;
  multiplierTo: number;
}

export const PAIRS: PairInfo[] = [
  { slug: 'cs2-to-valorant', from: 'cs2', to: 'valorant', fromName: 'CS2', toName: 'Valorant', multiplierFrom: 1.0, multiplierTo: 0.314 },
  { slug: 'cs2-to-apex', from: 'cs2', to: 'apex', fromName: 'CS2', toName: 'Apex Legends', multiplierFrom: 1.0, multiplierTo: 1.0 },
  { slug: 'cs2-to-fortnite', from: 'cs2', to: 'fortnite', fromName: 'CS2', toName: 'Fortnite', multiplierFrom: 1.0, multiplierTo: 0.708 },
];

export const DPI_VALUES = [800, 400, 1600, 3200];

export function getSensValues(): number[] {
  const values: number[] = [];
  for (let i = 40; i <= 250; i += 5) {
    values.push(i / 100);
  }
  return values;
}

export const SENS_VALUES = getSensValues();

export function sensToSlug(sens: number): string {
  return sens.toFixed(2).replace('.', '-');
}

export function slugToSens(slug: string): number {
  return parseFloat(slug.replace('-', '.'));
}

export function convertSens(inputSens: number, multiplierFrom: number, multiplierTo: number): number {
  return inputSens * (multiplierTo / multiplierFrom);
}

export function calcEdpi(sens: number, dpi: number): number {
  return sens * dpi;
}

export function calcCm360(sens: number, dpi: number): number {
  return (2.54 * 360) / (sens * dpi * 0.022);
}

export function classifyCm360(cm: number): string {
  if (cm < 25) return 'very high';
  if (cm < 35) return 'high';
  if (cm < 50) return 'medium';
  if (cm < 70) return 'low';
  return 'very low';
}

export function getPairBySlug(slug: string): PairInfo | undefined {
  return PAIRS.find(p => p.slug === slug);
}
