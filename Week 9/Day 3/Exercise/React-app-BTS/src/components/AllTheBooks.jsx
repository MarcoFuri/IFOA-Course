import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AllTheBooks(props) {
  const { books } = props;

  return (

      books.map((book) => (
        <Card className="m-0 p-0" key={book.asin} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={book.img} className="m-0 p-0"/>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Button variant="primary">Buy now</Button>
                <Button variant="success ms-1">Like</Button>
            </Card.Body>
        </Card>
      ))
  );
}

export default AllTheBooks;