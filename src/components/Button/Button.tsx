import React from 'react';

// This is a Button component that accepts props for handling click events and custom styling.
interface ButtonProps {
  onClick: () => void; // Function to handle click events
  style?: React.CSSProperties; // Optional custom styling for the button
  children: React.ReactNode; // Content to be displayed inside the button
}

const Button: React.FC<ButtonProps> = ({ onClick, style, children }) => {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;