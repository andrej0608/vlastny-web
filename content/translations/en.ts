import type { Dictionary } from './dictionary';

/**
 * English content.
 * Every key here is manually written - no machine translation is used anywhere.
 */
export const en: Dictionary = {
  meta: {
    title:
      'Andrej Juriga — Websites and business automation for businesses in Belgium and the Netherlands',
    ogTitle: 'Professional websites and smart automation for your business',
    description:
      'Modern websites and practical automation for small and medium-sized businesses across Belgian Limburg, the Kempen region and the south of the Netherlands. Digital solutions that save time and simplify everyday processes.',
    tagline: 'Website development & business automation',
  },

  common: {
    skipToContent: 'Skip to main content',
    languageSwitcherLabel: 'Choose language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
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
    // Reads as: "Professional websites and smart automation for your business."
    headlineLead: 'Professional websites and ',
    headlineAccent: 'smart automation',
    headlineTail: ' for your business.',
    supporting:
      'I help businesses in Belgium and the Netherlands with modern websites and practical digital solutions that save time and simplify everyday processes.',
    primaryCta: 'Discuss your project',
    secondaryCta: 'View my work',
    points: [
      'Work directly with me',
      'Clear proposal upfront',
      'Belgium & the Netherlands',
    ],
  },

  services: {
    id: 'services',
    eyebrow: 'Services',
    headline: 'How I can help',
    intro:
      'From a completely new website to simplifying processes that are still handled manually today.',
    items: [
      {
        id: 'websites-op-maat',
        title: 'Custom websites',
        description:
          'Professional websites tailored to the business, its services and its customers.',
        imageAlt:
          'Illustration of a website being assembled from text, images and sections.',
      },
      {
        id: 'website-redesign',
        title: 'Website redesign',
        description:
          'Modernisation of existing websites that are outdated or no longer properly represent the business.',
        imageAlt:
          'Illustration of an outdated website next to a renewed, more modern version.',
      },
      {
        id: 'bedrijfsautomatisering',
        title: 'Business automation',
        description:
          'Practical digital solutions that simplify repetitive business processes such as customer enquiries, quotations, orders and administrative workflows.',
        imageAlt:
          'Illustration of customer enquiries being processed automatically into documents and overviews.',
      },
      {
        id: 'onderhoud',
        title: 'Maintenance & updates',
        description:
          'Support with future changes to text, images, services, prices and other website content.',
        imageAlt:
          'Illustration of a maintenance screen showing settings, updates and status overviews.',
      },
    ],
  },

  whyWebsite: {
    eyebrow: 'Why a professional website',
    headline: 'A website that works for your business.',
    text: 'A good website should do more than look professional. It should help customers quickly understand what you offer and make it easy to take the next step.',
    benefits: [
      {
        title: 'Clear for your customers',
        description:
          'Visitors quickly understand what you offer and why they should choose your business.',
      },
      {
        title: 'Easy contact',
        description:
          'Make calling, emailing, WhatsApp or sending an enquiry as simple as possible.',
      },
      {
        title: 'Professional presence',
        description:
          'A modern website helps your business appear professional and trustworthy.',
      },
      {
        title: 'Fewer unnecessary questions',
        description:
          'Clear information about services, location, opening hours and your process can reduce repetitive questions.',
      },
    ],
  },

  automation: {
    id: 'automation',
    eyebrow: 'Business automation',
    headline: 'What can automation do for your business?',
    intro:
      'Many businesses spend time every day on repetitive tasks that can be partly automated. A practical digital solution can help process information faster, reduce errors and free up time for more important work.',
    useCases: [
      {
        id: 'klantaanvragen',
        title: 'Customer enquiries',
        description:
          'Information from enquiries can be automatically collected, structured and prepared for further processing.',
      },
      {
        id: 'offertes',
        title: 'Quotations',
        description:
          'Customer and enquiry information can be used to prepare quotations faster and more consistently.',
      },
      {
        id: 'bestellingen',
        title: 'Orders & administration',
        description:
          'Repetitive steps around orders, information processing and administrative tasks can be simplified.',
      },
    ],
    cta: 'Discuss what is possible',
  },

  aiAdoption: {
    id: 'ai-in-business',
    eyebrow: 'AI in business',
    headline: 'AI is becoming part of everyday business.',
    intro:
      'In 2025, 20% of EU businesses with 10 or more employees used at least one AI technology. In 2023, this was still 8.1%. This shows how quickly adoption is growing — and how much room there still is for practical use in everyday processes.',
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
    id: 'examples',
    eyebrow: 'Practical examples',
    headline: 'What could this look like in practice?',
    intro:
      'Not every solution needs to be complex. In many cases, it starts with one recurring process that is still handled manually today, but could be set up more intelligently.',
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
          'A customer enquiry arrives by email or through the website. Someone has to read the information, structure it, look up pricing and manually start the quotation.',
        solution:
          'The enquiry is processed in a structured way, so the right information is immediately available and a first proposal or quotation can be prepared faster.',
        result:
          'Instead of starting from scratch every time, the employee works with prepared information and a clearer process.',
      },
      {
        id: 'aanvragen',
        title: 'New customer enquiries',
        problem:
          'New enquiries come in through different channels and need to be manually sorted, followed up and answered.',
        solution:
          'A system can categorise the enquiry, collect the key information, prepare a confirmation and set up the correct next step.',
        result:
          'Each new enquiry has a clearer follow-up and the chance of messages being missed is reduced.',
      },
      {
        id: 'bestellingen',
        title: 'Processing orders',
        problem:
          'Orders come in through different channels and someone then has to manually transfer the information or move it between systems.',
        solution:
          'Order details can be automatically collected, checked and prepared in the structure the business needs for further processing.',
        result:
          'Less manual copying is needed and the process from order intake to further processing becomes more consistent.',
      },
      {
        id: 'afspraken',
        title: 'Service or appointment requests',
        problem:
          'Customers call or send messages about appointments, but key information is often missing and has to be requested later.',
        solution:
          'The website or a digital form collects the most important information in advance, such as the request type, contact details and preferences.',
        result:
          'The request is more complete from the start and less back-and-forth communication is needed.',
      },
    ],
  },

  work: {
    id: 'work',
    eyebrow: 'Work',
    headline: 'My work',
    intro:
      'An overview of projects. Each one clearly states whether it is a concept project or a client project.',
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
    headline: 'From idea to website in four simple steps',
    intro: 'A clear process, without surprises. You always know where we stand.',
    steps: [
      {
        number: '01',
        title: 'Introduction',
        description:
          'We discuss your business, your requirements and what the website or digital solution should achieve.',
      },
      {
        number: '02',
        title: 'Proposal',
        description:
          'You receive a clear proposal for the content, structure and approach.',
      },
      {
        number: '03',
        title: 'Development',
        description:
          'The website or solution is built and adjusted based on your feedback.',
      },
      {
        number: '04',
        title: 'Launch',
        description:
          'After approval, the website is published on your own domain and prepared for use.',
      },
    ],
  },

  about: {
    id: 'about',
    eyebrow: 'About me',
    headline: "Hi, I'm Andrej.",
    paragraphs: [
      'I design and build modern websites and digital solutions for businesses in Belgium and the Netherlands. Since 2022, I have worked in a high-tech environment where technology, processes and problem-solving are part of my daily work.',
      'In 2025, I started actively exploring artificial intelligence, with a particular interest in how AI systems process information and how they can be applied practically in businesses. This led me to focus not only on websites, but also on automating processes such as customer enquiries, quotations, orders and other repetitive tasks.',
      'My goal is to use technology in a practical way: creating clear solutions that save time and simplify processes. You work directly with the person designing and building your website or solution.',
    ],
  },

  areas: {
    eyebrow: 'Areas served',
    headline: 'Serving businesses in Belgium and the Netherlands',
    text: 'Websites and digital solutions for businesses across Belgian Limburg, the Kempen region and the south of the Netherlands.',
    locations: [
      'Pelt',
      'Lommel',
      'Hasselt',
      'Genk',
      'Turnhout',
      'Geel',
      'Antwerp',
      'Eindhoven',
      'Tilburg',
      'Breda',
      'Weert',
      'Venlo',
    ],
    surrounding: 'and surrounding areas',
  },

  faq: {
    eyebrow: 'Frequently asked questions',
    headline: 'Questions I am often asked',
    intro: 'Question not answered here? Feel free to send me a message.',
    items: [
      {
        id: 'prijs',
        question: 'How much does a website cost?',
        answer:
          'The price depends on the size, content and required functionality. After a short introduction, you will receive a clear, no-obligation quotation.',
      },
      {
        id: 'duur',
        question: 'How long does it take to build a website?',
        answer:
          'This depends on the size and complexity of the project. During the first discussion, we can determine the content, requirements and a realistic timeline.',
      },
      {
        id: 'aanleveren',
        question: 'What do I need to provide?',
        answer:
          'This depends on the project. Typical items include business information, services, logo, photos and contact details. If some content is still missing, we can determine together what is needed.',
      },
      {
        id: 'redesign',
        question: 'Can my existing website be redesigned?',
        answer: 'Yes. Existing websites can be redesigned and modernised.',
      },
      {
        id: 'wijzigingen',
        question: 'Can changes be made later?',
        answer:
          'Yes. Text, images, services, prices and other website content can also be updated after launch.',
      },
      {
        id: 'eigendom',
        question: 'Will the website belong to me after completion?',
        answer:
          'The arrangements are clearly discussed beforehand and included in the proposal, so you know exactly what is included.',
      },
      {
        id: 'domein-hosting',
        question: 'Can you help with the domain and hosting?',
        answer:
          'Yes. If required, I can help with the domain, hosting and publishing the website online.',
      },
      {
        id: 'meertalig',
        question: 'Can the website be multilingual?',
        answer: 'Yes. Websites can be built in multiple languages when required.',
      },
      {
        id: 'automatisering',
        question: 'What can be automated within my business?',
        answer:
          'This depends on your processes. Examples include processing customer enquiries, automatically preparing quotations, handling orders or simplifying repetitive administrative tasks.',
      },
      {
        id: 'vrijblijvend',
        question:
          'Can we first discuss what my business needs without obligation?',
        answer:
          'Yes. The first conversation is intended to understand what your business needs and which solution would be appropriate.',
      },
    ],
  },

  contact: {
    id: 'contact',
    eyebrow: 'Contact',
    headline: "Let's discuss your project",
    text: 'Do you need a new website, want to modernise your current website or believe certain processes within your business could be more efficient? Feel free to get in touch.',
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
        label: 'Tell me briefly about your project',
        placeholder:
          'Tell me briefly about your business and what you are looking for. A few sentences is enough.',
      },
      optional: 'optional',
      required: 'required',
      requiredNote: 'Fields marked with * are required.',
      submit: 'Request a free quote',
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
        text: 'Your enquiry has been sent. I will get back to you as soon as possible.',
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
    tagline: 'Website development & business automation',
    description:
      'Websites and digital solutions for businesses in Belgium and the Netherlands.',
    navHeading: 'Navigation',
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
        'This website sets no analytics or marketing cookies and uses no visitor statistics or tracking technology. As with almost any website, technical information such as your IP address may appear temporarily in the server logs needed to deliver and secure the site.',
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
      languageCookie:
        'One functional cookie is set, named NEXT_LOCALE. It records only whether you want to view the site in Dutch or English, so that you arrive in the right language on your next visit. It contains nothing but a language code and expires after one year. You can delete cookies at any time through your browser settings.',
      noTracking:
        'No external scripts, advertising networks, social media widgets or embedded maps and videos are loaded. No use is made of localStorage or similar storage for tracking visitors.',
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
