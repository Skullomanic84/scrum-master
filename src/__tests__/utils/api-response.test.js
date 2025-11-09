import { describe, it, expect } from '@jest/globals';
import { ApiResponse } from '../../utils/api-response.js';

describe('ApiResponse', () => {
  it('should create a successful response with default message', () => {
    const response = new ApiResponse(200, { user: 'test' });

    expect(response.statusCode).toBe(200);
    expect(response.data).toEqual({ user: 'test' });
    expect(response.message).toBe('Success');
    expect(response.success).toBe(true);
  });

  it('should create a successful response with custom message', () => {
    const response = new ApiResponse(201, { id: 1 }, 'Created');

    expect(response.statusCode).toBe(201);
    expect(response.data).toEqual({ id: 1 });
    expect(response.message).toBe('Created');
    expect(response.success).toBe(true);
  });

  it('should create an error response', () => {
    const response = new ApiResponse(404, null, 'Not Found');

    expect(response.statusCode).toBe(404);
    expect(response.data).toBeNull();
    expect(response.message).toBe('Not Found');
    expect(response.success).toBe(false);
  });

  it('should mark status codes >= 400 as unsuccessful', () => {
    const response400 = new ApiResponse(400, null);
    const response500 = new ApiResponse(500, null);

    expect(response400.success).toBe(false);
    expect(response500.success).toBe(false);
  });

  it('should mark status codes < 400 as successful', () => {
    const response200 = new ApiResponse(200, {});
    const response201 = new ApiResponse(201, {});
    const response301 = new ApiResponse(301, {});

    expect(response200.success).toBe(true);
    expect(response201.success).toBe(true);
    expect(response301.success).toBe(true);
  });
});
