'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { OrderRow } from "@/types";
import { Button } from "@nextui-org/button";

export const ProductsTable = () => {
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
            key: 1,
            drink: 'Cafe',
            complement: 'Negro',
            type: 'Fuerte',
            sugar: 'Esplenda',
            size: "Normal"
        },
        {
            key: 2,
            drink: 'Te',
            complement: 'Cremora',
            type: 'Suave',
            sugar: 'Morena',
            size: "Grande"
        },    
        {
            key: 3,
            drink: 'Moka',
            complement: 'Vainilla',
            type: 'Normal',
            sugar: 'Agregar 1/2',
            size: "ICE"
        },
        {
            key: 4,
            drink: 'Chocolate',
            complement: 'Expresso',
            sugar: '1',
        },
        {
            key: 5,
            drink: 'Frape',
            complement: 'Leche Entera',
            sugar: '2',
        },
        {
            key: 6,
            drink: 'Infusion',
            complement: 'Leche Deslactosada',
            sugar: '3',
        },
        {
            key: 7,
            drink: 'Americano',
            complement: 'Leche Descremada',
            sugar: '4',
        },
        {
            key: 8,
            drink: 'Capuccino',
            complement: 'Leche Soya',
            sugar: 'No Azucar',
        },
        {
            key: 9,
            drink: 'Gaseosa',
            complement: 'Blanco',
        },
        {
            key: 10,
            drink: 'Chai',
            complement: 'Cookies',
        },
        {
            key: 11,
            drink: 'Latte',
        },
        {
            key: 12,
            drink: 'Matcha',
        },
    ];
    return (
        <Table width={'100px'}>
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
                {(item) => (
                    <TableRow key={item.key}>
                        <TableCell>{item.drink && <Button color="primary">{item.drink}</Button>}</TableCell>
                        <TableCell>{item.complement && <Button color="secondary">{item.complement}</Button>}</TableCell>
                        <TableCell>{item.type && <Button color="success">{item.type}</Button>}</TableCell>
                        <TableCell>{item.sugar && <Button color="warning">{item.sugar}</Button>}</TableCell>
                        <TableCell>{item.size && <Button color="danger">{item.size}</Button>}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

