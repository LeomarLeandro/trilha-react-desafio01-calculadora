import styled from 'styled-components';

export const ButtonContainer = styled.button`
  flex: 1;
  padding: 20px;
  margin: 4px;
  border: none;
  border-radius: 12px;
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(145deg, #00b4d8, #0077b6);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
    background: linear-gradient(145deg, #0096c7, #0077b6);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }
`;
