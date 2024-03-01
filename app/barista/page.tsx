'use client'
import { title } from "@/components/primitives";
import OrdersTable from "@/components/OrdersTable";
import pubnub from "@/utils/pubnub";
import { useEffect, useState } from "react";
import { Order } from "@/types";

const BaristaPage = () => {
    const orderList:any=[];

    useEffect(() => {
        pubnub.subscribe({ channels: ['whichoosChannel'] });
        pubnub.addListener({
            message: (event:any) => {
                const newOrder:Order = JSON.parse(event.message.content);
                if(!orderExist(newOrder.id!)){
                    orderList.push(newOrder)
                }
                console.log(orderList)
            }
        });
        return () => {
            pubnub.unsubscribeAll();
        }
        
    }, [])
    
    const orderExist = (id:string):boolean => {
        return orderList.some((order:Order)=>order.id===id)
    }

	return (
		<div>
			<h1 className={title()}>Barista</h1>
            <OrdersTable/>
		</div>
	);
}

export default BaristaPage;