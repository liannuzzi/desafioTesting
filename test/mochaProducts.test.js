const assert = require('assert')
const chai=require('chai')
const expect=chai.expect
const supertest=require('supertest')
const agent=supertest('http://localhost:8082')

describe('Test producto API', ()=>{

    it('Deberia agregar un nuevo producto', async ()=>{
        const response = await agent
        .post('/')
        .send({        
        title:"Teclado",
        price:1500,
        thumbnail:"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle…"
        })
        const body=response.body
        expect(response.status).to.eql(200)
        expect(body).to.include.keys("title","price","thumbnail")
    })

    it('Deberia devolver los productos', async ()=>{
        const response = await agent
        .get('/')
        const body=response.body
        expect(response.status).to.eql(200)
        expect(body.length).to.greaterThan(0)
    })
})