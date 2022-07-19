import background from './img/background.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-grid-system';
import DatePicker from 'react-datepicker';
import { useState } from 'react';




const Ajouter = () => {
    const [titre, setTitre] = useState('')
    const [heure, setHeure] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        const acti = { titre, heure, description, date };
        
        fetch('http://localhost:8000/acti', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(acti)
        }).then(() =>{
            console.log('new acti added')
        })
            

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
                          <Card style={{ width: '30rem', backgroundColor: 'orange' }} className='addcard'>
                              <Card.Body>
                                  <Card.Text>
                                      <h2>Ajouter une activité</h2>
                                      <form onSubmit={handleSubmit}>
                                          <label> Titre de l'activité:</label>
                                          <input 
                                          type="text"
                                          required
                                          value = {titre}
                                          onChange={(e) => setTitre(e.target.value)}
                                          />
                                          <br/><br/>
                                          <label> Heure de l'activité: </label>
                                          <input 
                                          type="text"
                                          required
                                          value = { heure }
                                          onChange={(e) => setHeure(e.target.value)}
                                          />
                                          <br/><br/>
                                          <label> Description de l'activité: </label>
                                          <textarea 
                                          required
                                          value = { description }
                                          onChange={(e) => setDescription(e.target.value)}
                                          ></textarea>
                                          <br/><br/>
                                          <label> Date de l'activité(yyyy/mm/dd): </label>
                                          <input 
                                          type="date"
                                          min="2022-06-09"
                                          max="2050-06-09"
                                          required
                                          value = { date }
                                          onChange={(e) => setDate(e.target.value)}
                                          />
                                          <br/><br/>
                                          <button >Ajouter l'activité</button>

                                          
                                          
                                          
                                      </form>
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

 
export default Ajouter ;