import {useEffect, useState} from "react"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const searchURL = "http://www.omdbapi.com/?apikey=da094137&s="

function Gallery(props) {
    const [data, setData] = useState({})

    const dataFetching = async () => {
        try {
            const response = await fetch (searchURL + props.search)
            if (!response.ok) {
                console.log("something went wrong")
            } 
            const result = await response.json()
            console.log(result)
            setData(result)
        }
        catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        dataFetching()
    }, [])

    return (
        <Row className="g-4 m-0 p-0">
            {!data.Search && <div>ciao</div>}
            {data.Search && data.Search.slice(0, 6).map((movie, index) => (
                <Col className key={index}>
                <Card>
                    <Card.Img style={{height: "250px"}} src={movie.Poster} />
                </Card>
                </Col>
            ))}
        </Row>
    )
}


export default Gallery