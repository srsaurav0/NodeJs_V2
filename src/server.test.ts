import { app, server } from '../src/index';
import request from 'supertest';

describe('Basic Server Connection Test', () => {
  it('should get a response from the base URL', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Server is running!');
  });

  afterAll(done => {
    if (server) {
      server.close(done); // Make sure to pass done to ensure Jest waits for the server to close.
    } else {
      done();
    }
  });
});
