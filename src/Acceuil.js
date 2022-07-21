import background from './img/background.png'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-grid-system';
import Table from 'react-bootstrap/Table';

const Acceuil = () => {
    return ( 
        <div className="acceuil">
            <div style={{
            backgroundImage: "url(" + background + ")",
            backgroundPosition: '0px 0px',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
            backgroundColor: 'green'
          }}>
              <Container>
                  <Row>
                      
                      <Col sm={6}>

                      </Col>
                      <Col sm={5}>
                      <br/><br/>
                          <Card style={{ width: '37rem', backgroundColor: 'orange', padding:'10px'}} className='addcard'>
                              <Card.Body>
                                  <Card.Text>
                                      <h2 style={{padding: '7px'}}>Bienvenue à notre organisme à but non lucratif!</h2>
                                      <h3 class="lead" style={{padding: '7px'}}>Comment nous joindre:</h3>
                                      <Table bordered hover>
                                        <tbody>
                                            <tr>
                                            <td style = {{fontSize: '14px', fontWeight: 'bold'}}>Numéro de téléphone:</td>
                                            <td>(613) 987-7659</td>
                                            </tr>
                                            <tr>
                                            <td style = {{fontSize: '14px', fontWeight: 'bold'}}>Addresse couriel:</td>
                                            <td><a style= {{color: 'blue', padding: '7px'}} href="www.gmail.com">info@communactive.ca</a></td>
                                            </tr>
                                            <tr>
                                            <td style = {{fontSize: '14px', fontWeight: 'bold'}}>Addresse:</td>
                                            <td>1231 Rue Principale, St-Albert ON, K0A3C0</td>
                                            </tr>
                                        </tbody>
                                        </Table>

                                    <h3 style={{padding: '7px'}}> Heure d'ouverture:</h3>
                                    <Table bordered hover>
                                        <tbody>
                                            <tr>
                                            <td style = {{fontSize: '18px', fontWeight: 'bold'}}>Jour:</td>
                                            <td style = {{fontSize: '18px', fontWeight: 'bold'}}>Heures:</td>
                                            </tr>

                                            <tr>
                                            <td>Lundi:</td>
                                            <td>FERMÉ</td>
                         
                                            </tr>
                                            <tr>
                                            <td>Mardi:</td>
                                            <td>FERMÉ</td>
                                      
                                            </tr>
                                            <tr>
                                            <td>Mercredi:</td>
                                            <td>9:00 AM - 5:00 PM</td>
                                            </tr>
                                            <tr>
                                            <td>Jeudi:</td>
                                            <td>9:00 AM - 5:00 PM</td>
                                            </tr>
                                            <tr>
                                            <td>Vendredi:</td>
                                            <td>9:00 AM - 5:00 PM</td>
                                            </tr>
                                            <tr>
                                            <td>Samedi:</td>
                                            <td>9:00 AM - 5:00 PM</td>
                                            </tr>
                                            <tr>
                                            <td>Dimanche:</td>
                                            <td>9:00 AM - 5:00 PM</td>
                                            </tr>
                                            
                                        </tbody>
                                        </Table>
                                        <br/>
                                        <h3 style = {{fontSize: '20px', fontWeight: 'bold'}}x>Une approche positive pour une communauté active!</h3>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={1}>

                        </Col>
                    </Row>
                </Container>
        </div>
            
            
            
        </div>
     );
}
 
export default Acceuil;