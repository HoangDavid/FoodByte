import { useNavigate } from "react-router-dom";

export const Homepage = () => {
    const navigate = useNavigate()

    return (
        <div style={{fontSize: '30px', color: '#1b4c47'}}>
            Welcome to FoodByte!
            <div>
                <button onClick={() => navigate('/signup')}>Sign Up</button>
                <button onClick={() => navigate('/login')}>Log In</button>
            </div>
        </div>
    );
};
export default Homepage;