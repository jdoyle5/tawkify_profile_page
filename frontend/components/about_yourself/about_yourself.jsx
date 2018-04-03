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
          <div className="row">
            <div className="col-sm pull-right col-centered">
              <div className="column-lavel-div">
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
              <div className="column-lavel-div">
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
              <label className="select-sub">select the gender you are seeking</label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm pull-right col-centered">
              <div className="column-lavel-div">
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
              <label className="select-sub">select the gender you are seeking</label>
            </div>
            <div className="col-sm pull-right col-centered">
              <div className="column-lavel-div">
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
              <label className="select-sub">select the gender you are seeking</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
