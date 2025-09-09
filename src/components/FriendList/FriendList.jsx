import React from "react";
import "./FriendList.css";

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <span style={{ color: isOnline ? "green" : "red" }}>
            ●
          </span>
          <img src={avatar} alt={name} width="50" />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
