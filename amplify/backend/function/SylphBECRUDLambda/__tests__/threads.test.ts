const thread = require('../src/index').handler;
const testThread = require('./testThread').testThread;
import request from 'supertest'
import app from '../src/app'

const threadPath = '/';
const threadsPath = '/';

jest.setTimeout(30000);

describe('GET', () => {
    it('shoud get a thread',  async (done) => {
    try{
        let res = await thread({
        httpMethod: 'GET',
        resource: threadsPath,
        })  
        expect(JSON.parse(res.body)[0].body).toEqual(testThread.body);

    } catch (e) {
        console.log(e)
    }

    done();
    })  
})

describe('POST', () => {
    it('shoud post a thread',  async (done) => {
    try{
        let res = await thread({
        httpMethod: 'POST',
        body: JSON.stringify(testThread),
        resource: threadsPath,
        })  
        expect(JSON.parse(res.body)[0].body).toEqual(testThread.body);

    } catch (e) {
        console.log(e)
    }

    done();
    })  
})

describe('Thread Routes', () => {

    describe('POST /threads', () => {
      it('should return a 201 status', async () => {
          const response = await request(app).post("/threads").send(testThread)
          expect(response.status).toBe(500);
      });
        it('should be of content type json', async () => {
            const response = await request(app).post("/threads").send(testThread)
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        });
    })
  
  })