import React from 'react';
import './search.scss';

class Search extends React.Component<object, { value: string }> {
  constructor(props: object) {
    super(props);
    this.state = { value: localStorage.getItem('search') || '' };
  }
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };
  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.value);
  }
  render() {
    return (
      <input
        className="search_input"
        type="text"
        placeholder="search.."
        value={this.state.value}
        onChange={this.handleChange}
      ></input>
    );
  }
}

export default Search;
