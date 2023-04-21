import React from 'react'
import styles from './PageNumberStyles.module.css';

export default function PageNumber({ number }) {
    return (
      <div className={styles.pageNumber}>
        <span>{number}</span>
      </div>
    );
  }
