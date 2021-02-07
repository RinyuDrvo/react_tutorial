import React from 'react';
import { List } from './List';
import { Form } from './Form';
import { getLanguages } from './const/langages';
import { withLoading } from './hoc/withLoading';
import { Header } from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'list',
      langs: props.data
    }
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
        <Header tab={tab} setTab={(t) => this.setState({ tab: t })} />
        {
          tab === 'list' ?
            <List langs={langs} /> :
            <Form onAddLang={(lang) => this.addLang(lang)}/>
        }
      </div>
    )
  }
}

export default withLoading(App, getLanguages);
