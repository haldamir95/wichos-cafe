'use client'
import { FC } from "react";
import { Order } from "@/types";


interface OrdersTableProps {
    orderList: Array<Order>;
    updateOrderList: (orderId:string) => void;
}


const OrdersTable = () => {
  return (
    <div>OrdersTable</div>
  )
}


export default OrdersTable