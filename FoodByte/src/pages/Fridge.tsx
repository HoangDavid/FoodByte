import FridgeTable from "../components/fridgeTable";

export const Fridge = () => {

    return (
        <div className="container" style={{minHeight: '100vh'}}>
            <h1 style={{ fontSize: '40px', color: "#1b4c47"}}>Welcome To Your Fridge!</h1>
            <FridgeTable/>
        </div>
       
    );
};
export default Fridge;