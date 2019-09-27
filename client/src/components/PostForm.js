import React from "react";
import { Form, Button, } from "react-bootstrap";
import axios from "axios";


class PostFrom extends React.Component {
  state = { title: "", author: "", body: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/posts", { ...this.state })
    .then(res => {
      this.props.history.push("/")
    })
    .catch(err => {console.log(err)})
  }

  handleChange = (e) => {
    const { target: {name, value}} = e;
    this.setState({ [name]: value});
  }

  render () {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Label>Author</Form.Label>
            <Form.Control type="input" placeholder="Your Name" name="author" value={this.state.author} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Label>Title</Form.Label>
            <Form.Control type="input" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Post</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Your Post" name="body" value={this.state.body} onChange={this.handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  };
};

export default PostFrom;