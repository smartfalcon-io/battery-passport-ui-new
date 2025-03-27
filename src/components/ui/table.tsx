import * as React from "react";

const Table = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) => (
  <table
    className={`w-full border-collapse border border-gray-300 ${className}`}
    {...props}
  />
);

const TableHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className={`bg-gray-100 ${className}`} {...props} />
);

const TableBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className={className} {...props} />
);

const TableRow = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className={`hover:bg-gray-200 ${className}`} {...props} />
);

const TableHead = ({
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th
    className={`px-4 py-2 text-left font-semibold border border-gray-300 ${className}`}
    {...props}
  />
);

const TableCell = ({
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className={`px-4 py-2 border border-gray-300 ${className}`} {...props} />
);

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
