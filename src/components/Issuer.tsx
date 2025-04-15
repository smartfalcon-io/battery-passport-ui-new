

// // import React, { useState } from "react";
// // import axios from "axios";
// // import { Button } from "../components/ui/button";
// // import { Input } from "../components/ui/input";
// // import {
// //   Table,
// //   TableHeader,
// //   TableRow,
// //   TableHead,
// //   TableBody,
// //   TableCell,
// // } from "../components/ui/table";
// // import "../assets/css/Issuer.css";


// // const initialData = [
// //   { batchId: "12345", completed: 10, pending: 2, status: "Processing" },
// //   { batchId: "67890", completed: 8, pending: 4, status: "Pending" },
// //   { batchId: "54321", completed: 15, pending: 0, status: "Completed" },
// //   { batchId: "98765", completed: 5, pending: 10, status: "Pending" },
// //   { batchId: "11223", completed: 20, pending: 0, status: "Completed" },
// //   { batchId: "44556", completed: 12, pending: 3, status: "Processing" },
// //   { batchId: "77889", completed: 9, pending: 6, status: "Pending" },
// //   { batchId: "99100", completed: 14, pending: 0, status: "Completed" },
// //   { batchId: "33445", completed: 18, pending: 0, status: "Completed" },
// //   { batchId: "55667", completed: 23, pending: 0, status: "Completed" },
// // ];

// // const Issuer: React.FC = () => {
// //   const [batches] = useState(initialData);
// //   const [selectedFile, setSelectedFile] = useState<File | null>(null);
// //   const [searchQuery, setSearchQuery] = useState("");

// //   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRfaWQiOiI2ZTgyNGY0ZC03NTIwLTQzOTMtODZjMS1mMTlhMGEzZmM4YTMiLCJpYXQiOjE3NDM3MzQzNjAsImV4cCI6MTc0MzgyMDc2MH0.C_48OrfOCCfjBHyWqdcdGD6hGEIoMfF042MQFda4i08"; // Enter your Bearer token here

// //   // Handle file selection
// //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     if (event.target.files && event.target.files.length > 0) {
// //       setSelectedFile(event.target.files[0]);
// //     }
// //   };

// //   // Handle file upload with Axios + Bearer Token
// //   const handleFileUpload = async () => {
// //     if (!selectedFile) {
// //       alert("Please select a file first!");
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append("file", selectedFile);

// //     try {
// //       const response = await axios.post("http://localhost:8087/upload-csv/", formData, {
// //         headers: {
// //           "Content-Type": "multipart/form-data",
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });

// //       alert(`File "${selectedFile.name}" uploaded successfully!`);
// //       console.log("Upload Response:", response.data);

// //       // Reset file input after successful upload
// //       setSelectedFile(null);
// //     } catch (error) {
// //       console.error("Upload Error:", error);
// //       alert("Failed to upload file. Please try again.");
// //     }
// //   };

// //   // Filter table data based on search input
// //   const filteredBatches = batches.filter((batch) =>
// //     Object.values(batch).some((value) =>
// //       value.toString().toLowerCase().includes(searchQuery.toLowerCase())
// //     )
// //   );

// //   return (
// //     <div className="issuer-container">
// //       {/* File Upload Section */}
// //       <div className="issuer-card">
// //         <h2>Upload a .csv File</h2>
// //         <Input type="file" accept=".csv" onChange={handleFileChange} />
// //         <Button className="submit-btn" type="button" onClick={handleFileUpload}>
// //           Upload
// //         </Button>
// //       </div>

// //       {/* Search Bar */}
// //       <div className="search-bar">
// //         <Input 
// //           type="text"
// //           placeholder="🔍 Search by Batch ID, Status, etc."
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //         />
// //       </div>

// //       {/* Table Section */}
// //       <div className="table-container">
// //         <Table>
// //           <TableHeader>
// //             <TableRow>
// //               <TableHead>Batch ID</TableHead>
// //               <TableHead>Completed</TableHead>
// //               <TableHead>Pending</TableHead>
// //               <TableHead>Status</TableHead>
// //             </TableRow>
// //           </TableHeader>
// //           <TableBody>
// //             {filteredBatches.length > 0 ? (
// //               filteredBatches.map((batch) => (
// //                 <TableRow key={batch.batchId}>
// //                   <TableCell>{batch.batchId}</TableCell>
// //                   <TableCell>{batch.completed}</TableCell>
// //                   <TableCell>{batch.pending}</TableCell>
// //                   <TableCell>{batch.status}</TableCell>
// //                 </TableRow>
// //               ))
// //             ) : (
// //               <TableRow>
// //                 <TableCell colSpan={4} className="text-center">
// //                   No results found
// //                 </TableCell>
// //               </TableRow>
// //             )}
// //           </TableBody>
// //         </Table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Issuer;



// import React, { useState } from "react";
// import axios from "axios";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "../components/ui/table";
// import "../assets/css/Issuer.css";

// const initialData = [
//   { batchId: "12345", completed: 10, pending: 2, status: "Processing" },
//   { batchId: "67890", completed: 8, pending: 4, status: "Pending" },
//   { batchId: "54321", completed: 15, pending: 0, status: "Completed" },
//   { batchId: "98765", completed: 5, pending: 10, status: "Pending" },
//   { batchId: "11223", completed: 20, pending: 0, status: "Completed" },
//   { batchId: "44556", completed: 12, pending: 3, status: "Processing" },
//   { batchId: "77889", completed: 9, pending: 6, status: "Pending" },
//   { batchId: "99100", completed: 14, pending: 0, status: "Completed" },
//   { batchId: "33445", completed: 18, pending: 0, status: "Completed" },
//   { batchId: "55667", completed: 23, pending: 0, status: "Completed" },
// ];

// const Issuer: React.FC = () => {
//   const [batches] = useState(initialData);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showPopup, setShowPopup] = useState(false);

//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRfaWQiOiJkMzY5NWIxZC1kMDA2LTQ4YjYtODg5Mi01MzdmOGRmZjU5ZjAiLCJpYXQiOjE3NDM3NDEyNjAsImV4cCI6MTc0MzgyNzY2MH0.GAzIkkRpVB8JAG9LAKOqGm8_hxPSawWeTI2GOo9iru4";

//   // Handle file selection
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       setSelectedFile(event.target.files[0]);
//     }
//   };

//   // Handle file upload
//   const handleFileUpload = async () => {
//     if (!selectedFile) {
//       alert("Please select a file first!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       await axios.post("http://localhost:8087/upload-csv/", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setShowPopup(true); // Show success popup
//       setSelectedFile(null);
//     } catch (error) {
//       console.error("Upload Error:", error);
//       alert("Failed to upload file. Please try again.");
//     }
//   };

//   return (
//     <div className="issuer-container">
//       {/* File Upload Section */}
//       <div className="issuer-card">
//         <h2>Upload a .csv File</h2>
//         <Input type="file" accept=".csv" onChange={handleFileChange} />
//         <Button className="submit-btn" type="button" onClick={handleFileUpload}>
//           Upload
//         </Button>
//       </div>

//       {/* Popup for successful upload */}
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <h3>Upload Successful!</h3>
//             <p>Your file has been uploaded successfully.</p>
//             <Button onClick={() => setShowPopup(false)}>OK</Button>
//           </div>
//         </div>
//       )}

//       {/* Search Bar */}
//       <div className="search-bar">
//         <Input 
//           type="text"
//           placeholder="🔍 Search by Batch ID, Status, etc."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Table Section */}
//       <div className="table-container">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Batch ID</TableHead>
//               <TableHead>Completed</TableHead>
//               <TableHead>Pending</TableHead>
//               <TableHead>Status</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {batches.filter((batch) =>
//               Object.values(batch).some((value) =>
//                 value.toString().toLowerCase().includes(searchQuery.toLowerCase())
//               )
//             ).length > 0 ? (
//               batches.filter((batch) =>
//                 Object.values(batch).some((value) =>
//                   value.toString().toLowerCase().includes(searchQuery.toLowerCase())
//                 )
//               ).map((batch) => (
//                 <TableRow key={batch.batchId}>
//                   <TableCell>{batch.batchId}</TableCell>
//                   <TableCell>{batch.completed}</TableCell>
//                   <TableCell>{batch.pending}</TableCell>
//                   <TableCell>{batch.status}</TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={4} className="text-center">
//                   No results found
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default Issuer;



import React, { useState } from "react";
import axios from "axios";
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

const initialData = [
  { batchId: "12345", completed: 10, pending: 2, status: "Processing" },
  { batchId: "67890", completed: 8, pending: 4, status: "Pending" },
  { batchId: "54321", completed: 15, pending: 0, status: "Completed" },
  { batchId: "98765", completed: 5, pending: 10, status: "Pending" },
  { batchId: "11223", completed: 20, pending: 0, status: "Completed" },
  { batchId: "44556", completed: 12, pending: 3, status: "Processing" },
  { batchId: "77889", completed: 9, pending: 6, status: "Pending" },
  { batchId: "99100", completed: 14, pending: 0, status: "Completed" },
  { batchId: "33445", completed: 18, pending: 0, status: "Completed" },
  { batchId: "55667", completed: 23, pending: 0, status: "Completed" },
];

const Issuer: React.FC = () => {
  const [batches] = useState(initialData);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRfaWQiOiJkMzY5NWIxZC1kMDA2LTQ4YjYtODg5Mi01MzdmOGRmZjU5ZjAiLCJpYXQiOjE3NDM3NDEyNjAsImV4cCI6MTc0MzgyNzY2MH0.GAzIkkRpVB8JAG9LAKOqGm8_hxPSawWeTI2GOo9iru4";

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post("http://localhost:8087/upload-csv/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setShowPopup(true); // Show success popup
      setSelectedFile(null);
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to upload file. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-screen-xl p-5 md:p-10 mx-auto mt-24 flex flex-col items-center justify-center ml-0 lg:ml-80">
      {/* File Upload Section */}
      <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-md w-full mb-24">
        <h2 className="text-lg font-semibold mb-2 text-left">Upload a .csv File</h2>
        <Input type="file" accept=".csv" onChange={handleFileChange} className="mb-4" />
        <Button className="w-full max-w-[120px] mt-4 p-3 bg-green-600 text-white rounded-md cursor-pointer transition duration-300 hover:bg-green-700" type="button" onClick={handleFileUpload}>
          Upload
        </Button>
      </div>

      {/* Popup for successful upload */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Upload Successful!</h3>
            <p>Your file has been uploaded successfully.</p>
            <Button onClick={() => setShowPopup(false)}>OK</Button>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="flex justify-center items-center my-4 w-full">
        <Input 
          type="text"
          placeholder="🔍 Search by Batch ID, Status, etc."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-4/5 mx-auto" 
        />
      </div>

      {/* Table Section */}
      <div className="mt-5 w-full max-w-2xl mx-auto">
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
            {batches.filter((batch) =>
              Object.values(batch).some((value) =>
                value.toString().toLowerCase().includes(searchQuery.toLowerCase())
              )
            ).length > 0 ? (
              batches.filter((batch) =>
                Object.values(batch).some((value) =>
                  value.toString().toLowerCase().includes(searchQuery.toLowerCase())
                )
              ).map((batch) => (
                <TableRow key={batch.batchId}>
                  <TableCell>{batch.batchId}</TableCell>
                  <TableCell>{batch.completed}</TableCell>
                  <TableCell>{batch.pending}</TableCell>
                  <TableCell>{batch.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Issuer;