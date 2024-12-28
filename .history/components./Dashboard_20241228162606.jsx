import { Link } from "react-router-dom";
import StatCard from "./StatCard";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/"></Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/tenants">Tenants</Link></li>
          <li><Link to="/payments">Payments</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
        <div className="profile">
          <button>Profile</button>
          <button>Logout</button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="content">
        <h1>Dashboard</h1>

        {/* Top Summary Section */}
        <div className="stats-overview">
          <StatCard title="Total Properties" value="15" />
          <StatCard title="Occupied Rooms" value="45" />
          <StatCard title="Available Rooms" value="12" />
          <StatCard title="Total Tenants" value="50" />
        </div>

        {/* Rooms Section with Images */}
        <div className="room-section">
          <h2>Room Images</h2>
          <div className="room-cards">
            <div className="room-card">
              <img
                src="https://img.freepik.com/free-photo/portrait-interracial-couple-reading-together_23-2148139281.jpg?uid=R140837171&semt=ais_tags_boosted"
                alt="Room 1"
              />
              <h3>Room 101</h3>
            </div>
            <div className="room-card">
              <img
                src="https://img.freepik.com/premium-photo/high-angle-young-friends-hostel_23-2150598868.jpg?uid=R140837171&semt=ais_tags_boosted"
                alt="Room 2"
              />
              <h3>Room 102</h3>
            </div>
            <div className="room-card">
              <img
                src="https://img.freepik.com/free-photo/full-shot-young-friends-hostel_23-2150598840.jpg?uid=R140837171&semt=ais_tags_boosted"
                alt="Room 3"
              />
              <h3>Room 103</h3>
            </div>
          </div>
        </div>

        {/* Tenants Section with Images */}
        <div className="tenant-section">
          <h2>Tenant Images</h2>
          <div className="tenant-cards">
            <div className="tenant-card">
              <img
                src="https://img.freepik.com/free-photo/full-shot-young-people-hostel_23-2150446738.jpg?uid=R140837171&semt=ais_tags_boosted"
                alt="Tenant 1"
              />
              <h3>Tenant</h3>
            </div>
            <div className="tenant-card">
              <img
                src="https://img.freepik.com/free-photo/reading-student_1098-19575.jpg?uid=R140837171&semt=ais_tags_boosted"
                alt="Tenant 2"
              />
              <h3>Tenant</h3>
            </div>
            <div className="tenant-card">
              <img
                src="https://img.freepik.com/free-photo/african-female-sitting-outside-with-her-laptop-phone-making-payment-online_181624-44803.jpg?uid=R140837171&semt=ais_tags_boosted"
                alt="Tenant 3"
              />
              <h3>Tenant</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

