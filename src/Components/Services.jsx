import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Content.css'



function Services({values}) {
    const [key, setkey] = useState([])

    useEffect(() => {
        // if(values.toLowerCase()==="tesla"){
        //     axios.get('https://newsapi.org/v2/everything?q=Tesla&apiKey=fc034f5f0c214139982ce5a9dce62bc6')
        //     .then((response) => setkey(response.data.articles)
        //     )
        // }
        // else if(values.toLowerCase()==="cricket"){
        //     axios.get('https://newsapi.org/v2/everything?q=Cricket&apiKey=fc034f5f0c214139982ce5a9dce62bc6')
        //     .then((response) => setkey(response.data.articles)
        //     )
        // }
        
        axios.get(`https://newsapi.org/v2/everything?q=${values}&apiKey=1b64aa7ca9234f54820c64343132a629`)
        .then((response) => setkey(response.data.articles)
        )
    },[values])
    const narrate = key.map((warn) => {
        return(

            <div className='col-4'>
            <>
        {[  'Light'  ].map((variant) => (
            
             
                  <Card style={{boxShadow:" rgba(0, 0, 0, 0.56) 0px 22px 70px 4px", width: '25rem' }} bg={variant.toLowerCase()}
                  key={variant}
                  text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                
                  className="mb-2 p-10">
                    <Card.Img variant="top" src={warn.urlToImage} />
                    <Card.Body>
                      <Card.Title>{warn.title}</Card.Title>
                      <Card.Text>
                       {warn.description}
                      </Card.Text>
                      <Card.Link href="#">Read more</Card.Link><br></br><br></br>
                      <Button  variant="primary">Add to Favorites</Button>
                      
                    </Card.Body>
                   
                  </Card>
              ))}
              </>
              </div>
        )
    }
    )

    return(
        <div className='row'>
    {narrate}
        </div>
        
      )
}
export default Services;