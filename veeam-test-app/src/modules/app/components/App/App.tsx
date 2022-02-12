import React, { useState } from 'react';

import { FormType } from 'modules/form/models';
import { JSONEditor } from 'modules/json-editor/components/JSONEditor';
import { Form } from 'modules/form/components/Form';
import { CommonValue } from 'modules/shared/ui-kit/models';
import { isValidJSON, parseJSONForm } from 'utils/parse-json';

import styles from './App.module.css';

export const App = () => {
  const [form, setForm] = useState<FormType>();

  const handleJSONChange = (value: CommonValue) => {
    const jsonStr = String(value?.toString());

    if (isValidJSON(jsonStr)) {
      setForm(parseJSONForm(jsonStr));
    }
  };

  return (
    <div className={styles.App}>
      <JSONEditor onChange={handleJSONChange} />
      <Form form={form} />
    </div>
  );
};
