import background from './img/background.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
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
                          <Card style={{ width: '600px', backgroundColor: 'orange' }} className='addcard'>
                              <Card.Body>
                                  
                                  <Card.Text>
                                      <h2 style = {{ padding: '10px'}} >Vidéo interressante de la semaine:</h2>
                                      <YoutubeEmbed embedId="KPFC0KcuUtQ"/>
                                      <h2 style = {{ padding: '10px'}}>Notre histoire:</h2>
                                      <p style = {{ padding: '10px'}} >
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim erat cursus ullamcorper pellentesque. Curabitur iaculis ligula ipsum, id consectetur libero semper at. Morbi sollicitudin tellus et velit rhoncus egestas. Aliquam hendrerit congue velit, ut condimentum dui suscipit sed. Fusce augue diam, pharetra tincidunt lectus at, hendrerit cursus elit. Etiam sollicitudin auctor rutrum. Nam et gravida ante. Donec a sagittis leo. In sagittis urna mollis velit cursus tempor. Phasellus id augue ac nisi maximus placerat a nec sem. In mauris est, aliquam eget porta et, maximus vitae risus. Pellentesque vitae diam velit. Donec finibus enim id pellentesque vulputate.
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
