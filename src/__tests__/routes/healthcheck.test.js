import { describe, it, expect } from '@jest/globals';
import request from 'supertest';
import express from 'express';
import healthCheckRouter from '../../routes/healthcheck.route.js';

const app = express();
app.use('/api/v1/healthcheck', healthCheckRouter);

describe('Health Check Route', () => {
  it('should return 200 and health status', async () => {
    const response = await request(app).get('/api/v1/healthcheck');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('statusCode', 200);
    expect(response.body).toHaveProperty('success', true);
  });

  it('should have correct response structure', async () => {
    const response = await request(app).get('/api/v1/healthcheck');

    expect(response.body).toMatchObject({
      statusCode: 200,
      data: expect.objectContaining({
        message: 'server is currently running',
      }),
      message: 'Success',
      success: true,
    });
  });
});
