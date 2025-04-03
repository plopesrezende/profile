export interface HeaderTranslations {
  home: string;
  about: string;
  services: string;
  contact: string;
  openMenu: string;
  closeMenu: string;
}

export interface HeroTranslations {
  name: string;
  role: string;
  description: string;
  exploreServices: string;
  getInTouch: string;
}

export interface TestimonialItem {
  text: string;
  author: string;
  position: string;
}

export interface TestimonialsTranslations {
  title: string;
  subtitle: string;
  prevLabel: string;
  nextLabel: string;
  testimonialLabel: string;
  testimonials: TestimonialItem[];
}

export interface CtaTranslations {
  title: string;
  description: string;
  consultationButton: string;
  servicesButton: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  offerings: string[];
}

export interface ServicesTranslations {
  title: string;
  subtitle: string;
  offerTitle: string;
  items: ServiceItem[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
}

export interface ServicesSectionItem {
  title: string;
  description: string;
}

export interface ServicesSectionTranslations {
  sectionTitle: string;
  sectionDescription: string;
  services: ServicesSectionItem[];
}

export interface ExperienceItem {
  title: string;
  company?: string;
  period: string;
  description: string;
}

export interface ExperienceSectionTranslations {
  sectionTitle: string;
  sectionDescription: string;
  experiences: ExperienceItem[];
}

export interface ContactStep {
  title: string;
  description: string;
}

export interface ContactTranslations {
  pageTitle: string;
  pageDescription: string;
  getInTouch: string;
  email: {
    title: string;
  };
  linkedin: {
    title: string;
  };
  github: {
    title: string;
  };
  location: {
    title: string;
  };
  locationValue: string;
  howIWork: string;
  howIWorkDescription: string;
  steps: ContactStep[];
}

export interface CommonTranslations {
  languageButton: string;
  languageLabel: string;
}

export interface FooterQuickLink {
  name: string;
  path: string;
}

export interface FooterContactInfo {
  location: string;
  email: string;
}

export interface FooterTranslations {
  aboutMe: string;
  services: string;
  servicesList: string[];
  quickLinks: string;
  quickLinksList: FooterQuickLink[];
  contact: string;
  contactInfo: FooterContactInfo;
  getInTouch: string;
  copyright: string;
}

export interface SkillItem {
  title: string;
  description: string;
}

export interface AboutTranslations {
  pageTitle: string;
  role: string;
  bio1: string;
  bio2: string;
  bio3: string;
  keySkills: string;
  skillsList: SkillItem[];
  journey: string;
  journeyDescription1: string;
  journeyDescription2: string;
  journeyDescription3: string;
}

export interface AllTranslations extends CommonTranslations {
  header: HeaderTranslations;
  hero: HeroTranslations;
  testimonials: TestimonialsTranslations;
  cta: CtaTranslations;
  services: ServicesTranslations;
  servicesSection: ServicesSectionTranslations;
  experienceSection: ExperienceSectionTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
  about: AboutTranslations;
}