import type { Dictionary } from './dictionary';

/**
 * English content.
 * Every key here is manually written - no machine translation is used anywhere.
 */
export const en: Dictionary = {
  meta: {
    title: 'Andrej Juriga — Websites and business automation in Belgium and the Netherlands',
    ogTitle: 'A professional website that fits your business',
    description:
      'Professional websites and practical business automation for small and medium-sized businesses across Belgian Limburg, the Kempen region and the south of the Netherlands. Work directly with the person building it.',
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
    headline: 'A professional website that fits your business.',
    supporting:
      'Modern, fast and user-friendly websites and digital solutions for businesses in Belgium and the Netherlands.',
    primaryCta: 'View my work',
    secondaryCta: 'Contact me',
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
    headline: 'Your website is often the first impression of your business.',
    text: 'Potential customers often search online before making contact. A clear and professional website helps them quickly understand what you offer, find the information they need and get in touch with you.',
    benefits: [
      'Professional first impression',
      'Clear on mobile, tablet and desktop',
      'Easy ways to get in touch',
      'Clear presentation of services',
      'Integration with phone, email, WhatsApp or Google Maps where relevant',
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
      'I design and build modern websites and digital solutions for businesses in Belgium and the Netherlands. My focus is on creating clear, fast and professional websites without unnecessary complexity.',
      'Since 2022, I have been working within a high-tech company, where I am exposed to technology, processes and problem-solving on a daily basis. In 2025, I started actively exploring artificial intelligence — not only how to use it, but also how AI systems work, process information and can be applied in practical business environments.',
      'Alongside website development, I am therefore increasingly focused on business automation. This can include automatically processing customer enquiries, generating quotations based on provided information, handling orders or simplifying other repetitive administrative processes.',
      'My goal is not to make technology more complicated, but to use it practically to save businesses time and simplify their processes.',
      'You work directly with the person designing and building your website or solution, keeping communication simple and personal.',
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
      message: {
        label: 'How can I help?',
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
        text: 'Something went wrong while sending. Please try again later or send an email.',
        notConfigured:
          'Sending through the form is not active yet. Please send your message directly by email for now.',
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
