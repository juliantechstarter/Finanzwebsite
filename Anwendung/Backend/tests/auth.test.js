describe('GET /profile', () => {
    it('sollte den Benutzerprofile zurückgeben, wenn der Token gültig ist', async () => {
      // Vorab einen Benutzer registrieren
      const registerResponse = await request(app)
        .post('/register')
        .send({
          username: 'testuser',
          password: 'testpassword',
          email: 'test@example.com',
        });
  
      // Login, um ein JWT-Token zu erhalten
      const loginResponse = await request(app)
        .post('/login')
        .send({
          username: 'testuser',
          password: 'testpassword',
        });
  
      const token = loginResponse.body.token;
  
      const response = await request(app)
        .get('/profile')
        .set('Authorization', `Bearer ${token}`); // JWT-Token im Header setzen
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('username', 'testuser');
    });
  
    it('sollte 401 zurückgeben, wenn kein Token bereitgestellt wird', async () => {
      const response = await request(app).get('/profile');
      expect(response.status).toBe(401);
      expect(response.body.error).toBe('No token provided');
    });
  });
  