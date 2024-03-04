import { useEffect, useState } from "react";
import "./profile.scss";
import { IoMdSearch } from "react-icons/io";
const Profile = () => {
  const data = [
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

  const [inputs, setInputs] = useState("");
  const [showData, setShowData] = useState(data);

  const change = (e) => {
    setInputs(e.target.value);
  };

  useEffect(()=>{
    submit();
  },[inputs]);

  useEffect(()=>{
    // console.log("showData",showData);
  },[showData])

  const submit = () => {
    const filteredData = data.filter((item) => {
      const NAME = item.name.toLowerCase();
      return NAME.includes(inputs);
    });
    setShowData(filteredData);
  };

  return (
    <div className="profile">
      <div className="assist"></div>
      <div className="logo">
        <div className="comp-logo"></div>
        <div className="logo-no">
          <div className="logo-no-text">4</div>
        </div>
      </div>
      <div className="search">
        <div className="search-overlay"></div>
        <div className="search-text">
          <form onSubmit={submit}>
            <input
              type="text"
              placeholder="Search with name"
              onChange={change}
              value={inputs}
              id="in"
            />
            <button>
              <IoMdSearch style={{ width: "25px", height: "25px" }} />
            </button>
          </form>
        </div>
      </div>
      <div className="list">
        {showData &&
          showData.map((item, index) => (
            <div
              className="list-items"
              style={
                index % 2 !== 0
                  ? { marginLeft: "44px" }
                  : { marginLeft: "20px" }
              }
              key={item.id}
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
