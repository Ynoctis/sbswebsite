import React, { useState } from 'react';

const JsonToCsvConverter = () => {
  const [jsonData, setJsonData] = useState(null);

  const fetchData = async () => {
    try {
        const token = localStorage.getItem('access_token');
        const response = await fetch('https://warm-harbor-21177-1d402ead92d1.herokuapp.com/api/users/getall/', {
          headers: {
            Authorization: `Bearer ${token}`,
            // You can add other headers if needed
          },
        });
      const data = await response.json();
      setJsonData(data);
    //   console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const convertToJson = () => {
    if (jsonData) {
      // Define headers and their corresponding keys in the JSON data
      const headerKeyMap = [
        { header: 'Member', key: 'previously_played' },
        { header: 'Date Submitted', key: 'date_submitted', width: 105 },
        { header: 'Fees', key: 'fees' },
        { header: 'Owing', key: 'owing' },
        { header: 'Transaction Date', key: 'transaction_date' },
        { header: 'Last Name', key: 'last_name' },
        { header: 'First Name', key: 'first_name' },
        { header: 'Reg Form', key: 'reg_form' },
        { header: 'Team Number', key: 'team_number' },
        { header: 'Team Color', key: 'team_color' },
        { header: 'Date of Birth', key: 'date_of_birth' },
        { header: 'Age', key: 'age' },
        { header: 'Position', key: 'position' },
        { header: 'Address', key: 'address' },
        { header: 'Postal Code', key: 'postal_code' },
        { header: 'Email', key: 'email' },
        { header: 'Cell Phone', key: 'cell_phone' },
        { header: 'Other Phone', key: 'other_phone' },
        { header: 'Absent Days', key: 'absent_days' },
        { header: 'Player Notes', key: 'player_notes' },
        // ... other headers and keys
      ];

      // Construct CSV content
      const csvHeaders = headerKeyMap.map(({ header }) => header).join(',');
      const csvRows = jsonData.map(record => headerKeyMap.map(({ key }) => record[key] || '').join(','));
      const csvContent = csvRows.join('\n');

      const blob = new Blob([csvHeaders + '\n' + csvContent], { type: 'text/csv' });

      // Create a virtual link element and set attributes for download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'data.csv';

      // Append the link to the body and trigger a click event to download
      document.body.appendChild(link);
      link.click();

      // Clean up: remove the link from the body
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={convertToJson} disabled={!jsonData}>
        Convert to CSV
      </button>
    </div>
  );
};

export default JsonToCsvConverter;
