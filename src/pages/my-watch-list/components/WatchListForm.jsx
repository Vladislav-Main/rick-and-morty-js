import { useState } from 'react';

export const WatchListForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          className="form-control"
          value={userInput}
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Please input episode name..."
        />
        <button type="submit" className="btn btn-outline-success">
          Save
        </button>
      </div>
    </form>
  );
};
