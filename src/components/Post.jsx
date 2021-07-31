import React, { Component } from 'react';
import Posts from './Posts';
import './post-style.css';



class Post extends Component {
    render() { 
        return ( <div className="container-fluid d-flex justify-content-center">
            <div className="row mt-5">
                <div>
                    <Posts title="Crescent City, California, United States" name="Steve Carter" views="1.4k" quote="The mountains, which appear to us so gigantic, are really, compared to the size of the earth, only small irregularities on the earth’s surface. They have been compared to the wrinkles on the rind of an orange. All mountains and hills are formed of hard rock, otherwise they would long ago have been leveled to flat plains." imgsrc="https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"/>
                </div>
                <div >
                <Posts title="Hurghada International Airport, Egypt" name="Sergey Pesterev"  views="1.6k" quote="The mountains have a great deal to do with keeping the air circulating, and renewing its purity. The snow-covered summits of high mountains make the air in contact with them very cold; and as cold air tends to sink." imgsrc="https://images.unsplash.com/photo-1489493512598-d08130f49bea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80"/>
                </div>
                <div>
                <Posts title="Lake Placid, United States" name="Alex Shutin" views="1.8k" quote="Big, bold, and beautiful, the Adirondack High Peaks have been a magnet for explorers for more than 150 years. The original list of High Peaks included the 46 Adirondack mountains that were higher than 4,000 feet in elevation. ... Most of the High Peaks are located in the Lake Placid/Keene-Keene Valley area." imgsrc="https://images.unsplash.com/photo-1486520299386-6d106b22014b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                </div>
            </div>
        </div> );
    }
}
 
export default Post;