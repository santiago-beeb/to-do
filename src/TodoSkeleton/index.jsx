import React from "react";
import "./loading.css";

const LoadingTodo = () => {
  return (
    <li className="TodoItem-loading">
      <div className="LoaderBalls">
        <span className="LoaderBalls__item"></span>
        <span className="LoaderBalls__item"></span>
        <span className="LoaderBalls__item"></span>
      </div>
    </li>
  );
};

export { LoadingTodo };
