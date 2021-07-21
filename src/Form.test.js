import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {Form} from "./Form";

test('Submits if there is data', () => {
  const mockOnSubmit = jest.fn(); 
  render(<Form onSubmit ={mockOnSubmit} />);

  const textbox = screen.getByRole("textbox", {
    name: "name"
  }); 

  userEvent.type(textbox, "hello");
  const submit = screen.getByRole("button", {
    name: /submit/i
  }); 

  userEvent.click(submit); 

  expect(mockOnSubmit).toHaveBeenCalledWith({
    value: "hello"
  });  

});

test('Does not submit if there is not data', () => {
  const mockOnSubmit = jest.fn(); 
  render(<Form onSubmit ={mockOnSubmit} />);

  const submit = screen.getByRole("button", {
    name: /submit/i
  }); 

  userEvent.click(submit); 

  expect(mockOnSubmit).not.toHaveBeenCalled(); 
});

