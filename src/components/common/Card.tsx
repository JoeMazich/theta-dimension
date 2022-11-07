import React from "react";
import "./styles/card.scss";

interface CardProps {
  header?: string;
  body?: string;
}

const Card = ({ header, body }: CardProps) => {
  return (
    <div className="card">
      <div className="card-sweep">
        <div className="card-header">{header}</div>
      </div>
      <div className="card-body">{body}</div>
    </div>
  );
};

export default Card;
