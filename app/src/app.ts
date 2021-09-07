import { CursoController } from "./controllers/curso-controller.js";

const controller = new CursoController();
const form:HTMLFormElement|null = document.querySelector('#formulario-cadastro-cursos');
if (form !== null) {
    form.addEventListener('submit', () => {
        event?.preventDefault();
        controller.adiciona();
    });
} else {
    throw new Error('formulário não existe com este seletor css. Favor revise em seu html o seletor do formulário')
}