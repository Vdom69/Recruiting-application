import React from 'react';
import styles from './Settings.module.css';
import ModalWindow from "../ModalWindow/ModalWindow";
import MultiVlueInput from "../MultiVlueInput/MultiVlueInput";
import DateElements from "../DateElements/DateElements";

const Settings = () => (
  <div className={styles.Settings}>
    Settings Component
    <div className=''><ModalWindow/></div>
    <div className='mt-10'><MultiVlueInput/></div>
    <div className='mt-10'><DateElements/></div>
 
  </div>
);

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
