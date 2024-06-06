import PropTypes from 'prop-types';

function UserGreeting(props){

    const MessageWelcome=<h2 className="welcome">Welcome {props.username}</h2>
    const Messageprompt=<h2 className="prompt"> You must be logged </h2>




    return(props.isLoggedIn ? MessageWelcome:Messageprompt ); 
}

UserGreeting.prototypes={
    isLoggedIn: PropTypes.bool,
    username:PropTypes.string,
}

UserGreeting.defaultProps={
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting