//import profilePic from './assets/profile.jpg' already using image from placeholder 


function Card(){
    return (
        <div className="card">
            <img className="card-image" src="https://via.placeholder.com/ISO" alt="profile picture" />
            <h2 className="card-title">Bernard codes</h2>
            <p className="card-text">I am a software dev and i play chess</p>
        </div>
    );
}

export default Card