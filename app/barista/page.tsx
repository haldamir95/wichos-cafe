import { title } from "@/components/primitives";
import OrdersTable from "@/components/OrdersTable";

export default function BaristaPage() {
	return (
		<div>
			<h1 className={title()}>Barista</h1>
            <OrdersTable/>
		</div>
	);
}
