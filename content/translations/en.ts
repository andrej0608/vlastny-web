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
    headline: 'Professional websites and smart automation for your business.',
    supporting:
      'I help businesses in Belgium and the Netherlands with modern websites and practical digital solutions that save time and simplify everyday processes.',
    primaryCta: 'Discuss your project',
    secondaryCta: 'View my work',
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
      },
      {
        id: 'website-redesign',
        title: 'Website redesign',
        description:
          'Modernisation of existing websites that are outdated or no longer properly represent the business.',
      },
      {
        id: 'bedrijfsautomatisering',
        title: 'Business automation',
        description:
          'Practical digital solutions that simplify repetitive business processes such as customer enquiries, quotations, orders and administrative workflows.',
      },
      {
        id: 'onderhoud',
        title: 'Maintenance & updates',
        description:
          'Support with future changes to text, images, services, prices and other website content.',
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
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter your email address.',
        emailInvalid: 'Please enter a valid email address.',
        message: 'Please let me know how I can help.',
        messageShort: 'Please add a little more detail, at least 10 characters.',
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
    rights: 'All rights reserved.',
  },

  notFound: {
    title: 'Page not found',
    headline: 'This page does not exist.',
    text: 'The page you are looking for has moved or no longer exists.',
    cta: 'Back to the homepage',
  },
};
