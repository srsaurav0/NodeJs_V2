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
const index_1 = require("../src/index");
const supertest_1 = __importDefault(require("supertest"));
describe('Basic Server Connection Test', () => {
    it('should get a response from the base URL', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Server is running!');
    }));
    afterAll(done => {
        if (index_1.server) {
            index_1.server.close(done); // Make sure to pass done to ensure Jest waits for the server to close.
        }
        else {
            done();
        }
    });
});
//# sourceMappingURL=server.test.js.map