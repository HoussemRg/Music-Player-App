import React from 'react';
import VerticalNavbar from '../components/navbar';
import TopArtists from './top artists';
import TopCharts from './top charts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Discover() {
  return (
    <Container fluid>
      <Row>
        <Col lg={4} md={4} sm={12}><VerticalNavbar /></Col>
        <Col lg={4} md={4} sm={12}>discover</Col>
        <Col lg={4} md={4} sm={12}>
          <TopArtists />
          <TopCharts />
        </Col>
      </Row>
    </Container>
  );
}

export default Discover;