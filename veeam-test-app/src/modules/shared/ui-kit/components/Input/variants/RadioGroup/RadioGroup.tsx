import React, { FC, SyntheticEvent } from 'react';
import { CommonField, CommonValue } from '../../../../models';

interface RadioGroupProps {
  onChange: (e: SyntheticEvent) => void;
  field: CommonField;
  currentValue: CommonValue;
}

export const RadioGroup: FC<RadioGroupProps> = ({ onChange, field, currentValue }) => {
  const { type, name, optionValues } = field;

  return (
    <div>
      {optionValues?.map((optValue) => (
        <span key={`key-${optValue}`}>
          <input
            id={name}
            checked={currentValue === optValue}
            type={type}
            value={optValue}
            onChange={onChange}
          />
          {optValue}
        </span>
      ))}
    </div>
  );
};
