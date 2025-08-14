import { differenceInHours, format, formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export function formatFechaRelativa(fecha: Date): string {
  const ahora = new Date();
  const diffHoras = differenceInHours(ahora, fecha);

  if (diffHoras < 24) {
    return formatDistanceToNow(fecha, { locale: es, addSuffix: true });
  } else {
    return format(fecha, 'dd/MM/yyyy');
  }
}
