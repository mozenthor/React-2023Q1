import React from 'react';
import FormCard from './formCard/formCard';
import './formCardsWrapper.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

function FormCardsWrapper() {
  const data = useSelector((state: RootState) => state.form.cardData);
  return (
    <div className="formCards_wrapper">
      {data.map((card, index) => (
        <FormCard key={index} data={card} />
      ))}
    </div>
  );
}

export default FormCardsWrapper;
