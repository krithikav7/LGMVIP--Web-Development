import React from "react";
import "./styles.css";

function Users(props) {
    return ( <
        >
        <
        p className = "user__title" > Users < /p> {
            props.userData.map((user, index) => {
                return ( <
                    div className = "display__user__data" >
                    <
                    br / >
                    <
                    div className = "individual__user" >
                    <
                    img src = { user.avatar }
                    alt = ""
                    className = "user__image" / >
                    <
                    div className = "user__details" >
                    <
                    h3 > { user.first_name } { user.last_name } <
                    /h3> <
                    p class = "user__email" > { user.email } < /p> <
                    br / >
                    <
                    button className = "button user__button" > Details < /button> <
                    /div> <
                    /div> <
                    /div>
                );
            })
        } <
        />
    );
}

export default Users;