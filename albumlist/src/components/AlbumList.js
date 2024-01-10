import AlbumCard from "./AlbumCard"; // importing AlbumCard and Navbar component
import Navbar from "./Navbar";

const AlbumList= (props) =>{
    const { album, setAlbum} = props;
     
    return (
        <>
            <Navbar page="Add Album" path="/create-album" />
            <div className="container">
                {/* map over the AlbumCard component for each album in list */}
                {album.map((item) =>{
                    return <AlbumCard item={item} key={item.id} album={album} setAlbum={setAlbum}/>
                })}
            </div>
        </>
    )
}

export default AlbumList; 