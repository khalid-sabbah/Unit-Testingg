import React from 'react';
import Button from './Button';

const mockOnClick = jest.fn();

describe('Button component', () => {
  it('should render correctly with the given label', () => {
    const button = <Button label="Click me!" onClick={mockOnClick} />;
    expect(button.props.label).toBe('Click me!');
  });

  it('should call onClick when the button is clicked', () => {
    const button = <Button label="Click me!" onClick={mockOnClick} />;
    button.props.onClick();
    expect(mockOnClick).toHaveBeenCalled();
  });
});
