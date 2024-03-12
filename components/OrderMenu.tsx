'use client'
import { FC } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider"
import { Button } from "@nextui-org/button"
import { Order } from "@/types";
import pubnub from "../utils/pubnub"
import {v4} from "uuid"

interface OrderMenuProps {
    newOrder: Order;
    updateOrder: (updatedOrder: Order) => void;
}

export const OrderMenu: FC<OrderMenuProps> = ({ newOrder, updateOrder }) => {
    const { drink, complement, type, sugar_qty, sugar_type, size, chaiType, infusionType, frappeType, shakeType } = newOrder

    const deleteOrder = () => {
        updateOrder({
            drink: '',
            complement: '',
            type: '',
            sugar_qty: '',
            sugar_type: '',
            size: '',
            chaiType: '',
            infusionType:'',
            frappeType:'',
            shakeType:''
        })
    }
    const setNewOrder = (newOrder: Order) => (event: any) => {
        newOrder.id = v4();
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
                        {` ${drink ? drink : ''} ${chaiType ? chaiType : ''} ${infusionType ? infusionType : ''} ${frappeType ? frappeType : ''} ${shakeType ? shakeType : ''} ${complement ? complement : ''} ${type ? type : ''}`}
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
