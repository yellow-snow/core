import * as chai from "chai";
import { Controller } from "./controller";
import { Route } from "./route";

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

describe("Route", () => {
    describe("TestRoute", () => {
        it("should take a reference to TestController class and one of it's methods", () => {
            const route = new TestRoute(TestController, "hello");
            // tslint:disable-next-line:no-unused-expression
            expect(route).not.to.be.undefined;
        });
    });
});
