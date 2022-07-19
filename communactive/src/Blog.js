import background from './img/background.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-grid-system';


const Blog = () => {
    return ( 
        <div style={{
            backgroundImage: "url(" + background + ")",
            backgroundPosition: '0px 0px',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
          }}>
              <Container>
                  <Row>
                      <Col sm={6}>

                      </Col>
                      <Col sm={5}>
                          <Card style={{ width: '30rem', backgroundColor: 'orange' }} className='addcard'>
                              <Card.Body>
                                  <Card.Title>Card Title</Card.Title>
                                  <Card.Text>
                                      Some quick example text to build on the card title and make up the
                                      bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={1}>

                        </Col>
                    </Row>
                </Container>
              <h2>Blog</h2>
         </div>
        
     );
}
 
export default Blog;