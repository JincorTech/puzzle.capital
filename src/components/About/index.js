import React from 'react';

import s from './styles.css';

export default () => (
  <div className={s.container}>
    <div className={s.title}>About</div>

    <div className={s.text}>
      {/* eslint-disable */}
      <p>Puzzle is a venture capital and private equity firm focused on strategic investments in distributed ledger technologies and blockchain-based digital assets. By leveraging our team’s unique knowledge and hands-on experience in blockchain industry, we strive to address its existing technological roadblocks and provide an outstanding long-term investment performance to a diverse client base, which includes institutions, family offices and high net worth individuals.</p>
      <p>Puzzle Capital’s philosophy reflects a broad sentiment that distributed ledger technology bears immense potential of positively disrupting the global economy across the entire value chain. And being in its early stages of evolution with mainstream adoption looming on the horizon and more groundbraking innovations yet to come, this rapidly emerging industry represents an investment opportunity of unprecedented scale and magnitude.</p>
      {/* eslint-enable */}
    </div>
  </div>
);
