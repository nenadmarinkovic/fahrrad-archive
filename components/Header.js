import React, { useRef, useEffect, useState } from "react";
import Link from 'next/link'
import Fade from "react-reveal/Fade";
import {
  HeaderWrap,
  HeaderLogo,
  HeaderContainer,
  LogoText,
  SVGShape,
  SVGLogo,
  FlexItems,
  HeadLink,
} from "../styles/Header";
import ScrollIntoView from "react-scroll-into-view";
// import Menu from "./Menu";
// import Burger from "./Burger";

export default function Header() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <div ref={node}>
        {/* <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} /> */}
      </div>
      {/* <Menu /> */}
      <HeaderWrap id="top">
        <div className="container">
          <HeaderContainer>
            <Fade>
              <Link href="/">
                <HeaderLogo>
                  <SVGLogo
                    width="83"
                    height="83"
                    viewBox="0 0 83 83"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="83" height="83" fill="white" />
                    <path
                      d="M0 41.5V83H41.5H83V41.5V-1.19209e-07H41.5H0V41.5ZM61.458 13.8537L75.7137 21.7265L75.9038 40.7066L76.0305 59.6868L58.4802 69.6346C48.8496 75.1272 40.7397 79.5824 40.4863 79.5213C40.2328 79.4603 32.4397 75.0662 23.1893 69.8176L6.33588 60.236V41.2559L6.39924 22.2757L23.6328 12.45L40.8664 2.62426L44.0343 4.33309C45.8084 5.24853 53.6015 9.52059 61.458 13.8537Z"
                      fill="#1F388C"
                    />
                    <path
                      d="M24.71 14.0368L8.55347 23.0691V41.2559V59.4427L24.71 68.414L40.8664 77.3853L43.4008 75.9816C44.7947 75.1883 52.0809 71.1603 59.5573 66.9493L73.1794 59.3206L73.3695 41.1338L73.4962 22.8861L60.6977 15.8677C53.6649 12.0228 46.3153 7.99487 44.4145 6.89634L40.8664 4.9434L24.71 14.0368ZM53.7283 28.1956C53.9184 29.1111 53.4748 29.2941 50.8138 29.2941H47.6458L52.0176 36.7397C54.4252 40.8897 56.3893 44.6125 56.3893 45.0397C56.3893 47.1147 53.9184 44.9787 51.2573 40.7066L48.2794 35.8853L44.6046 40.8287L40.9298 45.7721H33.1367C26.7374 45.7721 25.3435 45.589 25.3435 44.8566C25.3435 44.3684 26.9275 41.5 28.8283 38.4486C31.6161 33.9934 32.1863 32.6508 31.6794 31.7353C31.3626 31.125 30.4122 30.5147 29.6519 30.3927C27.8779 30.1486 27.6878 28.5008 29.3985 28.1956C30.9191 27.8905 36.1145 29.2941 36.1145 29.9655C36.1145 30.2706 35.671 30.5147 35.1008 30.5147C34.5306 30.5147 34.2138 30.8809 34.4038 31.2471C34.6573 32.1625 45.6184 32.5897 45.6184 31.6743C45.6184 31.3691 45.3016 30.5758 44.858 29.9655C44.4779 29.3552 44.3512 28.3787 44.5413 27.8294C45.1748 26.3037 53.4115 26.6699 53.7283 28.1956ZM28.5748 36.5566C28.1947 37.228 26.9275 37.8383 25.4703 38.0213C20.655 38.8147 17.7405 44.0633 19.8947 48.0912C22.429 52.8515 30.6657 53.1566 32.8199 48.5794C33.2634 47.603 34.0871 46.9927 34.8474 46.9927C36.4947 46.9927 36.4313 47.5419 34.6573 50.0441C29.1451 57.978 16.4733 54.5603 16.4733 45.1618C16.4733 39.9743 21.0985 35.3971 26.4206 35.3971C28.955 35.3971 29.1451 35.5191 28.5748 36.5566ZM63.8657 37.8383C66.4 39.364 68.4275 42.4155 68.4275 44.9177C68.4275 46.2603 68.9344 47.1147 70.3283 48.0912C71.5321 49.0066 72.229 49.9831 72.229 50.9596C72.229 52.7294 71.7855 52.8515 69.758 51.5088C68.4909 50.5934 68.2374 50.5934 67.3504 51.4478C66.4634 52.2412 66.5267 52.4853 67.6038 53.4618C68.2374 54.1331 69.6313 55.2316 70.6451 55.964C72.4191 57.1846 72.4825 57.3677 71.5321 58.2831C70.5183 59.2596 70.2649 59.1986 67.1603 57.1846C64.1191 55.2316 63.5489 55.0486 60.5077 55.3537C56.1993 55.7809 54.3619 55.3537 51.7642 53.0956C49.8 51.4478 47.4558 46.2603 48.2794 45.4669C48.4061 45.3449 49.9901 46.1383 51.7642 47.2978L54.9954 49.3728L57.5932 48.3963C59.7474 47.603 60.1909 47.1147 60.1909 45.7111C60.1909 44.7956 60.3809 43.6361 60.571 43.0868C60.8245 42.4765 59.8741 41.439 57.7199 39.9743C55.9458 38.7537 54.6787 37.4721 54.8687 37.1669C55.5023 36.1294 61.6481 36.5566 63.8657 37.8383Z"
                      fill="#1F388C"
                    />
                    <path
                      d="M36.7481 35.1529C36.7481 35.8243 40.2328 41.5 40.613 41.5C40.9298 41.5 43.2741 38.5096 45.1748 35.5801C45.555 34.9699 44.668 34.7868 41.1832 34.7868C38.7756 34.7868 36.7481 34.9699 36.7481 35.1529Z"
                      fill="#1F388C"
                    />
                    <path
                      d="M31.1725 39.3029C30.0954 41.1338 29.145 42.7816 29.145 42.9647C29.145 43.1478 31.1725 43.3309 33.5801 43.3309C36.0511 43.3309 38.0152 43.2088 38.0152 43.0257C38.0152 42.3544 34.087 36.0073 33.6435 36.0073C33.4534 36.0073 32.313 37.472 31.1725 39.3029Z"
                      fill="#1F388C"
                    />
                  </SVGLogo>

                  <LogoText>Fahrradwerkstatt Flickschuh</LogoText>
                </HeaderLogo>
              </Link>
              <FlexItems>
                <ScrollIntoView selector="#service" smooth={true}>
                  <HeadLink>Service</HeadLink>
                </ScrollIntoView>

                <ScrollIntoView selector="#adresse" smooth={true}>
                  <HeadLink>Adresse</HeadLink>
                </ScrollIntoView>

                <ScrollIntoView selector="#open-hours" smooth={true}>
                  <HeadLink>Öffnungszeiten</HeadLink>
                </ScrollIntoView>

                <Link href="/impressum">
                  <HeadLink>Impressum</HeadLink>
                </Link>

                <ScrollIntoView selector="#contact" smooth={true}>
                  <HeadLink>Kontakt</HeadLink>
                </ScrollIntoView>
              </FlexItems>
            </Fade>
          </HeaderContainer>
        </div>
      </HeaderWrap>
      <SVGShape xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1F388C"
          fillOpacity="1"
          d="M0,128L80,112C160,96,320,64,480,64C640,64,800,96,960,101.3C1120,107,1280,85,1360,74.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </SVGShape>
    </>
  );
}