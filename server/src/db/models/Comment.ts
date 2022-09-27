import {Schema, model} from 'mongoose';
import { ProductModel } from '.';

interface IComment{
	description: string,
	date: Date,
}

const commentScheme = new Schema<IComment>({
	description: {type: String, required: true},
	date: {type: Date, default: Date.now},
})

export default model<IComment>('Comment', commentScheme);
