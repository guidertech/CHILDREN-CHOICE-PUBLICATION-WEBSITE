export type CollectionSeries = {
  id: string;
  title: string;
  categoryId: string;
  logoPath?: string;
  coverPath?: string;
  orderFormPath?: string;
};

const englishSeries: CollectionSeries[] = [
  { id: 'brainzo-ai', title: 'Brainzo.ai', categoryId: 'english', logoPath: '/assets/series-logos/brainzo-ai-removebg-preview.png', orderFormPath: '/assets/order-forms/brainzo-ai-order-form-isbn.pdf' },
  { id: 'clario-ai', title: 'Clario.ai', categoryId: 'english', logoPath: '/assets/series-logos/clario-ai-removebg-preview.png', orderFormPath: '/assets/order-forms/clario-ai-order-form-isbn.pdf' },
  { id: 'keylinks', title: 'Keylinks', categoryId: 'english', logoPath: '/assets/series-logos/keylinks-removebg-preview.png', orderFormPath: '/assets/order-forms/keylinks-order-form.pdf' },
  { id: 'modak', title: 'Modak', categoryId: 'english', logoPath: '/assets/series-logos/modak-removebg-preview.png', orderFormPath: '/assets/order-forms/modak-order-form.pdf' },
  { id: 'blackberry', title: 'Blackberry', categoryId: 'english', logoPath: '/assets/series-logos/blackberry.jpg', orderFormPath: '/assets/order-forms/blackberry-order-form.pdf' },
  { id: 'deepdive', title: 'DeepDive', categoryId: 'english', logoPath: '/assets/series-logos/deepdive-removebg-preview.png', orderFormPath: '/assets/order-forms/deepdive-order-form-isbn.pdf' },
  { id: 'eureka', title: 'Eureka', categoryId: 'english', logoPath: '/assets/series-logos/eureka-removebg-preview.png', orderFormPath: '/assets/order-forms/eureka-order-form-isbn.pdf' },
  { id: 'footprints', title: 'Footprints', categoryId: 'english', logoPath: '/assets/series-logos/footprints-removebg-preview.png', orderFormPath: '/assets/order-forms/footprints-order-form-isbn.pdf' },
  { id: 'click', title: 'Click!', categoryId: 'english', logoPath: '/assets/series-logos/click-removebg-preview.png', orderFormPath: '/assets/order-forms/click-order-form.pdf' },
  { id: 'blueray', title: 'BlueRay', categoryId: 'english', logoPath: '/assets/series-logos/blueray-removebg-preview.png', orderFormPath: '/assets/order-forms/blueray-order-form.pdf' },
];

const hindiSeries: CollectionSeries[] = [
  { id: 'aryavrat', title: 'Aryavrat', categoryId: 'hindi', logoPath: '/assets/series-logos/aryavrat-removebg-preview.png', orderFormPath: '/assets/order-forms/aryavrat-order-form.pdf' },
  { id: 'kidsberry', title: 'KidsBerry', categoryId: 'hindi', logoPath: '/assets/series-logos/kidsberry-removebg-preview.png', orderFormPath: '/assets/order-forms/kidsberry-order-form.pdf' },
  { id: 'splendid', title: 'Splendid', categoryId: 'hindi', logoPath: '/assets/series-logos/splendid-removebg-preview.png', orderFormPath: '/assets/order-forms/splendid-order-form.pdf' },
  { id: 'saarthi', title: 'Saarthi', categoryId: 'hindi', logoPath: '/assets/series-logos/saarthi-removebg-preview.png', orderFormPath: '/assets/order-forms/saarthi-order-form.pdf' },
];

const labManualSeries: CollectionSeries[] = [
  { id: 'keylinks', title: 'Keylinks', categoryId: 'lab-manuals', logoPath: '/assets/series-logos/keylinks-removebg-preview.png', orderFormPath: '/assets/order-forms/keylinks-lab-manual-2027-28.pdf' },
  { id: 'blackberry', title: 'Blackberry', categoryId: 'lab-manuals', logoPath: '/assets/series-logos/blackberry.jpg', orderFormPath: '/assets/order-forms/blackberry-science-lab-manual-2027-28.pdf' },
  { id: 'monopoly', title: 'Monopoly', categoryId: 'lab-manuals', logoPath: '/assets/series-logos/monopoly-removebg-preview.png', orderFormPath: '/assets/order-forms/monopoly-lab-manual-2027-28.pdf' },
];

const spiritualSeries: CollectionSeries[] = [
  { id: 'series-1', title: 'Bharat Ki Khoj', categoryId: 'spiritual', coverPath: '/assets/covers/bharat-ki-khoj.png', orderFormPath: '/assets/order-forms/keylinks-religious-books-order-form-2027-28.pdf' },
  { id: 'series-2', title: 'Bal Ramayana', categoryId: 'spiritual', coverPath: '/assets/covers/bal-ramayana.png', orderFormPath: '/assets/order-forms/keylinks-religious-books-order-form-2027-28.pdf' },
  { id: 'series-3', title: 'Bal Mahabharata', categoryId: 'spiritual', coverPath: '/assets/covers/bal-mahabharata.png', orderFormPath: '/assets/order-forms/keylinks-religious-books-order-form-2027-28.pdf' },
];

export const collectionSeries: CollectionSeries[] = [
  ...spiritualSeries,
  ...labManualSeries,
  ...hindiSeries,
  ...englishSeries,
];
