import { Cursos } from "../models/cursos.js";
import { View } from "./view.js";

export class CursoView extends View<Cursos> {

    protected template(model: Cursos): string {
const html = `
<table class="table table-bordered">
<thead>
<tr>
<th>Nome do curso</th>
<th>Carga horária</th>
<th>Instituição</th>
</tr>
</thead>
<tbody>
${model.listar().map(curso => {
    return `
    <tr>
    <td>${curso.nome}</td>
    <td>${curso.duracao}</td>
    <td>${curso.instituicao}</td>
    </tr>
    `;
}).join('')
}
</tbody>
</table>
`;
return html;
    }

}
