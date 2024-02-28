'use client'
import { FC } from "react";
import { Order } from "@/types";
import { useSelector } from "react-redux";
import { getOrdersList } from "@/store/slices/ordersList/selectors";


const OrdersTable = () => {
    const ordersList = useSelector(getOrdersList);
    console.log(ordersList)
    return (
        <div>OrdersTable</div>
    )
}


export default OrdersTable