import http from "./http";

const BOOKS_ROUTE = "/api/books";

export const booksService = {
  async getAll() {
    const { data } = await http.get(BOOKS_ROUTE);
    return data;
  },

  async create(book) {
    const { data } = await http.post(BOOKS_ROUTE, book);
    return data;
  },
};

export default booksService;
