import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoCitas from "./components/ListadoCitas";

function App() {
  console.log('Holi APP');
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales);

  // En este caso se utiliza para realizar operaciones cuando el state cambia
  // Se utiliza para guardar en local storage las citas, cuando
  // se modifique el estado citas, por eso se tiene como dependencia en el useEffect ([citas])
  useEffect(() => {
    console.log("useEffect");
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  const crearCita = (cita) => {
    console.log(cita);
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    console.log(id);
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  console.log(citas.length);
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <>
      <h1>Administración de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}></Formulario>
          </div>
          <div className="one-half column">
            <ListadoCitas
              titulo={titulo}
              citas={citas}
              eliminarCita={eliminarCita}
            ></ListadoCitas>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
