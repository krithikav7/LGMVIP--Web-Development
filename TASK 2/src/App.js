import React from "react";
import "./styles.css";
import Users from "./FetchAPI";

function App() {
    const [isDataLoaded, setIsDataLoaded] = React.useState(false);
    const [userData, setUserData] = React.useState([]);
    const [isButtonClick, setisButtonClick] = React.useState(false);
    const handleClick = () => {
        setisButtonClick(true);
        // Fetch data
        fetch("https://reqres.in/api/users?page=1")
            .then((response) => response.json())
            .then((res) => {
                setUserData(res.data);
                setInterval(() => {
                    setIsDataLoaded(true);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return ( <
        >
        <
        nav className = "nav" >
        <
        div className = "navbar__logo" > LGMVIP < /div> <
        div className = "Get__users__button" >
        <
        button className = "button"
        onClick = { handleClick } >
        Get Users <
        /button> < /
        div > <
        /nav>

        <
        div className = "homepage__desc" > {
            isButtonClick ? (
                isDataLoaded ? ( <
                    Users userData = { userData }
                    />
                ) : ( <
                    div className = "loader__img" >
                    <
                    img src = "https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
                    alt = "loader"
                    class = "loader" /
                    >
                    <
                    /div>
                )
            ) : ( <
                div className = "get__users__desc" >
                --Click on "Get Users"
                button to display users from LGMVIP--
                <
                /div>
            )
        } <
        /div> < /
        >
    );
}

export default App;