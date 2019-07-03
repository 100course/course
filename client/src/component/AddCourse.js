import React, {Fragment, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

const AddCourse = () => {
    const [formData, setFormData] = useState({
        name:'',
        tags:[],
        tag: '',
        length: 0,
        volume: 0,
        picture: '',
        text: '',
        video: '',
        videos : [],
    });
    const {name, tag, length, volume, picture, text, video} = formData;
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    return(
        <Fragment>
            <form >
                <div>
                    <input type="text" placeholder="name" name="name" value={name} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <input type="text" placeholder="tag" name="tag" value={tag} onChange={e => onChange(e)}/>
                    <button type='button' > add tag</button>
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
                    <input type="text" placeholder="text" name="text" value={text} onChange={e => onChange(e)}/>
                </div>

            </form>
        </Fragment>
    )
};

export default AddCourse;