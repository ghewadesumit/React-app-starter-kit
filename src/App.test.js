import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App';
test('button has correct initial text', () => {
 render(<App/>);

 // find an elment with a role of button and text of 'Change to blue'
 const colorButton = screen.getByRole('button',{name:'Change to blue'});

 // expect the background color to be red
 expect(colorButton).toHaveStyle({"background-color":'red'})

 //clickButton
 fireEvent.click(colorButton);

 //expect the background color to be blue
 expect(colorButton).toHaveStyle({"background-color":'blue'});

 // expect the button text 'Change to red'
 expect(colorButton).toHaveTextContent('Change to red');
});


test('initial conditions',()=>{
  render(<App/>);

  const colorButton = screen.getByRole('button',{name:'Change to blue'});
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

})

test('checking button disabling and enabling',()=>{
  render(<App/>);

  const colorButton = screen.getByRole('button',{name:'Change to blue'});
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox', {name:'checkbox disabled'});
  fireEvent.click(checkbox);

  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
})


describe('spaces for one inner captial letter',()=>{

  test('Works for no inner capital letters',()=>{
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  })

  test('Works for one inner captial letter',()=>{
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  })

  test('Works for multiple inner captial letters',()=>{
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})