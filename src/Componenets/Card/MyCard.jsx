import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import xxx from "../../imges/me.png"
function MyCard( props) {
  // const props= {name:"ali",xx:xxx}
  // const [xx,name] = props;
  console.log(props);
  return ( 
    <Card style={{ width: '18rem' }}>
    <Card.Img   variant="top" src={props.xx }  />
    <Card.Body>
      <Card.Title className='text-center'>{props.name}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default MyCard