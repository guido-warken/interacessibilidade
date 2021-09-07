import { Curso } from "../models/curso.js";
import { Cursos } from "../models/cursos.js";
import { CursoView } from "../views/curso-view.js";
import { MensagemView } from "../views/mensagem-view.js";

export class CursoController {
    private _campoNome: HTMLInputElement;
    private _campoDuracao: HTMLInputElement;
    private _campoInstituicao: HTMLInputElement;
    private _cursos = new Cursos();
    private _cursoView = new CursoView('#curso-view');
    private _mensagemView = new MensagemView('#mensagem-view');

    constructor() {
        this._campoNome = document.querySelector('#campo-nome') as HTMLInputElement;
        this._campoDuracao = document.querySelector('#campo-carga-horaria') as HTMLInputElement;
        this._campoInstituicao = document.querySelector('#campo-instituicao') as HTMLInputElement;
        this._cursoView.update(this._cursos);
    }

    public adiciona(): void {
        const curso = new Curso(this._campoNome.value, parseFloat(this._campoDuracao.value), this._campoInstituicao.value);
        this._cursos.adiciona(curso);
        this._cursoView.update(this._cursos);
        this._mensagemView.update(`O curso ${curso.nome} foi adicionado com sucesso!`);
        this.limpaFormulario();
    }

    private limpaFormulario():void {
        this._campoNome.value = '';
        this._campoDuracao.value = '';
        this._campoInstituicao.value = '';
        this._campoNome.focus();
    }

}
