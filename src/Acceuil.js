import { unsestate, useState } from "react"
import background from './img/background.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-grid-system';
import Table from 'react-bootstrap/Table';

const Acceuil = () => {
    const [name, setName] = useState("Jay");
    


    const handleClick = () => {
        setName("Luigi")

    }
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
                          <Card style={{ width: '35rem', backgroundColor: 'orange', padding:'10px'}} className='addcard'>
                              <Card.Body>
                                  <Card.Text>
                                      <h2>Binvenue à notre organisme à but non lucratif!</h2>
                                    <h3 class="lead" style={{padding: '7px'}}>Comment nous joindre:</h3>
                                    <p style={{padding: '7px'}}>Numéro de téléphone: (613) 987-7659</p>
                                    <p style={{padding: '7px'}}>Addresse couriel: </p>
                                    <a style= {{color: 'blue', padding: '7px'}} href="www.gmail.com">info@communactive.ca</a>
                                    <p style={{padding: '7px'}}>Addresse: 1231 Rue Principale, St-Albert ON, K0A3C0</p>
                                    <h3 style={{padding: '7px'}}> Heure d'ouverture</h3>
                                    <Table bordered hover>
                                        <tbody>
                                            <tr>
                                            <td class="lead">Jour</td>
                                            <td class="lead">Heures</td>
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