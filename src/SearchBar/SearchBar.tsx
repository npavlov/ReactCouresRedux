import React from "react";
import "./SearchBar.css";

const SearchBar = (props: {
  onPatternChanged(e: React.ChangeEvent<HTMLInputElement>): void;
  onDoneChanged(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  onActiveChanged(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  done: boolean;
  active: boolean;
  pattern: string;
}) => {
  const {
    done,
    active,
    pattern,
    onPatternChanged,
    onDoneChanged,
    onActiveChanged
  } = props;

  const doneButtonStyle = done ? "btn btn-info" : "btn btn-outline-info";

  const activeButtonStyle = active ? "btn btn-info" : "btn btn-outline-info";

  return (
    <div className="SearchBar">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={pattern}
          onChange={onPatternChanged}
        />
        <div className="input-group-append">
          <button
            className={doneButtonStyle}
            type="button"
            onClick={onDoneChanged}
          >
            Done
          </button>
          <button
            className={activeButtonStyle}
            type="button"
            onClick={onActiveChanged}
          >
            Active
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
