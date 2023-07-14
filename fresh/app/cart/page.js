// Client Component
// 'use client'
// can use useState, useEffect
// also, onClick()

// Server Component
// cannot use useState, useEffect
export default function Cart() {
    let cart = ['Tomatoes', 'Pasta']
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem item={cart[0]}/>
            <CartItem item={cart[1]}/>
            <Banner content="Hyundai"/>
        </div>
    )
}

function Banner(props) {
    return <h5>{props.content} Card Promotion</h5>
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1 ea.</p>
        </div>       
    )
}