export const LANGUAGES = [
  'JavaScirpt',
  'PHP',
  'Ruby'
];

export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000)
  })
}
