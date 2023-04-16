import { render, screen, waitFor } from '@testing-library/react';
import About from './components/about/about';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from './components/notFound/notFoundPage';
import userEvent from '@testing-library/user-event';
import FormPage from './components/formPage/form/formPage';
import CardsWrapper from './components/cards/cardsWrapper';
import { Provider } from 'react-redux';
import { store } from './store';

test('renders 404 not found', () => {
  render(
    <Provider store={store}>
      <NotFoundPage />
    </Provider>
  );
  const element = screen.getByText(/404/i);
  expect(element).toBeVisible();
});

test('renders about us', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <About />
      </MemoryRouter>
    </Provider>
  );
  const element = screen.getByText(/about us/i);
  expect(element).toBeVisible();
});

test('renders input name', async () => {
  render(
    <Provider store={store}>
      <FormPage />
    </Provider>
  );
  const inputName = screen.getByText('Name:');
  const inputDate = screen.getByText('Birthday:');
  const submitButton = screen.getByText('Submit');
  await userEvent.type(inputName, 'testName');
  await userEvent.type(inputDate, '20-03-2030');
  await userEvent.click(submitButton);
  expect(!screen.getByText(/3-16 characters/i));
  expect(screen.getByText(/Choose correct date/i));
});

test('render start screen', async () => {
  render(
    <Provider store={store}>
      <CardsWrapper />
    </Provider>
  );
  await waitFor(() => expect(screen.getByText('Type text to search for a photo')));
});

test('render modal window', async () => {
  render(
    <Provider store={store}>
      <CardsWrapper />
    </Provider>
  );
  await waitFor(async () => {
    const card = screen.getByText('Alice Triquet');
    await userEvent.click(card);
    await waitFor(() => expect(screen.getByText('Size:')));
  }).catch((err) => console.log(err));
});
