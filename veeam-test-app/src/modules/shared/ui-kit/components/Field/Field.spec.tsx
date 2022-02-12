import React from 'react';
import { render } from '@testing-library/react';

import { Field } from './Field';
import { CommonField, CommonValue, FieldType } from '../../models';

const defaultProps = {
  onChange: (value: CommonValue, field: CommonField) => {
    return 'test';
  },
};

const defaultFieldProps = {
  label: 'test',
  name: 'test',
};

describe('Field', () => {
  it('should render Text input', () => {
    const props = {
      ...defaultProps,

      field: {
        ...defaultFieldProps,
        type: FieldType.Text,
      },
    };

    const { container } = render(<Field {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render Number input', () => {
    const props = {
      ...defaultProps,

      field: {
        ...defaultFieldProps,
        type: FieldType.Number,
      },
    };

    const { container } = render(<Field {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render Checkbox input', () => {
    const props = {
      ...defaultProps,

      field: {
        ...defaultFieldProps,
        type: FieldType.Checkbox,
        checked: true,
      },
    };

    const { container } = render(<Field {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render Textarea input', () => {
    const props = {
      ...defaultProps,

      field: {
        ...defaultFieldProps,
        type: FieldType.Textarea,
      },
    };

    const { container } = render(<Field {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render RadioGroup input', () => {
    const props = {
      ...defaultProps,

      field: {
        ...defaultFieldProps,
        type: FieldType.Radio,
        optionValues: ['test1', 'test2', 'test3'],
      },
    };

    const { container } = render(<Field {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
