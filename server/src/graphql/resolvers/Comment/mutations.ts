import { Schema } from "mongoose";
import { CommentModel, ProductModel } from "../../../db/models";
import { IResolverMap } from "../../../utils/interfaces/IResolverMap";

export default <IResolverMap>{
    addComment: async (parent, args, ctx, info) => {
        const {
            productId,
            input: { description },
        } = args;

        const createdComment = await CommentModel.create({
            description,
        });

        const productRef = await ProductModel.findByIdAndUpdate(productId, {
            $push: { comments: createdComment },
        });

        return createdComment;
    },
    deleteComment: async (parent, args, ctx, info) => {
        const { id } = args;

        const deletedComment = await CommentModel.findByIdAndDelete(id);
        const product = await ProductModel.findOneAndUpdate(
            { comments: id },
            { $pull: { comments: { $in: [id] } } }
        );

        return deletedComment;
    },
};
