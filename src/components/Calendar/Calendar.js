import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment"
import './Calendar.css'
import { csv } from '../../data/csv'
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'

require("moment/locale/es.js")


const tareas = csv

const fechaInicioProg = 'Campo personalizado (Fecha Inicio Programada)'
const fechaFinProg = 'Campo personalizado (Fecha Fin Programada)'

let tareasColor = []
for ( var index=0; index<tareas.length; index++ ) {
  switch ( tareas[index].Responsable ) {
    case "hpadilla":
      tareasColor.push( { ...tareas[index],"color": "#EF9A9A" } );
      break;
    case "emarino":
      tareasColor.push( { ...tareas[index],"color": "#90CAF9" } );
      break;
    case "acappelletti":
      tareasColor.push( { ...tareas[index],"color": "#A5D6A7" } );
      break;
    case "jhurtado":
      tareasColor.push( { ...tareas[index],"color": "#BA68C8" } );
      break;
    case "marriojas":
      tareasColor.push( { ...tareas[index],"color": "#F06292" } );
      break;
    case "bsalazar":
      tareasColor.push( { ...tareas[index],"color": "#7986CB" } );
      break;
    case "asmarin":
      tareasColor.push( { ...tareas[index],"color": "#FFEE58" } );
      break;
    case "fzoccali":
      tareasColor.push( { ...tareas[index],"color": "#4DB6AC" } );
      break;
    case "ddisanzo":
      tareasColor.push( { ...tareas[index],"color": "#FFB74D" } );
      break;
    case "pcampanella":
      tareasColor.push( { ...tareas[index],"color": "#4DD0E1" } );
      break;
    case "dborrego":
      tareasColor.push( { ...tareas[index],"color": "#FF8A65" } );
      break;
    case "ljaramillo":
      tareasColor.push( { ...tareas[index],"color": "#29B6F6" } );
      break;
    default:
      tareasColor.push( { ...tareas[index],"color": "#dfe6e9" } );
      break
  }
}

let tareasFilter = tareasColor

const myEventsList = tareasFilter.map((data, key) => {
  const dateDay = data[fechaInicioProg].slice(0, 2)
  const dateMonth = data[fechaInicioProg].slice(3, 5);
  const dateYear = data[fechaInicioProg].slice(6, 8);
  const fechaInicio = `20${dateYear}-${dateMonth}-${dateDay} 12:00 AM`

  const dateDayFin = data[fechaFinProg].slice(0, 2)
  const dateMonthFin = data[fechaFinProg].slice(3, 5);
  const dateYearFin = data[fechaFinProg].slice(6, 8);
  const fechaFin = `20${dateYearFin}-${dateMonthFin}-${dateDayFin} 12:00 AM`

  const clave = "Clave de incidencia"
  const jira = 'https://jira.edenor.com/browse/'
  const link = jira+data[clave]

  return(    
      {
        title: data.Resumen + " - "+ data.Responsable,
        start: new Date(fechaInicio),
        end: new Date(fechaFin),
        color: data.color,
        clave: link
      }
  ) 
})

const localizer = momentLocalizer(moment)

export const MyCalendar = props => (
  <div style={{ height: '700px' }} className="bigCalendar-container">
    <div className='header'>
        <p className='header-title'>Calendario</p>
    </div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      className='calendar'
      onSelectEvent={
        function linkJira (event,) {
          return(
            window.open(event.clave, '_blank')
          )
        }
      }
      messages={{
        next: "▶",
        previous: "◀",
        today: "Hoy",
        month: "Mes",
        week: "Semana",
        day: "Día",
      }}
      eventPropGetter=
      {function(event,) {
        var backgroundColor = event.color;
        var style = {
            backgroundColor: backgroundColor,
            borderRadius: '0px',
            opacity: 0.8,
            color: 'black',
            display: 'block'
        };
        return {
            style: style
        };}}
     />
    </div>
)
