import React from 'react'
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Loading() {
    return (
        <div className="loading-img w-100 d-flex align-items-center justify-content-center">
            <Spinner animation="border" role="status" variant="warning">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loading
