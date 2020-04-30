import React from "react";
import Cita from "./Cita";

const ListadoCitas = ({ titulo, citas, eliminarCita }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      {citas.map((cita) => (
        <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
      ))}
    </div>
  );
};

export default ListadoCitas;
