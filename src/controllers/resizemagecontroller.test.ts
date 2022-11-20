import request from 'supertest';
import  app  from '../index';

describe('Test resize controller', () => {
  it("Request '/resizeimage' should return staus 200", async () => {
    const result = await request(app).get("/resizeimage?imgpath=images\\full\\encenadaport.jpg&width=%27200%27&height=%27500%27").send();

    expect(result.status).toBe(200);
  });
});