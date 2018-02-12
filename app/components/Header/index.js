import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './style.css';

class Header extends React.Component {// eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ background: 'white', height: '75px', borderBottom: '1px solid lightgray' }}>
        <div className="container">
          <h1 style={{ float: 'left' }}>
            <FormattedMessage {...messages.header} />
          </h1>
          <div style={{ float: 'right', padding: '27px' }}>
            <a className="link" href="/login">Masuk</a>
            <a className="link" href="/login">Daftar</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
