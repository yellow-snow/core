import { Route } from "./route";

export abstract class Router {
    protected routes: Array<Route<any>>;
    constructor(routes: Array<Route<any>>) {
        this.routes = routes;
    }
    public abstract init(...args: any[]): void;
}
