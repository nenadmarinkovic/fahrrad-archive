import styled from "styled-components";

export const ContentWraper = styled.div`
  margin-top: 100px;

  @media (max-width: 1145px) {
    margin-top: 0;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
  margin-bottom: 170px;

  @media (max-width: 1240px) {
    justify-content: space-evenly;
  }

  @media (max-width: 1145px) {
    flex-direction: column;
  }
`;

export const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 320px;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;

  text-align: center;
  border-radius: 40px;
  background-color: aliceblue;
  box-shadow: 0 10px 20px rgba(30, 40, 92, 0.1);

  @media (max-width: 1240px) {
    width: 240px;
  }

  @media (max-width: 1145px) {
    width: 340px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    width: 230px;
  }
`;

export const ItemText = styled.p`
  line-height: 1.8;
  font-size: 18px;
  font-weight: 400;
  color: #1f388c;
`;
