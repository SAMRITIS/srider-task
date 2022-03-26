const chai = require("chai");
const assert = require("assert");
const should = chai.should();
const expect = chai.expect;
const server = require("../server");
let chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("Test Api", function () {
  it("get user", function (done) {
    chai
      .request(server)
      .get("/api/v1")
      .end((err, response) => {
        expect(response.status).to.be.equal(200);
        done();
      });
  });
});
