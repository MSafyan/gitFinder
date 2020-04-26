import React, { useState } from "react";

const Search = ({ setAlert, searchUsers, showClearButton, clearUsers }) => {
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    // console.log(typeof this.state);
    if (text === "") {
      setAlert("Please Enter Something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  const clearButton = () => {
    if (showClearButton) {
      return (
        <button type="submit" onClick={clearUsers}>
          s click
        </button>
      );
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          className=""
          value={text}
          onChange={onChange}
          placeholder="enter text"
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
      </form>
      {clearButton()}
    </div>
  );
};

export default Search;
