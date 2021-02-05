import React from "react";
import Fade from "react-reveal/Fade";
import { ImpressumContent, Title, Paragraph } from "./../styles/ImpressumText";

function ImpressumText() {
  return (
    <div className="container-impressum">
      <Fade delay={300}>
        <ImpressumContent>
          <Title>ANSCHRIFT FLICKSCHUH</Title>
          <Title>DES VERANTWORTLICHEN MEDIENINHABERS</Title>
          <Title>HEINRICH FLICKSCHUH</Title>
          <Paragraph>fahrradwerkstatt.flickschuh e.U.</Paragraph>
          <Paragraph>Hetzendorfer Str. 81 1120 Wien</Paragraph>
          <Paragraph>ÖSTERREICH / AUSTRIA</Paragraph>
          <Paragraph>Telefon +43-650-484-22-22</Paragraph>
          <Paragraph>fahrradwerkstatt@flickschuh.wien</Paragraph>
          <Paragraph>Telefon +43-650-484-22-22</Paragraph>
          <Title>HANDELSGERICHTLICHES</Title>
          <Paragraph>
            Firmenbuch-Nr.: 527759 t (Firmenbuchgericht Wien)
          </Paragraph>
          <Paragraph>UID-Nr.: ATU 75218006</Paragraph>
          <Paragraph>Hetzendorfer Str. 81</Paragraph>
          <Paragraph>
            <a href="https://firmen.wko.at/fahrradwerkstattflickschuh-eu/wien/?firmaid=c933dc23-5597-4fb4-9c20-336953388e16&standortid=22&standortname=wien+12.+bezirk+%28meidling%29&suchbegriff=fahrrad+flickschuh&page=1">
              Mitglied der Wiener Wirtschaftskammer
            </a>
          </Paragraph>
          <Title>UNTERNEHMENSGEGENSTAND</Title>
          <Paragraph>
            Handel mit Fahrrädern, Fahrradteilen und -zubehör, Service- und
            Reparaturarbeiten an Fahrrädern aller Marken. Keine Eingriffe in die
            / Reparaturen an der Elektronik von E-Bikes.
          </Paragraph>

          <Title>BLATTLINIE LAUT MEDIENGESETZ</Title>

          <Paragraph>
            Information und Fachartikel rund ums Thema Fahrrad,
            Fahrradwerkstatt, Faltrad, Lastenrad, Liegerad und deren Zubehör.{" "}
          </Paragraph>

          <Title> AKTUALISIERUNG / HAFTUNG</Title>

          <Paragraph>
            Ich bin bemüht, für die Richtigkeit und Aktualität aller auf dieser
            Domain enthaltenen Informationen und Daten zu sorgen. Eine Haftung
            oder Garantie für die Aktualität, Richtigkeit und Vollständigkeit
            der zur Verfügung gestellten Informationen und Daten ist jedoch
            ausgeschlossen. In keinem Fall wird für Schäden, die sich aus der
            Verwendung der abgerufenen Informationen ergeben, eine Haftung
            übernommen. Ich behalte mir vor, ohne Ankündigung Änderungen oder
            Ergänzungen der bereitgestellten Informationen oder Daten
            vorzunehmen.{" "}
          </Paragraph>

          <Title>LINKSETZUNG</Title>

          <Paragraph>
            {" "}
            Ich habe Links zu anderen Seiten im Internet gesetzt. Für alle Links
            gilt: Ich betone ausdrücklich, dass ich keinerlei Einfluss auf die
            Gestaltung und die Inhalte der gelinkten Seiten hatte oder habe. Ich
            bin für den Inhalt der Homepages, die mittels eines elektronischen
            Links erreicht werden, nicht verantwortlich. Sollten durch diese
            Inhalte Rechte Dritter verletzt sein, so distanziere ich mich
            ausdrücklich von den Inhalten dieser Seiten. Die Verwendung von
            Deep-Linking auf Inhalts- bzw. Produktebene sowie das Anzeigen von
            Inhalten dieser Website innerhalb von Frame-Seiten ist
            genehmigungspflichtig. Alle Inhalte sind nur zur persönlichen
            Information bestimmt. Jede weitergehende kommerzielle Verwendung,
            insbesondere die Speicherung in Datenbanken, Veröffentlichung,
            Vervielfältigung und jede Form von gewerblicher Nutzung sowie die
            Weitergabe an Dritte - auch in Teilen oder in überarbeiteter Form -
            ist ohne Zustimmung der Rechteinhaber untersagt.{" "}
          </Paragraph>

          <Title>DATENSCHUTZ & COOKIES</Title>

          <Paragraph>
            {" "}
            Die Nutzung dieser Website ist ohne Angaben personenbezogener Daten
            möglich. Meine Website ist absichtlich so konstruiert, dass sie
            keine Cookies setzt.{" "}
          </Paragraph>
          <Title>AUSKUNFTSRECHT</Title>
          <Paragraph>
            {" "}
            Es besteht grundsätzlich das Recht auf Auskunft, Berichtigung und
            Löschung der über eine Kundschaft gespeicherten Daten. Auf
            schriftliche Anfrage hin informiere ich gerne über die in meiner
            KundInnenkartei gespeicherten Informationen. Wenn darauf bestanden
            wird, nehme ich innerhalb von 4 Wochen eine Löschung dieser
            personenbezogenen Daten vor.{" "}
          </Paragraph>
        </ImpressumContent>
      </Fade>
    </div>
  );
}

export default ImpressumText;
