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
            expect(ctrl).not.to.be.undefined;
        });
    });
});
