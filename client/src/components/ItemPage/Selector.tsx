import React from 'react';

interface Props {
  title: string;
  options: string[];
}

export const Selector: React.FC<Props> = ({ title, options }) => {
  return (
    <div className="itemColours">
      <p className="formSelectTitle">{title}:</p>
      <div className="formSelect">
        <select name="colour" id="colour" className="formSelector">
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Selector;
