import React from 'react';
import styles from './List.module.css';
import DropdownMultiple from "../DropdownMultiple/DropdownMultiple";
const List = () => (
  <div className={styles.List}>
 <DropdownMultiple/>
  </div>
);

List.propTypes = {};

List.defaultProps = {};

export default List;
