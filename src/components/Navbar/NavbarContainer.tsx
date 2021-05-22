import React from 'react';
import {InitialStateType} from "../../redux/sidebar-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import Navbar from "./Navbar";

type MapStateToPropsType = {
    state: InitialStateType
}

export type NavbarPropsType = MapStateToPropsType

const mapStateToProps = (state :AppStateType): MapStateToPropsType => {
    return {
        state: state.sidebar
    }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)