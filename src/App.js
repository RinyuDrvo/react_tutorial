import React from 'react';
import { List } from './List';
import { Form } from './Form';
import { getLanguages } from './const/langages';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'list',
      langs: []
    }
  }

  // mount時発火
  componentDidMount() {
    console.log('App.js:componentDidMount');
    this.fetchLanguages() ;
  }

  // 言語を取得
  async fetchLanguages() {
    const langs = await getLanguages();
    this.setState({ langs })
  }

  // 言語をセット
  addLang(lang) {
    this.setState({
      tab: 'list',
      langs: [...this.state.langs, lang]
    })
  }

  render() {
    const { tab, langs } = this.state;
    return (
      <div>
        <header>
          <ul>
            <li onClick={() => this.setState({tab: 'list'})}>リスト</li>
            <li onClick={() => this.setState({tab: 'form'})}>フォーム</li>
          </ul>
        </header>
        <hr/>
        {
          tab === 'list' ?
            <List langs={langs} /> :
            <Form onAddLang={(lang) => this.addLang(lang)}/>
        }
      </div>
    )
  }
}

export default App;
