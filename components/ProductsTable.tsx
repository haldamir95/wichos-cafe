'use client'
import { FC } from "react";
import { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { OrderRow } from "@/types";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
import { Order } from "@/types";

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
    const rows: Array<OrderRow> = [
        {
            key: "1",
            drink: 'Cafe',
            complement: 'Negro',
            type: 'Fuerte',
            sugar: 'Esplenda',
            size: "Normal"
        },
        {
            key: "2",
            drink: 'Te',
            complement: 'Cremora',
            type: 'Suave',
            sugar: 'Morena',
            size: "Grande"
        },
        {
            key: "3",
            drink: 'Moka',
            complement: 'Vainilla',
            type: 'Normal',
            sugar: 'Agregar 1/2',
            size: "ICE"
        },
        {
            key: "4",
            drink: 'Chocolate',
            complement: 'Expresso',
            sugar: '1',
        },
        {
            key: "5",
            drink: 'Frape',
            complement: 'Leche Entera',
            sugar: '2',
        },
        {
            key: "6",
            drink: 'Infusion',
            complement: 'Leche Deslactosada',
            sugar: '3',
        },
        {
            key: "7",
            drink: 'Americano',
            complement: 'Leche Descremada',
            sugar: '4',
        },
        {
            key: "8",
            drink: 'Capuccino',
            complement: 'Leche Soya',
            sugar: 'No Azucar',
        },
        {
            key: "9",
            drink: 'Gaseosa',
            complement: 'Blanco',
        },
        {
            key: "10",
            drink: 'Chai',
            complement: 'Cookies',
        },
        {
            key: "11",
            drink: 'Latte',
        },
        {
            key: "12",
            drink: 'Matcha',
        },
    ];
    const chaiOptions: Array<string> = ['Flamingo', 'Elefante', 'Tortuga', 'Tiburon', 'Rhino', 'Tigre', 'Orca', 'Tucan']
    const infusionOptions: Array<string> = ['BoraBora', 'La Nube', 'Menta Verde', 'Vainilla Cereza', 'Amaretto Manzana', 'Organico', 'Lemon Ginger', 'Marroco']
    const addDrink = (newDrink: string) => (event: any) => {
        if (newDrink === 'Chai') {
            updateOrder({
                drink: newDrink,
                infusion: ''
            })
            setModalType('chai')
            onOpen();
        } else if (newDrink === 'Infusion') {
            updateOrder({
                drink: newDrink,
                chai: ''
            })
            setModalType('infusion')
            onOpen();
        }else{
            updateOrder({
                drink: newDrink,
                infusion: '',
                chai: ''
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
        if (newSugar === "Esplenda" || newSugar === "Morena") {
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
            chai: newChai,
        })
        onClose();
    }
    const addInfusion = (newInfusion: string, onClose: any) => (event: any) => {
        updateOrder({
            infusion: newInfusion,
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

