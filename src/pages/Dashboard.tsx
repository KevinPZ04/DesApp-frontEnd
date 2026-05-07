import '../styles/dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard">

      <h1 className="dashboard-title">
        Vista Diaria de Laboratorios
      </h1>

      <p className="dashboard-subtitle">
        Hoy: Domingo 26 de Abril de 2026
      </p>

      {/* Estadísticas */}

      <div className="stats-grid">

        <div className="stat-card">
          <h2>Clases Hoy</h2>
          <p>12</p>
        </div>

        <div className="stat-card">
          <h2>Alumnos Estimados</h2>
          <p>284</p>
        </div>

        <div className="stat-card">
          <h2>Pedidos Pendientes</h2>
          <p>5</p>
        </div>

        <div className="stat-card">
          <h2>Alertas de Stock</h2>
          <p>3</p>
        </div>

      </div>

      {/* Cronograma */}

      <div className="timeline-container">

        <h2 className="timeline-title">
          Cronograma de Laboratorios
        </h2>

        <div className="timeline-item">

          <div className="timeline-hour">
            08:00 - 10:00
          </div>

          <div className="timeline-class">
            Química Orgánica I — Laboratorio Química 1
          </div>

          <div className="status status-active">
            En curso
          </div>

        </div>

        <div className="timeline-item">

          <div className="timeline-hour">
            11:00 - 13:00
          </div>

          <div className="timeline-class">
            Biología Celular — Laboratorio Biología 2
          </div>

          <div className="status status-next">
            Próximo
          </div>

        </div>

      </div>

    </div>
  );
}