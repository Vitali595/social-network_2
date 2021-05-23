import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {Redirect, withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(+userId)
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={"/login"}/>
        }

        return (
            <Profile profile={this.props.profile}/>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);