import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  message: string;
  returnHome: boolean;
}

export const Alert: React.FC<Props> = ({ message, returnHome }) => {
  return (
    <div id="AlertContainer">
      <p className="message">{message}</p>
      {returnHome && (
        <Link to="/">
          <p className="returnHome">Return home</p>
        </Link>
      )}
    </div>
  );
};

export default Alert;