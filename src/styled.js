import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
`;

export const ChartsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ChartItem = styled.div`
  padding: 24px;
  flex-grow: 1;
`;

export const StyledForm = styled.form`
  width: 35%;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 2px solid #8884d8;
  outline: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 8px;
`;
