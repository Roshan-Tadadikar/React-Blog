
import './post-style.css';
import { BiUserCircle} from "react-icons/bi";
import { AiOutlineEye} from "react-icons/ai";
import {AiOutlineShareAlt} from "react-icons/ai";

const Posts = (props) => {
    return ( <div>
        {/* <div className="card text-center">
            <div className="overflow">
                <img src={mountains} alt="image1" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondary"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi maxime dolores repudiandae ad expedita ducimus corporis totam quia! Nulla tenetur placeat sunt culpa. Quisquam consequuntur cupiditate unde ducimus numquam modi!</p>
            <p className="float-start">< BiUserCircle className="fs-3 ms-2 mb-1"/>Sarthak kamra </p><span className="float-end me-5">1.4k Views</span><AiOutlineEye className="float-end me-2 fs-3" /><AiOutlineShareAlt className="float-end me-4 fs-3"/>
            </div>
        </div> */}
<div className="container d-flex justify-content-center mob-sizing">
    <div className="row col-md-8 col-sm-12 col-xs-8 container-fluid">
<div class="card mb-3 shadow ">
  <img src={props.imgsrc} className="card-img-top " alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p className="card-text text-secondary"> {props.quote}</p>
            <p className="icon1"><p className="float-start">< BiUserCircle className="fs-3 ms-2 mb-1 "/>{props.name} </p><span className="float-end me-5">{props.views} Views</span><AiOutlineEye className="float-end me-2 fs-3" /><AiOutlineShareAlt className="float-end me-4 fs-3 icon2"/></p>
  </div>
  </div>
</div>
</div>
    </div> );
}
 
export default Posts;
