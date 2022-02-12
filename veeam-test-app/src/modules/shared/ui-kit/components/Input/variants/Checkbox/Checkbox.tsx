import React, { FC, useEffect, useState } from 'react';

import { CommonField, CommonValue } from 'modules/shared/ui-kit/models';

interface CheckboxProps {
  onSwitch: (switcher: boolean) => void;
  field: CommonField;
}

export const Checkbox: FC<CheckboxProps> = ({ onSwitch, field }) => {
  const { type, name, checked } = field;
  const [currentValue, setCurrentValue] = useState<CommonValue>();

  useEffect(() => {
    if (checked) {
      setCurrentValue(checked);
    }
  }, [checked, field.type]);

  const handleChange = () => {
    setCurrentValue(!currentValue);
    onSwitch?.(!currentValue);
  };

  return <input id={name} type={type} onChange={handleChange} checked={Boolean(currentValue)} />;
};
