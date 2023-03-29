import * as React from "react";
import Badge from "../Badge/Badge";
import style from "./Books.module.css";

type Props = {
  book: Book;
};

const BookSingle = ({ book }: Props) => {
  return (
    <div className={style.book_card}>
      {(book.author === "Филип К. Дик" || book.price === "3000 тенге") && (
        <div className={style.badges_place}>
          {book.author === "Филип К. Дик" ? (
            <Badge color="blue">
              <h3>Лучшие продажи!</h3>
            </Badge>
          ) : (
            <Badge color="red">
              <h3>Выгодная цена!</h3>
            </Badge>
          )}
        </div>
      )}

      <img src={book.cover} alt="book" width={170} />
      <div className="flex">
        <div className="title_item">
          <span>{book.author}</span>
          <h5>{book.title}</h5>
        </div>
        <h3 className={style.price_item}>{book.price}</h3>
      </div>
    </div>
  );
};

export default BookSingle;
