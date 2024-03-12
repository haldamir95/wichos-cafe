'use client'
import { FC } from "react";
import { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { OrderRow } from "@/types";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Order } from "@/types";
import { mapCollumsToRows } from "@/utils";

interface ProductsTableProps {
    newOrder: Order;
    updateOrder: (updatedOrder: Order) => void;
}

export const ProductsTable: FC<ProductsTableProps> = ({ newOrder, updateOrder }) => {
    const [modalType, setModalType] = useState('')
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const columns: Array<{ key: string, label: string }> = [
        {
            key: "drink",
            label: "BEBIDA",
        },
        {
            key: "complement",
            label: "COMPLEMENTO",
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
            key: "size",
            label: "TAMANO",
        }
    ];
    const drinks = ['Frappe', 'Cafe','Te','Licuado','Moka', 'Chocolate', 'Infusion', 'Americano', 'Capuccino','Gaseosa','Chai','Latte','Matcha']
    const complements = ['Negro','Cremora','Vainilla','Expresso','Leche Entera','Leche Deslactosada','Leche Descremada','Leche Soya','Blanco','Cookies']
    const types = ['Fuerte','Suave','Normal']
    const sugars = ['Blanca','Esplenda','Morena','Agregar 1/2','1','2','3','4','NO Azucar']
    const sizes =['Normal','Grande','ICE']
    
    const rows: Array<OrderRow> = mapCollumsToRows(drinks,complements,types,sugars,sizes)
    const chaiOptions: Array<string> = ['Flamingo', 'Elefante', 'Tortuga', 'Tiburon', 'Rhino', 'Tigre', 'Orca', 'Tucan']
    const infusionOptions: Array<string> = ['BoraBora', 'La Nube', 'Menta Verde', 'Vainilla Cereza', 'Amaretto Manzana', 'Organico', 'Lemon Ginger', 'Marroco']
    const frappeOptions:Array<string>=['Cappuccino','Moka','Oreo','Maximus con crema de mani','Fresa','Mora','Mango','Pina Colada','White Chocolate','Double Caramel','Cookies and cream','Cotton Candy','Taro','Buebble gum','Arroz con leche','Frozen Chai','White Chocolate Red Velvet','Chai Power vegano','Chai tea latte','Matcha']
    const shakeOptions:Array<string>=['Frutas','Papaya','Pina','Melon','Fresa con leche']

    const addDrink = (newDrink: string) => (event: any) => {
        if (newDrink === 'Chai') {
            updateOrder({
                drink: newDrink,
                infusionType: '',
                frappeType:'',
                shakeType:''
            })
            setModalType('chai')
            onOpen();
        } else if (newDrink === 'Infusion') {
            updateOrder({
                drink: newDrink,
                chaiType: '',
                frappeType:'',
                shakeType:''
            })
            setModalType('infusion')
            onOpen();
        } else if (newDrink === 'Frappe') {
            updateOrder({
                drink: newDrink,
                infusionType: '',
                chaiType: '',
                shakeType:''
            })
            setModalType('frappe')
            onOpen();
        } else if (newDrink === 'Licuado') {
            updateOrder({
                drink: newDrink,
                infusionType: '',
                chaiType: '',
                frappeType:'',
            })
            setModalType('shake')
            onOpen();
        }else{
            updateOrder({
                drink: newDrink,
                infusionType: '',
                chaiType: '',
                frappeType:'',
                shakeType:''
            })
        }
    }
    const addComplement = (newComplement: string) => (event: any) => {
        updateOrder({
            complement: newComplement
        })
    }
    const addType = (newType: string) => (event: any) => {
        updateOrder({
            type: newType
        })
    }
    const addSugar = (newSugar: string) => (event: any) => {
        if (newSugar === "Esplenda" || newSugar === "Morena" || newSugar === "Blanca") {
            updateOrder({
                sugar_type: newSugar
            })
        } else if (newSugar === "No Azucar") {
            updateOrder({
                sugar_qty: newSugar,
                sugar_type: ''
            })
        } else {
            updateOrder({
                sugar_qty: newSugar
            })
        }
    }
    const addSize = (newSize: string) => (event: any) => {
        updateOrder({
            size: newSize
        })
    }
    const addChai = (newChai: string, onClose: any) => (event: any) => {
        updateOrder({
            chaiType: newChai,
        })
        onClose();
    }
    const addInfusion = (newInfusion: string, onClose: any) => (event: any) => {
        updateOrder({
            infusionType: newInfusion,
        })
        onClose();
    }
    const addFrappe = (newFrappe: string, onClose: any) => (event: any) => {
        updateOrder({
            frappeType: newFrappe,
        })
        onClose();
    }
    const addShake = (newShake: string, onClose: any) => (event: any) => {
        updateOrder({
            shakeType: newShake,
        })
        onClose();
    }

    return (
        <>
            <Table aria-label="Table to create a new order">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={rows}>
                    {(item) => (
                        <TableRow key={item.key}>
                            <TableCell>{item.drink && <Button color="primary" onPress={addDrink(item.drink!)}>{item.drink}</Button>}</TableCell>
                            <TableCell>{item.complement && <Button color="secondary" onPress={addComplement(item.complement!)}>{item.complement}</Button>}</TableCell>
                            <TableCell>{item.type && <Button color="success" onPress={addType(item.type!)}>{item.type}</Button>}</TableCell>
                            <TableCell>{item.sugar && <Button color="warning" onPress={addSugar(item.sugar!)}>{item.sugar}</Button>}</TableCell>
                            <TableCell>{item.size && <Button color="danger" onPress={addSize(item.size!)}>{item.size}</Button>}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Chai</ModalHeader>
                            <ModalBody>
                                <div className="flex flex-wrap gap-4 items-center">
                                    {modalType === "chai" &&
                                        chaiOptions.map((option) => (
                                            <Button key={option} color="success" onPress={addChai(option, onClose)}>
                                                {option}
                                            </Button>
                                        ))
                                    }
                                    {modalType === "infusion" &&
                                        infusionOptions.map((option) => (
                                            <Button key={option} color="success" onPress={addInfusion(option, onClose)}>
                                                {option}
                                            </Button>
                                        ))
                                    }
                                    {modalType === "frappe" &&
                                        frappeOptions.map((option) => (
                                            <Button key={option} color="success" onPress={addFrappe(option, onClose)}>
                                                {option}
                                            </Button>
                                        ))
                                    }
                                    {modalType === "shake" &&
                                        shakeOptions.map((option) => (
                                            <Button key={option} color="success" onPress={addShake(option, onClose)}>
                                                {option}
                                            </Button>
                                        ))
                                    }
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>

    )
}

