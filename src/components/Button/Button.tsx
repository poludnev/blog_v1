import React from 'react';
import cn from 'classnames';

import 'src/components/Button/Button.styles.scss';
import styles from 'src/components/Button/Button.module.css';

const Button = (props: {
  title: string;
  disabled?: boolean;
  onClick?: (event: React.FormEvent) => void;
  type?: 'button' | 'submit';
  style?: {
    color?: 'red' | 'blue' | 'green' | 'grey';
    inverted?: boolean;
    rounded?: boolean;

    width?: string;
    size?: 'smaller' | 'small';
  };
}) => {
  const { title, onClick, type = 'button', style, disabled } = props;

  const width = style?.width ? style.width : 'w-100';

  return (
    <button
      disabled={disabled}
      type={type}
      className={cn(
        styles[`w-${width}`],
        'button',
        !disabled && style?.color,
        style?.size,
        {
          'inverted': style?.inverted,
          'rounded': style?.rounded,
          'disabled': disabled,
        },
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
