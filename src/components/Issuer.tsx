// import React, { useState } from "react";
// import "./Issuer.css";

// const Issuer: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFile(e.target.files[0]);
//     }
//   };

//   return (
//     <div className="issuer-container">
//       <div className="issuer-card">
//         <h2>Upload .csv File</h2>
//         <hr />
//         <input
//           type="file"
//           accept=".csv"
//           onChange={handleFileUpload}
//           className="input-field"
//         />
//         <button className="submit-btn" type="submit">
//           Upload
//         </button>
//       </div>
//       <div className="table-container">
//         <h3>Batch Data</h3>
//         <table className="data-table">
//           <thead>
//             <tr>
//               <th>Batch ID</th>
//               <th>Completed</th>
//               <th>Pending</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>12345</td>
//               <td>10</td>
//               <td>2</td>
//               <td>Processing</td>
//             </tr>
//             <tr>
//               <td>67890</td>
//               <td>8</td>
//               <td>4</td>
//               <td>Pending</td>
//             </tr>
//             <tr>
//               <td>54321</td>
//               <td>15</td>
//               <td>0</td>
//               <td>Completed</td>
//             </tr>
//             <tr>
//               <td>98765</td>
//               <td>5</td>
//               <td>10</td>
//               <td>Pending</td>
//             </tr>
//             <tr>
//               <td>11223</td>
//               <td>20</td>
//               <td>1</td>
//               <td>Completed</td>
//             </tr>
//             <tr>
//               <td>44556</td>
//               <td>12</td>
//               <td>3</td>
//               <td>Processing</td>
//             </tr>
//             <tr>
//               <td>77889</td>
//               <td>9</td>
//               <td>6</td>
//               <td>Pending</td>
//             </tr>
//             <tr>
//               <td>99100</td>
//               <td>14</td>
//               <td>2</td>
//               <td>Processing</td>
//             </tr>
//             <tr>
//               <td>33445</td>
//               <td>18</td>
//               <td>0</td>
//               <td>Completed</td>
//             </tr>
//             <tr>
//               <td>55667</td>
//               <td>7</td>
//               <td>8</td>
//               <td>Pending</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Issuer;

// import React, { useState } from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   ColumnDef,
// } from "@tanstack/react-table";
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "../components/ui/table";
// import "./Issuer.css";

// const Issuer: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setFile(e.target.files[0]);
//     }
//   };

// const data = [
//   { batchId: "12345", completed: 10, pending: 2, status: "Processing" },
//   { batchId: "67890", completed: 8, pending: 4, status: "Pending" },
//   { batchId: "54321", completed: 15, pending: 0, status: "Completed" },
//   { batchId: "98765", completed: 5, pending: 10, status: "Pending" },
//   { batchId: "11223", completed: 20, pending: 1, status: "Completed" },
//   { batchId: "44556", completed: 12, pending: 3, status: "Processing" },
//   { batchId: "77889", completed: 9, pending: 6, status: "Pending" },
//   { batchId: "99100", completed: 14, pending: 2, status: "Processing" },
//   { batchId: "33445", completed: 18, pending: 0, status: "Completed" },
//   { batchId: "55667", completed: 7, pending: 8, status: "Pending" },
// ];

// const columns: ColumnDef<(typeof data)[0]>[] = [
//   { accessorKey: "batchId", header: "Batch ID" },
//   { accessorKey: "completed", header: "Completed" },
//   { accessorKey: "pending", header: "Pending" },
//   { accessorKey: "status", header: "Status" },
// ];

// const table = useReactTable({
//   data,
//   columns,
//   getCoreRowModel: getCoreRowModel(),
// });

//   return (
//     <div className="issuer-container">
//       <div className="issuer-card">
//         <h2>Upload .csv File</h2>
//         <hr />
//         <input
//           type="file"
//           onChange={handleFileUpload}
//           className="input-field"
//         />
//         <button className="submit-btn">Submit</button>
//       </div>

/* <div className="table-container">
  <h3>Batch Data</h3>
  <Table>
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead key={header.id}>
              {header.column.columnDef.header as string}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>{String(cell.getValue())}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div> */
//     </div>
//   );
// };

// export default Issuer;

import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../components/ui/table";
import "./Issuer.css";

const initialData = [
  { batchId: "12345", completed: 10, pending: 2, status: "Processing" },
  { batchId: "67890", completed: 8, pending: 4, status: "Pending" },
  { batchId: "54321", completed: 15, pending: 0, status: "Completed" },
  { batchId: "98765", completed: 5, pending: 10, status: "Pending" },
  { batchId: "11223", completed: 20, pending: 1, status: "Completed" },
  { batchId: "44556", completed: 12, pending: 3, status: "Processing" },
  { batchId: "77889", completed: 9, pending: 6, status: "Pending" },
  { batchId: "99100", completed: 14, pending: 0, status: "Completed" },
  { batchId: "33445", completed: 18, pending: 0, status: "Completed" },
  { batchId: "55667", completed: 23, pending: 0, status: "Completed" },
];

const Issuer: React.FC = () => {
  const [batches] = useState(initialData); // Table data remains unchanged
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // Handle file upload (without modifying the table)
  const handleFileUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    // Simulating file upload (replace with actual API call)
    console.log("Uploading file:", selectedFile.name);
    alert(`File "${selectedFile.name}" uploaded successfully!`);

    // Reset file input
    setSelectedFile(null);
  };

  return (
    <div className="issuer-container">
      <div className="issuer-card">
        <h2>Upload a .csv File</h2>
        <Input type="file" accept=".csv" onChange={handleFileChange} />
        <Button className="submit-btn" type="button" onClick={handleFileUpload}>
          Upload
        </Button>
      </div>

      <div className="table-container">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Batch ID</TableHead>
              <TableHead>Completed</TableHead>
              <TableHead>Pending</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {batches.map((batch) => (
              <TableRow key={batch.batchId}>
                <TableCell>{batch.batchId}</TableCell>
                <TableCell>{batch.completed}</TableCell>
                <TableCell>{batch.pending}</TableCell>
                <TableCell>{batch.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Issuer;
