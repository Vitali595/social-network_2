import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png"
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../../common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
}

export const Users: React.FC<UsersPropsType> = (
    {
        totalUsersCount, pageSize, currentPage, onPageChanged,
        users, follow, unfollow, followingInProgress, ...props
    }
) => {

    return <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                   currentPage={currentPage} onPageChanged={onPageChanged}/>
        <div>
            {users.map(u => <User user={u} follow={follow} unfollow={unfollow}
                                  followingInProgress={followingInProgress} key={u.id}/>)}
        </div>
    </div>
}