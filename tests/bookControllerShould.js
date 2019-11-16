const Book = require("../api/models/bookModel");
const request = require("supertest");
const expect = require("chai").expect;
const app = require("../server");

function insertBook() {
    const book = {name: "java"};
    return Book.createBook(book);
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

    describe("GET a book", () => {
        it("should get a single book by id", async () => {
            const maybeInsertedBook = await insertBook()
            let request_path = "/books/" + maybeInsertedBook.id;
            const res = await request(app).get(request_path);
            expect(res.status).to.equal(200);
            expect(res.body.name).to.equal("java");
        });
    })
});