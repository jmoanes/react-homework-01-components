import React from "react";
import "./Profile.css";

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <img src={avatar} alt="User avatar" width="100" />
      <h2>{username}</h2>
      <p>@{tag}</p>
      <p>{location}</p>
      <ul>
        <li>Followers: {stats.followers}</li>
        <li>Views: {stats.views}</li>
        <li>Likes: {stats.likes}</li>
      </ul>
    </div>
  );
}

export default Profile;
