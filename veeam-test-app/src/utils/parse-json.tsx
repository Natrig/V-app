import { FormType } from 'modules/form/models';

export const isValidJSON = (jsonStr: string) => {
  try {
    JSON.parse(jsonStr);
  } catch (ignored) {
    return false;
  }

  return true;
};

export const parseJSONForm = (jsonStr: string): FormType => JSON.parse(jsonStr) as FormType;
