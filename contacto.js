let listaContactos = [
  {
    id: 1098745311,
    nombres: "Marlon Andres",
    apellidos: "Suarez Davila",
    telefono: 3215550267,
    ubicacion: { ciudad: "Cali", direccion: "calle de los estudiantes" },
  },
];
let persona1 = {
  id: 1098748888,
  nombres: "Carlos Santiago",
  apellidos: "Martinez Rodriguez",
  telefono: 3215550078,
  ubicacion: { ciudad: "Bogota", direccion: "calle de los artesanos" },
};

function agregarContacto(persona) {
  listaContactos.push(persona);
}

const borrarContacto = function (persona) {
  let nuevaLista = listaContactos.filter(
    (listaContactos) => persona !== listaContactos
  );
  listaContactos = nuevaLista;
};

const actualizar = (
  id,
  nombresNuevos,
  apellidosNuevos,
  telefonoNuevo,
  ciudadNueva,
  direccionNueva
) => {
  for (let i = 0; i < listaContactos.length; i++) {
    if (listaContactos[i].id === id) {
      listaContactos[i] = {
        id,
        nombres: nombresNuevos,
        apellidos: apellidosNuevos,
        telefono: telefonoNuevo,
        ubicacion: { ciudad: ciudadNueva, direccion: direccionNueva },
      };
    }
  }
};

const mostrar = () => {
  listaContactos.sort();
  for (let i = 0; i < listaContactos.length; i++) {
    console.log(listaContactos[i]);
  }
};
//borrarContacto(listaContactos[0]);
agregarContacto(persona1);
actualizar(
  1098745311,
  "Felipe",
  "Mosquera",
  3178996477,
  "Bucaramanga",
  "Calle 8"
);
console.log(mostrar());
