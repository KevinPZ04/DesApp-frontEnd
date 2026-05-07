import AgendaDiaria from '../components/agenda/AgendaDiaria';
import { pedidosMock } from '../mocks/pedidosMock';

export default function AgendaPage() {
  return (
    <div>
      <AgendaDiaria pedidos={pedidosMock} />
    </div>
  );
}