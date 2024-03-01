import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Order = {
    id?:string,
    drink?: string,
    complement?: string,
    type?: string,
    sugar_type?: string,
    sugar_qty?:string,
    size?: string,

    chai?:string,
    infusion?:string,
}

export type OrderRow = {
    key: number,
    sugar?: string,
} & Order;