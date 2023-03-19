import React from 'react';
import './search.scss';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: localStorage.getItem('search') || '' };
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };
    componentWillUnmount() {
        localStorage.setItem('search', this.state.value);
    }
    render() {
        return (React.createElement("input", { className: "search_input", type: "text", placeholder: "search..", value: this.state.value, onChange: this.handleChange }));
    }
}
export default Search;
