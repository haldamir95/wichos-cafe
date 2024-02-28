'use client'
import { title } from "@/components/primitives";
import OrdersTable from "@/components/OrdersTable";
import { useSelector } from "react-redux";
import { getOrdersList } from "@/store/slices/ordersList/selectors";

const BaristaPage = () => {
    const ordersList = useSelector(getOrdersList);

    console.log('shet',ordersList)
	return (
		<div>
			<h1 className={title()}>Barista</h1>
            <OrdersTable/>
		</div>
	);
}

export default BaristaPage;