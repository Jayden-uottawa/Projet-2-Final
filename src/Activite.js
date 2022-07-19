import background from './img/background.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-grid-system';
import { useState } from 'react'
import ActiList from './ActiList';


const Activité = () => {
    const [acti, setActi] = useState([
        { titre: 'Soirée cinéma', date: '2022-10-24', heure: '18h', description: 'lorem ipsum', id: 1 },
        { titre: 'Match de soccer', date: '2022-09-06', heure: '16h', description: 'lorem ipsum', id: 2 },
        { titre: 'Promenade de vélo', date: '2022-10-29', heure: '19h', description: 'lorem ipsum', id: 3 },
        { titre: 'Jeux gonflable', date: '2022-11-07', heure: '11:30', description: 'lorem ipsum', id: 4 }
    ]);

    const handleDelete = (id) => {
        const newacti = acti.filter(act => act.id !== id)
        setActi(newacti)

    }
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
                                      <h1>Activité à venir</h1>
                                      <hr/>
                                      <ActiList acti={acti} handleDelete={handleDelete} />
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
 
export default Activité ;