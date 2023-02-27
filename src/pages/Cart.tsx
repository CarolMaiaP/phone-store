import { Navbar } from "../components/Navbar";
import { getItem, setItem } from '../services/LocalStorage'
import { useState } from 'react'
import { BsCartDashFill } from 'react-icons/bs'
import '../styles/store.scss'

interface CartProps{
  id: string,
  title: string,
  thumbnail: string,
  price: number
}

export function Cart(){
  const [cart, setCart] = useState<CartProps[]>( getItem("carrinhoYt") || [])

  function handleDeleteCellphone(ct:CartProps){

    const newCart = cart.filter((c) => c.id !== ct.id)

    console.log(newCart)

    setItem("carrinhoYt", newCart)

    setCart(newCart)
  }

  return(
    <>
      <Navbar />
      <h1>Cart</h1>
      <div className="store">
        {cart.map((ct:any, i:any) => {
          return(
            <div className="cellphone" key={i}>
              <h4>{ct.title}</h4>
              <img src={ct.thumbnail} alt={ct.title} />
              <p><strong>R$ {ct.price}</strong></p>
              <button onClick={() => handleDeleteCellphone(ct)}>
                <BsCartDashFill size={30} />
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}