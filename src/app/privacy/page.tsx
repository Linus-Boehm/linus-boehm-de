export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

      {/* 1. Einleitung */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1.&nbsp;Einleitung</h2>
        <p>
          Mit der folgenden Datenschutzerklärung informieren wir Sie darüber,
          welche personenbezogenen Daten wir bei dem Besuch dieser Website
          verarbeiten und zu welchem Zweck dies geschieht. Personenbezogene
          Daten sind alle Daten, mit denen Sie persönlich identifiziert werden
          können. Die Begriffe, wie z.&nbsp;B. &quot;Verarbeitung&quot; oder
          &quot;Verantwortlicher&quot; richten sich nach den Definitionen in
          Art.&nbsp;4 Datenschutz-Grundverordnung (DSGVO).
        </p>
      </section>

      {/* 2. Verantwortliche Stelle */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2.&nbsp;Verantwortliche Stelle
        </h2>
        <p>Linus Boehm</p>
        <p>Spixstr. 35</p>
        <p>81539 München</p>
        <p>Deutschland</p>
        <p className="mt-2">
          E-Mail:&nbsp;
          <a
            href="mailto:letters@linusboehm.de"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            letters@linusboehm.de
          </a>
        </p>
        <p>
          Telefon:&nbsp;
          <a
            href="tel:+4917656719690"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            0176&nbsp;56719690
          </a>
        </p>
        <p className="pt-2">
          Der Nutzung von im Rahmen der Datenschutzerklärung veröffentlichten
          Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
          Werbung und Informationsmaterialien wird hiermit widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
          Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
          Spam-E-Mails, vor.
        </p>
      </section>

      {/* 3. Hosting (Vercel) */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3.&nbsp;Hosting und Bereitstellung der Website
        </h2>
        <p>
          Diese Website wird bei <strong>Vercel Inc.</strong>, 440 N Barranca
          Ave #4133, Covina, CA 91723, USA (nachfolgend &quot;Vercel&quot;)
          gehostet. Vercel erhält alle Daten, die automatisch von Ihrem Browser
          übermittelt werden, wenn Sie die Website aufrufen (siehe
          Abschnitt&nbsp;4). Wir haben mit Vercel einen
          Auftragsverarbeitungsvertrag (Data Processing Agreement) geschlossen,
          der den Anforderungen des Art.&nbsp;28 DSGVO entspricht. Die
          Übermittlung in die USA erfolgt auf Grundlage der von der
          EU-Kommission genehmigten Standard- Vertragsklauseln (Art.&nbsp;46
          Abs.&nbsp;2 c DSGVO).
        </p>
        <p className="mt-2">
          Der Einsatz von Vercel erfolgt auf Grundlage unseres berechtigten
          Interesses an einer sicheren und effizienten Bereitstellung unseres
          Online-Angebots (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO).
        </p>
      </section>

      {/* 4. Erhobene Daten & Server-Log-Files */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4.&nbsp;Server-Log-Files</h2>
        <p>
          Beim Besuch dieser Website werden automatisch Informationen von Ihrem
          Endgerät an den Server unseres Hosting-Providers übermittelt und in
          so- genannten Server-Log-Files gespeichert. Erfasst werden können:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>IP-Adresse des anfragenden Endgeräts,</li>
          <li>Datum und Uhrzeit der Anfrage,</li>
          <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT),</li>
          <li>Inhalt der Anforderung (konkrete Seite),</li>
          <li>Zugriffsstatus/HTTP-Statuscode,</li>
          <li>jeweils übertragene Datenmenge,</li>
          <li>Website, von der die Anforderung kommt (Referer),</li>
          <li>
            Browsertyp einschließlich Version sowie Sprache und Version der
            Browsersoftware,
          </li>
          <li>Betriebssystem und dessen Oberfläche.</li>
        </ul>
        <p className="mt-2">
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
          vorgenommen. Die Speicherung erfolgt aus Sicherheitsgründen, um
          z.&nbsp;B. Missbrauchsfälle aufklären zu können, und wird nach
          spätestens&nbsp;30 Tagen automatisch gelöscht, sofern keine längere
          Aufbewahrung zu Beweiszwecken erforderlich ist. Rechtsgrundlage ist
          Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO.
        </p>
      </section>

      {/* 5. Keine Cookies, kein Tracking */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          5.&nbsp;Keine Cookies &amp; kein Tracking
        </h2>
        <p>
          Diese Website verwendet weder Cookies noch Analysetools oder
          Social-Media- Plug-ins. Es findet keinerlei Nutzer-Tracking statt.
        </p>
      </section>

      {/* 6. Rechtsgrundlagen */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          6.&nbsp;Rechtsgrundlagen der Verarbeitung
        </h2>
        <p>
          Soweit wir eine Verarbeitung personenbezogener Daten vornehmen,
          geschieht dies auf Basis folgender Rechtsgrundlagen:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>
            Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO für die Erfüllung eines
            Vertrags oder zur Durchführung vorvertraglicher Maßnahmen, sofern
            Sie uns zur Kontaktaufnahme per E-Mail oder Telefon anschreiben.
          </li>
          <li>
            Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO zur Wahrung unserer
            berechtigten Interessen an einer sicheren und effizienten
            Bereitstellung der Website.
          </li>
        </ul>
      </section>

      {/* 7. Speicherdauer */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7.&nbsp;Speicherdauer</h2>
        <p>
          Sofern innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wird, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
          ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
          zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
          wir keine anderen rechtlich zulässigen Gründe für die Speicherung
          Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder
          handelsrechtliche Aufbewahrungsfristen). In letzterem Fall erfolgt die
          Löschung nach Fortfall dieser Gründe.
        </p>
      </section>

      {/* 8. Ihre Rechte */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          8.&nbsp;Rechte der betroffenen Personen
        </h2>
        <p>Sie haben im Rahmen der DSGVO unter anderem folgende Rechte:</p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>Auskunft (Art.&nbsp;15 DSGVO),</li>
          <li>Berichtigung (Art.&nbsp;16 DSGVO),</li>
          <li>Löschung (Art.&nbsp;17 DSGVO),</li>
          <li>Einschränkung der Verarbeitung (Art.&nbsp;18 DSGVO),</li>
          <li>Datenübertragbarkeit (Art.&nbsp;20 DSGVO),</li>
          <li>Widerspruch gegen die Verarbeitung (Art.&nbsp;21 DSGVO).</li>
        </ul>
        <p className="mt-2">
          Wenn Sie eines Ihrer Rechte ausüben möchten, genügt eine formlose
          Mitteilung an die oben genannte Kontaktadresse. Darüber hinaus besteht
          ein Beschwerderecht bei der zuständigen Aufsichtsbehörde gemäß
          Art.&nbsp;77 DSGVO.
        </p>
      </section>

      {/* 9. Datensicherheit */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9.&nbsp;Datensicherheit</h2>
        <p>
          Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte eine TLS-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
          Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt
          sowie an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
      </section>

      {/* 10. Änderungen */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          10.&nbsp;Aktualisierung dieser Datenschutzerklärung
        </h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
          stets den aktuellen rechtlichen Anforderungen entspricht oder um
          Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
          z.&nbsp;B. bei der Einführung neuer Services. Für Ihren erneuten
          Besuch gilt dann die neue Datenschutzerklärung.
        </p>
      </section>
    </div>
  );
}
