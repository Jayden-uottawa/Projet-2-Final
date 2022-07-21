import background from './img/background.png'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-grid-system';
import { useState } from 'react';
import { useHistory } from "react-router-dom";




const Ajouter = () => {
    const history = useHistory();
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
            history.push('/Activite');
        }).then(() =>{
            alert('Votre activité  a été ajouter!')
        }).then(() => {
            window.location.reload()
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
                      <br/><br/>
                          <Card style={{ width: '35rem', backgroundColor: 'orange' }} className='addcard'>
                              <Card.Body>
                                  <Card.Text>
                                      <h2 style={{padding: '15px'}}>Ajouter une activité</h2>
                                      <form onSubmit={handleSubmit}>
                                          <label style={{padding: '15px' , fontSize: '15px', fontWeight:'bold'}}> Titre de l'activité:</label>
                                          <input 
                                          type="text"
                                          required
                                          value = {titre}
                                          onChange={(e) => setTitre(e.target.value)}
                                          style={{padding: '5px'}}
                                          />
                                          <br/><br/>
                                          <label style={{padding: '15px' , fontSize: '15px', fontWeight:'bold'}}> Heure de l'activité: </label>
                                          <input 
                                          type="text"
                                          required
                                          value = { heure }
                                          onChange={(e) => setHeure(e.target.value)}
                                          style={{padding: '5px'}}
                                          />
                                          <br/><br/>
                                          <label style={{padding: '15px', fontSize: '15px', fontWeight:'bold'}}>Description de l'activité:</label>
                                          <input 
                                          type="text"
                                          required
                                          value = { description }
                                          onChange={(e) => setDescription(e.target.value)}
                                          style={{padding: '5px'}}
                                          />
                                          <br/><br/>
                                          <label style={{padding: '15px' , fontSize: '15px', fontWeight:'bold'}}> Date de l'activité: </label>
                                          <input 
                                          type="date"
                                          min="2022-06-09"
                                          max="2050-06-09"
                                          required
                                          value = { date }
                                          onChange={(e) => setDate(e.target.value)}
                                          style={{padding: '5px'}}
                                          />
                                          <br/><br/>
                                          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                                          <button style={{padding: '5px'}} >Ajouter l'activité</button>
                                          <br/>
                                          </div>
                                          <br/>  
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