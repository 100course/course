import React, {Fragment, useState, useEffect} from 'react';
import {autoComplete} from "../actions/autocomplete";
import propTypes from 'prop-types';
import {LoadModifyMiniCourse, modifyMiniCourse} from "../actions/ModifyMiniCourse";
import {connect} from "react-redux";
import alert from "./alert";


const ModifyMiniCourse = ({suggestions, autoComplete,LoadModifyMiniCourse, loadedMiniCourse, modifyMiniCourse}) => {
    const [formData, setFormData] = useState({
        MiniCourseName : '',
        link: '',
        subtitle: '',
        text : '',
        tags: '',
        picture:'',
    });
    const {MiniCourseName,link,subtitle,tags,text,picture} = formData;
    const onSubmit = e => {
        e.preventDefault();
        modifyMiniCourse({miniCourse: formData});

    };
    const onChangeMiniCourseName = e => {
        setFormData({[e.target.name]: e.target.value});
        autoComplete({name: e.target.value, type: "MiniCourse"});
    };

    useEffect(() => {
        if(suggestions.length === 1){
            LoadModifyMiniCourse({name:suggestions[0]});
        }
    },[suggestions]);
    useEffect(() => {
        if(loadedMiniCourse !== '')
        {
            let _tags = loadedMiniCourse.tags.join(', ');
            setFormData({
                ...formData,
                link: loadedMiniCourse.link,
                text: loadedMiniCourse.text,
                picture: loadedMiniCourse.picture,
                tags: _tags,
                subtitle: loadedMiniCourse.subtitle

            })
        }
    },[loadedMiniCourse]);


    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return(
        <Fragment>
            <alert/>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <p>miniCourse Name</p>
                <input type="text" placeholder="minicoursename" name="MiniCourseName" list="colors" value={MiniCourseName} onChange={e => onChangeMiniCourseName(e)}/>
                <datalist id="colors">
                    <option>{suggestions[0]}</option>
                    <option>{suggestions[1]}</option>
                    <option>{suggestions[2]}</option>

                </datalist>
                </div>
                    <div>
                        <p>miniCourse Link</p>
                        <input type="url" placeholder="link" name="link" value={link} onChange={e => onChange(e)}/>
                    </div>
                    <div>
                        <p>miniCourse subtitle</p>
                        <input type="url" placeholder="subtitle" name="subtitle" value={subtitle}
                               onChange={e => onChange(e)}/>
                    </div>
                    <div>
                        <p>miniCourse tags</p>
                        <input type="text" placeholder="tags" name="tags" value={tags} onChange={e => onChange(e)}/>
                    </div>
                    <div>
                        <p>MiniCourse Text </p>
                        <input type="text" placeholder="text" name="text" value={text} onChange={e => onChange(e)}/>
                    </div>
                    <div>
                        <p>MiniCourse picture</p>
                        <input type="text" placeholder="picture" name="picture" value={picture}
                               onChange={e => onChange(e)}/>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Upload"/>
            </form>
        </Fragment>
    );
};

ModifyMiniCourse.propTypes = {
    suggestions: propTypes.array.isRequired,
    autoComplete: propTypes.func.isRequired,
    LoadModifyMiniCourse: propTypes.func.isRequired
};

const mapStateToProps = state => ({
    suggestions: state.autocomplete.suggestions,
    loadedMiniCourse: state.modifyMiniCourse.miniCourse
});

export default connect(mapStateToProps,{autoComplete,LoadModifyMiniCourse, modifyMiniCourse})(ModifyMiniCourse);
