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

    chaiType?:string,
    infusionType?:string,
    frappeType?:string,
    shakeType?:string
}

export type OrderRow = {
    key: string,
    sugar?: string,
} & Order;