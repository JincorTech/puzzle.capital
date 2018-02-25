import React from 'react';

import s from './styles.css';

const Management = () => (
  <div className={s.container}>
    <div className={s.title}>Management</div>

    <div className={s.text}>
      {/* eslint-disable */}
      Puzzle Capital has assembled a world-class team of experts with a strong background in blockchain technology, finance, investments and business development. Our combined expertise allows the fund to execute an effective investment strategy backed by robust fundamental and technical analysis with a focus on delivering uncompromised level of perfomance and while keeping low risk profile and liquidity. Understanding the opportunities in the crypto-asset space requires several modalities of understanding. We employ a team of analysts with both the technical and financial knowledge. Every investment undergoes a series of reviews that investigate five aspects; white paper, team, code, market need and financial expectations.
      {/* eslint-enable */}
    </div>

    <div className={s.managers}>
      <div className={s.manager}>
        <h4>Vladislav Kirichenko</h4>
        <h5>Managing Partner, CEO</h5>
      </div>

      <div className={s.manager}>
        <h4>George Paliani</h4>
        <h5>CBDO, Global Representative</h5>
      </div>

      <div className={s.manager}>
        <h4>Vagan Abelyan</h4>
        <h5>Managing Partner, CFO</h5>
      </div>

      <div className={s.manager}>
        <h4>Andrey Degtyaruk</h4>
        <h5>CTO, Blockchain Expert</h5>
      </div>
    </div>
  </div>
);

export default Management;
