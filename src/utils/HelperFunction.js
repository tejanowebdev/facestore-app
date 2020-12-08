import { useDispatch } from 'react-redux'
import { setIsLoading, setSample1, getProducts } from '../shared/slices/cartSlice';

function HelperFunction() {

    const dispatch = useDispatch()

    const fetchSample1 = () => {
        console.log(" sample function")
    }


    //Fetch Data
    const fetchData = () => {
        dispatch(setIsLoading(true))

        fetch('tempAPI.json')
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    dispatch(setIsLoading(false))
                    dispatch(getProducts(data.body))
                  }, 1000);
            })
            .catch(error => console.log(error))
    }

    return (
        {
            fetchData: fetchData,
            func1: fetchSample1,
        } 
    )
}

export default HelperFunction
