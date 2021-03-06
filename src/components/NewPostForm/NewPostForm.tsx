import React, { useEffect, useState } from 'react';
import Input from 'src/components/Input/Input';
import Textarea from 'src/components/Textarea/Textarea';
import Button from 'src/components/Button/Button';
import { useNewPostContext } from 'src/contexts/NewPostContext';

import 'src/components/NewPostForm/NewPostForm.styles.scss';

type NewPostFormProps = {
  onClose: (() => void) | undefined;
  submitAction:
    | ((formData: { title: string; text: string; timestamp: number }) => void)
    | undefined;
};
const NewPostForm = (props: NewPostFormProps) => {
  const { currentPostText, updatePostText } = useNewPostContext();
  const { onClose, submitAction } = props;
  const [textAreaValue, setTextAreaValue] = useState<string>(currentPostText);
  const [inputValue, setInputValue] = useState<string>('');

  const changeHandler =
    (cb: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      cb(event.target.value);
    };

  const clearForm = () => {
    setTextAreaValue('');
    setInputValue('');
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (submitAction)
      submitAction({
        title: inputValue,
        text: textAreaValue,
        timestamp: Date.now(),
      });

    clearForm();
    if (onClose) onClose();

    console.log('submit handler');
  };

  useEffect(() => {
    updatePostText(textAreaValue);
  }, [textAreaValue, updatePostText]);

  return (
    <form onSubmit={submitHandler}>
      <Input
        labelTitle="You post title"
        placeholder="Your post Title"
        value={inputValue}
        onChange={changeHandler(setInputValue)}
      />
      <Textarea
        labelTitle="Post text"
        placeholder="Put your text here"
        value={textAreaValue}
        onChange={changeHandler(setTextAreaValue)}
      />
      <div className="form-control-group">
        <Button
          title={'Submit'}
          type="submit"
          style={{ color: 'blue', inverted: true }}
        />
        <Button
          title={'Close'}
          style={{ color: 'red', inverted: true }}
          onClick={onClose}
        />
      </div>
    </form>
  );
};

export default NewPostForm;
