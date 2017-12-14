import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Grid,
  Header,
  Card,
  Image,
  Dropdown, 
  Divider,
  Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Blogs extends React.Component {
  state = { author: '' }

  blogs = () => {
    const { blogs } = this.props;
    const { author } = this.state;
    let visible = blogs;
    if (author)
      visible = blogs.filter( a => a.author === author )
    return visible.map( blog =>
      <Card key={blog.id}>
        <Image src={blog.logo} />
        <Card.Content>
          <Card.Header>
            {blog.name}
          </Card.Header>
          <Card.Meta>
            <span>{blog.author}</span>
          </Card.Meta>
          <Card.Description>
            {blog.content}
          </Card.Description>
          <Card.Content extra>
            <Link to={`/blogs/${blog.id}`}>
              View Post
            </Link>
          </Card.Content>
        </Card.Content>
      </Card>
    )
  }

  authorOptions = () => {
    return this.props.author.map( (c,i) => { 
      return { key: i, text: c, value: c }
    })
  }

  render() {
    const { author } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center">Posts</Header>
        <Dropdown
          placeholder="Filter by author"
          fluid
          selection
          options={this.authorOptions()}
          onChange={ (e, data) => this.setState({ author: data.value }) }
          value={author}
        />
        { author && 
            <Button
              fluid
              basic
              onClick={ () => this.setState({ author: '' }) }
            >
              Clear Filter: {author}
            </Button>
        }
        <Divider />
        <Card.Group itemsPerRow={4}>
          { this.blogs() }
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { blogs } = state;
  const authors = [...new Set(blogs.map( a => a.author ))]
  return { blogs, authors }
}

export default connect(mapStateToProps)(Blogs);