const Book = require("../api/models/bookModel");
const request = require("supertest");
const expect = require("chai").expect;
const app = require("../server");

function insertBook() {
    const book = { name: "java" };
    return Book.createBook(book);
}

describe("api/users", () => {
    beforeEach(async () => {
        await Book.remove_all({});
    });

    describe("/GET all books", () => {
        it("should return all books", async () => {
            await insertBook();
            const res = await request(app).get("/books");
            expect(res.status).to.equal(200);
            expect(res.body.length).to.equal(1);
        });
    });

    describe("GET book", () => {
        it("should get a single book by id", async () => {
            const maybeInsertedBook = await insertBook()
            let request_path = "/books/" + maybeInsertedBook.id;
            const res = await request(app).get(request_path);
            expect(res.status).to.equal(200);
            expect(res.body.name).to.equal("java");
        });
    });

    describe("/DELETE book", () => {
        it("should delete a book by id", async () => {
            const insertedBook = await insertBook();
            const request_path = "/books/" + insertedBook.id;
            const res = await request(app).delete(request_path);
            expect(res.status).to.equal(204);
        })
    });

    describe("/PUT Edit a book", () => {
        it("should update an existing book", async () => {
            var book = await insertBook();
            const request_path = "/books/" + book.id;
            var book_data = { name: "updated_book_title" };
            const res = await request(app).put(request_path)
            .send(book_data);
            expect(res.status).to.equal(200);
        });
    });

    describe("/POST a book", () => {
        it("yeh save kar lo", async () => {
            const book_data = { name: "book_title" };
            const res = await request(app)
              .post("/books")
              .send(book_data);
            expect(res.status).to.equal(200);
          });
      });
});