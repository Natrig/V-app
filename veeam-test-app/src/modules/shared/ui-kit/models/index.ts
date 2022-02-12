export enum FieldType {
  Text = 'text',
  Number = 'number',
  Checkbox = 'checkbox',
  Date = 'date',
  Radio = 'radio',
  Textarea = 'textarea',
}

export enum ButtonType {
  Cancel = 'cancel',
  Confirm = 'confirm',
}

export interface CommonField {
  label: string;
  name: string;
  type: FieldType;
  value?: string | number;
  checked?: boolean;
  optionValues?: string[];
}

export interface CommonButton {
  label: string;
  type: ButtonType;
}

export type CommonValue = string | number | boolean | undefined;
