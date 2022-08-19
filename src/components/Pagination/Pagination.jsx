import React from "react";
import classes from "./Pagination.module.css";
import { UsePagination } from "../../hooks/UsePagination";

export default function Pagination({ totalPage, page, setPage }) {
  const pagination = UsePagination(totalPage);

  return (
    <div className={classes.pagination}>
      {pagination.map((item) => {
        return (
          <span
            className={
              item === page
                ? [
                    classes.pagination__item,
                    classes.pagination__currentIem,
                  ].join(" ")
                : classes.pagination__item
            }
            key={item}
            onClick={() => {
              setPage(item);
            }}
          ></span>
        );
      })}
    </div>
  );
}
