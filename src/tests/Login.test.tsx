import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {it, expect} from 'vitest';
import Login from '../pages/Login/Login';
import { MemoryRouter, Route, Routes } from 'react-router-dom';



beforeEach(() => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </MemoryRouter>
  );
})

const getEmailandPasswordFields = () => {
  const emailInput: HTMLInputElement = screen.getByRole("textbox");
  const passwordInput: HTMLInputElement = screen.getByPlaceholderText("Password");
  const showPasswordButton: HTMLSpanElement = screen.getByText("SHOW");
  const loginButton: HTMLButtonElement = screen.getByRole("button");

  return {
    emailInput,
    passwordInput,
    showPasswordButton,
    loginButton
  }
}



// Testing that the form fields are empty
it("Input should be initially empty", () => {

  const {emailInput, passwordInput} = getEmailandPasswordFields();

  expect(emailInput).toHaveValue("");
  expect(passwordInput).toHaveValue("");  
})

// Testing the show password button
it("should toggle password", async() => {
  const {passwordInput, showPasswordButton} = getEmailandPasswordFields();
  
  await userEvent.type(passwordInput, "Cripple");
  await userEvent.click(showPasswordButton);

  expect(passwordInput.type).toBe("text");  
})

// Testing the Login Button without filling the form
it("Login Button renders the Dashboard ",  async() => {
  const {loginButton, } = getEmailandPasswordFields();

  await userEvent.click(loginButton);

  expect (window.location.pathname).toBe("/");
});