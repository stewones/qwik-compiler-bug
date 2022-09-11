import { component$ } from '@builder.io/qwik';
import { QwikCity, RouterOutlet } from '@builder.io/qwik-city';
import { Head } from './components/head/head';

import './global.css';

import { Counter } from '../../counter'

export default component$(() => {
  return (
    <QwikCity>
      <Head />
      <body lang="en">
        <Counter />
        <RouterOutlet />
      </body>
    </QwikCity>
  );
});
