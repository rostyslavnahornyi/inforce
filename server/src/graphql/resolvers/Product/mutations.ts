import { ProductModel } from "../../../db/models";
import { IResolverMap } from "../../../utils/interfaces/IResolverMap";

export default <IResolverMap>{
    addProduct: async (parent, args, ctx, info) => {
        const { input: data } = args;

        const createdProduct = await ProductModel.create(data);

        return createdProduct;
    },
    upsertProduct: async (parent, args, ctx, info) => {
        const { id, input: data } = args;

        const editedProduct = await ProductModel.findByIdAndUpdate(id, data);

        return editedProduct;
    },
    deleteProduct: async (parent, args, ctx, info) => {
        const { id } = args;

        const deletedProduct = await ProductModel.findByIdAndDelete(id);

        return deletedProduct;
    },
};
