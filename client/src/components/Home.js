import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';

class Home extends React.Component {
  state = { posts: [], }

  componentDidMount() {
    axios.get("/api/posts")
    .then(res => {
      this.setState({posts: res.data})
    })
  } 

  // componentDidUpdate() {
  //   axios.get("/api/posts")
  //   .then(res => {
  //     this.setState({posts: res.data})
  //   });

  // }

  deletePost(id) {
    // debugger
    axios.delete(`/api/posts/${id}`)
    .then(res => {
      const { posts, } = this.state;
      this.setState({ posts: posts.filter(p => p.id !== id) }) 
    })
    .catch(err => {
      debugger
      console.log(err)
    })
  }

  renderPosts() {
    const { posts, } = this.state;
    return posts.map(post => (
      <Card key={post.id} style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Author: {post.author}</Card.Title>
          <Card.Title>Title: {post.title}</Card.Title>
          <br />
          <Card.Text>Post: {post.body}</Card.Text>
          <Button variant="danger" onClick={() => this.deletePost(post.id)}>Delete</Button>
          <Button variant="warning">Update</Button>
        </Card.Body>
      </Card>
    ))
  }

  render() {
    // const { posts, } = this.state;
    return (
      <>
      <ListGroup>
        <ListGroup.Item>{this.renderPosts()}</ListGroup.Item>
      </ListGroup>
      </>

    );
  };
};

export default Home;
