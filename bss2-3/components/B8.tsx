"use client";
import React, { useState } from "react";
import styles from "../moduleCSS/b8.module.css";

const B8: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 20;

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 2) {
        pages.push(1);
        if (currentPage > 3) {
          pages.push("...");
        }
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 1) {
        if (currentPage < totalPages - 2) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <ul className={styles.pagination}>
      <li>
        <button
          className={`${styles.button} ${
            currentPage === 1 ? styles.disabled : ""
          }`}
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </li>
      {renderPageNumbers().map((page, index) => (
        <li key={index}>
          {typeof page === "number" ? (
            <button
              className={`${styles.button} ${
                currentPage === page ? styles.active : ""
              }`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ) : (
            <span className={styles.ellipsis}>{page}</span>
          )}
        </li>
      ))}
      <li>
        <button
          className={`${styles.button} ${
            currentPage === totalPages - 1 ? styles.disabled : ""
          }`}
          onClick={handleNextClick}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default B8;
