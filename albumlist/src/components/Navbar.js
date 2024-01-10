import { Link } from "react-router-dom";

const Navbar= (props) =>{
    return (
        <div className="app-header">
            <div className="header-div">
                <h1>Album list</h1>               
                <button className="add-album" >
                    <Link to ={props.path} style={{ textDecoration: 'none' }}>{props.page}</Link>
                    </button>
            </div>
        </div>
    )
}

export default Navbar; 