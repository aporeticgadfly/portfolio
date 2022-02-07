import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import configData from '../config.json';

class Compose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {authenticateRequest: false, numCode: [0, 1, 2], title: '', desc: '', link: '', count: 1, one: []};
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onChangeImg = this.onChangeImg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.createImgInput = this.createImgInput.bind(this);
    this.addImgInput = this.addImgInput.bind(this);
  }

  componentDidMount() {
    window.arr=[];

    const transport = axios.create({
      withCredentials: true
    });

    transport.get(window.location.href + '/composes').then(res => this.setState({authenticateRequest: res.data.authenticateRequest})).catch(err => console.log(err));
  }

  onChangeTitle(event, e) {
    this.setState({title: event.target.value});
  }

  onChangeDesc(event, e) {
    this.setState({desc: event.target.value});
  }

  onChangeLink(event, e) {
    this.setState({link: event.target.value});
  }

  onChangeImg(event, e) {
    console.log(event.target.id);
    this.setState({[event.target.id]: event.target.value });
    console.log(this.state);
  }

  addImgInput(e) {
    e.preventDefault();
    var newstate = this.state.one.concat(this.state.one.length);
    this.setState({count: this.state.count + 1, one: newstate});
  }

  createImgInput(index) {
    return (
      <Form.Control id={index + 2} type="text" placeholder="Image URLs" onChange={this.onChangeImg}/>
    );
  }

  onSubmit(e) {
    e.preventDefault();

    var imgUrlsArr = [];
    for(var z=0; z < this.state.count; z++) {
      var match = z + 1;
      imgUrlsArr[z] = this.state[match];
    }
    var formData = {
      title: this.state.title,
      description: this.state.desc,
      link: this.state.link,
      imageUrls: imgUrlsArr
    };

    const transport = axios.create({
      withCredentials: true
    });

    transport.post(configData.SERVER_URL+ '/compose', formData).then(res => {console.log(res.data)}).catch(err => console.log(err));
  }

  render() {
    if(this.state.authenticateRequest === true) {
      return (
        <Form>
          <Form.Group controlId="formBasic">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" onChange={this.onChangeTitle}/>
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" onChange={this.onChangeDesc}/>
          </Form.Group>

          <Form.Group controlId="formBasic">
            <Form.Label>Link</Form.Label>
            <Form.Control type="text" placeholder="Link" onChange={this.onChangeLink}/>
          </Form.Group>

          <Form.Group>
            <Form.Label>ImageUrls</Form.Label>
            <Form.Control id="1" type="text" placeholder="Image URLs" onChange={this.onChangeImg}/>
            {this.state.one.map(this.createImgInput)}
            <button onClick={this.addImgInput}>+</button>
          </Form.Group>
          <Button variant="primary" type="button" onClick={this.onSubmit}>
            Submit
          </Button>
        </Form>
      );
    }
    else {
      return <p>Not Authenticated</p>
    }
  }
}
export default Compose;
