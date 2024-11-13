import request from 'supertest';
import { app } from '../src/index';  // Adjust the path as needed

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

    it('should create a new hotel (POST /api/hotel)', async () => {
        const response = await request(app)
            .post('/api/hotel')
            .send(newHotel)
            .expect(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe(newHotel.title);
    });

    it('should retrieve a hotel by ID (GET /api/hotel/:id)', async () => {
        // Assuming you have logic to create or mock a hotel ID
        const hotelId = 'mockHotelId'; // Replace with actual or mocked ID
        const response = await request(app)
            .get(`/api/hotel/${hotelId}`)
            .expect(200);
        expect(response.body).toHaveProperty('id', hotelId);
    });

    it('should update an existing hotel (PUT /api/hotel/:id)', async () => {
        const hotelId = 'mockHotelId'; // Use an actual or mocked ID
        const updatedData = {
            title: "Updated Test Hotel",
            description: "Updated description"
        };
        const response = await request(app)
            .put(`/api/hotel/${hotelId}`)
            .send(updatedData)
            .expect(200);
        expect(response.body.title).toBe(updatedData.title);
    });

    it('should return 404 for a non-existent hotel (GET /api/hotel/:id)', async () => {
        const nonExistentId = 'nonExistentId';
        await request(app)
            .get(`/api/hotel/${nonExistentId}`)
            .expect(404);
    });

    it('should handle invalid POST requests with missing data', async () => {
        const incompleteHotel = {
            title: "Incomplete Hotel" // Missing required fields
        };
        await request(app)
            .post('/api/hotel')
            .send(incompleteHotel)
            .expect(400);
    });
});
