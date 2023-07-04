import React, { useState } from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const CSVHandler = () => {
  const [csvData, setCSVData] = useState([]);

  const handleImportCSV = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });

      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];

      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setCSVData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  const handleExportCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(csvData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    const fileData = XLSX.write(workbook, { bookType: 'csv', type: 'binary' });
    const buffer = new ArrayBuffer(fileData.length);
    const view = new Uint8Array(buffer);

    for (let i = 0; i < fileData.length; i++) {
      view[i] = fileData.charCodeAt(i) & 0xff;
    }

    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(blob, 'exported_data.csv');
  };

  return (
    <div>
      <h2>CSV Handler</h2>
      <input type='file' accept='.csv' onChange={handleImportCSV} />
      <button onClick={handleExportCSV}>Export CSV</button>
    </div>
  );
};

export default CSVHandler;
