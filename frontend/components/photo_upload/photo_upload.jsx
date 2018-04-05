import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Redirect } from 'react-router';

export default class PhotoUpload extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {

    var oneHighlighted = classNames('circle-black');
    var oneDescripHighlighted = classNames('page-num-descrip-black');

    const { from } = this.props.location.state || '/';
    const { fireRedirect } = this.state;

    return (
      <div>
        <div className="home-photo">

        </div>
        <div className="progress-div-all">
          <div className="progress-div">
            <div className="group">
              <div className="page-num"><hr className="line-one-left"></hr><div className="circle">1</div><hr className="line-one-right"></hr></div>
            <div className="page-num-descrip">About Yourself</div>
            </div>
            <div className="group">
              <div className="page-num"><hr className="line-two-left"></hr><div className="circle">2</div><hr className="line-two-right"></hr></div>
            <div className="page-num-descrip">Ideal Partner</div>
            </div>
            <div className="group">
              <div className="page-num"><hr className="line-three-left"></hr><div className={oneHighlighted}>3</div><hr className="line-three-right"></hr></div>
            <div className={oneDescripHighlighted}>Add Photos</div>
            </div>
          </div>
        </div>
        <div className="progress-div-all-text">
          <h2 className="heading-top">Tell us a bit aboutyourself</h2>
          <h4 className="heading">
            Tell us a bit about yourself and who you’d like to meet.
            The more we know, the better. Be candid--this info is for our eyes only.
            Tawkify profiles and photos will forever be 100% confidential.
          </h4>
        </div>
      </div>
    );
  }
}
