import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Redirect } from 'react-router';
import Dropzone from 'react-dropzone';
import request from 'superagent';


const CLOUDINARY_UPLOAD_PRESET = 'photosphere_image_upload';
const CLOUDINARY_UPLOAD_URL =
'https://api.cloudinary.com/v1_1/photosphere/image/upload';

export default class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSubmit(e) {
    e.preventDefault();

    // const photo = {
    //   img_url: this.state.img_url
    // };
    // this.props.createPhoto(photo);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          img_url: response.body.secure_url
        });
      }
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {

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
          <h2 className="heading-top">Tell us a bit about yourself</h2>
          <h4 className="heading">
            We ask that you upload at least 2 pictures of yourself; but
            upload as many as you'd like. We encourage you to review your
            pictures periodically to make sure they are up to date.
            Snapshots and Selfies just fine here. Remember this image is
            for our internal use and will not be shared with potential
            matches – you will also be able to swap it out later if you wish.
          </h4>
        </div>

        <div className="photo-form" >
        <div>
          <Dropzone className="file-upload-box"
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
        </div>

        <div className="uploaded-photo">
          {this.state.img_url === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.img_url} />
          </div>}
        </div>

        <button className="create-photo-button" onClick={this.handleSubmit}>CHOOSE FILE</button>

        <div className="form-submit">
          <input type="submit" value="SAVE AND CONTINUE" />
        </div>

        </div>
      </div>
    );
  }
}
