import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

<div class="dashboard">
    <div class="sidebar">
        <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Fixed Prospects</a></li>
            <li><a href="#">Library</a></li>
            <li><a href="#">Shortlist</a></li>
            <li><a href="#">Inbox</a></li>
            <li><a href="#">Admin Settings</a></li>
        </ul>
    </div>
    <div class="main-content">
        <div class="search-bar">
            <input type="text" placeholder="Search..." />
        </div>
        <div class="prospect-section">
            <div class="input-row">
                <div class="input-col">
                    <label for="prospect_name">Prospect Name</label>
                    <input type="text" id="prospect_name" placeholder="Enter name or URL" />
                </div>
                <div class="input-col">
                    <label for="platform">Platform</label>
                    <select id="platform">
                        <option>You Tube</option>
                        <option>Instagram</option>
                    </select>
                </div>
                <div class="input-col">
                    <label for="genre">Genre</label>
                    <select id="genre">
                        <option>All</option>
                        <option>Programming</option>
                    </select>
                   
                </div>
                <div class="input-row">
                    <div class="input-col">
                        <label for="status">Status</label>
                        <select id="status">
                            <option>Available</option>
                        </select>
                    </div>
            </div>
                <div class="input-col">
                    <label for="subscribers">Subscribers</label>
                    <select id="subscribers">
                        <option>100K-1M</option>
                    </select>
                </div>
                <div class="input-col">
                    <label for="views">Views</label>
                    <select id="views">
                        <option>100K-10M</option>
                    </select>
                </div>
                <div class="input-col">
                    <button type="search" id="search">Search</button> 
                </div>
            </div>
        </div>
        <div class="stats-section">
            <h3>Status</h3>
            <div class="stats-row">
                <div class="stat-box" >
                    <img src="main-qimg-2b36080648c8ef781db97d373b2c3ec8-lq.jpeg" id="pic1" alt="Followers" />
                    <div class="name">
                        <p>Joseph Rannson</p>
                    </div>
                    <div class="followers">
                    <p>Followers</p>
                    <p>234,456</p>
                </div>
                <div class="vie">
                    <p>Views</p>
                    <p>456,784,348</p>
                </div>
                <div class="videos">
                    <p>Videos</p>
                    <p>4,021</p>
                </div>
                </div>
                <div class="stat-box">
                    <img src="images (1).jpeg" alt="Views" />
                    <div class="name">
                        <p>Jenifer Winget</p>
                    </div>
                    <div class="followers">
                        <p>Followers</p>
                        <p>12,239</p>
                    </div>
                    <div class="vie">
                        <p>Views</p>
                        <p>132,302</p>
                    </div>
                    <div class="videos">
                        <p>Videos</p>
                        <p>124</p>
                    </div>
                </div>
                <div class="stat-box">
                    <img src="download.jpeg" alt="Videos" />
                    <div class="name">
                        <p>Franklin Thomas</p>
                    </div>
                    <div class="followers">
                        <p>Followers</p>
                        <p>1,320</p>
                    </div>
                    <div class="vie">
                        <p>Views</p>
                        <p>265,567</p>
                    </div>
                    <div class="videos">
                        <p>Videos</p>
                        <p>92</p>
                    </div>
                </div>
                <div class="stat-box">
                    <img src="e6396dbc99cf9f0179a2a9dcae8562ab.jpg" id="pic1" alt="Followers" />
                    <div class="name">
                        <p>Virat Kohli</p>
                    </div>
                    <div class="followers">
                        <p>Followers</p>
                        <p>187,831</p>
                    </div>
                    <div class="vie">
                        <p>Views</p>
                        <p>64,763,784</p>
                    </div>
                    <div class="videos">
                        <p>Videos</p>
                        <p>754</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="recent-activity">
        <h3>Recent Activity</h3>
        <div class="activity-box">
            <div class="id">Josh Gordon</div>
            <hr />
            <div class="description">Shortlisted by Michael Scott</div>
            <div class="time">2 hours ago</div>
        </div>
        <div class="activity-box">
            <div class="id">Terry Andrews</div>
            <hr />
            <div class="description">Created profile and updated profile information</div>
            <div class="time">2 hours ago</div>
        </div>
        <div class="activity-box">
            <div class="id">Erik Jonson</div>
            <hr />
            <div class="description">Shortlisted by Michael Scott</div>
            <div class="time">2 hours ago</div>
        </div>
        <div class="activity-box">
            <div class="id">Joseph Rannson</div>
            <hr />
            <div class="description">Melanie Palmer accepted your invitation</div>
            <div class="time">2 hours ago</div>
        </div>
    </div>
</div>

</div>
  );
}

export default App;
