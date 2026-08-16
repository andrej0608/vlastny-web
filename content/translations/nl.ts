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
    headline: 'Professionele websites en slimme automatisering voor uw bedrijf.',
    supporting:
      'Ik help bedrijven in België en Nederland met moderne websites en praktische digitale oplossingen die tijd besparen en processen eenvoudiger maken.',
    primaryCta: 'Bespreek uw project',
    secondaryCta: 'Bekijk mijn werk',
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
      },
      {
        id: 'website-redesign',
        title: 'Website redesign',
        description:
          'Modernisering van bestaande websites die verouderd zijn of niet meer goed aansluiten bij het bedrijf.',
      },
      {
        id: 'bedrijfsautomatisering',
        title: 'Bedrijfsautomatisering',
        description:
          'Praktische digitale oplossingen om terugkerende processen eenvoudiger en efficiënter te maken, zoals klantaanvragen, offertes, bestellingen en administratieve workflows.',
      },
      {
        id: 'onderhoud',
        title: 'Onderhoud & aanpassingen',
        description:
          'Ondersteuning bij toekomstige wijzigingen aan teksten, afbeeldingen, diensten, prijzen en andere onderdelen van de website.',
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
      errors: {
        name: 'Vul uw naam in.',
        email: 'Vul uw e-mailadres in.',
        emailInvalid: 'Vul een geldig e-mailadres in.',
        message: 'Laat weten waarmee ik kan helpen.',
        messageShort: 'Geef wat meer details, minimaal 10 tekens.',
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
    rights: 'Alle rechten voorbehouden.',
  },

  notFound: {
    title: 'Pagina niet gevonden',
    headline: 'Deze pagina bestaat niet.',
    text: 'De pagina die u zoekt is verplaatst of bestaat niet meer.',
    cta: 'Terug naar de homepage',
  },
};
