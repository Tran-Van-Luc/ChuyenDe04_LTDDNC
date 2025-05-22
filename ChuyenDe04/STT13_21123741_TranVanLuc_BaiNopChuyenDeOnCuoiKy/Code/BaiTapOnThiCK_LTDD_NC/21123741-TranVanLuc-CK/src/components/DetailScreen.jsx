import React, { useEffect, useState } from 'react';
import '../styles/DetailScreen.css';

function DetailScreen() {
  const [suggestedAccounts, setSuggestedAccounts] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);

  useEffect(() => {
    fetch('https://67f5209a913986b16fa35cbf.mockapi.io/suggested_Accounts') 
      .then(res => res.json())
      .then(data => setSuggestedAccounts(data));

    fetch('https://67f5209a913986b16fa35cbf.mockapi.io/liked_Videos') 
      .then(res => res.json())
      .then(data => setLikedVideos(data));
  }, []);

  return (
    <div className="detail-screen">
      <div className="profile-section">
        <img src="/src/assets/Avatar 78.jpg" alt="avatar" className="avatar"/>
        <h2>Kiran Glaucus</h2>
        <p>I love a colorful life ❤️❤️❤️</p>
        <div className="stats">
          <span>203<br />Following</span>
          <span>628<br />Followers</span>
          <span>2634<br />Likes</span>
        </div>
        <div className="btn-group">
          <button className="follow-btn">Follow</button>
          <button className="message-btn">Message</button>
        </div>
      </div>

      <div className="suggested-section">
        <h3>Suggested accounts <a href="#">View more</a></h3>
        <div className="suggested-list">
          {suggestedAccounts.map((acc) => (
            <div key={acc.id} className="account-card">
              <img src={acc.avatar} alt={acc.name} />
              <p>{acc.name}</p>
              <button>Follow</button>
            </div>
          ))}
        </div>
      </div>


      <div className="video-section">
        <div className="tab">
          <span className="tab-label">🎥 Videos</span>
          <span className="tab-label active">❤️ Liked</span>
        </div>
        <div className="video-list">
          {likedVideos.map(video => (
            <div key={video.id} className="video-card">
              <img src={video.thumbnail} alt="video" />
              <div className="video-info">
                <span className="icon">▶</span>
                <span className="views">{video.views} views</span>
                <span className="heart">♡</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default DetailScreen;
