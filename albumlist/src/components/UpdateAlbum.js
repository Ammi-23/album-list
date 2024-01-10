import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const UpdateAlbum = (props) =>{
    // using useState hook to maintain the state for updatetitle and updateuserId
    let [updateTitle, setUpdateTitle] = useState('');
    let [updateUserId, setUpdateUserId] = useState('');
    const {album, updateAlbumChange } = props;
    const {id} = useParams();

    //function to handle update album form submit
    const handleUpdateChange =(e) =>{
        try{
            e.preventDefault();
            //get the album by id
            const res = album.find((ele) => ele.id === Number(id));
            // to update the old title,if the no input
            if (updateTitle ===""){
                updateTitle=res.title;                
            }
            // to update the old userId,if the no input
            if (updateUserId === ""){
                updateUserId=res.userId;
            }
            updateAlbumChange(Number(id), updateTitle, Number(updateUserId));
            setUpdateTitle('');
            setUpdateUserId('');
        }catch(error){
            console.log(error);
        }        
    }
 
    return (
        <>
        <Navbar page="Home" path="/" />
        {/* Update Album Form */}
        <div className="album-container">
            <form className="form-container" onSubmit={handleUpdateChange} >
                <div className= "album-form"> Update an Album </div>
                <div className="form-field">
                    <div>Title: </div>
                    <input type='text' id="title " className="input-div" value={updateTitle} onChange={(e)=>setUpdateTitle(e.target.value)}/>
                </div>
                <div className="form-field">
                    <div>User Id: </div>
                    <input type='number'id='userid' className="input-div" value={updateUserId} onChange={(e)=>setUpdateUserId(e.target.value)}/>
                </div>
                <button className="btn-field">Update</button>
            </form>
        </div>
        </>
        
    )
}

export default UpdateAlbum;