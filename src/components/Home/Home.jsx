import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="assist"></div>
      <div className="logo">
        <div className="comp-logo"></div>
        <div className="logo-no">
          <div className="logo-no-text">4</div>
        </div>
      </div>
      <div className="main">
        <div className="overlay"></div>
        <div className="main-top">
          <div className="top-name">Employee Productivity Dashboard</div>
          <div className="details">
            <div className="detail-item">
              <div className="detail-text">
                <div className="text">Productivity on Monday</div>
                <div className="per">4%</div>
              </div>
              <div className="detail-bar" style={{width:"6px"}}></div>
            </div>
            <div className="detail-item">
              <div className="detail-text">
                <div className="text">Productivity on Tuesday</div>
                <div className="per">92%</div>
              </div>
              <div className="detail-bar" style={{width:"140px"}}></div>
            </div>
            <div className="detail-item">
              <div className="detail-text">
                <div className="text">Productivity on Wednesday</div>
                <div className="per">122%</div>
              </div>
              <div className="detail-bar" style={{width:"183px"}}></div>
            </div>
            <div className="detail-item">
              <div className="detail-text">
                <div className="text">Productivity on Thursday</div>
                <div className="per">93%</div>
              </div>
              <div className="detail-bar" style={{width:"132px"}}></div>
            </div>
            <div className="detail-item">
              <div className="detail-text">
                <div className="text">Productivity on Friday</div>
                <div className="per">89%</div>
              </div>
              <div className="detail-bar" style={{width:"132px"}}></div>
            </div>
            <div className="detail-item">
              <div className="detail-text">
                <div className="text">Productivity on Saturday</div>
                <div className="per">98%</div>
              </div>
              <div className="detail-bar" style={{width:"146px"}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
