import React from 'react';
import { getLanguages } from './const/langages';
import { ThemeContext, THEMES } from './contexts/ThemeContext';
import App from './App';
import { withLoading } from './hoc/withLoading';

const AppComponent = withLoading(App, getLanguages);

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: THEMES.dark };
  }
  toggleTheme() {
    const theme = this.state.theme === THEMES.dark ? THEMES.light : THEMES.dark;
    this.setState({ theme });
  }
  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={[theme, () => this.toggleTheme()]}>
        <AppComponent />
      </ThemeContext.Provider>
    )
  }
}
