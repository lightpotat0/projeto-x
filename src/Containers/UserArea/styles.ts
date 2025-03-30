import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2vh;
  padding-top: 2vh;
  gap: 2rem;
  height: fit-content;
  width: 100%;
  background-color: #f8f8f8;
`;

export const PanelContainer = styled.div`
  width: 250px;
  background-color: #fff;
  border-radius: 5px;
  margin-right: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
`;

export const PanelHeader = styled.div`
  background-color: #f57020;
  color: white;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  border-radius: 5px 5px 0 0;
`;

export const PanelList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const PanelListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const PanelIcon = styled.span`
  margin-right: 10px;
  font-size: 18px;
`;
