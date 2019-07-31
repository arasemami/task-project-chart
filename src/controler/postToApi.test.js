import PostToApi from './postToApi' 


describe('asyncFetch', () => {

    test('canfetch', async () => { 
        const response = await PostToApi({"name": "Borusan"}, 'getBalance');
        const result = await response;   
        expect(result.status).toBe(200) 
    });
  });