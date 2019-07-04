import React, {Fragment, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {addVideo} from "../actions/addvideo";

const AddVideo = ({id, addVideo}) => {
    const [formData, setFormData] = useState({
        name:'',
        link: '',
        subtitle: '',
        tags:[],
        length: 0,
        volume:0,
        picture:'',
        number:0,
        course:''
    });
    const {name, link, subtitle, tags, length, volume,picture,number,course} = formData;
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const onSubmit = e => {
        e.preventDefault();
        addVideo({name, link, subtitle, tags, length, volume,picture,number,course});


    };

    return(
        <Fragment>
        <form onSubmit={e => onSubmit(e)}>
<div>
    <input type="text" placeholder="name" name="name" value={name} onChange={e => onChange(e)}/>
    </div>
    <div>
    <input type="url" placeholder="link" name="link" value={link} onChange={e => onChange(e)}/>
    </div>
    <div>
    <input type="url" placeholder="subtitle" name="subtitle" value={subtitle} onChange={e => onChange(e)}/>
    </div>
    <div>
    <input type="text" placeholder="tags" name="tags" value={tags} onChange={e => onChange(e)}/>
    </div>
    <div>
    <input type="number" placeholder="length" name="length" value={length} onChange={e => onChange(e)}/>
    </div>
    <div>
    <input type="number" placeholder="volume" name="volume" value={volume} onChange={e => onChange(e)}/>
    </div>
    <div>
    <input type="text" placeholder="picture" name="picture" value={picture} onChange={e => onChange(e)}/>
    </div>
    <div>
    <input type="number" placeholder="number" name="number" value={number} onChange={e => onChange(e)}/>
    </div>
    <div>
    <input type="text" placeholder="course" name="course" value={course} onChange={e => onChange(e)}/>
    </div>
    <input type="submit"className="btn btn-primary" value="Upload"/>
        </form>

        <div>
</div>
    </Fragment>
);
};

AddVideo.propTypes = {
    id: PropTypes.string.isRequired,
    addVideo: PropTypes.func.isRequired
};

const mapStateToProps = state=> ({
    id: state.addvideo.id
});
export default connect(mapStateToProps,{addVideo})(AddVideo);