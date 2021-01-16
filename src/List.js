const LANGUAGES = [
  'JavaScirpt',
  'PHP',
  'Ruby'
];

export const List = ({ title }) => {
  return (
    <div>
      <h4>{ title }</h4>
      {
        LANGUAGES.map((lang, index) => {
          return <div key={index}>{lang}</div>
        })
      }
    </div>
  )
}
