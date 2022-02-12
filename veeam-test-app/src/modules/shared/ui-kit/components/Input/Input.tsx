import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import _ from 'lodash';

import { CommonField, CommonValue, FieldType } from 'modules/shared/ui-kit/models';
import { RadioGroup } from './variants/RadioGroup/RadioGroup';
import { Checkbox } from './variants/Checkbox/Checkbox';

export interface InputProps {
  field: CommonField;
  onChange?: (value: CommonValue, field: CommonField) => void;
  className?: string;
}

export const Input: FC<InputProps> = ({ field, onChange, className }) => {
  const { type, value, label, name, checked } = field;
  const [currentValue, setCurrentValue] = useState<CommonValue>();

  useEffect(() => {
    if (field.type === FieldType.Checkbox && checked) {
      setCurrentValue(checked);
    }
  }, [checked, field.type]);

  const handleChange = (e: SyntheticEvent) => {
    const { value: targetValue } = e.target as HTMLInputElement;
    setCurrentValue(targetValue);
    onChange?.(targetValue, field);
  };

  const handleSwitch = (switcher: boolean) => {
    onChange?.(switcher, field);
  };

  const renderInput = () => {
    switch (type) {
      case FieldType.Radio:
        return <RadioGroup field={field} onChange={handleChange} currentValue={currentValue} />;
      case FieldType.Checkbox:
        return <Checkbox field={field} onSwitch={handleSwitch} />;
      case FieldType.Text:
        return (
          <input id={name} type={type} value={value} onChange={_.debounce(handleChange, 1000)} />
        );
      default:
        return <input id={name} type={type} onChange={handleChange} value={value} />;
    }
  };

  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      {renderInput()}
    </div>
  );
};
