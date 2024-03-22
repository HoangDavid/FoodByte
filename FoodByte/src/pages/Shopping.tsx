import { useNavigate } from "react-router-dom";

export const Shopping = () => {
    const navigate = useNavigate();

    return (
        <div style={{fontSize: '30px'}}>
            Welcome to your shopping list!
            <div>
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        </div>
    );
};
export default Shopping;