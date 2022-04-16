import React from 'react';
import cn from 'classnames';

import 'src/components/Button/Button.styles.scss';

const Button = (props: {
  title: string;
  onClick?: (event: React.FormEvent) => void;
  type?: 'button' | 'submit';
  style?: { color?: 'red' | 'blue' | 'green'; inverted?: boolean };
}) => {
  const { title, onClick, type = 'button', style } = props;

  return (
    <button
      type={type}
      className={cn('button', style?.color, {
        'inverted': style?.inverted,
      })}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
