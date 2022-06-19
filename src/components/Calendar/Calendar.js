import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment"
import './Calendar.css'
import { csv } from '../../data/csv'
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'

require("moment/locale/es.js")


const tareas = csv
const fechaInicioProg = 'Campo personalizado (Fecha Inicio Programada)'
const fechaFinProg = 'Campo personalizado (Fecha Fin Programada)'

let tareasFilter = tareas.filter( record => 
  record.Responsable.includes("marriojas") ||
  record.Responsable.includes("bsalazar")  ||
  record.Responsable.includes("hpadilla") 
  )

const myEventsList = tareasFilter.map((data, key) => {
  const dateDay = data[fechaInicioProg].slice(0, 2)
  const dateMonth = data[fechaInicioProg].slice(3, 5);
  const dateYear = data[fechaInicioProg].slice(6, 8);
  const fechaInicio = `20${dateYear}-${dateMonth}-${dateDay} 12:00 AM`

  const dateDayFin = data[fechaFinProg].slice(0, 2)
  const dateMonthFin = data[fechaFinProg].slice(3, 5);
  const dateYearFin = data[fechaFinProg].slice(6, 8);
  const fechaFin = `20${dateYearFin}-${dateMonthFin}-${dateDayFin} 12:00 AM`

  return(    
      {
        title: data.Resumen + " - "+ data.Responsable,
        start: new Date(fechaInicio),
        end: new Date(fechaFin),
      }
  ) 
})

const localizer = momentLocalizer(moment)

// 

function alert() {
  return(
    <>
      <div style={{ height: 10 }}>
        Hello World!
      </div>
    </>
  )
}

// 


export const MyCalendar = props => (
  <div style={{ height: '400px' }} className="bigCalendar-container">
    <div className='header'>
        <p className='header-title'>Calendario</p>
    </div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      className='calendar'
      onSelectEvent={alert}
      messages={{
        next: "▶",
        previous: "◀",
        today: "Hoy",
        month: "Mes",
        week: "Semana",
        day: "Día",
      }}
     />
    </div>
)
