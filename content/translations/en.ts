import type { Dictionary } from './dictionary';

/**
 * English content.
 * Every key here is manually written - no machine translation is used anywhere.
 *
 * House style: this is written for a business owner who is not comfortable with
 * technology - a cleaning company, a garage, a builder, a restaurant. Say what
 * happens and what it is worth to them; never name the technology for its own
 * sake. If a sentence would puzzle that reader, it is the wrong sentence.
 */
export const en: Dictionary = {
  meta: {
    title: 'Websites & Business Automation | AndrejWeb',
    ogTitle: 'Websites that help your business grow',
    description:
      'Professional websites, custom digital solutions and practical business automation for companies in Belgium and the Netherlands.',
    tagline: 'Websites & business automation',
  },

  common: {
    skipToContent: 'Skip to main content',
    languageSwitcherLabel: 'Choose language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    explore: 'Explore',
    exploreLabel: 'More pages',
    menu: 'Menu',
    backToHome: 'Back to the homepage',
    email: 'Email',
    phone: 'Phone',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
  },

  nav: {
    items: [
      { id: 'services', label: 'Services' },
      { id: 'work', label: 'Work' },
      { id: 'how-it-works', label: 'How it works' },
      { id: 'about', label: 'About me' },
      { id: 'contact', label: 'Contact' },
    ],
    cta: 'Contact me',
  },

  hero: {
    // Reads as: "Websites that help your business grow. Simple automation that
    // saves you time."
    headlineLead: 'Websites that help your business grow. ',
    headlineAccent: 'Simple automation',
    headlineTail: ' that saves you time.',
    supporting:
      'Need a new website, a redesign of the one you have, or repetitive work taken off your hands? I build custom digital solutions for businesses in Belgium and the Netherlands.',
    primaryCta: 'Tell me what you need',
    secondaryCta: 'See my work',
    points: [
      'You work directly with me',
      'Clear proposal before we start',
      'Belgium & the Netherlands',
    ],
  },

  services: {
    id: 'services',
    eyebrow: 'Services',
    headline: 'How I can help',
    intro:
      'From a new website and modern web design to custom solutions that take over work you still do by hand.',
    items: [
      {
        id: 'websites-op-maat',
        title: 'Custom websites',
        description:
          'A professional website where customers can quickly see what you do and how to contact you.',
        imageAlt:
          'Illustration of a website being assembled from text, images and sections.',
      },
      {
        id: 'website-redesign',
        title: 'Website redesign',
        description:
          'Want to modernise the website you have? I give it a professional, up-to-date look, while keeping what already works.',
        imageAlt:
          'Illustration of an outdated website next to a renewed, more modern version.',
      },
      {
        id: 'bedrijfsautomatisering',
        title: 'Business automation',
        description:
          'Save time on work you repeat every day — quotations, customer requests, bookings, orders and administration.',
        imageAlt:
          'Illustration of customer enquiries being processed automatically into documents and overviews.',
      },
      {
        id: 'onderhoud',
        title: 'Website maintenance',
        description:
          'Need to change prices, photos, services or text later? I can take care of it for you.',
        imageAlt:
          'Illustration of a maintenance screen showing settings, updates and status overviews.',
      },
    ],
  },

  whyWebsite: {
    eyebrow: 'Why a professional website',
    headline: 'What does a good website actually do for your business?',
    text: 'A website should do more than look nice. It should bring you customers and make it easy for them to reach you.',
    benefits: [
      {
        title: 'Bring in new customers',
        description:
          'People searching for your service can find your business online.',
      },
      {
        title: 'Make contacting you easy',
        description:
          'Customers can quickly call, message you, request a quote or make a booking.',
      },
      {
        title: 'Build trust',
        description:
          'A professional website makes your business look established and reliable.',
      },
      {
        title: 'Turn visitors into customers',
        description:
          'A clear website guides visitors towards contacting you, requesting a quote or making a booking.',
      },
    ],
  },

  automation: {
    id: 'automation',
    eyebrow: 'Business automation',
    headline: 'Still doing the same work manually every day?',
    intro:
      'Many everyday tasks do not need to take up your time. I build custom digital solutions — from a quotation tool to a booking system — that handle part of the work for you.',
    useCases: [
      {
        id: 'offertes',
        title: 'Quotations',
        description:
          'The customer sends the information. The quotation can be prepared automatically instead of typing everything again.',
      },
      {
        id: 'afspraken',
        title: 'Bookings',
        description:
          'Let customers request or book a time without calling or messaging back and forth.',
      },
      {
        id: 'klantaanvragen',
        title: 'Customer requests',
        description:
          'Collect the information you need from a customer in one place instead of searching through emails and WhatsApp messages.',
      },
      {
        id: 'bestellingen',
        title: 'Orders',
        description:
          'Keep orders and customer information organised without copying the same details from one place to another.',
      },
      {
        id: 'planning',
        title: 'Employee planning',
        description: 'See who is working where and when in one simple overview.',
      },
    ],
    cta: 'Tell me what takes up your time',
    examplesLink: 'See four practical examples',
  },

  aiAdoption: {
    id: 'ai-in-business',
    eyebrow: 'AI in business',
    headline: 'AI is becoming part of everyday business.',
    intro:
      'In 2025, 20% of EU businesses with 10 or more employees used at least one AI technology. In 2023 it was 8.1%. You do not need to understand the technology. The question that matters is where it can save you time or make the work easier.',
    chartLabel:
      'Chart: share of EU enterprises with 10 or more employees using at least one AI technology, from 2021 to 2025.',
    chartTableHeading: 'The data behind the chart',
    yearColumn: 'Year',
    shareColumn: 'Share of enterprises',
    axisLabel: 'Share of EU enterprises',
    source:
      'Source: Eurostat — enterprises with 10 or more persons employed (isoc_eb_ai)',
  },

  examples: {
    eyebrow: 'Practical examples',
    page: {
      metaTitle: 'Automation in practice | AndrejWeb',
      metaDescription:
        'Four practical examples of business automation: preparing quotations, handling customer requests, processing orders and scheduling appointments.',
      navLabel: 'Practical examples',
      title: 'Automation in practice',
      intro:
        'Automation does not need to be complicated. It often starts with one recurring task that is still handled manually today and could be organised more efficiently. Below are four practical examples.',
      cta: 'Discuss what could work for your business',
    },
    projectLink: 'See the quotation tool in my portfolio',
    labels: {
      problem: 'Problem',
      solution: 'Solution',
      result: 'Result',
    },
    items: [
      {
        id: 'offertes',
        title: 'Preparing quotations',
        problem:
          'A customer asks for a price. Someone reads through the email, looks up the prices and types the quotation from scratch.',
        solution:
          'The customer sends the information once. It is organised automatically, so the quotation is almost ready to send.',
        result:
          'Quotations go out faster and look the same every time, without typing the same details again.',
      },
      {
        id: 'aanvragen',
        title: 'New customer requests',
        problem:
          'Requests arrive by phone, by email and through WhatsApp. Some are answered late and some are missed altogether.',
        solution:
          'Every request lands in one place, with the details you need already filled in.',
        result:
          'Nothing gets lost between inboxes and you can reply while the customer is still interested.',
      },
      {
        id: 'bestellingen',
        title: 'Processing orders',
        problem:
          'The same order details are typed over again into a list, a document and an invoice.',
        solution:
          'The details are entered once and appear everywhere they are needed.',
        result:
          'Less typing, fewer mistakes and a clear overview of what is still running.',
      },
      {
        id: 'afspraken',
        title: 'Appointments and bookings',
        problem:
          'Customers call to make an appointment, and afterwards half the information you need is still missing.',
        solution:
          'Customers pick a moment themselves and fill in beforehand what you need to know.',
        result:
          'Fewer phone calls back and forth, and every appointment is complete from the start.',
      },
    ],
  },

  work: {
    id: 'work',
    eyebrow: 'Work',
    headline: 'My work',
    intro:
      'A look at what I have built. Each project says clearly whether it was made for a client or as my own concept.',
    viewWebsite: 'View website',
    viewDetails: 'More about this project',
    status: {
      concept: 'Concept project',
      client: 'Client project',
    },
    statusLabel: 'Status',
    typeLabel: 'Type',
    noLiveUrl: 'Not online yet',
    valueLabel: 'What it achieves',
    detail: {
      showsHeading: 'What this project shows',
      screenshotsHeading: 'Screenshots',
      videoHeading: 'Short demo',
      outcomeHeading: 'Result',
      videoUnsupported:
        'Your browser cannot play this video. You can open the file directly.',
      viewRepository: 'View the source code',
    },
  },

  process: {
    id: 'how-it-works',
    eyebrow: 'How it works',
    headline: 'From first conversation to finished project, in four steps',
    intro: 'A clear process, without surprises. You always know where we stand.',
    steps: [
      {
        number: '01',
        title: 'Tell me what you need',
        description:
          'We talk about your business, what you want to improve and what currently takes too much of your time. You do not need to know which technical solution you need.',
      },
      {
        number: '02',
        title: 'Clear proposal',
        description:
          'You receive a clear proposal: what I will build, what it costs and when it will be ready.',
      },
      {
        number: '03',
        title: 'I build it',
        description:
          'I build the website or the tool and show you the work along the way, so you can have things changed while it is being made.',
      },
      {
        number: '04',
        title: 'Live and ready to use',
        description:
          'Once you approve it, everything goes online on your own domain and is ready to use.',
      },
    ],
  },

  about: {
    id: 'about',
    eyebrow: 'About me',
    headline: "Hi, I'm Andrej.",
    paragraphs: [
      'I build websites and simple digital tools for businesses in Belgium and the Netherlands.',
      'My goal is simple: help your business look professional online, get more customers and spend less time on repetitive work.',
      'You work directly with me, from the first conversation to the finished project — no agency and no complicated process.',
      'Since 2022 I have also worked in a high-tech environment, where solving problems and making work simpler is part of my daily job.',
    ],
  },

  areas: {
    eyebrow: 'Areas served',
    page: {
      metaTitle: 'Areas served in Belgium and the Netherlands | AndrejWeb',
      metaDescription:
        'Websites and business automation for companies across Belgian Limburg, the Kempen region and the south of the Netherlands. Fully online, or in person nearby.',
      navLabel: 'Areas served',
      title:
        'Websites and automation for businesses in Belgium and the Netherlands',
      intro:
        'I work with businesses across Belgian Limburg, the Kempen region and the south of the Netherlands. Projects can be handled fully online, while personal contact remains easy for businesses in the region.',
      cta: 'Discuss your project',
    },
    groups: [
      {
        title: 'Belgian Limburg',
        locations: ['Pelt', 'Lommel', 'Hasselt', 'Genk'],
      },
      {
        title: 'Kempen & Antwerp',
        locations: ['Turnhout', 'Geel', 'Antwerp'],
      },
      {
        title: 'South Netherlands',
        locations: ['Eindhoven', 'Tilburg', 'Breda', 'Weert', 'Venlo'],
      },
    ],
    surrounding: 'and surrounding areas',
    supporting: [
      'A website or an automation project needs no office visit. Most of it happens over e-mail, the phone and a video call, and that works as well for a business in Breda as for one around the corner.',
      'For businesses nearby, dropping in is easy enough. One conversation at a table is sometimes quicker than three e-mails back and forth — particularly at the start, while we are still working out what you actually need.',
      'Your town not listed? No obstacle. The list above shows where I work most often, not where I work exclusively.',
    ],
  },

  faq: {
    eyebrow: 'Questions & answers',
    page: {
      metaTitle:
        'Frequently asked questions about websites and automation | AndrejWeb',
      metaDescription:
        'Answers to questions about having a website built, pricing, timelines, maintenance and business automation for companies in Belgium and the Netherlands.',
      navLabel: 'FAQ',
      title: 'Frequently asked questions',
      intro:
        'Here you can find answers to common questions about websites, automation, working together and practical aspects of a project.',
      cta: 'Still have a question? Get in touch',
    },
    items: [
      {
        id: 'prijs',
        question: 'How much does a website cost?',
        answer:
          'That depends on how big the website is and what it needs to do. After a short conversation you receive a clear price, with no obligation.',
      },
      {
        id: 'duur',
        question: 'How long does it take to build a website?',
        answer:
          'That depends on the size of the project. In the first conversation we go through what you need, and you get a realistic date.',
      },
      {
        id: 'aanleveren',
        question: 'What do I need to provide?',
        answer:
          'Usually your company details, your services, a logo, some photos and your contact details. If something is still missing, we work out together what is needed.',
      },
      {
        id: 'redesign',
        question: 'Can my existing website be redesigned?',
        answer:
          'Yes. An existing website can be given a modern, professional look.',
      },
      {
        id: 'wijzigingen',
        question: 'Can changes be made later?',
        answer:
          'Yes. Prices, photos, services and text can also be changed after the website is live.',
      },
      {
        id: 'eigendom',
        question: 'Will the website belong to me after completion?',
        answer:
          'We agree on this upfront and it is written down in the proposal, so you know exactly what is included.',
      },
      {
        id: 'domein-hosting',
        question: 'Can you help with the domain and hosting?',
        answer:
          'Yes. If you want, I take care of the web address, the hosting and putting the website online.',
      },
      {
        id: 'meertalig',
        question: 'Can the website be multilingual?',
        answer: 'Yes. A website can be built in more than one language.',
      },
      {
        id: 'automatisering',
        question: 'What can be automated in my business?',
        answer:
          'That depends on how you work. Common examples are preparing quotations, handling customer requests, taking bookings, processing orders and repetitive paperwork.',
      },
      {
        id: 'automatisering-hulp',
        question: 'I do not know what can be automated. Can you help?',
        answer:
          'Yes. You do not need to know what technology you need. Simply tell me how you currently work and which tasks take up your time. I can look for opportunities to make the process simpler.',
      },
      {
        id: 'vrijblijvend',
        question:
          'Can we first discuss what my business needs without obligation?',
        answer:
          'Yes. The first conversation is there to understand what your business needs and what would help you most.',
      },
    ],
  },

  contact: {
    id: 'contact',
    eyebrow: 'Contact',
    headline: 'Tell me about your business.',
    text: 'Need a website, or spending too much time on work that repeats every day? Send me a message and tell me how you work today. I will see where I can help.',
    detailsHeading: 'Contact details',
    country: 'Belgium',
    // Deliberately not a promise about response times - see README.
    responseNote: 'Every message reaches me directly.',
    whatsappMessage:
      'Hi Andrej, I visited your website and I would like to discuss my project with you.',
    whatsappAction: 'Start a conversation on WhatsApp',
    form: {
      heading: 'Send a message',
      name: { label: 'Name', placeholder: 'Your name' },
      company: { label: 'Company', placeholder: 'Your company name' },
      email: { label: 'Email', placeholder: 'you@company.com' },
      phone: { label: 'Phone', placeholder: '+32 470 00 00 00' },
      serviceType: {
        label: 'How can I help?',
        placeholder: 'Please choose',
        options: [
          { value: 'new-website', label: 'New website' },
          { value: 'website-redesign', label: 'Website redesign' },
          { value: 'automation', label: 'Business automation' },
          { value: 'other', label: 'Something else' },
        ],
      },
      message: {
        label: 'Tell me briefly what you need',
        placeholder:
          'Tell me briefly what your business does and what takes up too much of your time. A few sentences is enough.',
      },
      optional: 'optional',
      required: 'required',
      requiredNote: 'Fields marked with * are required.',
      submit: 'Send me a message',
      submitting: 'Sending…',
      privacyNote:
        'Your details are only used to respond to your enquiry and are never shared with third parties.',
      privacyNotice: {
        before:
          'By submitting this form, your personal data will be used to respond to your enquiry. Read more about how your data is handled in the ',
        linkText: 'Privacy Policy',
        after: '.',
      },
      acknowledgement: {
        before: 'I have read the ',
        linkText: 'Privacy Policy',
        after: '.',
      },
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter your email address.',
        emailInvalid: 'Please enter a valid email address.',
        message: 'Please let me know how I can help.',
        messageShort: 'Please add a little more detail, at least 10 characters.',
        acknowledgement: 'Please confirm that you have read the Privacy Policy.',
        summaryHeading: 'Please check the following fields:',
      },
      success: {
        heading: 'Thank you for your message.',
        text: 'Your message has been sent. I will get back to you as soon as possible.',
      },
      failure: {
        heading: 'Your message could not be sent.',
        text: 'Something went wrong while sending. Please try again later.',
        notConfigured: 'Sending through the form is not active yet.',
        rateLimited:
          'Too many attempts have been sent recently. Please try again in a few minutes.',
        emailFallback: 'You can send your message directly by email:',
      },
    },
  },

  footer: {
    tagline: 'Websites & business automation',
    description:
      'Websites and simple automation for businesses in Belgium and the Netherlands.',
    navHeading: 'Navigation',
    exploreHeading: 'Explore',
    contactHeading: 'Contact',
    languageHeading: 'Language',
    legalHeading: 'Legal',
    rights: 'All rights reserved.',
    business: {
      companyNumber: 'Company number',
      vatNumber: 'VAT number',
    },
  },

  privacy: {
    metaTitle: 'Privacy Policy | Andrej Juriga',
    metaDescription:
      'How personal data sent through this website or its contact form is handled.',
    title: 'Privacy Policy',
    intro:
      'This notice explains what personal data may be processed through this website, why that happens and what rights you have. It describes what this website actually does.',
    lastUpdatedLabel: 'Last updated',
    backToHome: 'Back to the homepage',

    controller: {
      heading: 'Who processes your data',
      intro:
        'The person responsible for processing personal data through this website is:',
    },

    dataCollected: {
      heading: 'What information may be processed',
      intro:
        'If you use the contact form, the information you enter yourself is processed. This may include:',
      formItems: [
        'name',
        'company name',
        'email address',
        'phone number, if provided',
        'the type of project or service selected, if provided',
        'the content of your message',
      ],
      technical:
        'This website sets no analytics or marketing cookies and uses no tracking technology. Page views are counted without cookies — see the Cookies section below. As with almost any website, technical information such as your IP address may appear temporarily in the server logs needed to deliver and secure the site.',
    },

    purposes: {
      heading: 'Why the information is processed',
      intro:
        'The information you send through the contact form is used to:',
      items: [
        'respond to your enquiry',
        'get in touch with you',
        'discuss your question or the possible project',
        'prepare a proposal or quotation where relevant',
      ],
    },

    legalBasis: {
      heading: 'Legal basis',
      paragraphs: [
        'When you contact me with a question or request, the information you provide is processed because doing so is necessary to respond to your message and, where relevant, to take steps at your request before a possible agreement is entered into.',
        'Separate consent is therefore not required in order to answer an ordinary business enquiry. If a processing activity is added in future that genuinely does rely on consent, that consent will be requested separately and clearly, and you will be able to withdraw it at any time.',
      ],
    },

    retention: {
      heading: 'How long information is retained',
      paragraphs: [
        'Personal data is not kept longer than necessary for the purpose for which it was received, unless a longer retention period is required by law.',
        'If your enquiry does not lead to working together, the correspondence is not kept indefinitely. If it does lead to an assignment, information may be kept longer to the extent needed to carry out that work or to meet legal obligations.',
      ],
    },

    sharing: {
      heading: 'Who information may be shared with',
      intro:
        'Your information is not sold and is not used for advertising. It may, however, be processed by service providers needed to operate the website or to make communication possible.',
      noEmailProvider:
        'At present, no external email delivery service is connected to the contact form. Messages sent through the form are therefore not passed to an external processor. While this is the case, email or WhatsApp are the fastest ways to reach me.',
      emailProvider:
        'Messages sent through the contact form are delivered using {provider}. That service processes the content of your message solely in order to deliver it.',
      hostingProvider:
        'The website is hosted by {provider}. In the course of this, technical information such as IP addresses may be processed as needed to deliver and secure the site.',
      hostingUnknown:
        'The website is hosted with a hosting provider. In the course of this, technical information such as IP addresses may be processed as needed to deliver and secure the site.',
      serverLogs:
        'If you contact me by email or WhatsApp, that communication travels through the provider of that service, and that provider’s own terms and privacy policy apply in addition to this notice.',
    },

    international: {
      heading: 'International transfers',
      paragraphs: [
        'Some service providers needed to deliver a website are established outside the European Economic Area, or use infrastructure located outside it. Where that is the case, data may also be processed outside the EEA.',
        'If you would like to know which service providers are in use at any given moment and where they process data, you can request this using the email address at the top of this page.',
      ],
    },

    cookies: {
      heading: 'Cookies',
      intro:
        'This website uses no cookies for analytics, statistics, advertising or tracking visitors.',
      noCookies:
        'In fact no cookies are set at all. The language is part of the page address — /nl for Dutch, /en for English — so nothing needs to be stored on your device to show you the right version.',
      noTracking:
        'No advertising networks, social media widgets or embedded maps and videos are loaded. No use is made of localStorage or similar storage for tracking visitors.',
      analytics:
        'Page views are counted. That measurement is carried out by Vercel, without cookies and without storing anything on your device. No profile is built about you, and visits are not linked together across days.',
    },

    rights: {
      heading: 'Your rights',
      intro:
        'In relation to your personal data you may, within the limits of the law, exercise the following rights:',
      items: [
        'access to the data held about you',
        'correction of inaccurate or incomplete data',
        'erasure of your data',
        'restriction of processing',
        'objection to processing, where applicable',
        'portability of the data you provided yourself, where applicable',
      ],
      howTo:
        'You can make a request using the email address at the top of this page. To prevent misuse, you may be asked to clarify your request.',
      complaint:
        'If you are not satisfied with how your data is handled, you have the right to lodge a complaint with the competent data protection supervisory authority, usually the one in the country where you live or work.',
    },

    security: {
      heading: 'Security',
      paragraphs: [
        'Reasonable technical and organisational measures are taken to protect personal data against loss, misuse and unauthorised access. For example, the website is served over an encrypted connection, and the number of people with access to incoming messages is kept small.',
        'No website or form of electronic communication is completely secure, so no absolute guarantee can be given; appropriate protection is, however, actively maintained.',
      ],
    },

    changes: {
      heading: 'Changes to this Privacy Policy',
      paragraphs: [
        'This privacy notice may be updated when the website changes or when the way data is handled changes, for example if a new service provider is engaged.',
        'The date below indicates when this notice was last reviewed.',
      ],
    },
  },

  notFound: {
    title: 'Page not found',
    headline: 'This page does not exist.',
    text: 'The page you are looking for has moved or no longer exists.',
    cta: 'Back to the homepage',
  },
};
