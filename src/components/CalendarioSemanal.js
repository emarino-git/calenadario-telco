import moment from 'moment'
import './Calendar.css'
import {Tareas} from './Tareas011122'



let ahora = moment().format("DD/MM/YYYY")
console.log(ahora)

export default function CalendarioSemanal() {

  return(
    <div className="calendar">
      <div className='header'>
        <p className='header-title'>Calendario</p>
      </div>
      <div className='dias'>
        <div className='dia' id='01/06/22'>Lunes<br />06/01/22</div>
        <div className='dia' id='01/07/22' >Martes<br />07/01/22</div>
        <div className='dia' id='01/08/22'>Miércoles<br />08/01/22</div>
        <div className='dia' id='01/09/22'>Jueves<br />09/01/22</div>
        <div className='dia' id='01/10/22'>Viernes<br />10/01/22</div>
        <div className='dia' id='01/11/22'>Sábado<br />11/01/22
        <Tareas dia={'lunes'} />
        </div>
        <div className='dia dia-hoy' id='01/12/22'>Domingo<br />12/01/22</div>
      </div>
    </div>
  )
}