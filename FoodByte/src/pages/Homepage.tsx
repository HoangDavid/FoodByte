import { useNavigate } from "react-router-dom";
import logo from '../../public/logo.png'


export const Homepage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <img 
                    src={logo}
                    alt="Logo"
                    style={{
                        width: '70%',
                        height: '50%',
                        paddingTop: '0px', 
                        paddingBottom: '0px'
                    }}

                     />
            
            </div>
            
                <h1 style={{ color: "#1b4c47" }}>Welcome to FoodByte!</h1>
                <div>
                    <button  className="custom-button-homepage" onClick={() => navigate('/signup')}> 
                        Sign Up
                    </button>
                    <button className="custom-button-homepage" onClick={() => navigate('/login')}>
                        Log In
                    </button>
                </div>
            </div>
        
    );
};
export default Homepage;