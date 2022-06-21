import { useState } from "react";
import Card from 'react-bootstrap/Card';

export default function Portofolio(props) {

return(
   <>
   
   <Card className="my-3 ">
      <Card.Img variant="top" src={props.Img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
    </Card>
    
   </>
)
}