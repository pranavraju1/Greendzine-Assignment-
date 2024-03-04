import { useEffect, useState } from "react";
import "./profile.scss";
import { IoMdSearch } from "react-icons/io";

const Profile = () => {
  const initialData = [
    {
      id: 1,
      name: "Arjun",
      dob: "16-11-2000",
      role: "Software Engineer",
    },
    {
      id: 2,
      name: "Mahesh",
      dob: "15-01-2000",
      role: "Web Developer",
    },
    {
      id: 3,
      name: "Pranav",
      dob: "16-11-2000",
      role: "Web Developer",
    },
    {
      id: 4,
      name: "Raju",
      dob: "16-11-2000",
      role: "Web Developer",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  var filteredData = initialData.filter((item)=>item.name.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // If you want to perform any action on form submission, you can do it here.
  // };

  return (
    <div className="profile">
      <div className="assist"></div>
      <div className="logo">
        <div className="comp-logo"></div>
        <div className="logo-no">
          <div className="logo-no-text">{filteredData.length}</div>
        </div>
      </div>
      <div className="search">
        <div className="search-overlay"></div>
        <div className="search-text">
          <form>
            <input
              type="text"
              placeholder="Search with name"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button type="submit">
              <IoMdSearch style={{ width: "25px", height: "25px" }} />
            </button>
          </form>
        </div>
      </div>
      <div className="list">
        {filteredData.map((item, index) => (
          <div
            className="list-items"
            key={item.id}
            style={
              index % 2 !== 0 ? { marginLeft: "auto" } : { marginLeft: "0px" }
            }
          >
            <div className="items-overlay"></div>
            <div className="item">
              <div className="item-text">
                <div style={{ width: "80px" }}>EMP ID</div>
                <div style={{ width: "20px" }}>:</div>
                <div>
                  <b>{item.id}</b>
                </div>
              </div>
              <div className="item-text">
                <div style={{ width: "80px" }}>Name</div>
                <div style={{ width: "20px" }}>:</div>
                <div>
                  <b>{item.name}</b>
                </div>
              </div>
              <div className="item-text">
                <div style={{ width: "80px" }}>DOB</div>
                <div style={{ width: "20px" }}>:</div>
                <div>
                  <b style={{ color: "#86591d" }}>{item.dob}</b>
                </div>
              </div>
              <div className="item-text">
                <div style={{ width: "80px" }}>Role</div>
                <div style={{ width: "20px" }}>:</div>
                <div>
                  <b style={{ color: "#2c7d39" }}>{item.role}</b>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
