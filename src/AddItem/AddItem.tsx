import React from "react";
import "./AddItem.css";
export default class AddItem extends React.Component<
  {
    AddItem(label: string): void;
  },
  {
    text: string;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: ""
    };
  }

  onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: e.target.value
    });
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.AddItem(this.state.text);

    this.setState({
      text: ""
    });
  };

  render() {
    const { text } = this.state;

    return (
      <div className="AddItem">
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="What To Do?"
              value={text}
              onChange={this.onTextChange}
            />
            <div className="input-group-append">
              <button className="btn btn-info" type="submit">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
