"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// user.schema.ts
const mongoose_1 = __importDefault(require("mongoose"));
const user_dto_1 = require("./user.dto");
const userSchema = new mongoose_1.default.Schema({
    nickName: {
        type: String,
        required: [true, "The 'nickname' field is required."],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "The 'email' field is required."],
        unique: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Invalid email format. Please enter a valid email address.',
        ],
    },
    occupation: {
        type: String,
        required: [true, "The 'occupation' field is required."],
        validate: {
            validator: (value) => Object.values(user_dto_1.Occupation).includes(value),
            message: `Must be [${Object.values(user_dto_1.Occupation)}]`,
        },
    },
});
userSchema.methods.toJSON = function () {
    const userObject = this.toObject();
    userObject.id = userObject._id;
    delete userObject._id;
    delete userObject.__v;
    return userObject;
};
exports.default = mongoose_1.default.model('User', userSchema);
//# sourceMappingURL=user.schema.js.map