import React, { FC } from 'react';

import { CommonField, CommonValue, FieldType } from 'modules/shared/ui-kit/models';

import styles from './JSONEditor.module.css';
import { Field } from '../../../shared/ui-kit/components/Field';

export interface JSONEditorProps {
  onChange: (value: CommonValue, field: CommonField) => void;
}

export const JSONEditor: FC<JSONEditorProps> = ({ onChange }) => {
  const field = {
    label: 'Paste JSON here:',
    name: 'JsonEditor',
    type: FieldType.Textarea,
  };

  return (
    <div className={styles.root}>
      <Field field={field} onChange={onChange} className={styles.jsonEditor} />
    </div>
  );
};
