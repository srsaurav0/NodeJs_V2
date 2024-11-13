import request from 'supertest';
import { app, server } from '../src/index'; // Ensure 'server' is imported to close it after tests

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
    longitude: -122.0,
    rooms: [
      {
        hotelSlug: "test-hotel",
        roomSlug: "test-room",
        roomImage: "/data/images/test-room.jpg",
        roomTitle: "Test Room",
        bedroomCount: 1
      }
    ]
  };

  it('should create a new hotel (POST /api/hotel)', async () => {
    const response = await request(app)
      .post('/api/hotel')
      .send(newHotel)
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe(newHotel.title);
  });

  it('should retrieve a hotel by ID (GET /api/hotel/:id)', async () => {
    const hotelId = 'someHotelId'; // Replace with a valid hotel ID for testing
    const response = await request(app)
      .get(`/api/hotel/${hotelId}`)
      .expect(200);

    expect(response.body).toHaveProperty('id', hotelId);
  });

  it('should update an existing hotel (PUT /api/hotel/:id)', async () => {
    const hotelId = 'someHotelId'; // Replace with a valid hotel ID for testing
    const updatedData = {
      title: "Updated Test Hotel",
      description: "Updated description."
    };

    const response = await request(app)
      .put(`/api/hotel/${hotelId}`)
      .send(updatedData)
      .expect(200);

    expect(response.body.title).toBe(updatedData.title);
    expect(response.body.description).toBe(updatedData.description);
  });

  it('should return 404 for a non-existent hotel (GET /api/hotel/:id)', async () => {
    const nonExistentId = 'nonExistentId';
    await request(app)
      .get(`/api/hotel/${nonExistentId}`)
      .expect(404);
  });

  it('should handle invalid POST requests with missing data', async () => {
    const incompleteHotel = {
      title: "Incomplete Hotel"
      // Missing required fields
    };

    const response = await request(app)
      .post('/api/hotel')
      .send(incompleteHotel)
      .expect(400);

    expect(response.text).toContain('Validation error'); // Customize as needed
  });

  afterAll(() => {
    // Close any open server after the tests
    server.close();
  });
});
