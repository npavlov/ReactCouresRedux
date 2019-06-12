import React from "react";
import "./SearchBar.css";
import { connect } from "react-redux";
import * as actions from "../AC";
import { bindActionCreators } from "redux";

const SearchBar = (props: {
  done: boolean;
  active: boolean;
  pattern: string;
  PatternAction(pattern: string): void;
  FilterAction(active: boolean): void;
}) => {
  const { done, active, pattern, PatternAction, FilterAction } = props;

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
          onChange={e => {
            PatternAction(e.target.value);
          }}
        />
        <div className="input-group-append">
          <button
            className={doneButtonStyle}
            type="button"
            onClick={() => {
              FilterAction(false);
            }}
          >
            Done
          </button>
          <button
            className={activeButtonStyle}
            type="button"
            onClick={() => {
              FilterAction(true);
            }}
          >
            Active
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  const { PatternAction, FilterAction } = bindActionCreators(actions, dispatch);

  return {
    PatternAction,
    FilterAction
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
