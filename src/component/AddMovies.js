import React, { useState } from 'react'

const AddMovies = ({addmovies}) => {
    const [name,setName] = useState ("");
    const [Categorie,setCategorie] = useState ("");
    const [pays,setPays]= useState ("");
    const [rate,setRate]= useState ("");
    const [photo,setPhoto]= useState ("");
  return (
    <div>
      <form>
        <div>
            <lable>
                name 
            </lable>
            <input type="text"             
            onChange={(e) => setName(e.target.value)}
            value={name}/>

        </div>
        <div>
        <lable>
                Categorie
            </lable>
            <input type="text"             
            onChange={(e) => setCategorie(e.target.value)}
            value={Categorie}/>     
        </div>
        <div>
        <lable>
                pays
            </lable>
            <input type="text"             
            onChange={(e) => setPays(e.target.value)}
            value={pays}/>     
        </div>
        <div>
        <lable>
                rate
            </lable>
            <input type="text"             
            onChange={(e) => setRate(e.target.value)}
            value={rate}/>     
        </div>
        <div>
        <lable>
                photo
            </lable>
            <input type="text"             
            onChange={(e) => setPhoto(e.target.value)}
            value={photo}/>     
        </div>
       <button className='btn btn-success'>AddMovies</button>
        
      </form>

    </div>
  )
}

export default AddMovies
