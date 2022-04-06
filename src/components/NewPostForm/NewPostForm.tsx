import React, { useState } from 'react';
import BlogRepository from '../../repository/blogRepository';

import './NewPostForm.styles.scss';
const NewPostForm = () => {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const timestamp = Date.now();
    BlogRepository.sendForm({ title, text, timestamp });
  };

  const changeHandler =
    (cb: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      cb(event.target.value);
    };

  return (
    <div className="new-post-form-container">
      <form onSubmit={submitHandler}>
        <div className="new-post-form-group">
          <label className="new-post-form-label">Title</label>
          <input
            type="text"
            className="new-post-form-input"
            value={title}
            onChange={changeHandler(setTitle)}
          ></input>
        </div>
        <div className="new-post-form-group">
          <label className="new-post-form-label">Text</label>
          <textarea
            className="new-post-form-text"
            value={text}
            onChange={changeHandler(setText)}
          ></textarea>
        </div>
        <div className="new-post-form-group">
          <button className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewPostForm;
