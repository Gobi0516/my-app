import React from "react";
import "./UserProfile.css";

export default function UserProfile() {
  return (
    <div className="all">
      <div className="profile-container">
        <div className="profile-card">
          {/* Header */}
          <div className="header">
            <div className="brand">
              <div className="logo"></div>
              <span className="brand-name">Kodecolor</span>
            </div>

            <div className="search-box">
              <input type="text" placeholder="Search" />
              <span className="search-icon"></span>
            </div>

            <nav className="nav-links">
              <a href="#">Find people</a>
              <a href="#">
                Messages <span className="badge">4</span>
              </a>
              <a href="#">My Contacts</a>
            </nav>

            <div className="avatar">
              <img src="https://reqres.in/img/faces/1-image.jpg" alt="avatar" />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
          </div>

          {/* Body */}
          <div className="body">
            {/* Sidebar */}
            <div className="sidebar">
              <div className="photo-card">
                <img
                  src="https://reqres.in/img/faces/2-image.jpg"
                  alt="Profile"
                />
              </div>

              <div className="work-card">
                <h4>Work</h4>
                <div className="work">
                  <div className="work-item">
                    <div className="title">
                      Spotify New York{" "}
                      <span className="badge primary">Primary</span>
                    </div>
                    <div className="desc">
                      170 William Street New York, NY 10038-78 212-312-51
                    </div>
                  </div>

                  <div className="work-item">
                    <div className="title">
                      Metropolitan Museum{" "}
                      <span className="badge secondary">Secondary</span>
                    </div>
                    <div className="desc">
                      525 E 68th Street New York, NY 10651-78 156-187-60
                    </div>
                  </div>
                </div>
              </div>

              <div className="skills-card">
                <h4>Skills</h4>
                <div className="tags">
                  <div className="tag">Branding</div>
                  <div className="tag">UI/UX</div>
                  <div className="tag">Web Design</div>
                  <div className="tag">Packaging</div>
                  <div className="tag">Print & Editorial</div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="main">
              <div className="profile-header">
                <h2>Jeremy Rose</h2>
                <span className="role-location">Product Designer</span>
                <p>New York, NY</p>
                <button className="bookmark">🔖 Benchmark</button>
              </div>

              <div className="rating-actions">
                <div className="rating">
                  <span>8.6</span> ☆☆☆☆☆
                </div>
                <div className="actions">
                  <button className="btn">Send message</button>
                  <button className="btn primary">Contacts</button>
                  <button className="btn">Report User</button>
                </div>
              </div>

              <div className="tabs">
                <button className="tab">Timeline</button>
                <button className="tab active">About</button>
              </div>

              <div className="about-card">
                <h4>Contact Information</h4>
                <div className="info-grid">
                  <div className="info-row">
                    <div className="info-text">
                      <div className="label">Phone:</div>
                      <div className="value">+1 123 456 7890</div>
                    </div>
                  </div>
                  <div className="info-row">
                    <div className="info-text">
                      <div className="label">Address:</div>
                      <div className="Addvalue">
                        525 E 68th Street, New York, NY 10651-78 156-187-60
                      </div>
                    </div>
                  </div>
                  <div className="info-row">
                    <div className="info-text">
                      <div className="label">E-mail:</div>
                      <div className="value">hello@jeremyrose.com</div>
                    </div>
                  </div>
                  <div className="info-row">
                    <div className="info-text">
                      <div className="label">Site:</div>
                      <div className="value">www.jeremyrose.com</div>
                    </div>
                  </div>
                </div>

                <h4>Basic Information</h4>
                <div className="basic-info">
                  <div className="birthday">
                    <div className="label">Birthday:</div>
                    <div className="value">June 5, 1992</div>
                  </div>
                  <div className="gender">
                    <div className="label">Gender:</div>
                    <div className="value">Male</div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Main */}
          </div>
          {/* End of Body */}
        </div>
      </div>
    </div>
  );
}
