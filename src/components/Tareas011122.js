import React from "react";
import "./Tareas.css";
import { csv } from '../data/csv'

export const dias = {
  "lunes":      "01/06/22",
  "martes":     "01/07/22",
  "miercoles":  "01/08/22",
  "jueves":     "01/09/22",
  "viernes":    "01/10/22",
  "sabado":     "01/11/22",
  "domingo":    "01/12/22",
}

const { lunes, martes, miercoles, jueves, viernes, sabado, domingo } = dias

const tareas = csv

// console.log(tareas)
const fechaFin = 'Campo personalizado (Fecha Inicio Programada)'

// const tareasObj = {...tareas}

// Busqueda por fecha
let find = tareas.filter( record => record['Campo personalizado (Fecha Inicio Programada)'].includes(lunes))

export const Tareas = (dia) => {
  return (
    <>
      <div className="stock-container">
        {find.map((data, key) => {
          return (
            <div key={key} className="tarea" >
              { data.Resumen } <br /><br />
              { data.Estado } <br /><br />
              { data[fechaFin].slice(0,8) } <br /><br />
              { data.Responsable.toUpperCase() } <br /><br />
            </div>  
          );
        })}
      </div>
    </>
  );
};