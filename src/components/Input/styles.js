import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 90%;
  height: 80px;
  background: #1e1e2f;
  border-radius: 10px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #00e0ff;
    font-size: 32px;
    font-family: 'Roboto Mono', monospace;
    text-align: right;
  }

  @media (max-width: 480px) {
    height: 70px;
    input {
      font-size: 26px;
    }
  }
`;
