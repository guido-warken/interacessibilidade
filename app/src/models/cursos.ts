import { Curso } from "./curso.js";

export class Cursos {
    private _cursos: Curso[] = [];

    public adiciona(curso: Curso): void {
        this._cursos.push(curso);
    }

    public listar(): readonly Curso[] {
        return this._cursos;
    }
}
