
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import '../Components/Content.css'
// // import CardGroup from 'react-bootstrap/CardGroup';

// function Content() {
//       const [product,setProduct] = useState([])

//       useEffect(() =>{
//         axios.get('https://newsapi.org/v2/everything?q=cricket&apiKey=72fa083ca6cb4f91990678d1f379f86d').then((response) => 
//             setProduct(response.data.articles)
//         );

//       })
    
//       const news = product.map((item, i) =>{
        

      

//   return (
   
//     <div className='col-4'>
//     <>
// {[  'Light'  ].map((variant) => (
    
     
//           <Card style={{boxShadow:" rgba(0, 0, 0, 0.56) 0px 22px 70px 4px", width: '18rem' }} bg={variant.toLowerCase()}
//           key={variant}
//           text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        
//           className="mb-2 p-10">
//             <Card.Img variant="top" src={item.urlToImage} />
//             <Card.Body>
//               <Card.Title>{item.title}</Card.Title>
//               <Card.Text>
//                {item.description}
//               </Card.Text>
//               <Card.Link href="#">Read more</Card.Link><br></br><br></br>
//               <Button variant="primary">Add to Favorites</Button>
//             </Card.Body>
           
//           </Card>
//       ))}
//       </>
//       </div>
    
//   );
// })

//   return(
//     <div className='row'>
// {news}
//     </div>
    
//   )
// }

// export default Content;