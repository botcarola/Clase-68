console.log("Actividad array de objetos")

// Dado el siguiente array de objetos

const operaciones = [
    {
      descripcion: 'Sueldo',
      categoria: 'Trabajo',
      fecha: '01/01/2021',
      monto: 50000,
      tipo: 'Ganancia',
    },
    {
      descripcion: 'Pago de alquiler',
      categoria: 'Alquiler',
      fecha: '02/01/2021',
      monto: 15000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Pago de expensas',
      categoria: 'Alquiler',
      fecha: '02/01/2021',
      monto: 5000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Pago de internet',
      categoria: 'Servicios',
      fecha: '10/01/2021',
      monto: 2000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Trabajo freelance',
      categoria: 'Trabajo',
      fecha: '15/01/2021',
      monto: 20000,
      tipo: 'Ganancia',
    },
    {
      descripcion: 'Cena con amigas',
      categoria: 'Salidas',
      fecha: '18/01/2021',
      monto: 1500,
      tipo: 'Gasto',
    },
  ];

  const tarjetaSeccion = document.querySelector(".lista")

  const convertirAHTML = (operaciones) => {

  let acc = " "

  operaciones.map((operacion) =>{
    acc += `
    <div>
      <div class="columnas">
        <h4>${operacion.descripcion}</h4>    
        <h4>${operacion.categoria}</h4>    
        <h4>${operacion.fecha}</h4>    
        <h4>${operacion.monto}</h4>    
        <h4>${operacion.tipo}</h4>
      </div>
    </div> `
  })

  tarjetaSeccion.innerHTML = acc

}

convertirAHTML(operaciones)



  // 1) Mostrar en consola "Cena con amigas" (encontralo en el array de objetos)

console.log(operaciones[5].descripcion)

// 2) Mostrar en consola "10/01/2021"

console.log(operaciones[3].fecha)

// 3) Mostrar en consola "Servicios"

console.log(operaciones[3].categoria)

// 4) Crea un nuevo objeto llamado nuevaOperacion con los siguientes valores: para descripcion, "Veterinaria". Para categoria, "Mascotas". Para fecha, "19/01/2021". Para monto, "2500". Para tipo, "Gasto".

const nuevaOperacion = {
    descripcion: "Veterinaria",
    caterogía: "Mascotas",
    fecha: "19/01/2021",
    monto: 2500,
    tipo: "Gasto"
}

// 5) Agrega el objeto recien creado al array operaciones.

operaciones.push(nuevaOperacion)

// 6) Recorre con un map operaciones y guarda el array resultante con el nombre copiaOperaciones. El nuevo array sera exactamente igual al anterior, pero en lugar de tener el monto como un numero, lo tendra como un string. (Pista: despues de hacer el ejercicio 6, chequea con un console log que operaciones siga teniendo sus propiedades monto como numero. Si no es asi, recorda usar el spread operator!)

const copiaOperaciones = operaciones.map((operacion, index) => {
  let clonOperaciones = {...operaciones[index]}
  const montoAString = String(clonOperaciones.monto)
  clonOperaciones.monto = `$ ${montoAString},00`
  return clonOperaciones

})

console.log(copiaOperaciones)
console.log(operaciones)

// 7) Recorre con un filter operaciones y guarda el array resultante con el nombre filtroOperaciones. El array nuevo debera tener solo aquellas operaciones cuyo monto sea mayor a 3000.

const filtroOperaciones = operaciones.filter( (operacion, index) => {
  return operaciones[index].monto > 3000
})
console.log(filtroOperaciones)

// 8) Recorre con un filter operaciones y guarda el array resultante con el nombre ganancias. El array nuevo debera tener solo aquellas operaciones cuyo tipo sea "Ganancia" en lugar de "Gastos".

const ganancias = operaciones.filter((operacion, index) => {
  return operaciones[index].tipo === "Ganancia"
} )

console.log(ganancias)

// 9) Recorre con un map operaciones y guarda en una nueva variable totalGastos la suma de todos los montos de los objetos cuyo tipo sea "gasto" (Pista: vas a necesitar una acumuladora)

const totalGastos = operaciones.filter((operacion, index) => {
    
})

console.log(totalGastos)








/** Prueba spread operator 


let array = [
  {
    nombre: "Carola",
    apellido: "lerner",
  },

  {
    nombre: "André",
    apellido: "Dolorof",
    
  },

  {
    nombre: "ASDasda",
    apellido: "2asdasd",
  }
]


let arrayCopiado = [...array]

arrayCopiado[0].nombre = "Elizabeth"

console.log(array[0].nombre)
console.log(arrayCopiado[0].nombre)

console.log(array)
console.log(arrayCopiado)

let numeros = [ 1, 2, 3]
let copia = [...numeros]

copia.push(4)

console.log(numeros)
console.log(copia)


let persona = {
 nombre: "Andy",
 edad: "20",
 gustos: "carola"
}

let nuevaPersona = {...persona}

console.log(persona)
console.log(nuevaPersona)

nuevaPersona.gustos = "arroz chaufa"

console.log(persona)
console.log(nuevaPersona) **/