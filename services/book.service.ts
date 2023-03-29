import httpService from "./http.service";

const booksService = {
  getAllBooks: async function () {
    const { data } = await httpService.get<Book[]>("books");
    return data;
  },
};

export default booksService;
