import booksService from "@/services/book.service";
import Books from "./components/Books/Books";
import { GetStaticProps } from "next";

const HomePage = async () => {
  const data = await booksService.getAllBooks();

  return (
    <main>
      <Books data={data} />
    </main>
  );
};

export default HomePage;
