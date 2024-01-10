import { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./Navbar";


const AddAlbum=(props) =>{
    // using useState hook to maintain the state for title and userId
    const [title, setTitle]= useState('');
    const [userId,setUserId] = useState('');
    const {addAlbumToList} = props;
    
    //function to handle add album form submit
    const handleSubmit=(e)=>{
        try {
            e.preventDefault();
            // to check if title or userId field is empty
            if(title === "" || userId === ""){
                toast.info("Enter all the details");
                return
            }
            addAlbumToList(title, Number(userId));
            setTitle("");
            setUserId(""); 
        } catch (error) {
            console.error("Error adding album:", error);
        }
    }
    return (
        <>
        <Navbar page="Home" path="/" />
         {/* Add Album Form */}
        <div className="album-container">
            <form className="form-container" onSubmit={handleSubmit}>
                <div className= "album-form"> Create an Album </div>
                <div className="form-field">
                    <div>Title: </div>
                    <input type='text' id="title " className="input-div" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="form-field">
                    <div>User Id: </div>
                    <input type='number'id='userid' className="input-div" value={userId} onChange={(e)=>setUserId(e.target.value)}/>
                </div>
                <button className="btn-field">Create Album</button>
            </form>
        </div>
        </>
        
    )
}

export default AddAlbum;