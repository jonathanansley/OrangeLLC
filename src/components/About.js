import React from 'react';
import { PageHeader, Jumbotron } from 'react-bootstrap';

// icons
// import headshot from '../imgs/headshot.jpg';

export default class About extends React.Component {
  render() {
    return (
      <div>

      <PageHeader className='header'>
        About
      </PageHeader>

      <Jumbotron>
{/*
            <a>
              <img src={headshot} className='icon-portrait' alt="Jonathan Ansley" />
            </a> */}

            <h2>
              Welcome to Jonathan Ansley's portfolio.
            </h2>

            <span>
              Full stack web developer residing in Arlington, Virginia.
            </span>

        </Jumbotron>

        </div>

    );

  }

}
