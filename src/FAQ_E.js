import background from './img/background.png'
import Card from 'react-bootstrap/Card'
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
                      <br/><br/>
                          <Card style={{ width: '35rem', backgroundColor: 'orange', padding: '10px' }} className='addcard'>
                              <Card.Body>
                                  <Card.Text>
                                  <Grid container justify="flex-end">
                                    <a href="/FAQ">French</a>
                                    </Grid>
                                      <h3>Frequently asked questions</h3>
                                      <br/><hr/><br/>
                                      <h4>Can anyone add an activity?</h4>
                                      <p>In effect! anyone who wants to organize an activity can</p>
                                      <br/><hr/><br/>
                                      <h4>Can I organize an activity after opening hours?</h4>
                                        <p>Yes you can add your activity whenever you want and the website will accept it.</p>
                                        <br/><hr/><br/>
                                        <h4>Are the activities free?</h4>
                                        <p>Yes! Thanks to the help of our sponsors we can make the activity free.</p>
                                        <br/><hr/><br/>
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