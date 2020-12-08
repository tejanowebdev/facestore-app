import React, { useEffect, useState } from  'react'
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { formatDate } from '../../utils/stringHelper';
import moment from 'moment';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingComponent from '../../shared/LoadingComponent';

function ProductList(props) {
    const {data, handlePreview, isLoading} = props

    const [page, setPage] = useState(21);
    const [newdata, setNewData] = useState([]);
    const [hasnext, setHasNext] = useState(true);
    const [showLoading, setshowLoading] = useState(false);


    useEffect(() => {
        const items = data.slice(0, page) 
        setNewData(items)
    }, [page, data])


    const fetchMoreData = () => {
        if(data.length === newdata.length){
            setHasNext(false)
        }else{
            window.addEventListener('scroll', () => {
                const scrollable = document.documentElement.scrollHeight - window.innerHeight;
                const scrolled = window.scrollY
        
                if(scrollable === scrolled){
                    setTimeout(() => {
                        setPage(prev=>prev + 21)
                    }, 1000);
                }else{
                    setshowLoading(true)
                }
            })
        }
    }


    const list = newdata && newdata.map(item=> {
        let dateAdded = moment(item.date_added)
        let dateToday = moment(new Date())

        let daysDiff = (moment.duration(dateToday.diff(dateAdded)).asDays()).toFixed(0)
        let weeksDiff = (moment.duration(dateToday.diff(dateAdded)).asWeeks()).toFixed(0)

        let days
        
        if((daysDiff && daysDiff !== 1) && weeksDiff < 2 ){
            days = `${daysDiff} days ago`
        }else if(weeksDiff > 1){
            days = formatDate(new Date(item.date_added))
        }else{
            days = `Yesterday`
        }

        return (
                <Col key={item.id} className={`col-12 product px-2 ${item.name === "ads" ? "ads col-sm-12" : "col-sm-6"}`} >
                
                    <Card className="my-2 border-0">
                    
                        <Card.Body className="p-0">
                        <Row className="m-0">
                            <Col className={`col-12 d-flex align-items-center ascii-text justify-content-center flex-column ${item.name === "ads" ? "col-md-12 text-uppercase" : "col-md-8"}`}>
                                <Card.Title style={{fontSize:`${item.size}px`}} className="w-100 text-center pb-3">
                                    {  item.name !== "ads" ? item.ascii : `${item.sponsor}`}
                                </Card.Title>
                                {
                                    item.name !== "ads" ? 
                                                        <Card.Text className="mb-0 p-1">Added: {days}</Card.Text>
                                                        :null
                                }
                            </Col>
                            { 
                                item.name !== "ads" ? 
                                                    <Col className="col-md-4 col-12 p-0">
                                                        <div className="text-holder p-2 text-center">
                                                            <Row className="m-0 p-0">
                                                                <Col className="m-0 p-0 text-left"><Card.Text className="mb-0">Id: {item.id}</Card.Text></Col>
                                                                <Col className="m-0 p-0 text-right"><Card.Text className="mb-0">Size: {item.size}</Card.Text></Col> 
                                                            </Row>
                                                            <Row className="m-0 p-0">
                                                                <Col className="m-0 p-0 text-md-center text-left col-md-12 col-6 ">
                                                                    <h2 className="mb-0">{`$${item.price}`}</h2>
                                                                </Col>
                                                                <Col className="mt-2 m-0 p-0 text-md-center text-right col-md-12 col-6">
                                                                    <Button variant="primary" onClick={()=>handlePreview(item.id)}>Preview</Button>
                                                                </Col> 
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                    :null
                            }
                            
                        </Row>
                        </Card.Body>
                    </Card>
                </Col> 
            )
    }) 
    
    const endMsg = <p className="endMessage w-100 text-center text-white"> ~ end of catalogue ~ </p>


    return (

            <Container className="products-list">
                        <InfiniteScroll
                            dataLength={page}
                            next={fetchMoreData}
                            hasMore={hasnext}
                            loader={<LoadingComponent showLoading={showLoading}/>}
                            endMessage={endMsg}
                            className="row px-2"
                            >
                            {list}
                        </InfiniteScroll>
            </Container>
    ) 
}

export default ProductList
