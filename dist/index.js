"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const hotelRoutes_1 = __importDefault(require("./routes/hotelRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use('/api', hotelRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Server is running!');
});
// Log the environment to verify
console.log(`Running in environment: ${process.env.NODE_ENV}`);
let server;
// Ensure the server does not start listening when in test environment
if (process.env.NODE_ENV !== 'test') {
    const port = 3000;
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}
//# sourceMappingURL=index.js.map