import React from "react";
import { Card, Typography } from "antd";
import { PlaceType } from "../types/place";

const { Title, Paragraph } = Typography;

interface StoreCardProps {
    store: PlaceType;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => (
    <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt={store.name} src={store.photos} style={{ height: 200, objectFit: 'cover' }}/>}
    >
        <Title level={4}>{store.name}</Title>
        <Paragraph>{store.vicinity}</Paragraph>
        {store.opening_hours && (
            <Paragraph>
                {store.opening_hours ? "Open Now" : "Closed"}
            </Paragraph>
        )}
    </Card>
);

export default StoreCard;
