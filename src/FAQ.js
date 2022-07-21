import background from './img/background.png'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-grid-system';
import { Grid } from "@material-ui/core";


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
                          <Card style={{ width: '35rem', backgroundColor: 'orange', padding: '10px' }} className='addcard'>
                              <Card.Body>
                                  <Card.Text>
                                  <Grid container justify="flex-end">
                                    <a href="/FAQ_E">Anglais </a>
                                    </Grid>
                                    <h3>Questions demander fréquement</h3>
                                    <br/><hr/><br/>
                                    <h4>Est ce que n'importe qui peut ajouter une activité?</h4>
                                    <p>En effet! n'importe qui voulant être organisateur d'une activité le peut</p>
                                    <br/><hr/><br/>
                                    <h4>Est ce que je peut organiser une activité après les heures d'ouverture?</h4>
                                    <p>Oui vous pouvez ajouter votre activité n'importe quand vous le voulez et le site web va l'accepter.</p>
                                    <br/><hr/><br/>
                                    <h4>Est ce que les activité sont gratuite?</h4>
                                    <p>Oui! Grace a l'aide de nos commanditaire on peut rendre les activité gratuite.</p>
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

 
export default FAQ ;