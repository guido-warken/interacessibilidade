export abstract class View<TModel> {

    protected elemento: HTMLElement;

    constructor(selector: string) {
        this.elemento = document.querySelector(selector) as HTMLElement;
    }

    public update(model: TModel): void {
        this.elemento.innerHTML = this.template(model);
    }

    protected abstract template(model: TModel): string;

}