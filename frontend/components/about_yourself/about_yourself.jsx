import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Redirect } from 'react-router';

export default class AboutYourself extends React.Component {
  constructor() {
    super();

    this.state = {
      color_blue_height: false,
      color_blue_income: false,
      gender: {value: undefined, isValid: true, message: ''},
      genderSeeking: {value: undefined, isValid: true, message: ''},
      fireRedirect: false
    };

    this.changeColorHeightYes = this.changeColorHeightYes.bind(this);
    this.changeColorIncomeYes = this.changeColorIncomeYes.bind(this);
    this.changeColorHeightNo = this.changeColorHeightNo.bind(this);
    this.changeColorIncomeNo = this.changeColorIncomeNo.bind(this);
    this.onChange = this.onChange.bind(this);
    this.formIsValid = this.formIsValid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  onChange(e) {
    var state = this.state;
    this.state[e.target.name].value = e.target.value;

    this.setState(state);

    this.formIsValid();
  }

  onSubmit(e) {
    e.preventDefault();

    // const profile = {
    //   color_blue_height: this.state.color_blue_height,
    //   color_blue_income: this.state.color_blue_income,
    //   gender: this.state.gender.value,
    //   genderSeeking: this.state.genderSeeking.value
    // };
    // this.props.createProfile(profile);

    this.setState({ fireRedirect: true });
  }

  formIsValid() {
    var state = this.state;

    if (state.gender.value === '') {
      state.gender.isValid = false;
      state.gender.message = 'This field is required';

      this.setState(state);
    } else {
      state.gender.isValid = true;
      state.gender.message = '';

      this.setState(state);
    }

    if (state.genderSeeking.value === '') {
      state.genderSeeking.isValid = false;
      state.genderSeeking.message = 'This field is required';

      this.setState(state);
    } else {
      state.genderSeeking.isValid = true;
      state.genderSeeking.message = '';

      this.setState(state);
    }
  }

  changeColorHeightYes() {
    if (!this.state.color_blue_height) {
      this.setState({color_blue_height: !this.state.color_blue_height});
    }
  }

  changeColorHeightNo() {
    if (this.state.color_blue_height) {
      this.setState({color_blue_height: !this.state.color_blue_height});
    }
  }

  changeColorIncomeYes() {
    if (!this.state.color_blue_income) {
      this.setState({color_blue_income: !this.state.color_blue_income});
    }
  }

  changeColorIncomeNo() {
    if (this.state.color_blue_income) {
      this.setState({color_blue_income: !this.state.color_blue_income});
    }
  }

  render() {
    var { gender, genderSeeking, color_blue_height, color_blue_income } = this.state;

    let yesColorHeight = this.state.color_blue_height ? "#00B9D7" : "#BCBEC0";
    let noColorHeight = this.state.color_blue_height ? "#BCBEC0" : "#00B9D7";
    let yesColorIncome = this.state.color_blue_income ? "#00B9D7" : "#BCBEC0";
    let noColorIncome = this.state.color_blue_income ? "#BCBEC0" : "#00B9D7";

    var genderClass = classNames('select', {'has-error': !gender.isValid});
    var genderSeekingClass = classNames('select', {'has-error': !genderSeeking.isValid});

    var yesButtonHeight = classNames('yes-button', {'hover-button': !this.state.color_blue_height});
    var noButtonHeight = classNames('no-button', {'hover-button': this.state.color_blue_height});
    var yesButtonIncome = classNames('yes-button', {'hover-button': !this.state.color_blue_income});
    var noButtonIncome = classNames('no-button', {'hover-button': this.state.color_blue_income});

    var oneHighlighted = classNames('circle-black');
    var oneDescripHighlighted = classNames('page-num-descrip-black');

    const { from } = this.props.location.state || '/';
    const { fireRedirect } = this.state;


    return (
      <div>
        <div className="home-photo"></div>
        <div className="banner">
          <div className="banner-text">
            We'd like to get to know you better.
            Tell us about yourself and the sort of someone you'd like to meet.
            Don't worry, no one will see this besides the matchmakers at
            Tawkify.
          </div>
        </div>
        <div className="progress-div-all">
          <div className="progress-div">
            <div className="group">
              <div className="page-num"><hr className="line-one-left"></hr><div className={oneHighlighted}>1</div><hr className="line-one-right"></hr></div>
            <div className={oneDescripHighlighted}>About Yourself</div>
            </div>
            <div className="group">
              <div className="page-num"><hr className="line-two-left"></hr><div className="circle">2</div><hr className="line-two-right"></hr></div>
            <div className="page-num-descrip">Ideal Partner</div>
            </div>
            <div className="group">
              <div className="page-num"><hr className="line-three-left"></hr><div className="circle">3</div><hr className="line-three-right"></hr></div>
            <div className="page-num-descrip">Add Photos</div>
            </div>
          </div>
        </div>
        <div className="progress-div-all-text">
          <h2 className="heading-top">Tell us a bit about yourself</h2>
          <h4 className="heading">
            Tell us a bit about yourself and who you’d like to meet.
            The more we know, the better. Be candid this info is for our eyes only.
            Tawkify profiles and photos will forever be 100% confidential.
          </h4>
        </div>
        <div className="Container everything">
          <form onSubmit={ this.onSubmit }>

            {/*******************Gender selection row******************/}
            <div className="row">

              <div className="col-sm pull-right col-centered">
                <div>
                  <label className="form-label">Your Gender</label>
                  <span className="star">*</span>
                </div>
                <div>
                  <select className={ genderClass } name="gender" onChange={ this.onChange } value={ gender.value }>
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <span className="error-block">{gender.message}</span>
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
                  <select className={ genderSeekingClass } name="genderSeeking" onChange={ this.onChange } value={ genderSeeking.value }>
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  <option value="both">Both</option>
                  </select>
                </div>
                <span className="error-block">{genderSeeking.message}</span>
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
                  <div className={yesButtonHeight} style={{backgroundColor: yesColorHeight}} onClick={this.changeColorHeightYes}>yes</div>
                <div className={noButtonHeight} style={{backgroundColor: noColorHeight}} onClick={this.changeColorHeightNo}>no</div>
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
                <label className="textarea-sub">
                  select your occupation
                </label>
              </div>

              <div className="col-sm pull-right col-centered">
                <div>
                  <label className="form-label">You Are Seeking</label>
                  <span className="star">*</span>
                </div>
                <div>
                  <select className="select" name="gender" defaultValue="less than $40,000">
                    <option value=""></option>
                    <option value="less than $40,000">less than $40,000</option>
                    <option value="$40,000 - $60,000">$40,000 - $60,000</option>
                    <option value="$60,000 - $80,000">$60,000 - $80,000</option>
                    <option value="$80,000 - $100,000">$80,000 - $100,000</option>
                    <option value="$100,000 - $125,000">$100,000 - $125,000</option>
                    <option value="$125,000 - $150,000">$125,000 - $150,000</option>
                    <option value="$150,000 - $200,000">$150,000 - $200,000</option>
                    <option value="$200,000 - $250,000">$200,000 - $250,000</option>
                    <option value="$250,000 - $500,000">$250,000 - $500,000</option>
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

            {/**********Is income a factor and interests row***********/}
            <div className="row">
              <div className="col-sm pull-right col-centered">
                <div>
                  <label className="blank-label"></label>
                  <span className="star"></span>
                </div>
                <div className="yes-no-div">
                  <div className={yesButtonIncome} style={{backgroundColor: yesColorIncome}} onClick={this.changeColorIncomeYes}>yes</div>
                <div className={noButtonIncome} style={{backgroundColor: noColorIncome}} onClick={this.changeColorIncomeNo}>no</div>
                </div>
                <label className="select-sub">Is income a factor in your match preferences?</label>
              </div>

              <div className="col-sm pull-right col-centered">
                <div>
                  <label className="form-label">Interests</label>
                  <span className="star">*</span>
                </div>
                <div>
                  <textarea className="textarea"></textarea>
                </div>
                <label className="textarea-sub">
                  tell us a little more about yourself and what you like to
                  do. we read everything. So please share.
                </label>
              </div>
            </div>
            {/*********************************************************/}

            <div className="form-submit">
              <input type="submit" value="SAVE AND CONTINUE" />
            </div>
          </form>
          {fireRedirect && (
            <Redirect to='/upload'/>
          )}
        </div>
      </div>
    );
  }
}
