import { useNavigate } from "react-router-dom";

export const Fridge = () => {
    const navigate = useNavigate();

    return (
        <div style={{fontSize: '30px'}}>
            Welcome to your fridge!
            <div>
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        </div>
    );
};
export default Fridge;