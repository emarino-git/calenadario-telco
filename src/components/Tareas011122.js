import React from "react";
import "./Tareas.css";
// import CSVReader from "./CSVReader";
import { csv } from '../data/csv'
const CSVReader = csv

const tareas = CSVReader
// console.log(tareas)
const fechaFin = 'Campo personalizado (Fecha Inicio Programada)'

// const tareasObj = {...tareas}

console.log(tareas)

// Busqueda por fecha
let fecha = '10/05/22'
let find = tareas.filter( record => record['Campo personalizado (Fecha Inicio Programada)'].includes(fecha))


export const Tareas = () => {
  return (
    <>
      <div className="stock-container">
        {find.map((data, key) => {
          return (
            <div key={key} >
              { data.Resumen } <br /><br />
              { data.Estado } <br /><br />
              { data[fechaFin] } <br /><br />
              -----
            </div>  
          );
        })}
      </div>
    </>
  );
};