import React from 'react'
import { Button, Row, Col, DropdownButton, Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setIsFiltering } from '../../shared/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function SortComponent(props) {
    const {setData, data} = props

    const dispatch = useDispatch()
    const isFiltering = useSelector(state => state.cart.isFiltering);

    const handleSort = (title, desc) => {

        let sortedItems = []
        
        switch (title) {
            case "id":
                sortedItems = desc ? data.slice().sort((a, b) => b.id - a.id)
                                : data.slice().sort((a, b) => a.id - b.id)
                break;
            case "price":
                sortedItems = desc ? data.slice().sort((a, b) => b.price - a.price)
                                : data.slice().sort((a, b) => a.price - b.price)

                break;
            case "size":
                sortedItems = desc ? data.slice().sort((a, b) => b.size - a.size)
                                : data.slice().sort((a, b) => a.size - b.size)
                break;
            default:
                sortedItems = data
                break;
        }

        dispatch(setIsFiltering(true))
        
        setTimeout(() => {
            dispatch(setIsFiltering(false))
            setData(sortedItems)
          }, 1000);
    }

    return (
            <Row>
                <Col className="text-sm-right text-left">
                    <Button as="input" type="button" value="Sort by:" className="bg-transparent m-1 border-0 px-0 sort-label" disabled/>
                   
                    {//***** Product ID section ***** //
                    }
                    <DropdownButton id="dropdown-basic-button" title="Product Id" className="d-inline-block m-1">
                        <Dropdown.Item onClick={()=>handleSort("id", 1)} className="px-2">Highest to Lowest</Dropdown.Item>
                        <Dropdown.Item onClick={()=>handleSort("id", 0)} className="px-2">Lowest to Highest</Dropdown.Item>
                    </DropdownButton>

                     {//***** Price section ***** //
                     }
                    <DropdownButton id="dropdown-basic-button" title="Price" className="d-inline-block m-1">
                        <Dropdown.Item onClick={()=>handleSort("price", 1)} className="px-2">Highest to Lowest</Dropdown.Item>
                        <Dropdown.Item onClick={()=>handleSort("price", 0)} className="px-2">Lowest to Highest</Dropdown.Item>
                    </DropdownButton>

                    
                     {//***** Size section ***** //
                     }
                    <DropdownButton id="dropdown-basic-button" title="Size" className="d-inline-block m-1">
                        <Dropdown.Item onClick={()=>handleSort("size", 1)} className="px-2">Bigger to Smaller</Dropdown.Item>
                        <Dropdown.Item onClick={()=>handleSort("size", 0)} className="px-2">Smaller to Bigger</Dropdown.Item>
                    </DropdownButton>
                
                </Col>
            </Row>
    )

    
}

export default SortComponent
