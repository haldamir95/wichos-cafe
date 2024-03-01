'use client'
import { FC } from "react";
import { useDispatch } from "react-redux";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider"
import { Button } from "@nextui-org/button"
import { Order } from "@/types";
import pubnub from "../utils/pubnub"

interface OrderMenuProps {
    newOrder: Order;
    updateOrder: (updatedOrder: Order) => void;
}

export const OrderMenu: FC<OrderMenuProps> = ({ newOrder, updateOrder }) => {
    const dispatch = useDispatch();
    const { drink, complement, type, sugar_qty, sugar_type, size, chai, infusion } = newOrder

    const deleteOrder = () => {
        updateOrder({
            drink: '',
            complement: '',
            type: '',
            sugar_qty: '',
            sugar_type: '',
            size: '',
            chai: ''
        })
    }
    const setNewOrder = (newOrder: Order) => (event: any) => {
        pubnub.publish({
            channel: 'whichoosChannel',
            message: { content: JSON.stringify(newOrder) }
          });
        deleteOrder();
    }

    return (
        <Card className="max-w-[400px]">
            <CardHeader>
                <div className="items-center">
                    <></>
                    <strong>Menu de Caja</strong>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                Orden:
                {(drink || complement || type) &&
                    <p>
                        {` ${drink ? drink : ''} ${chai ? chai : ''} ${infusion ? infusion : ''}  ${complement ? complement : ''} ${type ? type : ''}`}
                    </p>
                }
                {(sugar_qty || sugar_type) &&
                    <p>
                        {` ${sugar_qty ? sugar_qty : ''} ${sugar_type ? sugar_type : ''}`}
                    </p>
                }
                {(size) &&
                    <p>
                        {` ${size ? size : ''}`}
                    </p>
                }
            </CardBody>
            <Divider />
            <CardFooter>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button color="success" onPress={setNewOrder(newOrder)}>
                        Ordenar
                    </Button>

                    {/* <Button color="warning">
                        &larr; Regresar
                    </Button> */}

                    <Button color="danger" onPress={deleteOrder}>
                        Eliminar
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
