import React from 'react';
import './card.scss';
class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "card_container" },
            React.createElement("div", { className: "card_name" },
                this.props.data.brand,
                " ",
                this.props.data.model),
            React.createElement("div", { className: "card_image_wrapper" },
                React.createElement("img", { className: "card_image", src: `/images/${this.props.data.id}.webp`, alt: "" })),
            React.createElement("ul", { className: "card_description_wrapper" },
                React.createElement("li", { className: "card_description_item" },
                    React.createElement("span", { className: "card_description_item_bold" }, "Model: "),
                    " ",
                    this.props.data.model),
                React.createElement("li", { className: "card_description_item" },
                    React.createElement("span", { className: "card_description_item_bold" }, "Color: "),
                    " ",
                    this.props.data.color),
                React.createElement("li", { className: "card_description_item" },
                    React.createElement("span", { className: "card_description_item_bold" }, "Memory: "),
                    this.props.data.memory),
                React.createElement("li", { className: "card_description_item" },
                    React.createElement("span", { className: "card_description_item_bold" }, "Released: "),
                    this.props.data.released))));
    }
}
export default Card;
