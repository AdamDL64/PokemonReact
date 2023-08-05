import React from 'react'
import LinkPoke from './LinkPoke'

const FavPoke = (props) => {
    const {fav}= props
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
        
        {
            fav?.map((data,index)=>{
                return(
                    <div key={index}>
                        <h3>{data.name}</h3>
                        <img src={data?.sprites?.other?.home?.front_default} alt={data?.name} />
                       < LinkPoke />
                    </div>

                )
            })
        }
    </div>
  )
}

export default FavPoke