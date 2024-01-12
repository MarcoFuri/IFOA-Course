import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState, useEffect} from "react"
import FantasyBooks from "../books/fantasy.json"
import HistoryBooks from "../books/history.json"
import HorrorBooks from "../books/horror.json"
import RomanceBooks from "../books/romance.json"
import ScifiBooks from "../books/scifi.json"


function AllTheBooks() {

  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [asinSelected, setAsinSelected] = useState('')

  // const categories = ["fantasy", "history", "horror", "romance", "scifi"]

  const searchData = (e) => {
    let value = e.target.value.toLowerCase()
    const actualState = list
    const result = actualState.filter((data) => {
      return data.title.toLowerCase().includes(value)
    })
    setFilteredList(result)
  }

  useEffect(() => {
    setFilteredList(list)
  }, [list])

  const setBothLists = (book) => {
    setList(book)
    setFilteredList(book)
  }
  
  const changeCardState = (book) => {
    if (asinSelected === book.asin){
      setAsinSelected(null)
    } else {
      setAsinSelected(book.asin)
    } 
  }

  return (
     <>
     <div className="d-flex justify-content-center">
      <p className="m-0 p-0 fs-6 fw-bold">Search</p>
      <input className="ms-2 p-0 col-8" key="searchBar" type="text" onChange={searchData} />
     </div>
     <div className="d-flex justify-content-evenly">
      <Button variant="primary" className="my-4" onClick={() => setBothLists(FantasyBooks)}>Fantasy</Button>
      <Button variant="danger" className="my-4" onClick={() => setBothLists(HorrorBooks)}>Horror</Button>
      <Button variant="warning" className="my-4" onClick={() => setBothLists(HistoryBooks)}>History</Button>
      <Button variant="info" className="my-4" onClick={() => setBothLists(RomanceBooks)}>Romance</Button>
      <Button variant="success" className="my-4" onClick={() => setBothLists(ScifiBooks)}>SciFi</Button>
    </div>
    <div className="d-flex justify-content-evenly flex-wrap gap-3">
      {filteredList.map((book) => (
        <Card className="m-0 p-0" key={book.asin} style={{ width: '18rem', 
        border: asinSelected === book.asin ? "4px solid red" : "1px solid grey" }} onClick={() => changeCardState(book)}>
            <Card.Img variant="top" src={book.img} className="m-0 p-0"/>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  {book.asin + " - " + book.price + "€"}
                </Card.Text>
                <Button variant="primary">Buy now</Button>
                <Button variant="success ms-1">Like</Button>
            </Card.Body>
        </Card>
      ))}
      </div>
      </>
  );
}

export default AllTheBooks;