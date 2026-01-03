/**
 * Formatea una fecha en formato día/mes/año
 * @param date - Fecha a formatear (string o Date)
 * @returns Fecha formateada como dd/mm/yyyy
 */
export function formatDate(date: string | Date | null | undefined): string {
  if (!date) return "";

  const d = typeof date === "string" ? new Date(date) : date;

  // Usar toLocaleDateString con locale español
  return d.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
