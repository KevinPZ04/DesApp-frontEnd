import { useState } from 'react';

import PedidoForm from '../components/pedidos/PedidoForm';
import PedidoTable from '../components/pedidos/PedidoTable';

import { pedidosMock } from '../mocks/pedidosMock';
import { laboratoriosMock } from '../mocks/laboratoriosMock';

import type { Pedido } from '../types/pedido';

export default function PedidosPage() {
  const [pedidos, setPedidos] = useState<Pedido[]>(pedidosMock);

  const agregarPedido = (pedido: Pedido) => {
    const laboratorio = laboratoriosMock.find(
      (lab) => lab.id === Number(pedido.laboratorioId)
    );

    setPedidos([
      ...pedidos,
      {
        ...pedido,
        id: Date.now(),
        laboratorioNombre: laboratorio?.nombre || '',
      },
    ]);
  };

  const aceptarPedido = (id: number) => {
    setPedidos((prev) =>
      prev.map((pedido) =>
        pedido.id === id
          ? { ...pedido, estado: 'aceptado' }
          : pedido
      )
    );
  };

  const rechazarPedido = (id: number) => {
    setPedidos((prev) =>
      prev.map((pedido) =>
        pedido.id === id
          ? { ...pedido, estado: 'rechazado' }
          : pedido
      )
    );
  };

  return (
    <div>
      <h1>Pedidos</h1>

      <PedidoForm
        laboratorios={laboratoriosMock}
        onSubmitPedido={agregarPedido}
      />

      <PedidoTable
        pedidos={pedidos}
        aceptarPedido={aceptarPedido}
        rechazarPedido={rechazarPedido}
      />
    </div>
  );
}