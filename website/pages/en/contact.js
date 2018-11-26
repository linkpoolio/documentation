/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Contact extends React.Component {
  render() {
    const supportLinks = [
      {
        content: 'Do you need a Chainlink adaptor building for a specific API?',
        title: 'Adapter Building',
      },
      {
        content: 'We\'re happy to work with third parties to consult on best practises and operation.',
        title: 'Consultancy Services',
      },
      {
        content: "If you'd like to offer Chainlink nodes to clients, then we can work with you to achieve that.",
        title: 'Whitelabel Products',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Contact us for anything!</h1>
            </header>
            <p>We're open to any enquiries including consultancy work, whitelabel products and adaptor development.</p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
            <p align="center"><a href="mailto:contact@linkpool.io">contact@linkpool.io</a></p>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Contact;
