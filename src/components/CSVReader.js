import {csv} from '../data/csv'

//var csv is the CSV file with headers
export default function CSVReader(){

  var lines=csv.split("\n");

  var result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step 
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }

      result.push(obj);
     

      // var fechaFin = ['Campo personalizado (Fecha Fin Programada)']
      // var fechaIncio = obj['Campo personalizado (Fecha Inicio Programada)']
      // var resumen = obj.Resumen

      // // Día de la semana
      // var dia = new Date(fechaIncio).getDay()
      // var diaName = ''
      // if (dia == 1) { diaName = 'Domingo' }
      // else if (dia == 2) { diaName = 'Lunes' }
      // else if (dia == 3) { diaName = 'Martes' }
      // else if (dia == 4) { diaName = 'Miercoles' }
      // else if (dia == 5) { diaName = 'Jueves' }
      // else if (dia == 6) { diaName = 'Viernes' }
      // else { diaName = 'Sabado' }
  }

  return result //JavaScript object

}

