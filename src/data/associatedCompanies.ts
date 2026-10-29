export type AssociatedCompany = {
  name: string;
  logoPath: string;
  detail?: string;
};

export const primaryCompany = {
  name: 'Children Choice Publication Pvt. Ltd.',
  logoPath: '/assets/brand-logos/children-choice-publishers.png',
};

export const associatedCompanies: AssociatedCompany[] = [
  { name: 'Guider Books Private Limited', logoPath: '/assets/brand-logos/guider-books.png' },
  { name: 'Children Choice Industries LLP', logoPath: '/assets/brand-logos/children-choice-industries.png' },
  {
    name: 'Guider Notebooks',
    detail: 'Notebooks · Paper stationery · Paper converters',
    logoPath: '/assets/brand-logos/guider-notebooks.png',
  },
  {
    name: 'Guider Sports Private Limited',
    detail: 'Manufacturer of all sports items',
    logoPath: '/assets/brand-logos/guider-sports.png',
  },
  { name: 'Cadenza Residences', logoPath: '/assets/brand-logos/cadenza-residences.png' },
  { name: 'Dehradun Molecule', detail: 'Air Bar | Kitchen', logoPath: '/assets/brand-logos/dehradun-molecule.png' },
  { name: 'Aarambh Infra', logoPath: '/assets/brand-logos/aarambh-infra.png' },
];
