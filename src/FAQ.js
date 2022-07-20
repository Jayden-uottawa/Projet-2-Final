import background from './img/background.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-grid-system';
import { Grid } from "@material-ui/core";
import Navbar from './Navbar';


const FAQ = () => {
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
                          <Card style={{ width: '30rem', backgroundColor: 'orange', padding: '10px' }} className='addcard'>
                              <Card.Body>
                                  <Card.Text>
                                  <Grid container justify="flex-end">
                                    <a href="/FAQ_E"> Anglais </a>
                                    </Grid>
                                    <h3>Questions demander fréquement</h3>
                                    <hr/><br/>
                                    <h4>Est ce que n'importe qui peut ajouter une activité?</h4>
                                    <p>En effet! n'importe qui voulant être organisateur d'une activité le peut</p>
                                    <hr/><br/>
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

 
export default FAQ ;