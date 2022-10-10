import React from 'react';
import classes from './Pagination.module.css';
import { usePagination } from '../../hooks/usePagination';

export default function Pagination({ totalPage, page, setPage }) {
  const pagination = usePagination(totalPage);

  return (
    <div className={classes.pagination}>
      {pagination.map((item) => (
        <span
          className={
            item === page
              ? [classes.pagination__item, classes.pagination__currentIem].join(' ')
              : classes.pagination__item
          }
          key={item}
          onClick={() => {
            setPage(item);
          }}
        ></span>
      ))}
    </div>
  );
}
