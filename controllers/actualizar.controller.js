import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInfo = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const nombre = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");
  const perfil = await clientServices.detalleCliente(id);
  nombre.value = perfil.nombre;
  email.value = perfil.email;
};

obtenerInfo();

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  clientServices.actualizarCliente(nombre, email, id).then(() => {
    window.location.href = "/screens/edicion_concluida.html";
  });
});
