import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import Chart from "./Chart"

const urlEndpoint = "http://api.openweathermap.org/data/2.5/weather?q="
const apiKeyFetch = "&APPID=0b11e5502dd818d7a1d24f57f3232a4b"



function Main() {
   
    const PAGE_STATES = {
        INITIAL_STATE: "INITIAL_STATE",
        SEARCH_ERROR: "SEARCH_ERROR",
        SEARCH_SUCCESS: "SEARCH_SUCCESS"
    }

    const [pageState, setPageState] = useState(PAGE_STATES.INITIAL_STATE)
    const [inputSearch, setInputSearch] = useState("")
    const [citySearched, setCitySearched] = useState("")
    const [city, setCity] = useState({})


    const fetchData = async (citySearched) => {
        try {
            const res = await fetch(urlEndpoint + citySearched + apiKeyFetch)
            console.log(res)
            if (!res.ok) {
                setPageState(PAGE_STATES.SEARCH_ERROR)
                console.log("fetch error")
            } else {
                console.log("fetch ok")
                let data = await res.json()
                console.log("res body", data)
                setCity(data)
                setPageState(PAGE_STATES.SEARCH_SUCCESS)
            }
        }
        catch (error) {
            console.log("error")
        }
    }

    function clickHandler() {
        setCitySearched(inputSearch)
        fetchData(inputSearch)
    }

    function handleKeyDown(e) {
        if (e.key === "Enter"){ 
        setCitySearched(inputSearch)
        fetchData(inputSearch)
        }
    }

    return (
        <>
            <div className="m-3 d-flex gap-2 rounded-pill p-1 w-50 position-absolute bg-warning top-0 end-0">
                <Button className="bg-warning border border-0" onClick={clickHandler}><svg style={{ width: "15px" }} className="bg-warning p-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg></Button>
                <input className="border border-0 bg-warning search_input" type="search" placeholder="Search" aria-label="search bar" onChange={(e) => setInputSearch(e.target.value)} onKeyDown={handleKeyDown}/>
            </div>  


            {pageState === PAGE_STATES.INITIAL_STATE &&
                <h1 className="m-5">Welcome to the newest <span className="fw-bold display-3">Weather App</span></h1>}

            {/* if the city doesn't exist*/}
            {pageState === PAGE_STATES.SEARCH_ERROR &&
                <h1 className="m-5">I'm sorry, your research "{citySearched}" doesn't exist.</h1>}
                
            {pageState === PAGE_STATES.SEARCH_SUCCESS &&
                <Container fluid>
                    <h2 className="fs-2 my-5">Weather for <span className="fw-bold display-3">{city?.name}</span></h2>
                    <Row className="gap-4 justify-content-around row-cols-2">
                        <Col className="col-10 col-lg-5">
                            <Card className="rounded-pill border border-0 pt-2 text-center">
                                <Card.Body>
                                    <h5 className="fw-bold">Temperature</h5>
                                    <hr className="text-white" />
                                    <h5>{(Math.floor(city?.main?.temp) - 273) + "° C"}</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-10 col-lg-5">
                            <Card className="rounded-pill border border-0 pt-2 text-center">
                                <Card.Body>
                                    <h5 className="fw-bold">Feels like</h5>
                                    <hr className="text-white" />
                                    <h5>{(Math.floor(city?.main?.feels_like) - 273) + "° C"}</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-10 col-lg-5">
                            <Card className="rounded-pill border border-0 pt-2 text-center">
                                <Card.Body>
                                    <h5 className="fw-bold">Humidity</h5>
                                    <hr className="text-white" />
                                    <h5>{Math.floor(city?.main?.humidity) + "%"}</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-10 col-lg-5">
                            <Card className="rounded-pill border border-0 pt-2 text-center">
                                <Card.Body>
                                    <h5 className="fw-bold">Weather</h5>
                                    <hr className="text-white" />
                                    <h5>{city?.weather?.[0]?.main}</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <hr className="mt-5" />
                    {/* <Chart city={city}/> */}
                </Container>
            }

        </>
    )
}

export default Main