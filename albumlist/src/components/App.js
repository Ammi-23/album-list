import { useState, useEffect } from "react"; // importing React hook
import { toast } from "react-toastify";
import {Routes, Route} from 'react-router-dom';
import { API_URLS } from "../utils"; //importing API url 
// importing AlbumList,AddAlbum,UpdateAlbum components
import AlbumList from './AlbumList';
import AddAlbum from "./AddAlbum";
import UpdateAlbum from "./UpdateAlbum";

function App() {
  const [album, setAlbum] = useState([]); // using useState hook to maintain the state for album

  // using useEffect hook to fetch the data  
  useEffect(() =>{
    try {
        fetch(API_URLS.albums())
          .then((response) => response.json())
          .then((data) => {
            setAlbum(data); //set the album with data
          });
    } catch (error) {
        console.log(error); 
    }
  }, []);

// function to add an album to the list
  const addAlbumToList= async (title, userId)=>{
    try{
      //POST request to the server
      await fetch(API_URLS.albums(), { 
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          title: title,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      // create album request
      const newAlbum={
         userId: userId,
         id:album.length +1,
         title: title,
      };
      //add the request to the album list state  
      const arr = [newAlbum, ...album];
      setAlbum(arr);       
      toast.success("New Album Added Successfully");
    }catch(error){
      console.log(error);
    }
  }

  // function to update an album
  const updateAlbumChange = async (id, updateTitle, updateUserId)=>{
    try{
      // PUT request to the server
      await fetch(API_URLS.albums() + `${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          userId: updateUserId,
          id:id,
          title:updateTitle
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

      //to get the index of the album from the list
      const index= album.findIndex((ele) => ele.id === id);
      //updated album data request
      const updatedAlbum= {
      userId: updateUserId,
      id:id,
      title:updateTitle
      }
      //add the request to the album list state 
      const updatedAlbums= [...album];
      updatedAlbums[index] = updatedAlbum;
      setAlbum(updatedAlbums); 
      toast.success("Album Updated Successfully");
    }catch(error){
      console.log(error);
    }
           
  };


  return (
    <div className="App">
      <Routes>
        {/* Route to home page */}
        <Route exact path="/" element={<AlbumList 
              album ={album} 
              setAlbum={setAlbum}  /> } />

        {/* Route for add album component */}
        <Route exact path="/create-album" 
          element={<AddAlbum addAlbumToList={addAlbumToList}/>}/>

          {/* Route for update album component */}
        <Route exact path="/update-album/:id" 
          element={<UpdateAlbum updateAlbumChange={updateAlbumChange} 
          album={album}/>}/>
      </Routes>
    </div>
  );
}

export default App;
