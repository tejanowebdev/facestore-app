import React, { useEffect, useState } from 'react'
import { Spinner, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function LoadingComponent(props) {
    const {showLoading} =  props

    return (
        <div className="listloader-icon w-100 d-flex align-items-center justify-content-center list-items" style={{opacity:`${showLoading?1:0}`}}>
            <Button variant="primary" className="bg-transparent border-0" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="mx-1"
                    variant="warning"
                />
                Loading...
            </Button>
        </div>
    )
}

export default LoadingComponent
