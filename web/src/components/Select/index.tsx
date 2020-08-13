/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string | number;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  label, name, options, ...rest
}) => (
  <div className="select-block">
    <label htmlFor={name}>
      {label}

      <select id={name} {...rest}>
        <option value="" disabled hidden>Select one</option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default Select;
