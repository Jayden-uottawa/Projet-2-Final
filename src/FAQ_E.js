import background from './img/background.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-grid-system';
import { Grid } from "@material-ui/core";


const FAQ_E = () => {
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
                          <Card style={{ width: '30rem', backgroundColor: 'orange', padding: '10px' }} className='addcard'>
                              <Card.Body>
                                  <Card.Text>
                                  <Grid container justify="flex-end">
                                    <a href="/FAQ" style={{ textAlign: 'right'}}> French </a>
                                    </Grid>
                                      <h3>Frequently asked questions</h3>
                                      <hr/>
                                      <br/>
                                      <h4>Can anyone add an activity?</h4>
                                      <p>In effect! anyone who wants to organize an activity can</p>
                                      <hr/>
                                      <br/>
                                    </Card.Text>
                                   
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={1}>

                        </Col>
                    </Row>
                </Container>
            
         </div> 
        
    );
}

 
export default FAQ_E ;