import styled from "styled-components";

export const FooterWrap = styled.div`
  height: 300px;
  background: #40933a;
  position: relative;

  @media (max-width: 1045px) {
    height: unset;
  }
`;

export const SVGWave = styled.svg`
  margin-bottom: -180px;

  @media (max-width: 1045px) {
    display: none;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
  margin-left: 15px;

  @media (max-width: 1045px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FlexLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1045px) {
    text-align: center;
  }
`;

export const FlexRight = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1045px) {
    text-align: center;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 27px;
  margin-top: 20px;

  @media (max-width: 1045px) {
    flex-direction: column;
    text-align: center;
    line-height: 1.8;
  }
`;

export const LogoText = styled.h3`
  color: white;
  font-size: 27px;
  @media (max-width: 1045px) {
    text-align: center;
  }
`;

export const ItemName = styled.h3`
  color: white;
  font-size: 17px;
  margin-top: 25px;
  line-height: 2;

  @media (max-width: 1045px) {
    margin-top: 45px;
  }
`;

export const Item = styled.h3`
  color: white;
  font-size: 27px;
  margin-top: 5px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Copyright = styled.div`
  color: white;
  font-size: 21px;
  padding-top: 25px;
  padding-bottom: 10px;
  background: #40933a;
  text-align: center;

  @media (max-width: 1045px) {
    padding-top: 75px;
  }
`;

export const Created = styled.div`
  color: white;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 15px;
`;

export const Top = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 0;
  right: 120px;
  cursor: pointer;

  @media (max-width: 960px) {
    display: none;
  }
`;
