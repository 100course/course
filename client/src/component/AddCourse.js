import React, {Fragment, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {addCourse} from "../actions/addcourse";

const AddCourse = ({id, addCourse}) => {
    const [formData, setFormData] = useState({
        name:'',
        tag: '',
        length: 0,
        volume: 0,
        picture: '',
        text: '',
    });
    const {name, tag, length, volume, picture, text} = formData;
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const onSubmit = e => {
        e.preventDefault();
        addCourse({name, tag, length, volume, picture, text});
    };

    return(
        <Fragment>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <input type="text" placeholder="name" name="name" value={name} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <input type="text" placeholder="tag" name="tag" value={tag} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <input type="number" placeholder="length" name="length" value={length} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <input type="number" placeholder="volume" name="volume" value={volume} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <input type="url" placeholder="picture" name="picture" value={picture} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <input type="text" placeholder="text" name="text" value={text} onChange={e => onChange(e)}/>
                </div>
                    <input type="submit" className="btn btn-primary" value="Register"/>
            </form>

            <div>
                course id : {id}
            </div>
        </Fragment>
    );
};

AddCourse.propTypes = {
    id: PropTypes.string.isRequired,
    addCourse: PropTypes.func.isRequired
};

const mapStateToProps = state=> ({
    id: state.addcourse.id
});
export default connect(mapStateToProps,{addCourse})(AddCourse);