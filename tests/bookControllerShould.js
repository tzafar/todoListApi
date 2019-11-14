const Book = require("../api/models/bookModel");
const request = require("supertest");
const expect = require("chai").expect;
const app = require("../server");

function insertBook() {
    const book = {name: " java"};
    Book.createBook(book);
}

describe("api/users", () => {
    beforeEach(async () => {
        await Book.remove_all({});
    });

    describe("/books", () => {
        it("should return books", async () => {
            await insertBook();
            const res = await request(app).get("/books");
            expect(res.status).to.equal(200);
            expect(res.body.length).to.equal(1);
        });
    });
});