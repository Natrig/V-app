import React, { FC, useEffect, useState } from 'react';

import { Field } from 'modules/shared/ui-kit/components/Field';
import { Button } from 'modules/shared/ui-kit/components/Button';
import { CommonField, CommonValue } from 'modules/shared/ui-kit/models';
import { FormType, FormData } from 'modules/form/models';

import styles from './Form.module.css';

interface FormProps {
  form: FormType | undefined;
}

export const Form: FC<FormProps> = ({ form }) => {
  const [formData, setFormData] = useState<FormData[]>();
  const [error, setError] = useState<string>();
  const fields = form?.fields;

  useEffect(() => {
    if (!fields) {
      setError('No Form data, check the correctness of JSON markup');
      return;
    }

    const data = fields.map(
      (field): FormData => ({
        name: field.name,
        value: field?.value,
      })
    );

    setError('');
    setFormData(data);
  }, [fields]);

  const handleChange = (value: CommonValue, field: CommonField) => {
    const otherData = formData?.filter((data) => data.name !== field.name) || [];

    setFormData([...otherData, { name: field.name, value }]);
  };

  const renderError = () => <p>{error}</p>;

  const renderControls = () =>
    form?.controls.map((cta, index) => <Button key={`key-${index}-${cta.label}`} button={cta} />);

  const renderFields = () =>
    form?.fields.map((field, index) => (
      <Field key={`key-${index}-${field.name}`} onChange={handleChange} field={field} />
    ));

  /*
   * TODO:: If we are considering a huge form (500+) with unlimited input fields
   * TODO:: we should rewrite the code and implement batch scrolling
   */
  const renderForm = () => {
    return (
      <>
        <p className={styles.header}>{form?.title}</p>
        {renderFields()}
        {renderControls()}
      </>
    );
  };

  return <div className={styles.root}>{error ? renderError() : renderForm()}</div>;
};
