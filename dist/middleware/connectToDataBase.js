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
// connectToDatabase.ts
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME || 'test';
// Función para conectar a la base de datos
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield mongoose_1.default.connect(MONGO_URL, { dbName: DB_NAME });
        console.log('Database is connected to', db.connection.name);
    }
    catch (err) {
        console.error('Error connecting to the database:', err.stack);
    }
});
// Manejo de desconexión al recibir la señal de cierre (SIGINT)
process.on('SIGINT', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connection.close();
        console.log('Disconnected from the database.');
        process.exit(0);
    }
    catch (err) {
        console.error(err.stack);
        process.exit(1);
    }
}));
exports.default = connectToDatabase;
//# sourceMappingURL=connectToDataBase.js.map