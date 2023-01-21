let listaContactos = ["Zeus", "Poseidon", "Hades"];

function agregarContacto(nombre) {
  listaContactos.push(nombre);
  listaContactos.sort();
}

const borrarContacto = function (nombre) {
  let nuevaLista = listaContactos.filter(
    (listaContactos) => nombre !== listaContactos
  );
  listaContactos = nuevaLista;
};

const mostrar = () => {
  listaContactos.sort();
  for (let i = 0; i < listaContactos.length; i++) {
    console.log(listaContactos[i]);
  }
};
