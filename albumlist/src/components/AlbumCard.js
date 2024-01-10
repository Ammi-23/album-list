import React from "react";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
import { API_URLS } from "../utils";


const AlbumCard= (props) =>{
    const {item, album,setAlbum} = props;

    // function to delete an album from the list
    const handleDelete = async (id) =>{
       try{ 
            //DELETE request to the server
            await fetch(API_URLS.albums() + `${id}` ,{
                method:'DELETE',
            });
            //filter  album with id and save the update in state
            const newAlbum = album.filter((item) =>item.id !== id);
            console.log(newAlbum);
            setAlbum(newAlbum);
            toast.success("Album Deleted Successfully");  
        }catch(error){
            console.log(error);
        }     
    };
 

    return (
        <div className= "card">
            <div className="album-title">
                <h3>{item.title}</h3>
            </div>
            <div className="btn-div">
                <Link to={`/update-album/${item.id}`} > <button className="btn-field">Update</button></Link>
                <button className="delete-btn" onClick={() => handleDelete(item.id)} >Delete</button>
            </div>

        </div>
    )
}

export default AlbumCard; 