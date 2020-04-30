import React from "react";
import PropTypes from "prop-types";

const Cita = ({
  cita: { id, mascota, propietario, fecha, hora, sintomas },
  eliminarCita,
}) => {
  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
      </p>
      <p>
        Propietario: <span>{propietario}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Hora: <span>{hora}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>

      <button
        className="button eliminar u-full-width"
        onClick={() => eliminarCita(id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};

Cita.propsTypes = {
  cita: PropTypes.shape({
    id: PropTypes.string.isRequired,
    mascota: PropTypes.string.isRequired,
    propietario: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    sintomas: PropTypes.string.isRequired,
  }),
  eliminarCita: PropTypes.func.isRequired,
};

export default Cita;
