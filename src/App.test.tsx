import { render, screen } from '@testing-library/react';
import About from './components/about/about';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import NotFoundPage from './components/notFound/notFoundPage';
import Card from './components/cards/card/card';
import CardsWrapper from './components/cards/cardsWrapper';
import mobileData from './assets/data/mobileData';
import userEvent from '@testing-library/user-event';
import FormPage from './components/formPage/form/formPage';

test('renders Phone store', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const element = screen.getByText(/phone store/i);
  expect(element).toBeVisible();
});

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
  const element = screen.getByText(/Online mobile phone shop/i);
  expect(element).toBeVisible();
});

test('renders card', () => {
  const mobile = {
    id: '1',
    brand: 'Apple',
    model: 'iPhone',
    color: 'blue',
    memory: '1Gb',
    released: '2023',
  };
  render(<Card data={mobile} />);
  const element = screen.getByText(mobile.brand + ' ' + mobile.model);
  expect(element).toBeVisible();
});

test('renders cards', () => {
  render(<CardsWrapper />);
  const element = screen.getAllByText(/color/i);
  expect(element.length).toEqual(mobileData.length);
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
