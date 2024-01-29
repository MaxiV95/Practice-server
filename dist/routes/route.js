"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// route.ts
const express_1 = require("express");
const user_dto_1 = require("../utils/user.dto");
const user_schema_1 = __importDefault(require("../utils/user.schema"));
const router = (0, express_1.Router)();
// Ruta de bienvenida
router.get('/', (_req, res, next) => {
    try {
        res.send('¡Hola, mundo!').end();
    }
    catch (err) {
        next(err);
    }
});
// Ruta para obtener opciones de ocupación
router.get('/user/occupation', (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const occupationOptions = Object.values(user_dto_1.Occupation);
        res.status(200).json(occupationOptions).end();
    }
    catch (err) {
        next(err);
    }
}));
// Ruta para crear un nuevo usuario
router.post('/user', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const newData = {
            email: body.email,
            nickName: body.nickName,
            occupation: body.occupation,
        };
        const newUser = yield user_schema_1.default.create(newData);
        res.status(201).json(newUser).end();
    }
    catch (err) {
        next(err);
    }
}));
// Ruta para obtener todos los usuarios
router.get('/user', (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_schema_1.default.find();
        res.status(200).json(users).end();
    }
    catch (err) {
        next(err);
    }
}));
// Ruta para obtener un usuario por ID
router.get('/user/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_schema_1.default.findById(id);
        res.status(200).json(user).end();
    }
    catch (err) {
        next(err);
    }
}));
// Ruta para actualizar un usuario por ID
router.put('/user/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        const updateData = {
            email: body.email,
            nickName: body.nickName,
            occupation: body.occupation,
        };
        const updatedUser = yield user_schema_1.default.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        });
        res.status(200).json(updatedUser).end();
    }
    catch (err) {
        next(err);
    }
}));
// Ruta para eliminar un usuario por ID
router.delete('/user/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield user_schema_1.default.deleteOne({ _id: id });
        res.status(200).json(data).end();
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
//# sourceMappingURL=route.js.map