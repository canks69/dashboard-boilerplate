import React from "react";
import {Icon} from "@iconify/react";

interface TablePaginateProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const TablePaginate = (props: TablePaginateProps) => {
  const [activePage, setActivePage] = React.useState(props.currentPage);
  const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);
  const maxPagination = Math.ceil(props.totalItems / props.itemsPerPage) > 5 ? 5 : Math.ceil(props.totalItems / props.itemsPerPage);
  const handlePageChange = (page: number) => {
    if (page < 1 || page > maxPagination) return;
    console.log(page)
    props.onPageChange(page);
    setActivePage(page);
  }
  return (
    maxPagination > 1 && (
      <div className="flex justify-end mt-4">
        <button
          className="flex items-center justify-center w-8 h-8 mr-1 rounded-md bg-gray-200 dark:bg-gray-700"
          onClick={() => handlePageChange(activePage - 1)}
        >
          <Icon icon={`bi:chevron-left`} className="w-4 h-4"/>
        </button>
        {[...Array(maxPagination)].map((_, index) => (
          <React.Fragment key={index}>
            {index < maxPagination && (
              <>
                {index === activePage - 1 ? (
                  <label
                    key={`label-${index}`} // Unique key for label element
                    className={`flex items-center justify-center w-8 h-8 mr-1 rounded-md`}
                  >
                    {index + 1}
                  </label>
                ) : (
                  <button
                    key={`button-${index}`}
                    className={`flex items-center justify-center w-8 h-8 mr-1 rounded-md bg-gray-200 dark:bg-gray-700`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                )}
              </>
            )}
            {index === maxPagination - 1 && maxPagination < totalPages && (
              <>
              <span key={`span-${index}`}
                    className="flex items-center justify-center w-8 h-8 mr-1 rounded-md bg-gray-200 dark:bg-gray-700">
                ...
              </span>

                <button
                  key={`button-${index}`}
                  className={`flex items-center justify-center w-8 h-8 mr-1 rounded-md bg-gray-200 dark:bg-gray-700`}
                  onClick={() => handlePageChange(totalPages)}
                >
                  {totalPages}
                </button>
              </>
            )}
          </React.Fragment>
        ))}
        <button
          className="flex items-center justify-center w-8 h-8 ml-1 rounded-md bg-gray-200 dark:bg-gray-700"
          onClick={() => handlePageChange(activePage + 1)}
        >
          <Icon icon={`bi:chevron-right`} className="w-4 h-4"/>
        </button>
      </div>
    ))
}