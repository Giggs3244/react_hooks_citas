import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({
  crearCita
}) => {
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });
  const [error, setError] = useState(false);

  const actualizarState = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    e.preventDefault();
    console.log("enviando form");
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);
    cita.id = uuidv4();
    console.log(cita);

    crearCita(cita);

    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    });

  };

  return (
    <>
      <h2>Crear cita</h2>
      { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          value={mascota}
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
        />
        <label>Propietario</label>
        <input
          type="text"
          name="propietario"
          value={propietario}
          className="u-full-width"
          placeholder="Propietario"
          onChange={actualizarState}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={fecha}
          className="u-full-width"
          onChange={actualizarState}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          value={hora}
          className="u-full-width"
          onChange={actualizarState}
        />
        <label>Síntomas</label>
        <textarea
          name="sintomas"
          value={sintomas}
          className="u-full-width"
          onChange={actualizarState}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

Formulario.propsTypes = {
  crearCita: PropTypes.func.isRequired
};

export default Formulario;
