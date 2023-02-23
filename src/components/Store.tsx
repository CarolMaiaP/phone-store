import { useState, useEffect } from 'react'
import { api } from '../lib/axios'
import '../styles/store.scss'
import {BsFillCartPlusFill, BsCartCheckFill} from 'react-icons/bs'

export function Store(){
  const [cellphones, setCellphones] = useState([])
  const [cart, setCart] = useState([])

  async function fetchCellphones(){
    const response = await api.get('search?q=celular')
    setCellphones(response.data.results)
  }

  useEffect(() => {
    fetchCellphones()
  }, [])

  function handleAddCartButton(obj:any){
    const element = cart.find((e) => e.id === obj.id)

    if(element){
      const arrFilmer = cart.filter((e) => e.id !== obj.id)
      setCart(arrFilmer)
    }else{
      setCart([...cart, obj])
    }
  }

  return(
    <div className="store">
      {cellphones.map((cellphone:any, i:any) => {
        return(
          <div className="cellphone" key={i}>
            <h5>{cellphone.title}</h5>
            <img src={cellphone.thumbnail} alt={cellphone.title} />
            <p><strong>R$ {cellphone.price}</strong></p>
            <button onClick={() => handleAddCartButton(cellphone)}>
              {
                cart.some((itemCart) => itemCart.id === cellphone.id) ? (
                  <BsCartCheckFill  size={30}/>
                ) : (
                  <BsFillCartPlusFill size={30} />
                )
              }
            </button>
          </div>
        )
      })}
    </div>
  )
}