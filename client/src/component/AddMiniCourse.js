import React, {Fragment, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {addMiniCourse} from "../actions/addMiniCourse";

const AddMiniCourse = ({addMiniCourse}) => {
    const [formData, setFormData] = useState({
        name: '',
        link: '',
        subtitle: '',
        tags: [],
        picture: '',
    });
    const {name, link, subtitle, tags, picture} = formData;
    const onChange = (e) => {

        setFormData({...formData, [e.target.name]: e.target.value});
        //autoComplete({name: e.target.value, type: e.target.name});
    };
    const onSubmit = e => {
        e.preventDefault();
        addMiniCourse({name, link, subtitle, tags, picture});
    };

    return (
        <Fragment>
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
};

const mapStateToProps = state => ({
    id: state.addMiniCourse.id,
});
export default connect(mapStateToProps, {addMiniCourse})(AddMiniCourse);