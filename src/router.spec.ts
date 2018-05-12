import * as chai from "chai";
import { Controller } from "./controller";
import { Route } from "./route";
import { Router } from "./router";

const expect = chai.expect;

class TestController implements Controller {
    public hello(): void {
        // do something
    }
}

// tslint:disable-next-line:max-classes-per-file
class TestRoute implements Route<TestController> {
    public controller!: { new(): TestController };
    public method!: keyof TestController;
    constructor(controller: { new(): TestController }, method: keyof TestController) {
        this.controller = controller;
        this.method = method;
    }
}

// tslint:disable-next-line:max-classes-per-file
class TestRouter extends Router {
    constructor(routes: TestRoute[]) {
        super(routes);
    }
    public init(): void {
        // do something
    }
}

describe("Router", () => {
    describe("TestRouter", () => {
        it("should take an instance of TestRouter", () => {
            const route = new TestRoute(TestController, "hello");
            const routes = [route];
            const router = new TestRouter(routes);
            // tslint:disable-next-line:no-unused-expression
            expect(router).not.to.be.undefined;
        });
    });
});
