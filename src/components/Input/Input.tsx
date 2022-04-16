import 'src/components/Input/Input.styles.scss';

type InputProps = {
  showlabel?: boolean;
  type?: 'text' | 'password' | 'email';
  labelTitle: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const {
    showlabel,
    labelTitle,
    placeholder,
    value,
    onChange,
    type = 'text',
  } = props;
  return (
    <div className="input-group">
      {showlabel && <label>{labelTitle}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
