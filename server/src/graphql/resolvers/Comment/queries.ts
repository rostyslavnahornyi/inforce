import { CommentModel } from "../../../db/models";
import { IResolverMap } from "../../../utils/interfaces/IResolverMap";

export default <IResolverMap>{
    countComments: async (parent, args, ctx, info) => {
        await CommentModel.count();
    },
};
