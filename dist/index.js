"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const route_1 = __importDefault(require("./routes/route"));
const notFound_1 = __importDefault(require("./middleware/notFound"));
const handleErrors_1 = __importDefault(require("./middleware/handleErrors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectToDataBase_1 = __importDefault(require("./middleware/connectToDataBase"));
(0, connectToDataBase_1.default)();
const app = (0, express_1.default)();
app.set('appName', 'API');
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
app.use(express_1.default.json({ limit: '50mb' }));
app.use((0, morgan_1.default)('dev'));
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use('/', route_1.default);
app.use(notFound_1.default);
app.use(handleErrors_1.default);
const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map