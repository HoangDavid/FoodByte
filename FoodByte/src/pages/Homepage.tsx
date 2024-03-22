import { useNavigate } from "react-router-dom";

export const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div style={{fontSize: '30px'}}>
            Welcome to FoodByte!
            <div>
                <button onClick={() => navigate('/fridge')}>Fridge</button>
                <button onClick={() => navigate('/recipe')}>Recipe</button>
                <button onClick={() => navigate('/shopping')}>Shopping</button>
            </div>
        </div>
    );
};
export default Homepage;