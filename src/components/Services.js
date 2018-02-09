import React from 'react';
import { PageHeader, Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

// icons
// import shoemarket from '../imgs/shoemarket.png';

export default class Services extends React.Component {
  render() {
    return (
      <div id="portrait">

        <PageHeader className='header'>
          Services
        </PageHeader>

        <Grid>

          <Row>

            {/* SurchPort */}
            <Col xs={6} md={4}>

            <h3>
              SurchPort
            </h3>

              <Thumbnail>

                <a href='https://johnsaugy.github.io/SurchPort/' target="_blank" rel="noopener noreferrer">
                  <img src={surchport} className='icon-portfolio' alt="SurchPort" title="Open the app" />
                </a>

                <p>
                  A Better Way to Discover Your New Favorite Spot. It allows users to Search, Compare, and Save any place you would ever want to visit.
                </p>

                <p>

                  <Button bsStyle="primary" target='_blank' rel="noopener noreferrer" href='https://github.com/johnsaugy/SurchPort'>
                    Code on GitHub
                  </Button>
                </p>

              </Thumbnail>

            </Col>
            {/* End of SurchPort */}


          </Row>

        </Grid>

      </div>

    );

  }

}
