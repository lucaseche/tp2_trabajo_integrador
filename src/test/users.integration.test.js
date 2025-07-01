import supertest from "supertest";
import { expect } from "chai";

const url = supertest("http://localhost:8096")

//Casos de exito de entidad Usuarios

describe("Users ASPI", () => {
    it("GET", async () => {
        const response = await url.get("/users")
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.be.greaterThan(0);
        expect(response.body[0]).to.have.property("userName");

    })

    it("POST", async () => {
        const response = await url.post("/users").send({
            mail: "test456@gmail.com", password: "0404", username: "test1234"
        })
        expect(response.status).to.equal(200);

    })

    it("PUT", async () => {
        const response = await url.put("/users/update/all/68635536bb65edca66187d1a").send({
            mail: "test678@gmail.com", password: "0404", username: "test1234"
        })
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property("acknowledged", true);

    })
})

// Casos de error de la entidad Usuarios

describe("Casos de Error para usuarios", () => {
    it("GET - Error", async () => {
        const response = await url.get("/users/invalidEndpoint")
        expect(response.status).to.equal(500);
    })

    it("POST - Error", async () => {
        const response = await url.post("/users").send({
            mail: "test678@gmail.com", password: "0404", username: "test1234"
        })
        expect(response.status).to.equal(404);
        expect(response.body).to.have.property("error", "Not Found");
    })
})

