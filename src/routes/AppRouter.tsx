import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InventarioPage from '../pages/InventarioPage';
import Dashboard from '../pages/Dashboard';
import LaboratoriosPage from '../pages/LaboratoriosPage';
import PedidosPage from '../pages/PedidosPage';
import AgendaPage from '../pages/AgendaPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/laboratorios" element={<LaboratoriosPage />} />
        <Route path="/pedidos" element={<PedidosPage />} />
        <Route path="/agenda" element={<AgendaPage />} />
        <Route path="/inventario" element={<InventarioPage />} />
      </Routes>
    </BrowserRouter>
  );
}