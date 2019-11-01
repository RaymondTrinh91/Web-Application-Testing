import React from 'react';
import {render, fireEvent, getAllByTestId} from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('it displays all buttons', ()=> {
  const {getByTestId} = render(<App/>)
  getByTestId(/ballbtn/i)
  getByTestId(/foulbtn/i)
  getByTestId(/strikesbtn/i)
  getByTestId(/hitbtn/i)
})

test('it increments ball', ()=> {
  const {getByTestId} = render(<App/>)
  const ballCounter = getByTestId(/ballcount/i)
  const ballButton = getByTestId(/ballbtn/i)
  fireEvent.click(ballButton)
  expect(ballCounter.textContent).toBe(`Ball: 1`)
  fireEvent.click(ballButton)
  expect(ballCounter.textContent).toBe(`Ball: 2`)
  fireEvent.click(ballButton)
  expect(ballCounter.textContent).toBe(`Ball: 3`)
  fireEvent.click(ballButton)
  expect(ballCounter.textContent).toBe(`Ball: 4`)
})

test('it clears the score', ()=> {
  const {getByTestId} = render(<App/>)
  const ballCounter = getByTestId(/ballcount/i)
  const ballButton = getByTestId(/ballbtn/i)
  const strikeCounter = getByTestId(/strikecount/i)
  const strikeButton = getByTestId(/strikesbtn/i)
  const hitButton = getByTestId(/hitbtn/i)
  fireEvent.click(ballButton)
  fireEvent.click(ballButton)
  fireEvent.click(strikeButton)
  fireEvent.click(strikeButton)
  expect(ballCounter.textContent).toBe(`Ball: 2`)
  expect(strikeCounter.textContent).toBe(`Strikes: 2`)
  fireEvent.click(hitButton)
  expect(ballCounter.textContent).toBe(`Ball: 0`)
  expect(strikeCounter.textContent).toBe(`Strikes: 0`)
})

test('fouls should not go over 2 strikes', ()=> {
  const {getByTestId} = render(<App/>)
  const strikeCounter = getByTestId(/strikecount/i)
  const foulButton = getByTestId(/foulbtn/i)
  fireEvent.click(foulButton)
  expect(strikeCounter.textContent).toBe(`Strikes: 1`)
  fireEvent.click(foulButton)
  expect(strikeCounter.textContent).toBe(`Strikes: 2`)
  fireEvent.click(foulButton)
  fireEvent.click(foulButton)
  fireEvent.click(foulButton)
  fireEvent.click(foulButton)
  fireEvent.click(foulButton)
  fireEvent.click(foulButton)
  fireEvent.click(foulButton)
  expect(strikeCounter.textContent).toBe(`Strikes: 2`)
})