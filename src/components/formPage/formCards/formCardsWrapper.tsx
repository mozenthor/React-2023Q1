import React from 'react';
import { IFormDate } from '../formData/formData';
import FormCard from './formCard/formCard';

class FormCardsWrapper extends React.Component<{ data: IFormDate[] }> {
  constructor(props: { data: IFormDate[] }) {
    super(props);
  }
  render() {
    return (
      <div className="cards_wrapper">
        {this.props.data.map((card) => (
          <FormCard key={card.name} data={card} />
        ))}
      </div>
    );
  }
}

export default FormCardsWrapper;
