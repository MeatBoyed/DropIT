import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  message: string;
}

export const Alert: React.FC<Props> = ({ message }) => {
  return (
    <div id="AlertContainer">
      <p className="message">{message}</p>
      <Link to="/">
        <p className="returnHome">Return home</p>
      </Link>
    </div>
  );
};
