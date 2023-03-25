import React from 'react';
import Form from './form/form';
import FormCardsWrapper from './formCards/formCardsWrapper';
import { data, IFormDate } from './formData/formData';

class FormPage extends React.Component<object> {
  state: { data: IFormDate[] };
  formRef = React.createRef<HTMLFormElement>();
  constructor(props: object) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    return (
      <div>
        <Form />
        <FormCardsWrapper data={[]} />
      </div>
    );
  }
}

export default FormPage;
