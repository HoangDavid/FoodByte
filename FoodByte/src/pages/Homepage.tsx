// import { useNavigate } from "react-router-dom";

export const Homepage = () => {

    return (
        <div style={{fontSize: '30px'}}>
            Welcome to FoodByte!
            <div>
                <button onClick={() => navigate('/signup')}>Sign Up</button>
                <button onClick={() => navigate('/login')}>Log In</button>
            </div>
        </div>
    );
};
export default Homepage;