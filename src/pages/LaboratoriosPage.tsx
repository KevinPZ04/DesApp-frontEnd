import '../styles/laboratorio.css';

export default function LaboratorioPage() {

  const laboratorios = [
    {
      id: 1,
      nombre: 'Laboratorio Biología A',
      capacidad: 30,
      edificio: 'Edificio Norte',
      estado: 'Disponible'
    },
    {
      id: 2,
      nombre: 'Laboratorio Química 1',
      capacidad: 25,
      edificio: 'Edificio Central',
      estado: 'Ocupado'
    },
    {
      id: 3,
      nombre: 'Laboratorio Microbiología',
      capacidad: 20,
      edificio: 'Edificio Sur',
      estado: 'Mantenimiento'
    }
  ];

  return (
    <div className="laboratorio-container">

      <div className="laboratorio-header">

        <div>
          <h1 className="laboratorio-title">
            Laboratorios
          </h1>

          <p className="laboratorio-subtitle">
            Gestión y visualización de laboratorios disponibles
          </p>
        </div>

        <button className="nuevo-btn">
          + Nuevo Laboratorio
        </button>

      </div>

      <div className="laboratorio-card">

        <table className="laboratorio-table">

          <thead>
            <tr>
              <th>Laboratorio</th>
              <th>Capacidad</th>
              <th>Edificio</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>

            {laboratorios.map((lab) => (
              <tr key={lab.id}>

                <td>{lab.nombre}</td>

                <td>{lab.capacidad} alumnos</td>

                <td>{lab.edificio}</td>

                <td>

                  {lab.estado === 'Disponible' && (
                    <span className="estado disponible">
                      Disponible
                    </span>
                  )}

                  {lab.estado === 'Ocupado' && (
                    <span className="estado ocupado">
                      Ocupado
                    </span>
                  )}

                  {lab.estado === 'Mantenimiento' && (
                    <span className="estado mantenimiento">
                      Mantenimiento
                    </span>
                  )}

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}