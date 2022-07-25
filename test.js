// Dependencias para pruebas
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.should();
chai.use(chaiHttp);

// API
const app = require("./index");

describe("Prueba 1", () => {
  it("Debe devolver un false", () => {
    expect(false).to.equal(false);
  });
});
