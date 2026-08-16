import type { Dictionary } from './dictionary';

/**
 * Dutch content - the primary language of the site.
 * Edit the text here; no component changes are needed.
 */
export const nl: Dictionary = {
  meta: {
    title:
      'Andrej Juriga — Websites en bedrijfsautomatisering voor bedrijven in België en Nederland',
    ogTitle: 'Professionele websites en slimme automatisering voor uw bedrijf',
    description:
      'Moderne websites en praktische automatisering voor kleine en middelgrote bedrijven in Belgisch Limburg, de Kempen en Zuid-Nederland. Digitale oplossingen die tijd besparen en processen eenvoudiger maken.',
    tagline: 'Websiteontwikkeling & bedrijfsautomatisering',
  },

  common: {
    skipToContent: 'Naar hoofdinhoud',
    languageSwitcherLabel: 'Taal kiezen',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    menu: 'Menu',
    backToHome: 'Terug naar de homepage',
    email: 'E-mail',
    phone: 'Telefoon',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
  },

  nav: {
    items: [
      { id: 'diensten', label: 'Diensten' },
      { id: 'werk', label: 'Werk' },
      { id: 'werkwijze', label: 'Werkwijze' },
      { id: 'over-mij', label: 'Over mij' },
      { id: 'contact', label: 'Contact' },
    ],
    cta: 'Neem contact op',
  },

  hero: {
    // Reads as: "Professionele websites en slimme automatisering voor uw bedrijf."
    headlineLead: 'Professionele websites en ',
    headlineAccent: 'slimme automatisering',
    headlineTail: ' voor uw bedrijf.',
    supporting:
      'Ik help bedrijven in België en Nederland met moderne websites en praktische digitale oplossingen die tijd besparen en processen eenvoudiger maken.',
    primaryCta: 'Bespreek uw project',
    secondaryCta: 'Bekijk mijn werk',
    points: [
      'Rechtstreeks contact',
      'Duidelijk voorstel vooraf',
      'België & Nederland',
    ],
  },

  services: {
    id: 'diensten',
    eyebrow: 'Diensten',
    headline: 'Waarmee ik u kan helpen',
    intro:
      'Van een volledig nieuwe website tot het vereenvoudigen van processen die nu nog handmatig gebeuren.',
    items: [
      {
        id: 'websites-op-maat',
        title: 'Websites op maat',
        description:
          'Professionele websites afgestemd op het bedrijf, de diensten en de klanten.',
        imageAlt:
          'Illustratie van een website die wordt opgebouwd uit tekst, afbeeldingen en secties.',
      },
      {
        id: 'website-redesign',
        title: 'Website redesign',
        description:
          'Modernisering van bestaande websites die verouderd zijn of niet meer goed aansluiten bij het bedrijf.',
        imageAlt:
          'Illustratie van een verouderde website naast een vernieuwde, modernere versie.',
      },
      {
        id: 'bedrijfsautomatisering',
        title: 'Bedrijfsautomatisering',
        description:
          'Praktische digitale oplossingen om terugkerende processen eenvoudiger en efficiënter te maken, zoals klantaanvragen, offertes, bestellingen en administratieve workflows.',
        imageAlt:
          'Illustratie van klantaanvragen die automatisch worden verwerkt tot documenten en overzichten.',
      },
      {
        id: 'onderhoud',
        title: 'Onderhoud & aanpassingen',
        description:
          'Ondersteuning bij toekomstige wijzigingen aan teksten, afbeeldingen, diensten, prijzen en andere onderdelen van de website.',
        imageAlt:
          'Illustratie van een beheerscherm met instellingen, updates en statusoverzichten.',
      },
    ],
  },

  whyWebsite: {
    eyebrow: 'Waarom een professionele website',
    headline: 'Een website die werkt voor uw bedrijf.',
    text: 'Een goede website moet niet alleen professioneel ogen. Ze moet klanten helpen snel te begrijpen wat u aanbiedt en het eenvoudig maken om de volgende stap te zetten.',
    benefits: [
      {
        title: 'Duidelijk voor uw klanten',
        description:
          'Bezoekers begrijpen snel welke diensten u aanbiedt en waarom ze bij uw bedrijf moeten zijn.',
      },
      {
        title: 'Gemakkelijk contact',
        description:
          'Maak bellen, e-mailen, WhatsApp gebruiken of een aanvraag sturen zo eenvoudig mogelijk.',
      },
      {
        title: 'Professionele uitstraling',
        description:
          'Een moderne website helpt uw bedrijf betrouwbaar en professioneel over te komen.',
      },
      {
        title: 'Minder onnodige vragen',
        description:
          'Duidelijke informatie over diensten, locatie, openingsuren en werkwijze kan terugkerende vragen verminderen.',
      },
    ],
  },

  automation: {
    id: 'automatisering',
    eyebrow: 'Bedrijfsautomatisering',
    headline: 'Wat kan automatisering voor uw bedrijf betekenen?',
    intro:
      'Veel bedrijven besteden dagelijks tijd aan terugkerende taken die gedeeltelijk geautomatiseerd kunnen worden. Een eenvoudige digitale oplossing kan helpen om informatie sneller te verwerken, fouten te verminderen en tijd vrij te maken voor belangrijker werk.',
    useCases: [
      {
        id: 'klantaanvragen',
        title: 'Klantaanvragen',
        description:
          'Informatie uit aanvragen kan automatisch worden verzameld, gestructureerd en voorbereid voor verdere verwerking.',
      },
      {
        id: 'offertes',
        title: 'Offertes',
        description:
          'Gegevens van klanten en aanvragen kunnen worden gebruikt om sneller en consistenter offertes voor te bereiden.',
      },
      {
        id: 'bestellingen',
        title: 'Bestellingen & administratie',
        description:
          'Terugkerende stappen rond bestellingen, gegevensverwerking en administratieve taken kunnen eenvoudiger worden gemaakt.',
      },
    ],
    cta: 'Bespreek wat mogelijk is',
  },

  work: {
    id: 'werk',
    eyebrow: 'Werk',
    headline: 'Mijn werk',
    intro:
      'Een overzicht van projecten. Bij elk project staat duidelijk vermeld of het om een conceptproject of een klantproject gaat.',
    viewWebsite: 'Bekijk website',
    viewDetails: 'Meer over dit project',
    status: {
      concept: 'Conceptproject',
      client: 'Klantproject',
    },
    statusLabel: 'Status',
    typeLabel: 'Type',
    noLiveUrl: 'Nog niet online',
    valueLabel: 'Wat het oplevert',
  },

  process: {
    id: 'werkwijze',
    eyebrow: 'Werkwijze',
    headline: 'Van idee tot website in vier eenvoudige stappen',
    intro:
      'Een duidelijk traject, zonder verrassingen. U weet op elk moment waar we staan.',
    steps: [
      {
        number: '01',
        title: 'Kennismaking',
        description:
          'We bespreken uw bedrijf, uw wensen en wat de website of digitale oplossing moet bereiken.',
      },
      {
        number: '02',
        title: 'Voorstel',
        description:
          'U ontvangt een duidelijk voorstel voor de inhoud, structuur en aanpak.',
      },
      {
        number: '03',
        title: 'Ontwikkeling',
        description:
          'De website of oplossing wordt gebouwd en aangepast op basis van uw feedback.',
      },
      {
        number: '04',
        title: 'Online',
        description:
          'Na goedkeuring wordt de website op uw eigen domein gepubliceerd en klaar gemaakt voor gebruik.',
      },
    ],
  },

  about: {
    id: 'over-mij',
    eyebrow: 'Over mij',
    headline: 'Hallo, ik ben Andrej.',
    paragraphs: [
      'Ik ontwerp en bouw moderne websites en digitale oplossingen voor bedrijven in België en Nederland. Sinds 2022 werk ik binnen een hightechomgeving, waar technologie, processen en probleemoplossing deel uitmaken van mijn dagelijkse werk.',
      'Vanaf 2025 ben ik me actief gaan verdiepen in artificiële intelligentie en vooral in hoe AI-systemen informatie verwerken en praktisch kunnen worden ingezet binnen bedrijven. Vanuit die interesse ben ik me naast websites ook gaan richten op automatisering van bijvoorbeeld klantaanvragen, offertes, bestellingen en andere terugkerende processen.',
      'Mijn doel is om technologie praktisch te gebruiken: duidelijke oplossingen die tijd besparen en processen eenvoudiger maken. U heeft rechtstreeks contact met de persoon die uw website of oplossing ontwerpt en bouwt.',
    ],
  },

  areas: {
    eyebrow: 'Werkgebied',
    headline: 'Actief in België en Nederland',
    text: 'Websites en digitale oplossingen voor bedrijven in Belgisch Limburg, de Kempen en Zuid-Nederland.',
    locations: [
      'Pelt',
      'Lommel',
      'Hasselt',
      'Genk',
      'Turnhout',
      'Geel',
      'Antwerpen',
      'Eindhoven',
      'Tilburg',
      'Breda',
      'Weert',
      'Venlo',
    ],
    surrounding: 'en omgeving',
  },

  faq: {
    eyebrow: 'Veelgestelde vragen',
    headline: 'Vragen die vaak gesteld worden',
    intro: 'Staat uw vraag er niet bij? Stuur me gerust een bericht.',
    items: [
      {
        id: 'prijs',
        question: 'Hoeveel kost een website?',
        answer:
          'De prijs hangt af van de grootte, inhoud en gewenste functionaliteiten. Na een korte kennismaking ontvangt u een duidelijke en vrijblijvende offerte.',
      },
      {
        id: 'duur',
        question: 'Hoe lang duurt het om een website te maken?',
        answer:
          'Dit hangt af van de grootte en complexiteit van het project. Tijdens de eerste bespreking kunnen we de inhoud, wensen en een realistische planning bepalen.',
      },
      {
        id: 'aanleveren',
        question: 'Wat moet ik zelf aanleveren?',
        answer:
          "Dit verschilt per project. Denk bijvoorbeeld aan bedrijfsinformatie, diensten, logo, foto's en contactgegevens. Als bepaalde inhoud nog ontbreekt, kunnen we samen bekijken wat nodig is.",
      },
      {
        id: 'redesign',
        question: 'Kan mijn bestaande website vernieuwd worden?',
        answer:
          'Ja. Een bestaande website kan opnieuw ontworpen en gemoderniseerd worden.',
      },
      {
        id: 'wijzigingen',
        question: 'Kan ik later wijzigingen laten uitvoeren?',
        answer:
          'Ja. Ook na oplevering kunnen teksten, afbeeldingen, diensten, prijzen en andere onderdelen aangepast worden.',
      },
      {
        id: 'eigendom',
        question: 'Is de website na oplevering van mij?',
        answer:
          'De afspraken hierover worden vooraf duidelijk besproken en opgenomen in het voorstel, zodat u precies weet wat inbegrepen is.',
      },
      {
        id: 'domein-hosting',
        question: 'Kunt u ook helpen met domein en hosting?',
        answer:
          'Ja. Indien gewenst kan ik helpen met het domein, hosting en het online publiceren van de website.',
      },
      {
        id: 'meertalig',
        question: 'Kan de website in meerdere talen gemaakt worden?',
        answer: 'Ja. Websites kunnen indien nodig in meerdere talen worden opgebouwd.',
      },
      {
        id: 'automatisering',
        question: 'Wat kan er geautomatiseerd worden binnen mijn bedrijf?',
        answer:
          'Dit hangt af van uw processen. Voorbeelden zijn het verwerken van klantaanvragen, het automatisch voorbereiden van offertes, het verwerken van bestellingen of het vereenvoudigen van terugkerende administratieve taken.',
      },
      {
        id: 'vrijblijvend',
        question: 'Kunnen we eerst vrijblijvend bespreken wat mijn bedrijf nodig heeft?',
        answer:
          'Ja. Een eerste gesprek is bedoeld om te begrijpen wat uw bedrijf nodig heeft en welke oplossing daarbij past.',
      },
    ],
  },

  contact: {
    id: 'contact',
    eyebrow: 'Contact',
    headline: 'Laten we uw project bespreken',
    text: 'Heeft u een nieuwe website nodig, wilt u uw huidige website vernieuwen of denkt u dat bepaalde processen binnen uw bedrijf efficiënter kunnen? Stuur me gerust een bericht.',
    detailsHeading: 'Contactgegevens',
    country: 'België',
    // Deliberately not a promise about response times - see README.
    responseNote: 'Elk bericht komt rechtstreeks bij mij terecht.',
    whatsappMessage:
      'Hallo Andrej, ik heb uw website bekeken en ik zou graag mijn project met u bespreken.',
    whatsappAction: 'Start een gesprek op WhatsApp',
    form: {
      heading: 'Stuur een bericht',
      name: { label: 'Naam', placeholder: 'Uw naam' },
      company: { label: 'Bedrijf', placeholder: 'Naam van uw bedrijf' },
      email: { label: 'E-mail', placeholder: 'u@bedrijf.be' },
      phone: { label: 'Telefoonnummer', placeholder: '+32 470 00 00 00' },
      serviceType: {
        label: 'Waarmee kan ik u helpen?',
        placeholder: 'Maak een keuze',
        options: [
          { value: 'new-website', label: 'Nieuwe website' },
          { value: 'website-redesign', label: 'Bestaande website vernieuwen' },
          { value: 'automation', label: 'Bedrijfsautomatisering' },
          { value: 'other', label: 'Anders' },
        ],
      },
      message: {
        label: 'Vertel kort over uw project',
        placeholder:
          'Vertel kort over uw bedrijf en wat u zoekt. Een paar zinnen volstaat.',
      },
      optional: 'optioneel',
      required: 'verplicht',
      requiredNote: 'Velden met * zijn verplicht.',
      submit: 'Vraag een vrijblijvende offerte aan',
      submitting: 'Bezig met verzenden…',
      privacyNote:
        'Uw gegevens worden alleen gebruikt om op uw aanvraag te reageren en worden niet gedeeld met derden.',
      privacyNotice: {
        before:
          'Door dit formulier te verzenden, worden uw persoonsgegevens gebruikt om uw aanvraag te beantwoorden. Lees meer over de verwerking van uw gegevens in de ',
        linkText: 'Privacyverklaring',
        after: '.',
      },
      acknowledgement: {
        before: 'Ik heb de ',
        linkText: 'Privacyverklaring',
        after: ' gelezen.',
      },
      errors: {
        name: 'Vul uw naam in.',
        email: 'Vul uw e-mailadres in.',
        emailInvalid: 'Vul een geldig e-mailadres in.',
        message: 'Laat weten waarmee ik kan helpen.',
        messageShort: 'Geef wat meer details, minimaal 10 tekens.',
        acknowledgement: 'Bevestig dat u de Privacyverklaring heeft gelezen.',
        summaryHeading: 'Controleer de volgende velden:',
      },
      success: {
        heading: 'Bedankt voor uw bericht.',
        text: 'Uw aanvraag is verzonden. Ik neem zo snel mogelijk contact met u op.',
      },
      failure: {
        heading: 'Het bericht kon niet verzonden worden.',
        text: 'Er ging iets mis bij het verzenden. Probeer het later opnieuw.',
        notConfigured: 'Het verzenden via het formulier is nog niet actief.',
        emailFallback: 'U kunt uw bericht rechtstreeks per e-mail sturen:',
      },
    },
  },

  footer: {
    tagline: 'Websiteontwikkeling & bedrijfsautomatisering',
    description:
      'Websites en digitale oplossingen voor bedrijven in België en Nederland.',
    navHeading: 'Navigatie',
    contactHeading: 'Contact',
    languageHeading: 'Taal',
    legalHeading: 'Juridisch',
    rights: 'Alle rechten voorbehouden.',
    business: {
      companyNumber: 'Ondernemingsnummer',
      vatNumber: 'BTW-nummer',
    },
  },

  privacy: {
    metaTitle: 'Privacyverklaring | Andrej Juriga',
    metaDescription:
      'Hoe persoonsgegevens worden verwerkt die via deze website of het contactformulier worden verstuurd.',
    title: 'Privacyverklaring',
    intro:
      'Deze verklaring legt uit welke persoonsgegevens via deze website kunnen worden verwerkt, waarom dat gebeurt en welke rechten u daarbij heeft. De tekst beschrijft wat deze website daadwerkelijk doet.',
    lastUpdatedLabel: 'Laatst bijgewerkt',
    backToHome: 'Terug naar de homepage',

    controller: {
      heading: 'Wie verwerkt uw gegevens?',
      intro:
        'De verantwoordelijke voor de verwerking van persoonsgegevens via deze website is:',
    },

    dataCollected: {
      heading: 'Welke gegevens kunnen worden verwerkt?',
      intro:
        'Als u het contactformulier gebruikt, worden de gegevens verwerkt die u zelf invult. Dat kan gaan om:',
      formItems: [
        'naam',
        'bedrijfsnaam',
        'e-mailadres',
        'telefoonnummer, indien ingevuld',
        'het gekozen type project of dienst, indien ingevuld',
        'de inhoud van uw bericht',
      ],
      technical:
        'Deze website plaatst geen analytische of marketingcookies en gebruikt geen bezoekersstatistieken of trackingtechnologie. Zoals bij vrijwel elke website kunnen technische gegevens zoals uw IP-adres wel tijdelijk voorkomen in de serverlogs die nodig zijn om de website te leveren en te beveiligen.',
    },

    purposes: {
      heading: 'Waarom worden deze gegevens verwerkt?',
      intro: 'De gegevens die u via het contactformulier verstuurt, worden gebruikt om:',
      items: [
        'uw aanvraag te beantwoorden',
        'contact met u op te nemen',
        'uw vraag of het mogelijke project te bespreken',
        'indien relevant, een voorstel of offerte voor te bereiden',
      ],
    },

    legalBasis: {
      heading: 'Rechtsgrond',
      paragraphs: [
        'Wanneer u zelf contact opneemt met een vraag of aanvraag, worden de door u verstrekte gegevens verwerkt omdat dit noodzakelijk is om op uw bericht te reageren en, waar van toepassing, om op uw verzoek stappen te zetten voorafgaand aan een mogelijke overeenkomst.',
        'Voor het beantwoorden van een gewone zakelijke aanvraag is afzonderlijke toestemming dus niet nodig. Als er in de toekomst een verwerking bijkomt die wél op toestemming berust, wordt die toestemming apart en duidelijk gevraagd en kunt u die op elk moment intrekken.',
      ],
    },

    retention: {
      heading: 'Hoe lang worden gegevens bewaard?',
      paragraphs: [
        'Persoonsgegevens worden niet langer bewaard dan noodzakelijk voor het doel waarvoor ze zijn ontvangen, tenzij een langere bewaartermijn wettelijk vereist is.',
        'Leidt uw aanvraag niet tot samenwerking, dan wordt de correspondentie niet onbeperkt bewaard. Leidt uw aanvraag wel tot een opdracht, dan kunnen gegevens langer worden bewaard voor zover dat nodig is voor de uitvoering daarvan of om aan wettelijke verplichtingen te voldoen.',
      ],
    },

    sharing: {
      heading: 'Met wie worden gegevens gedeeld?',
      intro:
        'Uw gegevens worden niet verkocht en niet gebruikt voor reclamedoeleinden. Gegevens kunnen wel worden verwerkt door dienstverleners die nodig zijn om de website te laten werken of om communicatie mogelijk te maken.',
      noEmailProvider:
        'Op dit moment is er geen externe dienst voor e-mailbezorging aan het contactformulier gekoppeld. Berichten die via het formulier worden verstuurd, worden daardoor niet doorgegeven aan een externe verwerker. Zolang dit het geval is, kunt u mij het snelst bereiken via e-mail of WhatsApp.',
      emailProvider:
        'Berichten die via het contactformulier worden verstuurd, worden bezorgd via {provider}. Deze dienst verwerkt de inhoud van uw bericht uitsluitend om het af te leveren.',
      hostingProvider:
        'De website wordt gehost door {provider}. Daarbij kunnen technische gegevens zoals IP-adressen worden verwerkt die nodig zijn om de website te leveren en te beveiligen.',
      hostingUnknown:
        'De website wordt gehost bij een hostingprovider. Daarbij kunnen technische gegevens zoals IP-adressen worden verwerkt die nodig zijn om de website te leveren en te beveiligen.',
      serverLogs:
        'Als u contact opneemt via e-mail of WhatsApp, verloopt die communicatie via de aanbieder van die dienst en gelden daarnaast de voorwaarden en het privacybeleid van die aanbieder.',
    },

    international: {
      heading: 'Internationale doorgifte',
      paragraphs: [
        'Sommige dienstverleners die nodig zijn om een website te leveren, zijn gevestigd buiten de Europese Economische Ruimte of maken gebruik van infrastructuur daarbuiten. In dat geval kunnen gegevens ook buiten de EER worden verwerkt.',
        'Als u vragen heeft over welke dienstverleners op dit moment worden gebruikt en waar zij gegevens verwerken, kunt u dat opvragen via het onderstaande e-mailadres.',
      ],
    },

    cookies: {
      heading: 'Cookies',
      intro:
        'Deze website gebruikt geen cookies voor analyse, statistieken, advertenties of het volgen van bezoekers.',
      languageCookie:
        'Er wordt één functionele cookie geplaatst, genaamd NEXT_LOCALE. Die onthoudt uitsluitend of u de website in het Nederlands of het Engels wilt bekijken, zodat u bij een volgend bezoek meteen in de juiste taal terechtkomt. De cookie bevat alleen een taalcode en wordt na een jaar verwijderd. U kunt cookies altijd verwijderen via de instellingen van uw browser.',
      noTracking:
        'Er worden geen externe scripts, advertentienetwerken, sociale-mediawidgets of ingesloten kaarten en video’s geladen. Er wordt ook geen gebruikgemaakt van localStorage of vergelijkbare opslag voor het volgen van bezoekers.',
    },

    rights: {
      heading: 'Uw rechten',
      intro:
        'Met betrekking tot uw persoonsgegevens kunt u, binnen de grenzen van de wet, de volgende rechten uitoefenen:',
      items: [
        'inzage in de gegevens die van u verwerkt worden',
        'correctie van onjuiste of onvolledige gegevens',
        'verwijdering van uw gegevens',
        'beperking van de verwerking',
        'bezwaar tegen de verwerking, waar dat van toepassing is',
        'overdraagbaarheid van de gegevens die u zelf heeft verstrekt, waar dat van toepassing is',
      ],
      howTo:
        'U kunt een verzoek indienen via het e-mailadres bovenaan deze pagina. Om misbruik te voorkomen kan er gevraagd worden om uw verzoek te verduidelijken.',
      complaint:
        'Bent u niet tevreden over de manier waarop uw gegevens worden verwerkt, dan heeft u het recht een klacht in te dienen bij de bevoegde toezichthoudende autoriteit voor gegevensbescherming, doorgaans die van het land waar u woont of werkt.',
    },

    security: {
      heading: 'Beveiliging',
      paragraphs: [
        'Er worden redelijke technische en organisatorische maatregelen genomen om persoonsgegevens te beschermen tegen verlies, misbruik en ongeoorloofde toegang. De website wordt bijvoorbeeld via een versleutelde verbinding aangeboden en het aantal personen met toegang tot binnenkomende berichten wordt beperkt gehouden.',
        'Geen enkele website of vorm van elektronische communicatie is volledig veilig. Er kan daarom geen absolute garantie worden gegeven; wel wordt gewerkt aan passende bescherming.',
      ],
    },

    changes: {
      heading: 'Wijzigingen',
      paragraphs: [
        'Deze privacyverklaring kan worden aangepast wanneer de website verandert of wanneer de manier waarop gegevens worden verwerkt wijzigt, bijvoorbeeld als er een nieuwe dienstverlener wordt ingeschakeld.',
        'De datum hieronder geeft aan wanneer deze verklaring voor het laatst is bijgewerkt.',
      ],
    },
  },

  notFound: {
    title: 'Pagina niet gevonden',
    headline: 'Deze pagina bestaat niet.',
    text: 'De pagina die u zoekt is verplaatst of bestaat niet meer.',
    cta: 'Terug naar de homepage',
  },
};
