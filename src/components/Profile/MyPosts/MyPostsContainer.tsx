import React from 'react';
import {addPostActionCreator, PostType} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";

type MapStateToPropsType = {
    posts: Array<PostType>
}

type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;