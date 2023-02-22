import { useState, useEffect } from 'react'
import { api } from '../lib/axios'

export function Store(){
  const [cellphones, setCellphones] = useState<any>([])

  async function fetchCellphones(){
    const response = await api.get('search?q=celular')
    setCellphones(response.data.results)
  }

  useEffect(() => {
    fetchCellphones()
  }, [])

  return(
    <div className="store">
      {cellphones.map((cellphone:any, i:any) => {
        return(
          <div className="cellphone" key={i}>
            <h5>{cellphone.title}</h5>
            <img src={cellphone.thumbnail} alt={cellphone.title} />
            <p><strong>R$ {cellphone.price}</strong></p>
          </div>
        )
      })}
    </div>
  )
}