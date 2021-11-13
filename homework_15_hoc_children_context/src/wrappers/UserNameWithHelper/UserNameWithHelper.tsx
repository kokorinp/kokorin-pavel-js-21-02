import React, { ReactNode, SyntheticEvent } from 'react';
import './UserNameWithHelper.css';

interface State {
  hovered: boolean;
}

interface Props {
  children: ReactNode;
  user_id: string;
  darkTheme: boolean;
}

export default class UserNameWithHelper extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hovered: false };
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
  }

  mouseOver(e: SyntheticEvent) {
    this.setState({ hovered: true });
    e.stopPropagation();
  }

  mouseOut(e: SyntheticEvent) {
    this.setState({ hovered: false });
    e.stopPropagation();
  }

  render(): ReactNode {
    return (
      <div
        className="user_name_with_helper"
        onMouseOut={this.mouseOut}
        onBlur={this.mouseOut}
        onMouseOver={this.mouseOver}
        onFocus={this.mouseOver}
      >
        {this.state.hovered ? (
          <div
            className={`user_name_with_helper__message ${
              this.props.darkTheme ? 'user_name_with_helper__message_dark' : ''
            }`}
          >
            user_id: {this.props.user_id}
          </div>
        ) : (
          ''
        )}

        {this.props.children}
      </div>
    );
  }
}
