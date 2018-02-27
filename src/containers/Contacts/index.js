import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitContactForm, resetStore } from '../../redux/modules/contactForm';

import ContactForm from '../../components/ContactForm';
import ContactFormSuccess from '../../components/ContactFormSuccess';

import s from './styles.css';

class Contacts extends Component {
  componentWillUnmount() {
    this.props.resetStore();
  }

  render() {
    const renderStep = () => {
      switch (this.props.step) {
        case 'contactForm':
          return <ContactForm onSubmit={submitContactForm}/>;
        case 'success':
          return <ContactFormSuccess resetStore={this.props.resetStore}/>;
        default:
          return <div>Something went wrong.</div>;
      }
    };

    return (
      <div className={s.container}>
        <div className={s.title}>Contact Us</div>
        {renderStep()}

        {/* <div className={s.links}>
          <div className={s.link}>
            <h4>General Inquiries</h4>
            <a href="mailto:info@puzzle.capital">info@puzzle.capital</a>
          </div>

          <div className={s.link}>
            <h4>Partnerships</h4>
            <a href="mailto:partner@puzzle.capital">partner@puzzle.capital</a>
          </div>

          <div className={s.link}>
            <h4>Investments</h4>
            <a href="mailto:invest@puzzle.capital">invest@puzzle.capital</a>
          </div>

          <div className={s.link}>
            <h4>Media/Press</h4>
            <a href="mailto:press@puzzle.capital">press@puzzle.capital</a>
          </div>
        </div> */}
      </div>
    );
  }
}

export default connect(
  (state) => ({ ...state.contactForm }),
  {
    resetStore
  }
)(Contacts);
