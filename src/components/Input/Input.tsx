import './Input.styles.scss';

type InputProps = {
  showlabel?: boolean;
  labelTitle: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const { showlabel, labelTitle, placeholder, value, onChange } = props;
  return (
    <div className="input-group">
      {showlabel && <label>{labelTitle}</label>}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
