import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 150px;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px;
  text-align: center;
  border-radius: 40px;
  background-color: aliceblue;
  box-shadow: 0 10px 20px rgba(30, 40, 92, 0.1);

  @media (max-width: 1145px) {
    margin: 20px;
  }
`;

export const Items = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 120px;

  @media (max-width: 1145px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Day = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: white;
  padding: 10px;
  background: #539d4d;
  border-radius: 10px;
`;

export const Time = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 2;
  color: #1f388c;
`;

export const TimeMI = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 2;
  color: #1f388c;
  margin-bottom: 20px;
`;

export const PlusText = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 2;
  color: #1f388c;
  margin-bottom: 20px;
  margin-left: 15px;
`;
