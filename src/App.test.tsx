import { render, screen, waitFor } from '@testing-library/react';
import About from './components/about/about';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from './components/notFound/notFoundPage';
import userEvent from '@testing-library/user-event';
import FormPage from './components/formPage/form/formPage';
import CardsWrapper from './components/cards/cardsWrapper';

test('renders 404 not found', () => {
  render(<NotFoundPage />);
  const element = screen.getByText(/404/i);
  expect(element).toBeVisible();
});

test('renders about us', () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  const element = screen.getByText(/about us/i);
  expect(element).toBeVisible();
});

test('renders input name', async () => {
  render(<FormPage />);
  const inputName = screen.getByText('Name:');
  const inputDate = screen.getByText('Birthday:');
  const submitButton = screen.getByText('Submit');
  await userEvent.type(inputName, 'testName');
  await userEvent.type(inputDate, '20-03-2030');
  await userEvent.click(submitButton);
  expect(!screen.getByText(/3-16 characters/i));
  expect(screen.getByText(/Choose correct date/i));
});

test('render image cards', async () => {
  render(<CardsWrapper searchValue="lake" />);
  await waitFor(() => expect(screen.getByText('Alice Triquet')));
});
