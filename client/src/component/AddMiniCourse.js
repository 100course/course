import React, {Fragment, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {addMiniCourse} from "../actions/addMiniCourse";
import alert from "./alert";
import {setAlert} from "../actions/alert";

const AddMiniCourse = ({addMiniCourse, id, setAlert}) => {
    const [formData, setFormData] = useState({
        name: '',
        link: '',
        subtitle: '',
        tags: [],
        text: '',
        picture: '',
    });
    const {name, link, subtitle, tags, text, picture} = formData;
    const onChange = (e) => {

        setFormData({...formData, [e.target.name]: e.target.value});
        //autoComplete({name: e.target.value, type: e.target.name});
    };
    const onSubmit = e => {
        e.preventDefault();
        let tag = tags.split(',');
        for(let i = 0; i < tag.length; i++){
            tag[i] = tag[i].trim();
        }
        let _tag = tag.filter(function (item) {
            return item !== "";
        });
        console.log(_tag);
        addMiniCourse({name, link, subtitle, tags:_tag, text, picture});
    };

    useEffect(() => {
        if(id !== ''){
            console.log("here is saving id: ", id);
            setAlert('saved successfully', 'success');
        }
    }, [id]);

    return (
        <Fragment>
            <alert/>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <input type="text" placeholder="name" name="name" value={name} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <input type="url" placeholder="link" name="link" value={link} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <input type="url" placeholder="subtitle" name="subtitle" value={subtitle}
                           onChange={e => onChange(e)}/>
                </div>
                <div>
                    <input type="text" placeholder="tags" name="tags" value={tags} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <input type="text" placeholder="text" name="text" value={text} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <input type="text" placeholder="picture" name="picture" value={picture}
                           onChange={e => onChange(e)}/>
                </div>
                <input type="submit" className="btn btn-primary" value="Upload"/>
            </form>


        </Fragment>
    );
};

AddMiniCourse.propTypes = {
    id: PropTypes.string.isRequired,
    addMiniCourse: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    id: state.addMiniCourse.id,
});
export default connect(mapStateToProps, {addMiniCourse, setAlert})(AddMiniCourse);
