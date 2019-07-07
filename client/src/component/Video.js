import React, {useState, useEffect} from 'react';
import axios from "axios";

const Video = () => {
    const [Video, SetVideo] = useState({
        id: [],
        url: []
    })
/*    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body =
            {
                course: ''
            }
        axios.post("url", body, config)
            .then(response => {


                SetVideo({
                    id: response.data.id,
                    url: response.data.url
                })

            })
    }, []);*/

    return (
        <div>
            {

                Video.id.map(()=>
                {
                    <img src={Video.url}/>
                })
            }
        </div>
    )
}
export default Video;