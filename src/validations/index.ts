export function isValidCanadianPostalCode(value: string): boolean {
  if (!value) return false;
  const cleaned = value.toUpperCase().replace(/\s+/g, "");
  return /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z]\d[ABCEGHJ-NPRSTV-Z]\d$/.test(cleaned);
}

export function isValidProvinceCode(value: string): boolean {
  if (!value) return false;
  const provinces = [
    "AB","BC","MB","NB","NL","NS","NT","NU","ON","PE","QC","SK","YT"
  ];
  return provinces.includes(value.toUpperCase());
}

export function isValidPhone(value: string): boolean {
  if (!value) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length === 10;
}

export function isValidEmail(value: string): boolean {
  if (!value) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isNonEmpty(value: string | null | undefined): boolean {
  return !!value && value.trim().length > 0;
}

export function isValidISODate(value: string): boolean {
  if (!value) return false;
  const d = new Date(value);
  return !isNaN(d.getTime());
}










