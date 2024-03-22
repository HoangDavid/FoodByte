import { useNavigate } from "react-router-dom";

export const Recipe = () => {
    const navigate = useNavigate();

    return (
        <div style={{fontSize: '30px'}}>
            Welcome to your recipe book!
            <div>
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        </div>
    );
};
export default Recipe;