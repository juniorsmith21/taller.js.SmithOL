let nombre="Smith" //declaramos la variable nombre
let edad=21 //declaramos la variable edad
let ciudad="Popayan" //declaramos la variable ciudad

console.log(`Mi nombre es ${nombre} tengo ${edad} años y vivo en ${ciudad}`); // concatenamos
console.log("-----------------------------------")

//Segundo punto

function opeMatematica(){ //damos nombre a la funciion
    let num1=5
    let num2=5
    let num3=5
    let num4=5
    let num5=10
    let resultado=0
    resultado=num1+num2+num3+num4*num5
    console.log(resultado)
}

opeMatematica(); //llamamos la funcion por afuera para que funcione
console.log("-----------------------------------")


//tercer punto


function Discotec(nombre,edad){
    let concat=`${nombre}, ${edad}`
    console.log(concat);
    return(concat)

}
Discotec("Mi nombre es Robert smith","Tengo 18 años y ya puedo entrar a una discoteca");
console.log("-----------------------------------")

//cuarto punto y quinto punto agregar una propiedad

let trabajador={
        nombre:"Ricardo",
        edad:25,
        profesion:"Ingeniero de software"
}
console.log(trabajador.nombre);
console.log(trabajador.edad);
console.log(trabajador.profesion);
console.log("-----------------------------------")
trabajador.telefono=3223987745
console.log(trabajador) // aqui agreagamos telefono al objeto trabajador :)
console.log("-----------------------------------")

//sexto punto


let persona={
    nombre:"Daniel",
    profesion:"Carpintero",

}
function datosPersona(persona){
    console.log(persona.nombre);
    console.log(persona.profesion);
}
datosPersona(persona)
console.log("-----------------------------------")

// septimo punto

let estudiantes={
    notas:{
        matematicas:4.5,
        ingles:3.3,
    }

}

console.log(estudiantes.notas.matematicas);
console.log(estudiantes.notas.ingles)
console.log("-----------------------------------")


//octavo punto

let carro={
    marca:"hyundai",
    modelo:"2018",
    propietario:{
        nombre:"geronimo",
        edad:26,
    }

}
console.log(carro.propietario.nombre);
console.log("-----------------------------------")

//noveno punto 
let carro1={
    marca:"hyundai",
    modelo:"2018",
    propietario:{
        nombre:"geronimo",
        edad:26,
    }

}
function datos(carro1){
    return `Marca de carro: ${carro1.marca} 
nombre propietario: ${carro1.propietario.nombre}`

}
console.log(datos(carro1))
console.log("-----------------------------------")

//decimo punto
let carro2={
    marca:"hyundai",
    modelo:"2018",
    propietario:{
        nombre:"geronimo",
        edad:26,
    }
    
}
function datos(carro2){
    return `Marca de carro: ${carro1.marca} 
    nombre propietario: ${carro1.propietario.nombre}`
    
}
carro2.propietario.edad=36 //asi se cambia un valor :)
console.log(carro2)
console.log("------------------------------------")

// punto 11 destructuracion

let personaJ={
    nombre1:"Daniel",
    profesion:"Carpintero",
}

let {nombre1,profesion} =personaJ;
console.log(nombre1);
console.log(profesion);
console.log("------------------------------------")

// punto 12


let carroJ={
    marcaA:"hyundai",
    modeloA:"2018",
    propietarioA:{
        nombreA:"geronimo",
        edadA:26,
    }
}
let {marcaA,modeloA,}=carroJ;
console.log(marcaA,modeloA);
console.log("------------------------------------")

//punto 13 

let carroJ1={
    marcaB:"hyundai",
    modeloB:"2018",
    propietarioB:{
        nombreB:"geronimo",
        edadB:26,
    }
}
let {marcaB,modeloB,propietarioB:{nombreB,edadB}}=carroJ1;
console.log(marcaB,modeloB);
console.log(nombreB);
console.log("---------------------------------------")

//punto 14

let joven={
    nombre:"pacho",
    edad:21,
}
function datosJoven({nombre,edad}){
console.log(`Nombre:${nombre}
edad:${edad}`);
}
datosJoven(joven)
console.log("---------------------------------------");


//punto 15

let carroJ2={
    marcaC:"hyundai",
    modeloC:"2018",
    propietarioC:{
        nombreC:"geronimo",
        edadC:26,
    }
}
function datosPropietario({propietarioC:{nombreC,edadC}}){
console.log(`nombre propietario: ${nombreC}
edad: ${edadC}`)
}
datosPropietario(carroJ2)
console.log("----------------------------------------")

//punto 16


let joven1={
    Nombre:"pacho",
    Edad:21,
}
let {Nombre:nombrePersona,Edad:edadPersona}=joven1; //asi le ponemos un alisas a los objetos
console.log(nombrePersona, edadPersona);
console.log("---------------------------------------")


//punto 17 


let persona4={...personaJ};
console.log(persona4)
persona4.nombre1="Jimenez";
console.log(persona4);
console.log("----------------------------------------")

//punto 18 


let carroM2={...carroJ1};
console.log(carroM2)
carroM2.propietarioB.nombreB="Antonio"
console.log(carroM2)
console.log("----------------------------------------")

//punto 19 y ultimooooooooooooooooo

let miLibro={
    titulo:"No podras escapar del codigo :)",
    autor:{
        nombre:"Moises",
        edad:24,
            },
    editorial:{
        nombreEdito:"La locura del codigo",
        ciudad:"Popayan"
            },
}
function datosDeMiLibro({titulo,autor:{nombre,edad},editorial:{nombreEdito,ciudad}}){
console.log(`El titulo del libro es: ${titulo} y su autor se llama ${nombre} y tiene tan solo ${edad} años, su editorial se llama
${nombreEdito} y vive en la ciudad de ${ciudad}.`);

}
datosDeMiLibro(miLibro)
