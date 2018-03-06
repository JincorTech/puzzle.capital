import React from 'react';

import s from './styles.css';

export default () => (
  <div className={s.container}>
    <div className={s.title}>About</div>

    <div className={s.text}>
      {/* eslint-disable */}
      <p>Puzzle is a venture capital and private equity firm focused on strategic investments in distributed ledger technologies, blockchain-based digital assets and companies. By leveraging our team’s accumulated knowledge and hands-on experience in blockchain, fintech and investment management, along with a robust global network of key industry players, we strive to address existing technological roadblocks and provide a sustainable investment performance to a diverse client base, which includes financial institutions, family offices and high net worth individuals.</p>
      <p>Puzzle Capital’s philosophy reflects a broad sentiment that distributed ledger technology bears immense potential of positively disrupting global economy across the entire value chain. And being in its early stages of evolution with mainstream adoption looming on the horizon and more groundbraking innovations yet to come, this rapidly emerging industry represents an investment opportunity of unprecedented scale and magnitude.</p>
      {/* eslint-enable */}
    </div>
  </div>
);
