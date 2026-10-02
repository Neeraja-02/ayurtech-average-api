const request = require("supertest");

const { app } = require("../src/server");

const { clearNumbers } = require("../src/average");

describe("Average API", () => {

    beforeEach(() => {
        clearNumbers();
    });

    test("should return the first number", async () => {

        const response = await request(app)
            .post("/average")
            .send({
                number: 10
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.average).toBe(10);
    });

    test("should calculate average of numbers", async () => {

        await request(app)
            .post("/average")
            .send({
                number: 10
            });

        await request(app)
            .post("/average")
            .send({
                number: 20
            });

        const response = await request(app)
            .post("/average")
            .send({
                number: 30
            });

        expect(response.body.average).toBe(20);
    });

    test("should calculate decimal average", async () => {

        await request(app)
            .post("/average")
            .send({
                number: 10
            });

        await request(app)
            .post("/average")
            .send({
                number: 20
            });

        const response = await request(app)
            .post("/average")
            .send({
                number: 25
            });

        expect(response.body.average).toBeCloseTo(18.33, 2);
    });

    test("should reject invalid number", async () => {

        const response = await request(app)
            .post("/average")
            .send({
                number: "hello"
            });

        expect(response.statusCode).toBe(400);
    });

    test("should reject empty request", async () => {

        const response = await request(app)
            .post("/average")
            .send({});

        expect(response.statusCode).toBe(400);
    });

});