"use client";
import booksService from "@/services/book.service";
import * as React from "react";
import BookSingle from "./BookSingle";
import Pagination from "../Pagination/Pagination";
import { paginate } from "@/utils/paginate";
import style from "./Books.module.css";

const Books = ({ data }: { data: Book[] }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 6;
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const paginatedPosts = paginate(data, currentPage, pageSize);

  return (
    <div>
      <React.Suspense fallback={<span>Loading...</span>}>
        <div className={style.books_container}>
          {data ? (
            paginatedPosts.map((item) => (
              <BookSingle key={item._id} book={item} />
            ))
          ) : (
            <span>Что-то пошло не так, попробуйте позже</span>
          )}
        </div>
        <div className="center">
          <Pagination
            items={data.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </div>
      </React.Suspense>
    </div>
  );
};

export default Books;
