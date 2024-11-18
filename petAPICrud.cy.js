/// <reference types="cypress" />
describe("Pet crud operations", () => {
    beforeEach(() => {
    })
    let payload={
        "id": 0,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "puppy",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
    }
    it('Add new pet to the store', () => {
       
        cy.request({
            method: 'POST', url: 'https://petstore.swagger.io/v2/pet',
             body: payload
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq("puppy")
        })
    })
    it('Update existing pet', () => {
            cy.request({
                method: 'PUT', url: 'https://petstore.swagger.io/v2/pet', 
                body: payload
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq("puppy")
            })
        })
        it('Find pets by status', () => {
            cy.request({
                method: 'GET', url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=available'
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
        it('Delete pets by status', () => {  
            cy.request({
                method: 'POST', url: 'https://petstore.swagger.io/v2/pet',
                 body: payload
            }).then((response) => {
              const petId =response.body.id
            })
            cy.request({method: 'DELETE', url: "https://petstore.swagger.io/v2/pet/" + petId ,
            }).then((response) => {             
                expect(response.type).to.eq("unknown")
            })
        })

        
        })
    