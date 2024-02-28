'use client'
import { title } from "@/components/primitives";
import OrdersTable from "@/components/OrdersTable";

const BaristaPage = () => {

	return (
		<div>
			<h1 className={title()}>Barista</h1>
            <OrdersTable/>
		</div>
	);
}

export default BaristaPage;