import background from './img/background.png'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-grid-system';
import { useEffect, useState } from 'react'
import ActiList from './ActiList';
import Navbar from './Navbar'


const Activité = () => {
    <Navbar />
    const [acti, setActi] = useState(null);

    const handleDelete = (id) => {
        const newacti = acti.filter(act => act.id !== id)
        setActi(newacti)

    }

    useEffect(() => {
        fetch('http://localhost:8000/acti')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setActi(data);
            })

    }, []);
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
                                      <h2 style={{padding: '7px'}}>Activité à venir</h2>
                                      <hr/>
                                      {acti && <ActiList acti={acti} handleDelete={handleDelete} />}
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