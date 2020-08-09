/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => (
  <div className="textarea-block">
    <label htmlFor={name}>
      {label}
      <textarea id={name} {...rest} />
    </label>
  </div>
);

export default Textarea;
