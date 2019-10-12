const request = require('supertest');
const app = require('../../app');

describe('Roman to arabic conversion', () => {
  describe('successful', () => {
    const data = [
      { roman: 'I', arabic: 1 },
      { roman: 'II', arabic: 2 },
      { roman: 'X', arabic: 10 },
      { roman: 'XV', arabic: 15 },
      { roman: 'CX', arabic: 110 },
      { roman: 'MMM', arabic: 3000 },
    ];

    data.forEach(({ roman, arabic }) => {
      it(`should convert "${roman}" to "${arabic}"`, async () => {
        const response = await request(app)
          .put('/api/conversion/roman-to-arabic')
          .send({ roman });

        expect(response.status).toEqual(200);
        expect(response.body).toEqual({ arabic });
      });
    });
  });

  describe('errors', () => {
    it('should fail when body missing "roman" property', async () => {
      const response = await request(app)
        .put('/api/conversion/roman-to-arabic')
        .send({ anything: 'except roman' });

      expect(response.status).toEqual(400);
      expect(response.body).toEqual({ code: 'ERROR_ROMAN_PROPERTY_MISSING' });
    });

    it('should fail when not able to convert', async () => {
      const response = await request(app)
        .put('/api/conversion/roman-to-arabic')
        .send({ roman: 'something weird' });

      expect(response.status).toEqual(400);
      expect(response.body).toEqual({ code: 'ERROR_BAD_INPUT' });
    });

    it('should fail when not able to convert 2', async () => {
      const response = await request(app)
        .put('/api/conversion/roman-to-arabic')
        .send({ roman: 42 });

      // expect(response.status).toEqual(400);
      expect(response.body).toEqual({ code: 'ERROR_BAD_INPUT' });
    });
  });
});
