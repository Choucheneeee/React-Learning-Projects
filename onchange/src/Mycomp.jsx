import React,{useState} from 'react'



function Mycomp() {
    const [name,setName]=useState("Guest");
    const [quantity,setquantity]=useState(1);
    const [comment,setcomment]=useState("");
    const [payment,setpayment]=useState("");
    const [shipping,setshipping]=useState("");



    function handleNameChange(event){
        setName(event.target.value)
    }
    function handleQuantityChange(event){
        setquantity(event.target.value)
    }
    function handleCommentChange(event){
        setcomment(event.target.value)
    }
    function handlepaymentChange(event){
        setpayment(event.target.value)
    }
    function handleshippingChange(event){
        setshipping(event.target.value)
    }
    return (<div >
            <input value={name} onChange={handleNameChange}></input>
            <p> Name: {name} </p>
            <input value={quantity} onChange={handleQuantityChange}></input>
            <p> Quantity: {quantity}  </p>
            <textarea value={comment} placeholder='Type a message ...' onChange={handleCommentChange}></textarea>
            <p> Comment: {comment}  </p>

            <select value={payment} onChange={handlepaymentChange}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>payment: {payment}</p>
            <label>
                <input type="radio" value="Pick up"
                        checked={shipping==="Pick up"}
                        onChange={handleshippingChange}
                    
               />
                Pick up
            </label><br/>
            <label>
            <input type="radio" value="Delivery"
                        checked={shipping==="Delivery"}
                        onChange={handleshippingChange}/>
                Delivery
            </label>
            <p>Shipping:{shipping}</p>

    </div>);
}


export default Mycomp