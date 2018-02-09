import React from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';

// icons
// import html from '../imgs/skills/html.png';

export default class Skills extends React.Component {
  render() {
    return (

      <div>
{/*
        <PageHeader className='header'>
          Skills
        </PageHeader> */}

          <div>

            <Grid className='grid'>

              <Row>
{/*
                <Col xs={6} md={5}>
                  MongoDB
                  <img className='icon-skill' src={mongodb} alt='MongoDB' />
                </Col> */}

              </Row>

              <Row>
{/*
                <Col xs={6} md={4}>
                  HTML5
                  <img className='icon-skill' src={html} alt='HTML5' />
                </Col> */}
{/*
                <Col xs={6} md={4}>
                  JavaScript
                  <img className='icon-skill' src={javascript} alt='JavaScript' />
                </Col> */}

              </Row>

              <Row>

                {/* <Col xs={6} md={4}>
                  MySQL
                  <img className='icon-skill' src={mysql} alt='MySQL' />
                </Col> */}

              </Row>

              <Row>
{/*
                <Col xs={6} md={4}>
                  Active DoD Secret Clearance
                  <img className='icon-skill' src={clearance} alt='Active DoD Secret Clearance' />
                </Col> */}

              </Row>

            </Grid>

          </div>

        </div>

      );

  }

}
