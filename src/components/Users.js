import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const usersPerPage=5;


  useEffect(() => {
    // API call
    // axios.get("https://reqres.in/api/users")
    fetch ("/users.json")
     
          .then((response) => response.json())
        // console.log(response.data);
         .then((data) => setUsers(data.data))
      //   setUsers(response.data.data); // API la data[] kulla users iruku
      // })
      
      .catch(error => {
        console.error("Error fetching data:", error);
      })
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);


 return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>
          User <b>Management</b>
        </h2>
        <div>
          <button style={{ marginRight: "10px", padding: "6px 12px", background: "#007bff", color: "white", border: "none", borderRadius: "5px" }}>
            Export to Excel
          </button>
          <button style={{ padding: "6px 12px", background: "green", color: "white", border: "none", borderRadius: "5px" }}>
            Add New User
          </button>
        </div>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th style={thStyle}>#</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Role</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user.id} style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}>
              <td style={tdStyle}>{indexOfFirstUser+index + 1}</td>
              <td style={tdStyle}>
                <img
                  src={user.avatar}
                  alt={user.first_name}
                  width="40"
                  style={{ borderRadius: "50%", verticalAlign: "middle", marginRight: "10px" }}
                />
                {user.first_name} {user.last_name}
              </td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>{user.Role}</td> {/* role static ah kuduthiruken, JSON la add pannala */}
              <td style={tdStyle}>
                <span style={{ color: "green", fontWeight: "bold" }}>{user.Status}</span>
              </td>
              <td style={tdStyle}>
                <button style={{ marginRight: "8px", background: "transparent", border: "none", cursor: "pointer" ,color:"blue"}}>⚙️</button>
                <button style={{ background: "transparent", border: "none", cursor: "pointer" }}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        
  {/* Pagination info + controls */}
<div
  style={{
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between", // left + right alignment
    alignItems: "center",
  }}
>
  <div style={{ fontSize: "14px", color: "#555" }}>
    Showing {currentUsers.length} entries out of {users.length}
  </div>

  
  <div style={{ display: "flex", gap: "8px" }}>
    <button
      disabled={currentPage === 1}
      onClick={() => setCurrentPage((prev) => prev - 1)}
      style={pageBtn}
    >
      Previous
    </button>

    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index + 1}
        onClick={() => setCurrentPage(index + 1)}
        style={{
          ...pageBtn,
          ...(currentPage === index + 1 ? activePageBtn : {}),
        }}
      >
        {index + 1}
      </button>
    ))}

    <button
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage((prev) => prev + 1)}
      style={pageBtn}
    >
      Next
    </button>
  </div>
</div>

    </div>
  </div>
  );
}

const thStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "center",
};

const tdStyle = {
  padding: "12px",
  border: "1px solid #ddd",
};

const pageBtn = {
  border: "none",
  background: "transparent",
  padding: "6px 12px",
  cursor: "pointer",
  color: "#555",
  fontSize: "14px",
};

const activePageBtn = {
  backgroundColor: "#03a9f4", // blue
  color: "white",
  borderRadius: "4px",
};


export default Users;
