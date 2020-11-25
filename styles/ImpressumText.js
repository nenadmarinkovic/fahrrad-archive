import styled from "styled-components";

export const ImpressumContent = styled.p`
  margin-top: -170px;
  text-align: center;
  padding-bottom: 120px;

  @media (max-width: 1130px) {
    margin-top: 0;
  }
`;

export const Title = styled.p`
  color: #1f388c;
  font-size: 24px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 2;
  color: #1f388c;
  margin-top: 20px;
`;

export const HeadLink = styled.p`
cursor: pointer;
margin-left: 30px;
color: white;
padding: 10px;
border-radius: 18px;
margin-right: 15px;
transition: 0.3s;

:hover {
  background-color: aliceblue;
  color: #1f388c;
}
`;



