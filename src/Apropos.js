import background from './img/background.png'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-grid-system';
import YoutubeEmbed from './YoutubeEmbed';



const Apropos = () => {
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
                          <Card style={{ width: '600px', backgroundColor: 'orange' }} className='addcard'>
                              <Card.Body>
                                  
                                  <Card.Text>
                                      <h2 style = {{ padding: '10px'}} >Vidéo interressante de la semaine:</h2>
                                      <YoutubeEmbed embedId="KPFC0KcuUtQ"/>
                                      <h2 style = {{ padding: '10px'}}>Notre histoire:</h2>
                                      <p style = {{ padding: '10px'}} >
                                        Communactive à été fondé en 2010 par un groupes d'adolesent qui voulais faire une différence dans leur communauté. La prmière activité qui a été organiser par le groupes était une soirée cinéma au centre commuanutaire et l'activité a été un grand succèes. Depuis ce jours, plusieurs personne ce sont joint au mouvement et organise leurs propre activité pour la communauté. Nous tennons a remercier nos nombreux commanditaire qui rendre chaque activité possible. Sans leurs support on ne pourrait pas offrir toutes ses belles activité pour la population de St-albert. 
                                      
                                      </p>
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
 
export default Apropos;
