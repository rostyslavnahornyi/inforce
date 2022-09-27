import { ProductModel } from "../../../db/models";
import { IResolverMap } from "../../../utils/interfaces/IResolverMap";

export default <IResolverMap>{
    products: async (parent, args, ctx, info) => {
        const { query } = args;

        return ProductModel.find({}, null, JSON.parse(query));
    },
    product: async (parent, args, ctx, info) => {
        const {id} = args;

        return ProductModel.findById(id);
    },
    countProducts: async (parent, args, ctx, info) => {
        return ProductModel.count();
    },
};