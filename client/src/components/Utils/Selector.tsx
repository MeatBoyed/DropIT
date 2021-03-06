import React, { useEffect } from 'react';

interface Props {
  title: string;
  options: string[];
  onChange: (newValue: string) => void;
  NOMARGIN?: string;
}

export const Selector: React.FC<Props> = ({ title, options, onChange, NOMARGIN }) => {
  useEffect(() => {
    onChange(options[0]);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`formSelectContainer ${NOMARGIN}`}>
      {title !== '' && <p className="formSelectTitle">{title}:</p>}
      <div className="formSelect">
        <select
          name="colour"
          id="colour"
          className="formSelector"
          defaultValue={options[0]}
          onChange={(e) => onChange(e.target.value)}
        >
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
