import { keyboard } from '@testing-library/user-event/dist/keyboard'
import './Calendar.css'
import {Tareas} from './Tareas011122'

export default function CalendarioSemanal() {

  return(
    <div className="calendar">
      <div className='header'>
        <p className='header-title'>Calendario</p>
      </div>
      <div className='dias'>
        <div className='dia' id='01/07/22'></div>
        <div className='dia' id='01/07/22' >Martes</div>
        <div className='dia' id='01/08/22'>Miércoles</div>
        <div className='dia dia-hoy' id='01/09/22'>Jueves</div>
        <div className='dia' id='01/10/22'>Viernes</div>
        <div className='dia' id='01/11/22'>Sábado
        <Tareas />
        </div>
        <div className='dia' id='01/12/22'>Domingo</div>
      </div>
    </div>
  )
}