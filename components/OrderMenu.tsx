import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider"
import { Button } from "@nextui-org/button"
import { Order } from "@/types";

export const OrderMenu = () => {
    const newOrder:Order = {}

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
                {
                    
                }
            </CardBody>
            <Divider />
            <CardFooter>
                <div className="flex flex-wrap gap-4 items-center">
                    <Button color="success">
                        Ordenar
                    </Button>

                    <Button color="warning">
                        &larr; Regresar
                    </Button>

                    <Button color="danger">
                        Eliminar
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
