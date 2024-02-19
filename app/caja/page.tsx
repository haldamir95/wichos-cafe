'use client'
import { useState } from "react";
import { OrderMenu } from "@/components/OrderMenu";
import { ProductsTable } from "@/components/ProductsTable";
import { Order } from "@/types";


const CajaPage = () => {
    const [newOrder, setNewOrder] = useState({});
    const updateOrder = (updatedOrder:Order) => {
        setNewOrder({ ...newOrder, ...updatedOrder });
    };

	return (
		<>
			<OrderMenu newOrder={newOrder} updateOrder={updateOrder}/>
            <ProductsTable newOrder={newOrder} updateOrder={updateOrder}/>
		</>
	);
}


export default CajaPage