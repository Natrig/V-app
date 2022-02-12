import React, { FC } from 'react';
import classNames from 'classnames';

import { CommonField, FieldType, CommonValue } from 'modules/shared/ui-kit/models';
import { Input } from 'modules/shared/ui-kit/components/Input';
import { Textarea } from 'modules/shared/ui-kit/components/Textarea';

import styles from './Field.module.css';

export interface FieldProps {
  field: CommonField;
  onChange: (value: CommonValue, field: CommonField) => void;
  className?: string;
}

export const Field: FC<FieldProps> = ({ field, onChange, className }) => {
  const { type } = field;
  const fieldClassname = classNames([styles.root, className]);

  if (type === FieldType.Textarea) {
    return <Textarea onChange={onChange} field={field} className={fieldClassname} />;
  }

  return <Input onChange={onChange} field={field} className={fieldClassname} />;
};
