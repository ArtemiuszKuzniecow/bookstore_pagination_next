import * as React from "react";
import style from "./Paginaion.module.css";
import Button from "../UI/Button";

type Props = {
  items: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ items, currentPage, pageSize, onPageChange }: Props) => {
  const pagesCount = Math.ceil(items / pageSize);
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul className={style.buttons_container}>
        <li
          onClick={() => {
            if (currentPage !== 1) onPageChange(currentPage - 1);
          }}
        >
          <Button
            color={currentPage === 1 ? "danger" : "default"}
            disabled={currentPage === 1}
          >
            &#10094;
          </Button>
        </li>
        {pages.map((page) => (
          <li key={page} onClick={() => onPageChange(page)}>
            <Button color={page === currentPage ? "success" : "default"}>
              {page}
            </Button>
          </li>
        ))}
        <li
          onClick={() => {
            if (currentPage < pagesCount) {
              onPageChange(currentPage + 1);
            } else {
              return;
            }
          }}
        >
          <Button
            color={currentPage >= pagesCount ? "danger" : "default"}
            disabled={currentPage >= pagesCount}
          >
            &#10095;
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
