import React from 'react';
import { withRouteData, Link } from 'react-static';
import convert from 'htmr';
import Signup from './Signup';

import { Helmet } from 'react-helmet';
const cap = str => str[0].toUpperCase() + str.slice(1);
const show = value =>
  value.startsWith('http') ? (
    <a href={value} rel="noopener noreferrer">
      {value}
    </a>
  ) : (
    <span>{value}</span>
  );
function showTalk(talk) {
  return Object.entries(talk).map(([k, v]) => {
    if (!v || k === 'slug') return null;
    if (['contents'].includes(k)) return null;
    return (
      <li key={k}>
        <strong>{cap(k)}</strong>: {show(v)}{' '}
      </li>
    );
  });
}
export default withRouteData(({ talk }) => (
  <section className="row padding padding-size-large">
    <Helmet>
      <meta charSet="utf-8" />
      <title>swyx.io | {talk.title}</title>
      {/* <link rel="canonical" href="https://swyx.io" /> */}
    </Helmet>
    <aside className="column column-size-large-3 column-size-small-12">
      <div
        style={{
          // top: 180,
          // left: 38,
          // width: 314,
          top: 180,
          position: 'sticky'
        }}
      >
        <h1>{talk.title}</h1>
        <small>date tbd</small>
      </div>
    </aside>
    <div className="column column-size-large-6 column-size-small-12">
      <div>
        <ul>{showTalk(talk)}</ul>
        {convert(talk.contents)}
      </div>
      <Signup />
    </div>
  </section>
));
