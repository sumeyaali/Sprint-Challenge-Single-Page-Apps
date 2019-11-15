import React, { useEffect, useState } from "react";
// import {withFormik, Field, Form} from "formik";
import axios from "axios";
// import * as yup from "yup";
import CharacterCard from "./CharacterCard"


export default function CharacterList (props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState();


  useEffect(() => {
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
    axios.get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          setCharacters(response.data.results)
          console.log(response)
        })
        
        .catch(error => {
          console.error(error);
      });
  
});


 return (
  characters.map(character => (
      <CharacterCard key={character.id}>
        {character.name}
      </CharacterCard>
 ))
 );

}

 







// const FormikCharacterList = withFormik({
//   mapPropsToValues({name}) {
//     return {
//       name: name || "",
//     }
  
//   },


//   handleSubmit(values, {setStatus}){
//     axios.get("https://rickandmortyapi.com/api/character/")
//     .then(res => {
//       setStatus(res.data)
//       console.log(res)
//     })
//     .catch(err => console.log(err.response))
//   }
// })(CharacterList);

// export default FormikCharacterList;


// return (
//   <section className="character-list">
//     {/* <h2>TODO: `array.map()` over your state here!</h2> */}
  // {characters.map(character => (
  //   <ul key= {character.id}>
  //     <li>Name: {character.name}</li>
  //     <li>img: {character.url}</li>

  //   </ul>
//   ))}
//   </section>
// );