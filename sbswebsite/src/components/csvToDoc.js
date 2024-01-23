// import React, { useState } from 'react';
// import Papa from 'papaparse';
// import { saveAs } from 'file-saver';
// import Docxtemplater from 'docxtemplater';
// import PizZip from 'pizzip';
// import html2canvas from 'html2canvas';

// const CsvToWordDocument = () => {
//   const [csvFile, setCsvFile] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setCsvFile(file);
//   };

//   const handleGenerateDocument = async () => {
//     if (!csvFile) {
//       alert('Please upload a CSV file.');
//       return;
//     }

//     // Parse CSV data
//     const csvData = await readCsvFile(csvFile);

//     // Download images and convert to base64
//     const imageArray = await downloadAndConvertImages(csvData);

//     // Create a new Word document
//     const doc = new Docxtemplater();
    
//     // Add content to the Word document
//     addContentToDocument(doc, csvData, imageArray);

//     // Render the document
//     try {
//       doc.render();
//     } catch (error) {
//       console.error('Error rendering document:', error);
//     }

//     // Save the generated Word document
//     const generatedDoc = doc.getZip().generate({ type: 'blob' });
//     saveAs(generatedDoc, 'output_document.docx');
//   };

//   const readCsvFile = (file) => {
//     return new Promise((resolve) => {
//       Papa.parse(file, {
//         complete: (result) => {
//           const data = result.data;
//           resolve(data);
//         },
//         header: true,
//       });
//     });
//   };

//   const downloadAndConvertImages = async (csvData) => {
//     const imageArray = [];

//     for (const entry of csvData) {
//       const imageUrl = entry['Please provide a picture of yourself!'];
//       const base64Image = await downloadAndConvertToBase64(imageUrl);
//       imageArray.push(base64Image);
//     }

//     return imageArray;
//   };

//   const downloadAndConvertToBase64 = async (imageUrl) => {
//     const image = await fetch(imageUrl).then(response => response.blob());
//     const base64Image = await new Promise((resolve) => {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         resolve(reader.result);
//       };
//       reader.readAsDataURL(image);
//     });

//     return base64Image;
//   };

//   const addContentToDocument = (doc, csvData, imageArray) => {
//     const numberOfRowsPerTable = 4;

//     // Add a title
//     doc.setData({
//       title: 'Generated Document',
//     });

//     // Add tables with images and names
//     for (let i = 0; i < csvData.length; i += numberOfRowsPerTable) {
//       const tableData = [];
//       for (let j = 0; j < numberOfRowsPerTable && i + j < csvData.length; j++) {
//         const entry = csvData[i + j];
//         tableData.push({
//           firstName: entry['What is your first name?'],
//           lastName: entry['What is your last name?'],
//           image: imageArray[i + j],
//         });
//       }
//       doc.attachModule(createTableModule(tableData));
//     }
//   };

//   const createTableModule = (data) => ({
//     getNewData: function () {
//       return { rows: this.data.tableData };
//     },
//     getTemplate: function () {
//       return {
//         type: 'table',
//         columns: [
//           { title: 'Image', key: 'image' },
//           { title: 'First Name', key: 'firstName' },
//           { title: 'Last Name', key: 'lastName' },
//         ],
//         rows: [
//           {
//             columns: [
//               { key: 'rows.image', type: 'image' },
//               { key: 'rows.firstName', type: 'string' },
//               { key: 'rows.lastName', type: 'string' },
//             ],
//           },
//         ],
//       };
//     },
//     data: {
//       tableData: data,
//     },
//   });

//   return (
//     <div>
//       <input type="file" accept=".csv" onChange={handleFileChange} />
//       <button onClick={handleGenerateDocument}>Generate Document</button>
//     </div>
//   );
// };

// export default CsvToWordDocument;
