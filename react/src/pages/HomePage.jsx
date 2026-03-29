import Sidebar from "../components/Sidebar.jsx";
import Main from "../components/Main.jsx";
const Homepage = () => {
  return (
    <div>
      {/* Home Pages */}

      <div className="d-flex ">
        {/* sidebar */}
        <Sidebar />
        <div className="p-3" id="main-container">
          {/* main */}
          <Main />
        </div>
      </div>
      {/* filter */}
    </div>
  );
};

export default Homepage;
