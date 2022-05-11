import React, { useState } from 'react';
import styles from './Bulb.module.css';

export default function Bulb() {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className={styles.body}>
      <div className={styles.light}>
        <div className={styles.wire}></div>
        <div className={styles.bulb}>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
