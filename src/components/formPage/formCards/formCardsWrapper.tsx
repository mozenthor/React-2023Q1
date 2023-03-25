import React from 'react';
import { IFormData } from '../form/formPage';
import FormCard from './formCard/formCard';

class FormCardsWrapper extends React.Component<{ data: IFormData[] }> {
  constructor(props: { data: IFormData[] }) {
    super(props);
  }
  render() {
    return (
      <div className="cards_wrapper">
        {this.props.data.map((card, index) => (
          <FormCard key={index} data={card} />
        ))}
      </div>
    );
  }
}

export default FormCardsWrapper;
