import React from 'react';
import { IFormData } from '../form/formPage';
import FormCard from './formCard/formCard';
import './formCardsWrapper.scss';

function FormCardsWrapper(props: { data: IFormData[] }) {
  return (
    <div className="formCards_wrapper">
      {props.data.map((card, index) => (
        <FormCard key={index} data={card} />
      ))}
    </div>
  );
}

export default FormCardsWrapper;
