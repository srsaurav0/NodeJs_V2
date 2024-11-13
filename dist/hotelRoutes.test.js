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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../src/index"); // Adjust the path as needed
describe('Hotel API Tests', () => {
    const newHotel = {
        title: "Test Hotel",
        description: "A test hotel description.",
        guestCount: 3,
        bedroomCount: 2,
        bathroomCount: 1,
        amenities: ["WiFi", "Pool"],
        hostInformation: {
            name: "John Doe",
            contact: "john@example.com"
        },
        address: "123 Test St, Test City",
        latitude: 45.0,
        longitude: -122.0
    };
    it('should create a new hotel (POST /api/hotel)', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.app)
            .post('/api/hotel')
            .send(newHotel)
            .expect(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe(newHotel.title);
    }));
    it('should retrieve a hotel by ID (GET /api/hotel/:id)', () => __awaiter(void 0, void 0, void 0, function* () {
        // Assuming you have logic to create or mock a hotel ID
        const hotelId = 'mockHotelId'; // Replace with actual or mocked ID
        const response = yield (0, supertest_1.default)(index_1.app)
            .get(`/api/hotel/${hotelId}`)
            .expect(200);
        expect(response.body).toHaveProperty('id', hotelId);
    }));
    it('should update an existing hotel (PUT /api/hotel/:id)', () => __awaiter(void 0, void 0, void 0, function* () {
        const hotelId = 'mockHotelId'; // Use an actual or mocked ID
        const updatedData = {
            title: "Updated Test Hotel",
            description: "Updated description"
        };
        const response = yield (0, supertest_1.default)(index_1.app)
            .put(`/api/hotel/${hotelId}`)
            .send(updatedData)
            .expect(200);
        expect(response.body.title).toBe(updatedData.title);
    }));
    it('should return 404 for a non-existent hotel (GET /api/hotel/:id)', () => __awaiter(void 0, void 0, void 0, function* () {
        const nonExistentId = 'nonExistentId';
        yield (0, supertest_1.default)(index_1.app)
            .get(`/api/hotel/${nonExistentId}`)
            .expect(404);
    }));
    it('should handle invalid POST requests with missing data', () => __awaiter(void 0, void 0, void 0, function* () {
        const incompleteHotel = {
            title: "Incomplete Hotel" // Missing required fields
        };
        yield (0, supertest_1.default)(index_1.app)
            .post('/api/hotel')
            .send(incompleteHotel)
            .expect(400);
    }));
});
//# sourceMappingURL=hotelRoutes.test.js.map