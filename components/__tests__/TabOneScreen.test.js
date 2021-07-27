import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TabOneScreen from '../../screens/TabOneScreen';
import TabTwoScreen from '../../screens/TabTwoScreen';

test('TabOne should render OK', async () => {
  const { getByText, getByTestId, getAllByTestId, queryByText } = render(
    <TabOneScreen />,
  );
  const inputLenght = getByTestId('lenght');
  const inputWidth = getByTestId('width');
  const button = getByTestId('perform');
  fireEvent.changeText(inputLenght, '5');
  fireEvent.changeText(inputWidth, '10');
  fireEvent.press(button);

  const result = getByTestId('result');

  expect(result.props.children).toBe(50)
});

test('Tab2 should render OK', async () => {
  const { getByText, getByTestId, getAllByTestId, queryByText } = render(
    <TabTwoScreen />,
  );
  const TestOke = getByText("OKE");

  expect(TestOke).toBeTruthy();
});
