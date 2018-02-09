import React from 'react';
import { PageHeader, Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

// icons
// import shoemarket from '../imgs/shoemarket.png';

export default class Home extends React.Component {
  render() {
    return (
      <div id="portrait">

        <PageHeader className='header'>
          Home
        </PageHeader>
{/*
        <section id="feature_slider" class="lol">
            Each slide is composed by <img> and .info
            - .info's position is customized with css in index.css
            - each <img> parallax effect is declared by the following params inside its class: */}

            {/* example: class="asset left-472 sp600 t120 z3"
            left-472 means left: -472px from the center
            sp600 is speed transition
            t120 is top to 120px
            z3 is z-index to 3
            Note: Maintain this order of params

            For the backgrounds, you can combine from the bgs folder :D */}

        {/* <article class="slide" id="showcasing" style="background: url('img/backgrounds/mountains_out_portal.jpg') repeat-x top center;">

	          <img class="asset left-30 sp600 t120 z1" src="img/logo/logo_original.png" />

            <div class="info">
                <h2>
									Service Disabled Veteran Owned Small Business
								</h2>
            </div>

        </article> */}

        {/* <article class="slide" id="ideas" style="background: url('img/backgrounds/ship_with_containers_moving.jpg') repeat-x top center;">
            <div class="info">
                <h2>
									Range Safety Standardization
								</h2>
            </div>
            <img class="asset left-480 sp600 t260 z1" src="img/slides/scene2/left.png" />
            <img class="asset left-210 sp600 t213 z2" src="img/slides/scene2/middle.png" />
            <img class="asset left60 sp600 t260 z1" src="img/slides/scene2/right.png" />
						<img class="asset left-480 sp600 t260 z1" src="img/slides/scene2/left_drone_on_launcher.jpg" />
            <img class="asset left-210 sp600 t213 z2" src="img/slides/scene2/middle_launch_4_ready.jpg" />
            <img class="asset left60 sp600 t260 z1" src="img/slides/scene2/right_orange_boat_cruising.jpg" />
        </article> */}

        {/* <article class="slide" id="tour" style="background: url('img/backgrounds/mountains.jpg') repeat-x top center;">

            <img class="asset left-472 sp650 t210 z3" src="img/slides/scene3/hanger_chopper.jpg" />

            <img class="asset left-365 sp600 t270 z4" src="img/slides/scene3/launching_3.jpg"/>

						<img class="asset left-350 sp450 t135 z2" src="img/slides/scene3/C-130_on_tarmac.jpg" />

            <img class="asset left-185 sp550 t220 z1" src="img/slides/scene3/???" />

            <div class="info">
                <h2>
									Flight Test Safety
								</h2>

            </div>
        </article> */}

        {/* <article class="slide" id="responsive" style="background: url('img/backgrounds/shadow_on_water.jpg') repeat-x top center;">

						<img class="asset left-472 sp600 t120 z3" src="img/slides/scene4/C-130_on_tarmac_night.jpg" />

						<img class="asset left-190 sp500 t120 z2" src="img/slides/scene4/working_on_equipment.jpg" />

            <div class="info">
                <h2>
									Training and Operational Procedures Standardization
                </h2>

            </div>

        </article> */}

    {/* </section> */}

      </div>

    );

  }

}
