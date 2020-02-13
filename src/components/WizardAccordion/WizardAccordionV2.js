import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'Components/Button';
import HollowButton from 'Components/Button/HollowButton';
import PrimaryButton from 'Components/Button/PrimaryButton';
import RightPointerIcon from 'Components/icons/right-pointer-icon';

import './WizardAccordion.scss';

const WizardAccordion = ({
                           id,
                           headerText,
                           isOpen,
                           toggleAccordion,
                           children,
                           directionalText,
                           leftLinkButtonText,
                           leftLinkButtonAction,
                           linkButtonText,
                           secondaryButtonText,
                           secondaryButtonAction,
                           primaryButtonAction,
                           primaryButtonText,
                           showFooterLeft,
                           linkButtonAction,
                           hidden,
                         }) => {
  const headerClass = classnames('wizard-accordion__header', {
    'wizard-accordion__header--toggled': isOpen,
  });

  const toggleClass = classnames('wizard-accordion__toggler', {
    'wizard-accordion__toggler--expanded': isOpen,
    'wizard-accordion__toggler--collapsed': !isOpen,
  });

  const bodyClass = classnames('wizard-accordion__body', {
    'wizard-accordion__body--expanded': isOpen,
  });

  return (
    <article className={`wizard-accordion__wrapper ${hidden}`}>
      <header
        role="button"
        tabIndex={0}
        className={headerClass}
        onClick={toggleAccordion}
        id={id}
      >
        <span className={toggleClass} />
        <h1 className="wizard-accordion__headline">{headerText}</h1>
      </header>
      <div className={bodyClass}>
        <div>
          <div className="wizard-accordion__content">
            {children}
          </div>

          <footer className="wizard-accordion__footer">
            <div className="wizard-accordion__footer-left">
              {
                (showFooterLeft && leftLinkButtonText.length > 0) &&
                <Button
                  action={leftLinkButtonAction}
                  category="link-inline"
                >
                  {leftLinkButtonText}
                </Button>
              }
            </div>
            <div className="wizard-accordion__footer-right">
              {
                directionalText.length > 0 &&
                <span className="wizard-accordion__footer-right-text">{directionalText} <RightPointerIcon /></span>
              }
              {linkButtonText &&
              <Button
                action={linkButtonAction}
              >
                {linkButtonText}
              </Button>}
              {secondaryButtonText &&
              <HollowButton
                action={secondaryButtonAction}
              >
                {secondaryButtonText}
              </HollowButton>}
              {
                primaryButtonText &&
                <PrimaryButton
                  action={() => primaryButtonAction(id)}
                >
                  {primaryButtonText}
                </PrimaryButton>
              }
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
};

WizardAccordion.propTypes = {
  directionalText: PropTypes.string,
  headerText: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
  leftLinkButtonText: PropTypes.string,
  leftLinkButtonAction: PropTypes.func,
  linkButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  primaryButtonAction: PropTypes.func,
  primaryButtonText: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  showFooterLeft: PropTypes.bool,
};

WizardAccordion.defaultProps = {
  directionalText: '',
  leftLinkButtonText: '',
  leftLinkButtonAction: () => {
  },
  linkButtonText: '',
  secondaryButtonText: '',
  primaryButtonAction: () => {
  },
  primaryButtonText: '',
  showFooterLeft: false,
};

export default WizardAccordion;