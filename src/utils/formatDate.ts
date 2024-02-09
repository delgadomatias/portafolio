export function formatDate(date: Date): string {
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const day = date.getDate().toString().padStart(2, "0");
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} de ${monthNames[monthIndex]} de ${year}`;
}
