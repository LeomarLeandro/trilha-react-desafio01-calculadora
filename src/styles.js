import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #1e1e2f;
  width: 340px;
  min-height: 500px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
