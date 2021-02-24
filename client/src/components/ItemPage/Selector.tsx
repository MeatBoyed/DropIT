import React from 'react';

interface Props {
  options: string[];
}

export const Selector: React.FC<Props> = ({ options }) => {
  return (
    <div className="itemColours">
      <p className="formSelectTitle">Colour:</p>
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
