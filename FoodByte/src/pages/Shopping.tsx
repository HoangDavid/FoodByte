import ShoppingTable from "../components/shoppingTable";
import { useState } from 'react';
import { PlaceType } from "../types/place";
import StoreCard from "../components/StoreCard";
import { Col, Row, Space, Input} from 'antd';
const { Search } = Input;

export const Shopping = () => {
    const [zipCode, setZipCode] = useState('');
    const [radius, setRadius] = useState(2000); // Default
    const [groceryStores, setGroceryStores] = useState<PlaceType[]>([]);
    const [error, setError] = useState('');
   

    const API_KEY='AIzaSyAuaB6MbT4oDOC4Qc6SqnFdQ_lYUK4E_zw';
    const handleSearch = async () => {
        if (!zipCode.trim()) {
            setError('Please enter a valid zip code.');
            return;
        }
        setError('');
        try {
            const response = await fetch(`http://localhost:4000/api/grocery-stores?zipCode=${zipCode}&radius=${radius}`);
            const stores = await response.json();
            // Transform data to PlaceType format
            const transformedStores: PlaceType[] = stores.map((store: any) => ({
                name: store.name,
                photos: store.photos && store.photos.length > 0 ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${store.photos[0].photo_reference}&key=${API_KEY}` : '',
                opening_hours: store.opening_hours && store.opening_hours.open_now, // Assuming the opening_hours object contains the open_now property
                vicinity: store.vicinity,
            }));
           
            setGroceryStores(transformedStores.slice(0, 8));
            console.log(transformedStores);
        } catch (err) {
            console.error('Error fetching grocery stores:', err);
            setError('An error occurred while fetching grocery stores.');
            } finally {
            
        }
    };
      

    return (
        <div className="container" style={{ minHeight: '100vh'}}>
        <Space direction="vertical" size="large">
            <h1 style={{ fontSize: '40px', color: "#1b4c47"}}>Find Grocery Stores Near You!</h1>
            <Search
                placeholder="Enter Zip Code"
                size="large"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                onSearch={handleSearch}
            />
        </Space>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div style={{ marginTop: '40px' }}>
            <Row gutter={[100, 16]}>
                {groceryStores.map((store, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={6}>
                        <StoreCard store={store} />
                    </Col>
                ))}
            </Row>
        </div>
        <div>
            <h1 style={{ fontSize: '40px', color: "#1b4c47" }}>Your Shopping List</h1>
            <ShoppingTable/>
        </div>
        
    </div>

       
    );
};
export default Shopping;