import './Textarea.styles.scss';

type TextareaProps = {
  showlabel?: boolean;
  labelTitle: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = (props: TextareaProps) => {
  const { showlabel, labelTitle, placeholder, onChange, value } = props;

  return (
    <div className="textarea-group">
      {showlabel && <label>{labelTitle}</label>}
      <textarea
        placeholder={placeholder}
        aria-label={`Textarea for ${labelTitle}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Textarea;
