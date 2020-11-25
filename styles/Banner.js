import styled from "styled-components";

export const BannerWrap = styled.div`
  margin-top: -230px;
  display: flex;
  align-items: center;
  background: #e3f2eb;
  padding-bottom: 30px;
  margin-right: 15px;
  margin-left: 15px;

  @media (max-width: 1130px) {
    margin-top: 0;
  }
`;

export const TextWrap = styled.div`
  margin-top: 50px;
  width: 40%;

  @media (max-width: 1045px) {
    width: 100%;
    text-align: center;
  }
`;

export const Illustration = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1045px) {
    flex-direction: column;
  }
`;

export const MainText = styled.h1`
  color: #1f388c;
  font-size: 64px;
  font-weight: 700;
`;

export const SubText = styled.h6`
  color: #1f388c;
  line-height: 1.5;
  font-size: 22px;
  font-weight: 400;
  margin-top: 20px;
`;

export const SVG = styled.svg`
  margin-right: -180px;

  @media (max-width: 1045px) {
    margin-right: 0;
    margin-top: -80px;
    width: 100%;
    position: relative;
  }
`;

export const ButtonContact = styled.button`
  position: relative;
  z-index: 10;
  background: #1f388c;
  margin-top: 25px;
  color: white;
  border-radius: 18px;
  width: 180px;
  border: 2px solid #1f388c;
  width: 140px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  font-family: "Montserrat", sans-serif;

  :hover {
    background: #e3f2eb;
    border: 2px solid #1f388c;
    color: #1f388c;
  }
`;