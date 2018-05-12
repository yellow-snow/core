import * as chai from "chai";
import { Controller } from "./controller";

const expect = chai.expect;

let ctrl: Controller;

class TestController implements Controller {

}

describe("Controller", () => {
    describe("TestController", () => {
        beforeEach(() => {
            ctrl = new TestController();
        });
        it("should instantiate", () => {
            // tslint:disable-next-line:no-unused-expression
            expect(ctrl).not.to.be.undefined;
        });
    });
});
