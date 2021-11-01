import { getAuth } from "@firebase/auth";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Order = () => {
    const [order, setOrder] = useState({});
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const auth = getAuth();
    const param = useParams();
    const currentUser = auth.currentUser;

    const handleOrder = () => {
        const orderDetail = {
            order_id: param.id,
            order_author: currentUser.displayName,
            order_author_email: currentUser.email,
            order_address: address,
            order_nnumber: number
        }
        console.log(orderDetail);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${param.id}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, []);
    return (
        <>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h2>You chose</h2>
                        <img src={order.img} className="w-100" alt="" />
                        <h3>{order.name}</h3>
                        <p>{order.price}</p>
                        <p>{order.duration}</p>
                    </div>
                    <div className="col-md-5">
                        <h2>You Detail</h2>
                        <input
                            type="text"
                            disabled
                            name="name"
                            className="form-control mb-3"
                            value={currentUser?.displayName}
                        />
                        <input
                            type="email"
                            disabled
                            name="name"
                            className="form-control mb-3"
                            value={currentUser?.email}
                        />
                        <input
                            name="number"
                            type="text"
                            className="form-control mb-3"
                            id="number"
                            placeholder="enter your phonenumber"
                            onBlur={(e)=> setNumber(e.target.value)}
                        />
                        <textarea
                            name="address"
                            id="address"
                            className="form-control"
                            cols={30}
                            rows={10}
                            placeholder="enter your adress"
                            onChange={(e)=> setAddress(e.target.value)}
                        ></textarea>
                        <button
                            className="btn btn-success"
                            onClick={handleOrder}
                        >
                            submit
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Order;
