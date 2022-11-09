import React from 'react';
import styles from './admin.module.css';

export default function AdminLogo() {
    return (
      <div className={styles.logo}>
        <img
          src="/kmn-logo-black.svg"
          alt="KMN Logotipas"
        />
      </div>
  );
}