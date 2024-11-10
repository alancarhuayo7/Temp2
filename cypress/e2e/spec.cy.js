describe('Prueba API', () => {

  
  it('Creación de un nuevo usuario', () => {
    cy.request(
      {
        method: 'POST',
        url: 'https://api.demoblaze.com/signup',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          username: 'agcarhuayof3',
          password: '123456'
        },

      }).then((response) => {

        console.log(response); 
        expect(response.status).to.eq(200);

      });

  })

  it('Creación de un usuario existente', () => {
    cy.request(
      {
        method: 'POST',
        url: 'https://api.demoblaze.com/signup',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          username: 'agcarhuayof',
          password: '123456'
        },

      }).then((response) => {

        console.log(response); 
        expect(response.status).to.eq(200);

      });

  })


  it('Autenticación de usuario con credenciales correctas', () => {
    const credentials = {
      username: 'agcarhuayof',
      password: 'QWFyb25jaXRv'
    };

    cy.request(
      {
        method: 'POST',
        url: 'https://api.demoblaze.com/login',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          username: 'agcarhuayof',
          password: 'QWFyb25jaXRv'
        },




      }).then((response) => {

        console.log(response); 
        expect(response.status).to.eq(200); 
       

      });

  })

  it('Autenticación de usuario con credenciales incorrectas', () => {

    cy.request(
      {
        method: 'POST',
        url: 'https://api.demoblaze.com/login',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          username: 'agcarhuayof',
          password: '34243'
        },
      }).then((response) => {

        console.log(response); 
        expect(response.status).to.eq(200); 
        expect(response.body).to.have.property('errorMessage').and.to.include('Wrong password.');
       

      });

  })



})