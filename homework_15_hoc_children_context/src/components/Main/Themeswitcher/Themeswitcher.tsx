import React, { ReactNode } from 'react';

import './Themeswitcher.css';
import { ThemeContextConsumer, ThemeContextState } from '../../../contexts/ThemeContext';

interface State {}
interface Props {}

class Themeswitcher extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <ThemeContextConsumer>
        {(context: Partial<ThemeContextState>) => (
          <div className="themeswitcher">
            <label className="themeswitcher__label" htmlFor="Themeswitcher">
              тёмная тема
            </label>
            <input
              className="themeswitcher__input"
              type="checkbox"
              id="Themeswitcher"
              defaultChecked={context.darkTheme}
              onClick={context.toggleTheme}
            />
          </div>
        )}
      </ThemeContextConsumer>
    );
  }
}

export default Themeswitcher;
