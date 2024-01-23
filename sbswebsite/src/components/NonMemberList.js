import React, { useState, useEffect } from 'react';
import './MemberList.css'

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null); // edit attempt
  const [editedFields, setEditedFields] = useState({}); // edit attempt

  useEffect(() => {
    // Fetch data from the API endpoint
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
        setUsers(data.filter(user => user.previously_played === 'No')); // Filter users with previously_played === 'Yes'
        // console.log(data)
        // console.log(Array.from(data))
        // setUsers(data); // Set the retrieved data to the state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run the effect only once on component mount

  // edit attempt 
  const handleEdit = (userId) => {
    setEditingUserId(userId);
    setEditedFields({});
  };

  // edit attempt
  const handleSave = async (userId) => {
    try {
      const token = localStorage.getItem('access_token');
      await fetch(`https://warm-harbor-21177-1d402ead92d1.herokuapp.com/api/users/${userId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editedFields),
      });

      // Refresh the user data after saving changes
      const updatedUsers = await fetch('https://warm-harbor-21177-1d402ead92d1.herokuapp.com/api/users/getall/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(response => response.json());

      setUsers(updatedUsers.filter(user => user.previously_played === 'No'));
      setEditingUserId(null);
      setEditedFields({});
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  // edit attempt
  const handleFieldChange = (field, value) => {
    setEditedFields((prevEditedFields) => ({
      ...prevEditedFields,
      [field]: value,
    }));
  };

  return (
    <div>
      <h2>Non Member Table</h2>
      <table>
        <thead style={{ width: '100%' }}>
          <tr className="full-width-row">
            {/* Assume the objects have 'id', 'name', 'email', etc. attributes */}
            {/* <th>ID</th> */}
            <th>Date Submitted</th>
            <th>Fees</th>
            <th>Owing</th>
            <th>Transaction Date</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Reg Form</th>
            <th>Team Number</th>
            <th>Team Color</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Position</th>
            <th>Rank</th>
            <th>Address</th>
            <th>Postal Code</th>
            <th>Email</th>
            <th>Cell Phone</th>
            <th>Other Phone</th>
            <th>Absent Days</th>
            <th>Player Notes</th>
            {/* Add more headers based on your object attributes */}
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {/* Dynamically render table cells based on user attributes */}
              {/* <td>{user.id}</td> */}
              {editingUserId === user.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={editedFields.date_submitted || user.date_submitted}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                      onChange={(e) => handleFieldChange('date_submitted', e.target.value)}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.date_submitted}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.fees || user.fees}
                      onChange={(e) => handleFieldChange('fees', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.fees}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.owing || user.owing}
                      onChange={(e) => handleFieldChange('owing', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.owing}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.transaction_date || user.transaction_date}
                      onChange={(e) => handleFieldChange('transaction_date', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.transaction_date}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.last_name || user.last_name}
                      onChange={(e) => handleFieldChange('last_name', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.last_name}</td>
              )}
              {/* <td>{user.first_name}</td> */}
              {editingUserId === user.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={editedFields.first_name || user.first_name}
                      style={{ width: '100%' }}
                      onChange={(e) => handleFieldChange('first_name', e.target.value)}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.first_name}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.reg_form || user.reg_form}
                      onChange={(e) => handleFieldChange('reg_form', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.reg_form}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.team_number || user.team_number}
                      onChange={(e) => handleFieldChange('team_number', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.team_number}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.team_color || user.team_color}
                      onChange={(e) => handleFieldChange('team_color', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.team_color}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.date_of_birth || user.date_of_birth}
                      onChange={(e) => handleFieldChange('date_of_birth', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.date_of_birth}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.age || user.age}
                      onChange={(e) => handleFieldChange('age', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.age}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.position || user.position}
                      onChange={(e) => handleFieldChange('position', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.position}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.rank || user.rank}
                      onChange={(e) => handleFieldChange('rank', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.rank}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.address || user.address}
                      onChange={(e) => handleFieldChange('address', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.address}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.postal_code || user.postal_code}
                      onChange={(e) => handleFieldChange('postal_code', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.postal_code}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.email || user.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.email}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.cell_phone || user.cell_phone}
                      onChange={(e) => handleFieldChange('cell_phone', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.cell_phone}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.other_phone || user.other_phone}
                      onChange={(e) => handleFieldChange('other_phone', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.other_phone}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.absent_days || user.absent_days}
                      onChange={(e) => handleFieldChange('absent_days', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.absent_days}</td>
              )}
              {editingUserId === user.id ? (
                <>
                  <td >
                    <input
                      type="text"
                      value={editedFields.player_notes || user.player_notes}
                      onChange={(e) => handleFieldChange('player_notes', e.target.value)}
                      style={{ width: '100%', boxSizing: 'border-box' }}
                    />
                  </td>
                  {/* Repeat similar pattern for other editable fields */}
                </>
              ) : (
                <td>{user.player_notes}</td>
              )}
              {/* Add more cells based on your object attributes */}
              <td>
                {editingUserId === user.id ? (
                  <>
                    <button onClick={() => handleSave(user.id)}>Save</button>
                    <button onClick={() => setEditingUserId(null)}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // <div>asd</div>
    // <div>
    //   <h2>Member Table</h2>
    //   <table>
    //     <thead>
    //       <tr>
    //         {Object.keys(users[0]).map((field) => (
    //           <th key={field}>{field}</th>
    //         ))}
    //         <th>Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {users.map((user) => (
    //         <tr key={user.id}>
    //           {Object.keys(user).map((field) => (
    //             <td key={field}>
    //               {editingUserId === user.id ? (
    //                 <input
    //                   type="text"
    //                   value={editedFields[field] || user[field]}
    //                   onChange={(e) => handleFieldChange(field, e.target.value)}
    //                 />
    //               ) : (
    //                 user[field]
    //               )}
    //             </td>
    //           ))}
    //           <td>
    //             {editingUserId === user.id ? (
    //               <>
    //                 <button onClick={() => handleSave(user.id)}>Save</button>
    //                 <button onClick={() => setEditingUserId(null)}>Cancel</button>
    //               </>
    //             ) : (
    //               <button onClick={() => handleEdit(user.id)}>Edit</button>
    //             )}
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default UserTable;
