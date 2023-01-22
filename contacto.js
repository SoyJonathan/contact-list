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
  listaContactos.sort();
}

agregarContacto(persona1);

const borrarContacto = function (persona) {
  let nuevaLista = listaContactos.filter(
    (listaContactos) => persona !== listaContactos
  );
  listaContactos = nuevaLista;
};

const mostrar = () => {
  listaContactos.sort();
  for (let i = 0; i < listaContactos.length; i++) {
    console.log(listaContactos[i]);
  }
};
