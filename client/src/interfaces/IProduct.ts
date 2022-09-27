import { IComment } from "./IComment";

export interface IProduct {
    id: string;
    imageUrl: string;
    name: string;
    count?: number;
    size?: {
        width: number;
        height: number;
    };
    weight?: string;
    comments?: Array<IComment>;
}
