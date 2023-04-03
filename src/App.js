import { useState } from "react";
import AddMovies from "./component/AddMovies";
import MovieList from "./component/MovieList";


function App() {
const [movies,setMovies] = useState ([{
  id : 0,
  name : "Leon",
  pays : "USA",
  Categorie : "Action",
  photo : "https://fr.web.img4.acsta.net/r_1920_1080/img/8b/7e/8b7e6e259cf75982d5de8e62fcbaf3fd.jpg",
  rate : "8,4"
}])
const addMovie =(addmovies) =>{
  setMovies([...movies,addmovies]);
}
  return (

    <div className="App">
   <AddMovies addmovies={addMovie}/>
   <MovieList movies={movies}/>
    </div>
  );
}

export default App;
