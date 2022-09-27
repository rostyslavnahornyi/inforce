import { Schema, model } from "mongoose";
import { CommentModel } from ".";

interface IProduct {
	imageUrl: string,
	name: string,
	count: number,
	size: {
		width: number,
		height: number,
	},
	weight: string,
	comments: [{
		type: Schema.Types.ObjectId,
		ref: string,
	}]
}

const productScheme = new Schema<IProduct>({
	imageUrl: {type: String},
	name: {type: String, required: true},
	count: {type: Number},
	size: {
		width: {type: Number,},
		height: {type: Number},
	},
	weight: {type: String},
	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}]
})

productScheme.pre('findOneAndDelete', async function() {
	const product = await this.model.findById(this.getFilter());
	await CommentModel.deleteMany({_id: product.comments})
})

export default model<IProduct>("Product", productScheme);