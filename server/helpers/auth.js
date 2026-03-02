import jwt from "jsonwebtoken";
import User from "../../models/userModel.js";
import ErrorHandler from "../../utils/errorHandler.js";
import asyncErrorHandler from "../helpers/asyncErrorHandler.js";


export const isAuthenticatedUser = asyncErrorHandler(async (req, res, next) => {
    // //  DEV-ONLY AUTH BYPASS
    // if (
    //     process.env.NODE_ENV === "development" &&
    //     process.env.SKIP_AUTH === "true"
    // ) {
    //     req.user = {
    //         _id: "64f000000000000000000001",
    //         name: "Dev User",
    //         role: "admin",
    //     };
    //     return next();
    // }

    // NORMAL AUTH FLOW (PRODUCTION)
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("Please Login to Access", 401))
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();
});