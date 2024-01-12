import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const List = (props) => {
    return (
        <ul>
            {props.days.map((day, index) => {
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{day}</Card.Title>
                  <Card.Text>
                    {index + " - " + day}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            })}
        </ul>
    )
}

export default List