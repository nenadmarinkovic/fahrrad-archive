import React from "react";
import Fade from "react-reveal/Fade";
import {
  Items,
  Item,
  Day,
  Time,
  TimeMI,
  PlusText
} from "../styles/OpenHours";

function OpenHours() {
  return (
    <div className="container">
      <h3 id="open-hours" className="content-title">
        Öffnungszeiten*
      </h3>
         <PlusText>Vom 25.9.2024 an für circa 3 Wochen Urlaub/geschlossen.</PlusText>
      <Items>
        <Fade bottom delay={300}>
          <Item>
            <Day>Montag</Day>
            <div>
              <Time>9:00 - 12:00</Time> <Time> 14:30 - 18:30</Time>
            </div>
          </Item>
        </Fade>
        <Fade bottom delay={800}>
    
          <Item>
            <Day>Dienstag</Day>
            <div>
              <Time>9:00 - 12:00</Time> <Time> 14:30 - 18:30</Time>
            </div>
          </Item>
        </Fade>
        <Fade bottom delay={1100}>
          <Item>
            <Day>Mittwoch</Day> <TimeMI>Geschlossen</TimeMI>
          </Item>
        </Fade>
        <Fade bottom delay={1400}>
          <Item>
            <Day>Donnerstag</Day>
            <div>
              <Time>9:00 - 12:00</Time> <Time> 14:30 - 18:30</Time>
            </div>
          </Item>
        </Fade>
        <Fade bottom delay={1700}>
          <Item>
            <Day>Freitag</Day>
            <div>
              <Time>8:30 - 12:00</Time> <Time> 14:30 - 18:30</Time>
            </div>
          </Item>
        </Fade>
        <Fade bottom delay={2000}>
          <Item>
            <Day>Samstag</Day>
            <div>
              <TimeMI>10:00 - 17:00</TimeMI>
            </div>
          </Item>
        </Fade>
      </Items>
      <PlusText>* und nach telefonischer Vereinbarung.</PlusText>
    </div>
  );
}

export default OpenHours;
