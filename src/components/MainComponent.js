import { Breadcrumb, Button } from "react-bootstrap";
import './headerstyle.css';
import { GrGroup } from "react-icons/gr";

const Maincomponent = () => {
    return ( <div>
        <div className="container mt-5 border-bottom shadow ">
            <div className="row">
        <Breadcrumb >
  <Breadcrumb.Item  className="me-4 border-bottom border-dark border-3" active >All Posts(32)</Breadcrumb.Item>
  <Breadcrumb.Item  className="me-4" active>Article</Breadcrumb.Item>
  <Breadcrumb.Item active className="me-4">Event</Breadcrumb.Item>
  <Breadcrumb.Item active className="me-4">Education</Breadcrumb.Item>
  <Breadcrumb.Item active className="me-4">Job</Breadcrumb.Item>
  <Button variant="light" className=" btn btn-light sidething shadow">Write a Post</Button>
  <Button variant="primary" className=" btn btn-primary ms-2 shadow"><GrGroup className="text-white"/> Join Group</Button>
</Breadcrumb>
</div>
        </div>
    </div> );
}
 
export default Maincomponent;