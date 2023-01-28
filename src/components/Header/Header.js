import React from 'react';
import {Link,Outlet} from "react-router-dom";
import styles from './Header.module.css';
const Header = () => (
  <div className={styles.Header}>
    <header class='w-20 float-left position-fixed'>
      <div className='left-panel'>
        <ul class="text-4xl">
          <li class="py-5"><Link to="/" className="text-blue-600 text-decoration-none"><i class="bi bi-house-door-fill"></i></Link></li>
          <li class="py-5"><Link to="/candidates" class="text-blue-600 text-decoration-none"><i class="bi bi-people-fill"></i></Link></li>
          <li class="py-5"><Link to="/fetchDataUsers" class="text-blue-600 text-decoration-none"><i class="bi bi-person-fill-add"></i></Link></li>
          <li class="py-5"><Link to="/list" className="text-blue-600 text-decoration-none"><i class="bi bi-file-text-fill"></i></Link></li>
          <li class="py-5"><Link to="/settings" className="text-blue-600 text-decoration-none"><i class="bi bi-gear-fill"></i></Link></li>
          <li class="py-5"><Link to="/candidates" className="text-blue-600 text-decoration-none"><i class="bi bi-translate"></i></Link></li>
        </ul>
      </div>
      <Outlet/>
    </header>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
