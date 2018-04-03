import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Row, Col, Clearfix, Container } from 'react-bootstrap/lib';

export default class AboutYourself extends React.Component {
  constructor() {
    super();

    this.state = {
      color_blue: false
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({color_blue: !this.state.color_blue});
  }

  render() {
    let yesColor = this.state.color_blue ? "blue" : "gray";
    let noColor = this.state.color_blue ? "gray" : "blue";

    return (
      <div className="Container everything">
        <div className="home-photo">

        </div>
        <form>
          {/*******************Gender selection row******************/}
          <div className="row">

            <div className="col-sm pull-right col-centered">
              <div>
                <label className="form-label">Your Gender</label>
                <span className="star">*</span>
              </div>
              <div>
                <select className="select" name="gender">
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <label className="select-sub">
                select your gender
              </label>
            </div>

            <div className="col-sm pull-right col-centered">
              <div>
                <label className="form-label">You Are Seeking</label>
                <span className="star">*</span>
              </div>
              <div>
                <select className="select" name="gender">
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <label className="select-sub">
                select the gender you are seeking
              </label>
            </div>

          </div>
          {/*********************************************************/}

          {/*************Location and Date of birth row**************/}
          <div className="row">
            <div className="col-sm pull-right col-centered">
              <div className="column-lavel-div">
                <label className="form-label">Location</label>
                <span className="star">*</span>
              </div>
              <div>
                <input className="select"
                       name="location"
                       maxLength="5"
                       type="tel">
                </input>
              </div>
              <label className="select-sub">Where are you located?</label>
            </div>

            <div className="col-sm pull-right col-centered">
              <div>
                <label className="form-label">Date of Birth</label>
                <span className="star">*</span>
              </div>
              <div className="date-input-div">
                <input className="input-date"
                       type="tel"
                       data-format="month"
                       placeholder="MM"
                       maxLength="2">
                </input>
                <input className="input-date-middle"
                       type="tel"
                       data-format="day"
                       placeholder="DD"
                       maxLength="2">
                </input>
                <input className="input-date"
                       type="tel"
                       data-format="year"
                       placeholder="YYYY"
                       maxLength="4">
                </input>
              </div>
            </div>

          </div>
          {/*********************************************************/}

          {/*************Height and height a factor row**************/}
          <div className="row">
            <div className="col-sm pull-right col-centered">
              <div>
                <label className="form-label">Height</label>
                  <span className="star">*</span>
              </div>
              <div className="height-input-div">
                <select className="height-select-left" name="height-feet" defaultValue="5">
                  <option value=""></option>
                  <option value="3">3 ft.</option>
                  <option value="4">4 ft.</option>
                  <option value="5">5 ft.</option>
                  <option value="6">6 ft.</option>
                  <option value="7">7 ft.</option>
                </select>
                <select className="height-select-right" name="height-feet" defaultValue="1">
                  <option value=""></option>
                  <option value="1">1 in.</option>
                  <option value="2">2 in.</option>
                  <option value="3">3 in.</option>
                  <option value="4">4 in.</option>
                  <option value="5">5 in.</option>
                  <option value="6">6 in.</option>
                  <option value="7">7 in.</option>
                  <option value="8">8 in.</option>
                  <option value="9">9 in.</option>
                  <option value="10">10 in.</option>
                  <option value="11">11 in.</option>
                </select>
              </div>
            </div>

            <div className="col-sm pull-right col-centered">
              <div>
                <label className="blank-label"></label>
                <span className="star"></span>
              </div>
              <div className="yes-no-div">
                <div className="yes-button" style={{backgroundColor: yesColor}} onClick={this.changeColor}>yes</div>
                <div className="no-button" style={{backgroundColor: noColor}} onClick={this.changeColor}>no</div>
              </div>
              <label className="select-sub">Is height a factor in your match preferences?</label>
            </div>
          </div>
          {/*********************************************************/}

          {/*************Occupation and Income row**************/}
          <div className="row">
            <div className="col-sm pull-right col-centered">
              <div>
                <label className="form-label">Occupation</label>
                <span className="star">*</span>
              </div>
              <div>
                <textarea className="textarea"></textarea>
              </div>
              <label className="select-sub">
                select your occupation
              </label>
            </div>

            <div className="col-sm pull-right col-centered">
              <div>
                <label className="form-label">You Are Seeking</label>
                <span className="star">*</span>
              </div>
              <div>
                <select className="select" name="gender">
                  <option value=""></option>
                  <option value="less than $40,000">less than $40,000</option>
                  <option value="$40,000 - $60,000">$40,000 - $60,000</option>
                  <option value="$60,000 - $80,000">$60,000 - $80,000</option>
                  <option value="$80,000 - $100,000">$80,000 - $100,000</option>
                  <option value="$100,000 - $125,000">$100,000 - $125,000</option>
                  <option value="$125,000 - $150,000">$125,000 - $150,000</option>
                  <option value="$150,000 - $200,000">$150,000 - $200,000</option>
                  <option value="$200,000 - $250,000">$200,000 - $250,000</option>
                  <option value="$250,000 - $500,000">9$250,000 - $500,000</option>
                  <option value="$500,000 - $1,000,000">$500,000 - $1,000,000</option>
                  <option value="Rather not say">Rather not say</option>
                </select>
              </div>
              <label className="select-sub">
                why? this is one form of an indicator...
              </label>
            </div>
          </div>
          {/*********************************************************/}

        </form>
      </div>
    );
  }
}
