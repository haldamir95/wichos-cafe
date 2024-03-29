'use client'
import { useEffect, useState } from "react";
import { Order, OrderRow } from "@/types";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { Button } from "@nextui-org/button";
import pubnub from "@/utils/pubnub";



const OrdersTable = () => {
    const [ordersList, setOrdersList] = useState<OrderRow[]>([])
    const columns: Array<{ key: string, label: string }> = [
        {
            key: "size",
            label: "TAMANO",
        },
        {
            key: "drink",
            label: "BEBIDA",
        },
        {
            key: "complement",
            label: "COMPLEMENTO",
        },
        {
            key: "chai_infution",
            label: "BEBIDA ESPECIAL",
        },
        {
            key: "type",
            label: "TIPO",
        },
        {
            key: "sugar",
            label: "AZUCAR",
        },
        {
            key: "action",
            label: "ACCION",
        },
    ];
    let rows: Array<OrderRow> = []


    useEffect(() => {
        pubnub.subscribe({ channels: ['whichoosChannel'] });
        pubnub.addListener({
            message: (event: any) => {
                const newOrder: Order = JSON.parse(event.message.content);
                if (!orderExist(newOrder.id!)) {
                    const orderRow: OrderRow = {
                        id: newOrder.id,
                        key: newOrder.id!,
                        size: newOrder.size,
                        drink: newOrder.drink,
                        complement: newOrder.complement,
                        type: newOrder.type,
                        sugar_type: newOrder.sugar_type,
                        sugar_qty: newOrder.sugar_qty,
                        chaiType: newOrder.chaiType,
                        infusionType: newOrder.infusionType,
                        frappeType: newOrder.frappeType,
                        shakeType: newOrder.shakeType
                    }
                    rows.push(orderRow)
                    setOrdersList([...ordersList, orderRow]);
                }
            }
        });
        return () => {
            pubnub.unsubscribeAll();
        }

    }, [ordersList])

    const orderExist = (id: string): boolean => {
        return rows.some((order: OrderRow) => order.id === id)
    }

    const removeFromList = (id: string) => () => {
        const filteredList = ordersList.filter( order => order.key !== id)
        rows = filteredList
        setOrdersList(filteredList)
    }




    return (
        <>
            <Table isStriped aria-label="Table to see the orders">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody>
                    {ordersList.map((item) =>
                        <TableRow key={item.key}>
                        <TableCell className="text-large">{item.size}</TableCell>
                        <TableCell className="text-large">{item.drink}</TableCell>
                        <TableCell className="text-large">{item.complement}</TableCell>
                        <TableCell className="text-large">{(item.chaiType || item.infusionType || item.frappeType || item.shakeType) && `${item.chaiType}${item.infusionType}${item.frappeType}${item.shakeType}`}</TableCell>
                        <TableCell className="text-large">{item.type}</TableCell>
                        <TableCell className="text-large">{(item.sugar_type || item.sugar_qty) && `${item.sugar_type} ${item.sugar_qty}`}</TableCell>
                        <TableCell><Button color="success" onPress={removeFromList(item.key)}>Entregar</Button></TableCell>
                    </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    )
}


export default OrdersTable