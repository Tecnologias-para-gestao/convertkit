import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid green;
  color: green;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    !props.primary &&
    css`
      background: green;
      color: white;
    `};
`

export default Button;