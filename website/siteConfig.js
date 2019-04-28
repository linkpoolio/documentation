/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'Documentation',
  tagline: 'Our example Chainlinks and Ethereum as a Service endpoints.',
  url: 'https://docs.linkpool.io',
  baseUrl: '/',
  projectName: 'linkpoolio.github.io',
  organizationName: 'linkpoolio',
  cname: 'docs.linkpool.io',

  headerLinks: [
    {doc: 'overview', label: 'Chainlinks'},
    {doc: 'rpc_ropsten', label: 'Ethereum RPC'},
    {page: 'contact', label: 'Contact us'},
  ],

  headerIcon: 'img/logo.svg',
  footerIcon: 'img/logo.svg',
  favicon: 'img/favicon/favicon.ico',

  colors: {
    primaryColor: '#333AC4',
    secondaryColor: '#0D71D3',
  },

  copyright: `Copyright © ${new Date().getFullYear()} LinkPool`,

  highlight: {
    theme: 'default',
  },

  fonts: {
    cabin: [
      'Cabin'
    ],
    lato: [
      'Lato'
    ]
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  onPageNav: 'separate',
  cleanUrl: true,
};

module.exports = siteConfig;
