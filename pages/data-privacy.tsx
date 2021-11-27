import DefaultLayout from '../components/layout/DefaultLayout';
import SectionContainer from '../components/layout/SectionContainer';

const DataPrivacy: React.VFC = () => {
  return (
    <DefaultLayout>
      <SectionContainer>
        <h1>Datenschutzerklärung</h1>
        <h2>Einleitung</h2>
        <p>
          Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
          aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend
          auch kurz als &quot;Daten&quot; bezeichnet) wir zu welchen Zwecken und
          in welchem Umfang im Rahmen der Bereitstellung unserer Applikation
          verarbeiten.
        </p>
        <p>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
        <p>Stand: 27. November 2021</p>
        <h2>Inhaltsübersicht</h2>
        <h2 id="m3">Verantwortlicher</h2>
        <p>
          Linus Boehm
          <br />
          Spixstr. 35
          <br />
          81539 München
        </p>
        <p>
          E-Mail-Adresse:{' '}
          <a href="mailto:letters@linusboehm.de">letters@linusboehm.de</a>.
        </p>
        <p>
          Impressum:{' '}
          <a href="https://linusboehm.de/imprint" target="_blank"  rel="noreferrer">
            https://linusboehm.de/imprint
          </a>
          .
        </p>
        <h2 id="mOverview">Übersicht der Verarbeitungen</h2>
        <p>
          Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und
          die Zwecke ihrer Verarbeitung zusammen und verweist auf die
          betroffenen Personen.
        </p>
        <h3>Arten der verarbeiteten Daten</h3>
        <ul>
          <li>Bestandsdaten (z.B. Namen, Adressen).</li>
          <li>Inhaltsdaten (z.B. Eingaben in Onlineformularen).</li>
          <li>Kontaktdaten (z.B. E-Mail, Telefonnummern).</li>
          <li>
            Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
          </li>
          <li>
            Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
            Zugriffszeiten).
          </li>
        </ul>
        <h3>Kategorien betroffener Personen</h3>
        <ul>
          <li>Kommunikationspartner.</li>
          <li>Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
        </ul>
        <h3>Zwecke der Verarbeitung</h3>
        <ul>
          <li>
            Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.
          </li>
          <li>Content Delivery Network (CDN).</li>
          <li>Direktmarketing (z.B. per E-Mail oder postalisch).</li>
          <li>Feedback (z.B. Sammeln von Feedback via Online-Formular).</li>
          <li>Kontaktanfragen und Kommunikation.</li>
          <li>
            Profile mit nutzerbezogenen Informationen (Erstellen von
            Nutzerprofilen).
          </li>
          <li>
            Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung
            wiederkehrender Besucher).
          </li>
          <li>Erbringung vertraglicher Leistungen und Kundenservice.</li>
        </ul>
        <h3 id="m13">Maßgebliche Rechtsgrundlagen</h3>
        <p>
          Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der
          DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte
          nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale
          Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten
          können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
          maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung
          mit.
        </p>
        <ul>
          <li>
            <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO)</strong> -
            Die betroffene Person hat ihre Einwilligung in die Verarbeitung der
            sie betreffenden personenbezogenen Daten für einen spezifischen
            Zweck oder mehrere bestimmte Zwecke gegeben.
          </li>
          <li>
            <strong>
              Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1
              lit. b. DSGVO)
            </strong>{' '}
            - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen
            Vertragspartei die betroffene Person ist, oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der
            betroffenen Person erfolgen.
          </li>
          <li>
            <strong>
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO)
            </strong>{' '}
            - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des
            Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
            Interessen oder Grundrechte und Grundfreiheiten der betroffenen
            Person, die den Schutz personenbezogener Daten erfordern,
            überwiegen.
          </li>
        </ul>
        <p className="seal">
          <a
            href="https://datenschutz-generator.de/?l=de"
            title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
            Schwenke
          </a>
        </p>
      </SectionContainer>
    </DefaultLayout>
  );
};

export default DataPrivacy;
