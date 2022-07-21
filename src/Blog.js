import background from './img/background.png'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-grid-system';
import ForumList from './ForumList';
import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";


const Blog = () => {
    const history = useHistory();
    const [forum, setForum] = useState(null);

    const handleDelete = (id) => {
        const newforum = forum.filter(forum => forum.id !== id)
        setForum(newforum)

    }
    const [auteur, setAuteur] = useState('')
    const [message, setMessage] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const forum = { auteur, message };
        
        fetch('http://localhost:8000/forum', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(forum)
        }).then(() =>{
            console.log('new acti added')
        }).then(() =>{
            history.push('/Blog');
        }).then(() =>{
            alert('Votre message a été publier')
        }).then(() => {
            window.location.reload()
        })
            

    }

    useEffect(() => {
        fetch('http://localhost:8000/forum')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setForum(data);
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
                          <Card style={{ width: '35rem', backgroundColor: 'orange' }} className='addcard'>
                              <Card.Body>
                                  <Card.Text>
                                      <h2 style={{padding: '7px'}}>Forum de discussion</h2>
                                      {forum && <ForumList forum={forum} handleDelete={handleDelete} />}
                                      <form onSubmit={handleSubmit}>
                                          <label style={{padding: "7px"}}> Entrez votre nom:</label>
                                          <input 
                                          type="text"
                                          required
                                          value = {auteur}
                                          onChange={(e) => setAuteur(e.target.value)}           
                                          />
                                          <br/><br/>
                                          <label style = {{padding: "7px"}}>Entrez votre message:</label>
                                          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                                          <textarea 
                                          required
                                          value = { message }
                                          cols="75"
                                          rows="3"
                                          onChange={(e) => setMessage(e.target.value)}
                                          ></textarea>
                                          </div>
                                          <br/>
                                          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                                          <button>Publier votre message</button>
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
 
export default Blog;