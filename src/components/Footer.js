import React from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

// icons
// import linkedin from '../imgs/linkedin.png';

export default class Footer extends React.Component {
  render() {
    return (

      <div className='footer'>

        {/* starts footer */}
        {/* <footer id="footer" style="margin-top:0;"> */}
        <footer id="footer">
            <div class="container">
                <div class="row info">
                    <div class="col-sm-6 residence">
                        <ul>
                            <li>4380 Via Entrada</li>
                            <li>Newbury Park, CA 91320</li>
                        </ul>
                    </div>

                    <div class="col-sm-5 touch">
                        <ul>
                            <li>773-988-3827</li>
                            <li><a href="#"> patrick.modlin@icloud.com</a></li>
                        </ul>
                    </div>
                </div>

                <div class="row credits">
                    <div class="col-md-12">
                        <div class="row social">

                            <div class="col-md-12">

                                <a href="#" class="facebook">
                                    <span class="socialicons ico1"></span>
                                    <span class="socialicons_h ico1h"></span>
                                </a>

                                <a href="#" class="twitter">
                                    <span class="socialicons ico2"></span>
                                    <span class="socialicons_h ico2h"></span>
                                </a>

                                <a href="#" class="pinterest">
                                    <span class="socialicons ico5"></span>
                                    <span class="socialicons_h ico5h"></span>
                                </a>

                                <a href="#" class="dribble">
                                    <span class="socialicons ico6"></span>
                                    <span class="socialicons_h ico6h"></span>
                                </a>

                                <a href="#" class="behance">
                                    <span class="socialicons ico7"></span>
                                    <span class="socialicons_h ico7h"></span>
                                </a>
                            </div>
                        </div> -->
                        <div class="row copyright">
                            <div class="col-md-12">
                                © 2018 Orangt LLC. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

      </div>

    );

  }

}
