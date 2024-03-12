import {Icon} from "@iconify/react";
import React from "react";

interface TableContainerProps {
  children: React.ReactNode;
  className?: string;
  search?: boolean;
}

export const TableContainer = (props: TableContainerProps) => {
  return (
    <>
      {props.search && (
        <div className="flex justify-end p-4 z-0">
          <div className="relative z-0 text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Icon icon={`bi:search`} className="w-4 h-4"/>
            </span>
            <input
              type="search"
              className="py-2 pl-8 text-sm text-gray-700 border dark:text-gray-200 rounded-md focus:outline-none focus:bg-white focus:text-gray-900 dark:focus:bg-gray-800 dark:focus:text-gray-100"
              placeholder="Search..."
            />
          </div>
        </div>
      )}
      <div className={`overflow-x-auto bg-white rounded-lg shadow-md dark:bg-gray-800 ${props.className}`}>
        <table className="min-w-full divide-y divide-gray-200">
          {props.children}
        </table>
      </div>
    </>
  )
}

interface TableHeaderProps {
  children?: React.ReactNode;
  data: string[];
}

export const TableHeader = (props: TableHeaderProps) => {
  return (
    <thead>
    <tr>
      {props.data.map((item, index) => (
        <th
          key={index}
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
        >
          {item}
        </th>
      ))}
    </tr>
    </thead>
  )
}

interface TableBodyProps {
  children: React.ReactNode;
}

export const TableBody = (props: TableBodyProps) => {
  return (
    <tbody className="divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
    {props.children}
    </tbody>
  )
}
