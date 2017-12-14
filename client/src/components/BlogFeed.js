import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const BlogFeed = ({ blog = {} }) => (
  <Container>
    <Link to="/blogs">View All Posts</Link>
    <Header as="h3" textAlign="center">{blog.name}</Header>
    <Image src={blog.logo} />
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Title</Table.Cell>
          <Table.Cell>{blog.name}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Author</Table.Cell>
          <Table.Cell>{blog.author}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Content</Table.Cell>
          <Table.Cell>{blog.content}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { blog: state.blog.find( a => a.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(BlogFeed);