import React, { FC } from 'react';
import classNames from 'classnames';

import { ButtonType, CommonButton } from 'modules/shared/ui-kit/models';

import styles from './Button.module.css';

interface ButtonProps {
  button: CommonButton;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ button, className }) => {
  const clickHandler = () => {
    if (button.type === ButtonType.Confirm) {
      console.log('confirm');
    } else {
      console.log('cancel');
    }
  };

  return (
    <button className={classNames([styles.root, className])} type="button" onClick={clickHandler}>
      {button.label}
    </button>
  );
};
