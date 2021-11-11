import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export interface ThemeContextState {
  darkTheme: boolean;
  toggleTheme: () => void;
}

const { Provider, Consumer } = React.createContext<Partial<ThemeContextState>>({});

class ThemeContextProvider extends React.Component<Props, ThemeContextState> {
  constructor(props: Props) {
    super(props);
    const stat: string = localStorage.getItem('StatusTheme') ? (localStorage.getItem('StatusTheme') as string) : '0';
    this.state = {
      darkTheme: stat === '1',
      toggleTheme: this.toggleTheme.bind(this)
    };
  }

  toggleTheme() {
    const stat: boolean = !this.state.darkTheme;
    this.setState({ darkTheme: stat });
    stat ? localStorage.setItem('StatusTheme', '1') : localStorage.setItem('StatusTheme', '0');
  }

  render(): React.ReactNode {
    return (
      <Provider
        value={{
          darkTheme: this.state.darkTheme,
          toggleTheme: this.state.toggleTheme
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
