import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: relative;
  background: #1f388c;
`;

export const HeaderContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;s
  margin-right: 15px;
  margin-left: 15px;
`;

export const LogoText = styled.span`
  font-size: 30px;

  @media (max-width: 1045px) {
    display: none;
  }
`;

export const HeadLink = styled.span`
  cursor: pointer;
  margin-left: 30px;
  color: white;
  padding: 10px;
  border-radius: 18px;
  margin-right: -10px;
  transition: 0.3s;

  :hover {
    background-color: aliceblue;
    color: #1f388c;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  cursor: pointer;
`;

export const SVGShape = styled.svg`
  margin-top: -50px;

  @media (max-width: 1130px) {
    display: none;
  }
`;

export const SVGLogo = styled.svg`
  margin-right: 5px;
  margin-left: -5px;
`;

export const FlexItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;

  @media (max-width: 1230px) {
    padding-right: 30px;
  }

  @media (max-width: 680px) {
    display: none;
  }
`;
