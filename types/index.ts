import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Order = {
    drink?: string,
    complement?: string,
    type?: 'Fuerte'|'Suave'|'Normal',
    sugar_type?: string,
    sugar_qty?:number,
    size?: 'Normal'|'Grande'|'ICE'
}

export type OrderRow = {
    key: number,
    sugar?: string,
} & Order;