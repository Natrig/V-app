import React, { FC, SyntheticEvent } from 'react';
import _ from 'lodash';

import { CommonField, CommonValue } from 'modules/shared/ui-kit/models';

export interface TextareaProps {
  field: CommonField;
  className?: string;
  onChange: (value: CommonValue, field: CommonField) => void;
}

export const Textarea: FC<TextareaProps> = ({ field, onChange, className }) => {
  const { name, label, value } = field;

  const handleChange = _.debounce((e: SyntheticEvent) => {
    const { value: targetValue } = e.target as HTMLInputElement;

    onChange?.(targetValue, field);
  }, 250);

  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} onChange={handleChange} title={label} value={value} />
    </div>
  );
};
