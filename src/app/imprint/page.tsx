export default function ImprintPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
        <p>Linus Boehm</p>
        <p>Spixstr. 35</p>
        <p>81539 München</p>
        <p>Deutschland</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Kontaktmöglichkeiten</h2>
        <p>
          E-Mail-Adresse:{" "}
          <a
            href="mailto:letters@linusboehm.de"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            letters@linusboehm.de
          </a>
        </p>
        <p>
          Telefon:{" "}
          <a
            href="tel:+4917656719690"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            0176 56719690
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Haftungsausschluss</h2>
        <p className="mb-2">
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </section>
      <section>
        <p className="pt-2">
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
          Werbung und Informationsmaterialien wird hiermit widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
          Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
          Spam-E-Mails, vor.
        </p>
      </section>
    </div>
  );
}
