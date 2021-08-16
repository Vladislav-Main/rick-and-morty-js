export const pagesCreator = (pages, pagesCount, currentPage) => {
  if (pagesCount > 0) {
    if (currentPage > 3) {
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    } else {
      for (let i = 1; i <= 3; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
};
