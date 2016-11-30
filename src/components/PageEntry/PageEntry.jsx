import * as s from './PageEntry.styl';
import React from 'react';

/**
 * Entry page
 */
const PageEntry = () =>
    <main className={s.page}>
        <h1 className={s.title}>Hello, world!</h1>
        <p className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
        </p>
    </main>
;

export default PageEntry;
