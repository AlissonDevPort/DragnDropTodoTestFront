import styled from "styled-components";

export const IconContainerDefault = styled.button`
  margin-right: 10px;
  border: 1px solid #8687e7;
  cursor: pointer;
  transition: transform 0.3s ease;
  background-color:transparent;
`;
export const PencilContainer = styled(IconContainerDefault)`
  color: #5f88e7;
  &:hover {
    color: #004c98;
    transform: scale(1.2);
  }
`;
export const DelContainer = styled(IconContainerDefault)`
  color: #eb5656;
  &:hover {
    color: red;
    transform: scale(1.2);
  }
`;
export const CardContainer = styled.div`
  width: 370px;
  height: 85px;
  background-color: #363636;
  padding: 8px;
  margin: 10px 0px;
`;

export const CardHolder = styled.div`
  width: 500px;
  height: 144px;
  background-color: #363636;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const CardHeader = styled.header`
  width: 45px;
  height: 20px;
  background-color: transparent;
  border-radius: 2px;
  margin-top: 13px;
  margin-left: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:2px;
`;

export const CardPaper = styled.div`
  -webkit-box-shadow: 1px 2px 4px 0px rgba(62, 62, 62, 1);
  -moz-box-shadow: 1px 2px 4px 0px rgba(62, 62, 62, 1);
  box-shadow: 1px 2px 4px 0px rgba(62, 62, 62, 1);
  border-radius: 10px;
`;
export const CardContent = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 13px;
`;
export const CardDateInfo = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 8px;
  color: #646570;
  border-radius: 2px;
`;
export const CardBottomContent = styled.div`
  margin-left: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardHeaderText = styled.span`
  color: white;
  white-space: nowrap;
  font-size: 12px;
  margin-left:8px;
`;
