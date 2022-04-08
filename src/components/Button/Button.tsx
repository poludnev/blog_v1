import React from 'react';
import cn from 'classnames';

import './Button.styles.scss';

const Button = (props: {
  title: string;
  negative?: boolean;
  color?: string;
  onClick?: (e: React.FormEvent) => void;
  type?: 'button' | 'submit' | undefined;
}) => {
  const { title, negative, color = 'black', onClick, type = 'button' } = props;

  return (
    <button
      type={type}
      className={cn(
        'button',
        color,
        {
          'btn-negative': negative,
        },
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
