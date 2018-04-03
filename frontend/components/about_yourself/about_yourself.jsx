import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Row, Col, Clearfix, Container } from 'react-bootstrap/lib';

export default class AboutYourself extends React.Component {
  render() {
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

          {/*************Location and Date of birth row**************/}
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
              <label className="select-sub">select the gender you are seeking</label>
            </div>
          </div>
          {/*********************************************************/}

        </form>
      </div>
    );
  }
}
