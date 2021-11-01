import { useParams } from "react-router-dom"


const OrderList = () => {
    const {uid} = useParams()
    console.log(uid);
    return (
        <div>
            
        </div>
    )
}

export default OrderList
