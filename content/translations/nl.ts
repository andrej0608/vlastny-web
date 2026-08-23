import type { Dictionary } from './dictionary';

/**
 * Dutch content - the primary language of the site.
 * Edit the text here; no component changes are needed.
 *
 * Huisstijl: geschreven voor een ondernemer die niet met techniek bezig is -
 * een poetsbedrijf, een garage, een aannemer, een restaurant. Zeg wat er
 * gebeurt en wat het oplevert, niet hoe de techniek heet. Zou de zaakvoerder
 * van een garage deze zin meteen begrijpen? Zo niet, dan moet hij eenvoudiger.
 */
export const nl: Dictionary = {
  meta: {
    title: 'Website laten maken & Bedrijfsautomatisering | AndrejWeb',
    ogTitle: 'Websites die uw bedrijf helpen groeien',
    description:
      'Professionele websites, webdesign, maatwerk digitale oplossingen en bedrijfsautomatisering voor bedrijven in België en Nederland.',
    tagline: 'Websites & bedrijfsautomatisering',
  },

  common: {
    skipToContent: 'Naar hoofdinhoud',
    languageSwitcherLabel: 'Taal kiezen',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    explore: 'Meer',
    exploreLabel: 'Meer pagina’s',
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
    // Reads as: "Websites die uw bedrijf helpen groeien. Slimme automatisering
    // die u tijd bespaart."
    headlineLead: 'Websites die uw bedrijf helpen groeien. ',
    headlineAccent: 'Slimme automatisering',
    headlineTail: ' die u tijd bespaart.',
    supporting:
      'Een nieuwe website laten maken, uw website vernieuwen of terugkerend werk automatiseren? Ik bouw digitale oplossingen op maat voor bedrijven in België en Nederland.',
    primaryCta: 'Vertel wat u nodig heeft',
    secondaryCta: 'Bekijk mijn werk',
    points: [
      'U werkt rechtstreeks met mij',
      'Duidelijk voorstel vooraf',
      'België & Nederland',
    ],
  },

  services: {
    id: 'diensten',
    eyebrow: 'Diensten',
    headline: 'Waarmee ik u kan helpen',
    intro:
      'Van een nieuwe website en webdesign tot maatwerk oplossingen die werk overnemen dat u nu nog met de hand doet.',
    items: [
      {
        id: 'websites-op-maat',
        title: 'Website laten maken',
        description:
          'Een professionele website waarop klanten meteen zien wat u doet en hoe ze u kunnen bereiken.',
        imageAlt:
          'Illustratie van een website die wordt opgebouwd uit tekst, afbeeldingen en secties.',
      },
      {
        id: 'website-redesign',
        title: 'Website redesign',
        description:
          'Uw huidige website vernieuwen? Ik geef uw website een moderne, professionele uitstraling, met behoud van wat nu al goed werkt.',
        imageAlt:
          'Illustratie van een verouderde website naast een vernieuwde, modernere versie.',
      },
      {
        id: 'bedrijfsautomatisering',
        title: 'Bedrijfsautomatisering',
        description:
          'Bespaar tijd op werk dat elke dag terugkomt — offertes, klantaanvragen, afspraken, bestellingen en administratie.',
        imageAlt:
          'Illustratie van klantaanvragen die automatisch worden verwerkt tot documenten en overzichten.',
      },
      {
        id: 'onderhoud',
        title: 'Website onderhoud',
        description:
          "Later prijzen, foto's, diensten of teksten aanpassen? Dat regel ik voor u.",
        imageAlt:
          'Illustratie van een beheerscherm met instellingen, updates en statusoverzichten.',
      },
    ],
  },

  whyWebsite: {
    eyebrow: 'Waarom een professionele website',
    headline: 'Wat levert een goede website uw bedrijf op?',
    text: 'Een website moet meer doen dan er mooi uitzien. Ze moet u klanten opleveren en het hen gemakkelijk maken om u te bereiken.',
    benefits: [
      {
        title: 'Nieuwe klanten bereiken',
        description:
          'Mensen die zoeken naar wat u aanbiedt, vinden uw bedrijf online.',
      },
      {
        title: 'Eenvoudig contact opnemen',
        description:
          'Klanten kunnen u snel bellen, een bericht sturen, een offerte aanvragen of een afspraak maken.',
      },
      {
        title: 'Vertrouwen opbouwen',
        description:
          'Een professionele website laat uw bedrijf betrouwbaar en gevestigd overkomen.',
      },
      {
        title: 'Zet bezoekers om in klanten',
        description:
          'Een duidelijke website helpt bezoekers om contact op te nemen, een offerte aan te vragen of een afspraak te maken.',
      },
    ],
  },

  automation: {
    id: 'automatisering',
    eyebrow: 'Bedrijfsautomatisering',
    headline: 'Doet u elke dag nog hetzelfde werk handmatig?',
    intro:
      'Veel terugkerende taken hoeven uw tijd niet te kosten. Ik bouw maatwerk digitale oplossingen — van een offertetool tot een afsprakensysteem — die een deel van dat werk voor u overnemen.',
    useCases: [
      {
        id: 'offertes',
        title: 'Offertes',
        description:
          'De klant stuurt de gegevens door. De offerte wordt automatisch voorbereid, in plaats van alles opnieuw in te typen.',
      },
      {
        id: 'afspraken',
        title: 'Afspraken',
        description:
          'Laat klanten zelf een moment aanvragen of vastleggen, zonder heen en weer te bellen of berichten te sturen.',
      },
      {
        id: 'klantaanvragen',
        title: 'Klantaanvragen',
        description:
          'Verzamel alles wat u van een klant nodig heeft op één plek, in plaats van te zoeken in e-mails en WhatsApp-berichten.',
      },
      {
        id: 'bestellingen',
        title: 'Bestellingen',
        description:
          'Houd bestellingen en klantgegevens overzichtelijk, zonder dezelfde gegevens van de ene plek naar de andere over te typen.',
      },
      {
        id: 'planning',
        title: 'Personeelsplanning',
        description: 'Zie in één duidelijk overzicht wie waar en wanneer werkt.',
      },
    ],
    cta: 'Vertel wat u veel tijd kost',
    examplesLink: 'Bekijk vier praktijkvoorbeelden',
  },

  aiAdoption: {
    id: 'ai-in-bedrijven',
    eyebrow: 'AI in bedrijven',
    headline: 'AI wordt steeds normaler in het bedrijfsleven.',
    intro:
      'In 2025 gebruikte 20% van de EU-bedrijven met 10 of meer werknemers minstens één AI-technologie. In 2023 was dat nog 8,1%. U hoeft de techniek niet te begrijpen. De vraag die telt, is waar ze u tijd kan besparen of het werk gemakkelijker kan maken.',
    chartLabel:
      'Grafiek: aandeel EU-bedrijven met 10 of meer werknemers dat minstens één AI-technologie gebruikt, van 2021 tot 2025.',
    chartTableHeading: 'De gegevens uit de grafiek',
    yearColumn: 'Jaar',
    shareColumn: 'Aandeel bedrijven',
    axisLabel: 'Aandeel EU-bedrijven',
    source:
      'Bron: Eurostat — enterprises with 10 or more persons employed (isoc_eb_ai)',
  },

  examples: {
    eyebrow: 'Praktische voorbeelden',
    page: {
      metaTitle: 'Automatisering in de praktijk | AndrejWeb',
      metaDescription:
        'Vier praktische voorbeelden van bedrijfsautomatisering: offertes voorbereiden, klantaanvragen opvolgen, bestellingen verwerken en afspraken inplannen.',
      navLabel: 'Praktijkvoorbeelden',
      title: 'Automatisering in de praktijk',
      intro:
        'Automatisering hoeft niet ingewikkeld te zijn. Vaak begint het met één terugkerende taak die vandaag nog handmatig gebeurt en eenvoudiger kan worden ingericht. Hieronder staan vier praktische voorbeelden.',
      cta: 'Bespreek wat mogelijk is voor uw bedrijf',
    },
    projectLink: 'Bekijk de offertetool uit mijn portfolio',
    labels: {
      problem: 'Probleem',
      solution: 'Oplossing',
      result: 'Resultaat',
    },
    items: [
      {
        id: 'offertes',
        title: 'Offertes voorbereiden',
        problem:
          'Een klant vraagt een prijs. Iemand leest de mail door, zoekt de prijzen op en typt de offerte helemaal opnieuw.',
        solution:
          'De klant stuurt de gegevens één keer door. Die worden automatisch geordend, zodat de offerte bijna klaar is om te versturen.',
        result:
          'Offertes gaan sneller de deur uit en zien er elke keer hetzelfde uit, zonder dezelfde gegevens opnieuw te typen.',
      },
      {
        id: 'aanvragen',
        title: 'Nieuwe klantaanvragen',
        problem:
          'Aanvragen komen binnen via telefoon, e-mail en WhatsApp. Sommige worden laat beantwoord en andere blijven liggen.',
        solution:
          'Elke aanvraag komt op één plek binnen, met de gegevens die u nodig heeft er al bij.',
        result:
          'Er gaat niets verloren tussen de mailboxen en u kunt antwoorden zolang de klant nog geïnteresseerd is.',
      },
      {
        id: 'bestellingen',
        title: 'Bestellingen verwerken',
        problem:
          'Dezelfde bestelgegevens worden telkens opnieuw overgetypt in een lijst, een document en een factuur.',
        solution:
          'De gegevens worden één keer ingevoerd en verschijnen overal waar ze nodig zijn.',
        result:
          'Minder typewerk, minder fouten en een duidelijk overzicht van wat er nog loopt.',
      },
      {
        id: 'afspraken',
        title: 'Afspraken inplannen',
        problem:
          'Klanten bellen voor een afspraak en achteraf ontbreekt nog de helft van de informatie die u nodig heeft.',
        solution:
          'Klanten kiezen zelf een moment en vullen vooraf in wat u moet weten.',
        result:
          'Minder heen en weer bellen en elke afspraak is meteen volledig.',
      },
    ],
  },

  work: {
    id: 'werk',
    eyebrow: 'Werk',
    headline: 'Mijn werk',
    intro:
      'Een blik op wat ik gebouwd heb. Bij elk project staat duidelijk of het voor een klant is gemaakt of een eigen concept is.',
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
    detail: {
      showsHeading: 'Wat dit project laat zien',
      screenshotsHeading: 'Screenshots',
      videoHeading: 'Korte demo',
      outcomeHeading: 'Resultaat',
      videoUnsupported:
        'Uw browser kan deze video niet afspelen. U kunt het bestand rechtstreeks openen.',
      viewRepository: 'Bekijk de broncode',
    },
  },

  process: {
    id: 'werkwijze',
    eyebrow: 'Werkwijze',
    headline: 'Van eerste gesprek tot afgewerkt project, in vier stappen',
    intro:
      'Een duidelijk traject, zonder verrassingen. U weet op elk moment waar we staan.',
    steps: [
      {
        number: '01',
        title: 'Vertel wat u nodig heeft',
        description:
          'We bespreken uw bedrijf, wat u wilt verbeteren en wat u nu te veel tijd kost. U hoeft niet te weten welke technische oplossing u nodig heeft.',
      },
      {
        number: '02',
        title: 'Duidelijk voorstel',
        description:
          'U ontvangt een duidelijk voorstel: wat ik maak, wat het kost en wanneer het klaar is.',
      },
      {
        number: '03',
        title: 'Ik bouw het',
        description:
          'Ik bouw de website of de tool en laat u tussentijds meekijken, zodat u onderweg dingen kunt laten aanpassen.',
      },
      {
        number: '04',
        title: 'Online en klaar voor gebruik',
        description:
          'Zodra u akkoord bent, gaat alles online op uw eigen domein en is het klaar voor gebruik.',
      },
    ],
  },

  about: {
    id: 'over-mij',
    eyebrow: 'Over mij',
    headline: 'Hallo, ik ben Andrej.',
    paragraphs: [
      'Ik bouw websites en eenvoudige digitale tools voor bedrijven in België en Nederland.',
      'Mijn doel is eenvoudig: uw bedrijf professioneel online zetten, u helpen meer klanten te bereiken en minder tijd te verliezen aan werk dat elke dag terugkomt.',
      'U werkt rechtstreeks met mij, van het eerste gesprek tot het afgewerkte project — geen bureau en geen ingewikkeld traject.',
      'Sinds 2022 werk ik daarnaast in een hightechomgeving, waar problemen oplossen en werk eenvoudiger maken deel uitmaken van mijn dagelijkse job.',
    ],
  },

  areas: {
    eyebrow: 'Werkgebied',
    page: {
      metaTitle:
        'Website laten maken in Limburg, de Kempen en Zuid-Nederland | AndrejWeb',
      metaDescription:
        'Websites en bedrijfsautomatisering voor bedrijven in Belgisch Limburg, de Kempen en Zuid-Nederland. Volledig online, of met persoonlijk contact in de regio.',
      navLabel: 'Regio',
      title:
        'Websites en automatisering voor bedrijven in België en Nederland',
      intro:
        'Ik werk met bedrijven in Belgisch Limburg, de Kempen en Zuid-Nederland. De samenwerking kan volledig online verlopen, maar voor bedrijven in de regio blijft persoonlijk contact eenvoudig mogelijk.',
      cta: 'Bespreek uw project',
    },
    groups: [
      {
        title: 'Belgisch Limburg',
        locations: ['Pelt', 'Lommel', 'Hasselt', 'Genk'],
      },
      {
        title: 'Kempen & Antwerpen',
        locations: ['Turnhout', 'Geel', 'Antwerpen'],
      },
      {
        title: 'Zuid-Nederland',
        locations: ['Eindhoven', 'Tilburg', 'Breda', 'Weert', 'Venlo'],
      },
    ],
    surrounding: 'en omgeving',
    supporting: [
      'Een website of een automatiseringsproject vraagt geen kantoorbezoek. Het meeste gaat via e-mail, telefoon en een videogesprek, en dat werkt voor een bedrijf in Breda even goed als voor een bedrijf om de hoek.',
      'Voor bedrijven in de buurt is langskomen wel eenvoudig. Één gesprek aan tafel is soms sneller dan drie mails heen en weer — zeker in het begin, als we nog uitzoeken wat u precies nodig heeft.',
      'Staat uw gemeente er niet bij? Dat is geen bezwaar. De lijst hierboven laat zien waar ik het vaakst werk, niet waar ik uitsluitend werk.',
    ],
  },

  faq: {
    eyebrow: 'Vragen & antwoorden',
    page: {
      metaTitle: 'Veelgestelde vragen over websites en automatisering | AndrejWeb',
      metaDescription:
        'Antwoorden op vragen over een website laten maken, prijzen, planning, onderhoud en bedrijfsautomatisering voor bedrijven in België en Nederland.',
      navLabel: 'FAQ',
      title: 'Veelgestelde vragen',
      intro:
        'Hier vindt u antwoorden op veelvoorkomende vragen over websites, automatisering, samenwerking en praktische zaken rond een project.',
      cta: 'Nog een vraag? Neem contact op',
    },
    items: [
      {
        id: 'prijs',
        question: 'Hoeveel kost een website?',
        answer:
          'De prijs hangt af van hoe groot de website is en wat ze moet kunnen. Na een kort gesprek krijgt u een duidelijke prijs, volledig vrijblijvend.',
      },
      {
        id: 'duur',
        question: 'Hoe lang duurt het om een website te maken?',
        answer:
          'Dat hangt af van de grootte van het project. Tijdens het eerste gesprek overlopen we wat u nodig heeft en krijgt u een realistische datum.',
      },
      {
        id: 'aanleveren',
        question: 'Wat moet ik zelf aanleveren?',
        answer:
          "Meestal uw bedrijfsgegevens, uw diensten, een logo, enkele foto's en uw contactgegevens. Ontbreekt er iets, dan bekijken we samen wat nodig is.",
      },
      {
        id: 'redesign',
        question: 'Kan mijn bestaande website vernieuwd worden?',
        answer:
          'Ja. Een bestaande website kan een moderne, professionele uitstraling krijgen.',
      },
      {
        id: 'wijzigingen',
        question: 'Kan ik later wijzigingen laten uitvoeren?',
        answer:
          "Ja. Ook nadat de website online staat, kunnen prijzen, foto's, diensten en teksten aangepast worden.",
      },
      {
        id: 'eigendom',
        question: 'Is de website na oplevering van mij?',
        answer:
          'Dat spreken we vooraf af en het staat in het voorstel, zodat u precies weet wat inbegrepen is.',
      },
      {
        id: 'domein-hosting',
        question: 'Kunt u ook helpen met domein en hosting?',
        answer:
          'Ja. Als u dat wilt, regel ik het webadres, de hosting en het online zetten van de website.',
      },
      {
        id: 'meertalig',
        question: 'Kan de website in meerdere talen gemaakt worden?',
        answer: 'Ja. Een website kan in meerdere talen gemaakt worden.',
      },
      {
        id: 'automatisering',
        question: 'Wat kan er geautomatiseerd worden binnen mijn bedrijf?',
        answer:
          'Dat hangt af van hoe u werkt. Veelvoorkomende voorbeelden zijn offertes voorbereiden, klantaanvragen opvolgen, afspraken inplannen, bestellingen verwerken en terugkerend papierwerk.',
      },
      {
        id: 'automatisering-hulp',
        question: 'Ik weet niet wat ik kan automatiseren. Kunt u daarbij helpen?',
        answer:
          'Ja. U hoeft niet te weten welke techniek u nodig heeft. Vertel gewoon hoe u nu werkt en welke taken u veel tijd kosten. Ik bekijk waar het eenvoudiger kan.',
      },
      {
        id: 'vrijblijvend',
        question:
          'Kunnen we eerst vrijblijvend bespreken wat mijn bedrijf nodig heeft?',
        answer:
          'Ja. Een eerste gesprek dient om te begrijpen wat uw bedrijf nodig heeft en waarmee u het meest geholpen bent.',
      },
    ],
  },

  contact: {
    id: 'contact',
    eyebrow: 'Contact',
    headline: 'Vertel me over uw bedrijf.',
    text: 'Heeft u een website nodig of bent u te veel tijd kwijt aan werk dat elke dag terugkomt? Stuur me een bericht en vertel hoe u nu werkt. Ik bekijk waar ik kan helpen.',
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
        label: 'Vertel kort wat u nodig heeft',
        placeholder:
          'Vertel kort wat uw bedrijf doet en wat u te veel tijd kost. Een paar zinnen volstaat.',
      },
      optional: 'optioneel',
      required: 'verplicht',
      requiredNote: 'Velden met * zijn verplicht.',
      submit: 'Stuur mij een bericht',
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
        text: 'Uw bericht is verzonden. Ik neem zo snel mogelijk contact met u op.',
      },
      failure: {
        heading: 'Het bericht kon niet verzonden worden.',
        text: 'Er ging iets mis bij het verzenden. Probeer het later opnieuw.',
        notConfigured: 'Het verzenden via het formulier is nog niet actief.',
        rateLimited:
          'Er zijn recent te veel pogingen verzonden. Probeer het over enkele minuten opnieuw.',
        emailFallback: 'U kunt uw bericht rechtstreeks per e-mail sturen:',
      },
    },
  },

  footer: {
    tagline: 'Websites & bedrijfsautomatisering',
    description:
      'Websites en slimme automatisering voor bedrijven in België en Nederland.',
    navHeading: 'Navigatie',
    exploreHeading: 'Ontdek',
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
        'Deze website plaatst geen analytische of marketingcookies en gebruikt geen trackingtechnologie. Er wordt enkel geteld hoe vaak pagina’s bekeken worden, zonder cookies — zie het onderdeel Cookies hieronder. Zoals bij vrijwel elke website kunnen technische gegevens zoals uw IP-adres wel tijdelijk voorkomen in de serverlogs die nodig zijn om de website te leveren en te beveiligen.',
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
      noCookies:
        'Er worden zelfs helemaal geen cookies geplaatst. De taal staat in het adres van de pagina — /nl voor Nederlands, /en voor Engels — dus er hoeft niets op uw toestel bewaard te worden om u de juiste versie te tonen.',
      noTracking:
        'Er worden geen advertentienetwerken, sociale-mediawidgets of ingesloten kaarten en video’s geladen. Er wordt ook geen gebruikgemaakt van localStorage of vergelijkbare opslag voor het volgen van bezoekers.',
      analytics:
        'Wel wordt geteld hoe vaak pagina’s bekeken worden. Die meting gebeurt door Vercel, zonder cookies en zonder iets op uw toestel op te slaan. Er wordt geen profiel van u opgebouwd en bezoeken worden niet over meerdere dagen aan elkaar gekoppeld.',
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
