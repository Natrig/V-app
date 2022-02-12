import { CommonField, CommonButton, CommonValue } from '../../shared/ui-kit/models';

export interface FormType {
  controls: CommonButton[];
  fields: CommonField[];
  title: string;
}

export interface FormData {
  name: string;
  value: CommonValue;
}
