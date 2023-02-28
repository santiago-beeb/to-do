import React from 'react';
import { ReactComponent as CheckSVG } from '../../assets/Icons/check.svg';
import { ReactComponent as EditSVG } from '../../assets/Icons/edit.svg';
import { ReactComponent as DeleteSVG } from '../../assets/Icons/delete.svg';
import '../../styles/TodoIcon.css';

const iconTypes = {
  "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "edit": color => (
    <EditSVG className="Icon-svg Icon-svg--edit" fill={color} />
  ),
  "delete": color => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = 'black', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
