import React from "react";
import "./Statistics.css";

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            {label}: {percentage}%
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
