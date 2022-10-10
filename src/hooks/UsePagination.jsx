import { useMemo } from 'react';

export const usePagination = (totalPage) => {
  const listOfPage = useMemo(() => {
    const pages = [];
    for (let index = 0; index < totalPage; index++) {
      pages.push(index + 1);
    }
    return pages;
  }, [totalPage]);

  return listOfPage;
};
