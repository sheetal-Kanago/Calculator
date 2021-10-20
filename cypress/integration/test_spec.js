// // example from the docs
// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

// my actual first test - does the page load
describe('The main page loads', () => {
  it('successfully loads', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
  }) 
})


// testing basic operations
describe('Basic Calculator Operations', () => {
  it('checks 7 + 2 = 9', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html')
    // Act
    cy.get(".button--num7").click();
    cy.get(".button--plus").click();
    cy.get(".button--num2").click();
    cy.get(".button--equals").click();
    // Assert
    cy.get(".display").should("have.value", "9");
  }) 
  it ('checks 7 - 2 = 5', () => {
    // Act
    cy.get(".button--C").click();
    cy.get(".button--num7").click();
    cy.get(".button--minus").click();
    cy.get(".button--num2").click();
    cy.get(".button--equals").click();
    // Assert
    cy.get(".display").should("have.value", "5");
  })
  it ('checks 7.5 - 2.4 = 5.1', () => {
    // Act
    cy.get(".button--C").click();
    cy.get(".button--num7").click();
    cy.get(".button--decimal").click();
    cy.get(".button--num5").click();    
    cy.get(".button--minus").click();
    cy.get(".button--num2").click();
    cy.get(".button--decimal").click();
    cy.get(".button--num4").click(); 
    cy.get(".button--equals").click();
    // Assert
    cy.get(".display").should("have.value", "5.1");
  })
  it ('checks 25 * 318 = 7950', () => {
    // Act
    cy.get(".button--C").click();
    cy.get(".button--num2").click();    
    cy.get(".button--num5").click();    
    cy.get(".button--multiply").click();
    cy.get(".button--num3").click();
    cy.get(".button--num1").click();
    cy.get(".button--num8").click(); 
    cy.get(".button--equals").click();
    // Assert
    cy.get(".display").should("have.value", "7950");
  })
  it ('checks 11+22-10*5/2 = 57.5', () => {
    // Act
    cy.get(".button--C").click();
    cy.get(".button--num1").click();
    cy.get(".button--num1").click();
    cy.get(".button--plus").click();    
    cy.get(".button--num2").click();        
    cy.get(".button--num2").click();
    cy.get(".button--minus").click();
    cy.get(".button--num1").click();
    cy.get(".button--num0").click();
    cy.get(".button--multiply").click();
    cy.get(".button--num5").click();
    cy.get(".button--divide").click();    
    cy.get(".button--num2").click(); 
    cy.get(".button--equals").click();
    // Assert
    cy.get(".display").should("have.value", "57.5");
  })
  it ('checks 11.5+22.5-10.4*5.3/2 = 62.54', () => {
    // Act
    cy.get(".button--C").click();
    cy.get(".button--num1").click();
    cy.get(".button--num1").click();
    cy.get(".button--decimal").click();
    cy.get(".button--num5").click();    
    cy.get(".button--plus").click();    
    cy.get(".button--num2").click();        
    cy.get(".button--num2").click();    
    cy.get(".button--decimal").click();
    cy.get(".button--num5").click();
    cy.get(".button--minus").click();
    cy.get(".button--num1").click();
    cy.get(".button--num0").click();
    cy.get(".button--decimal").click();
    cy.get(".button--num4").click();
    cy.get(".button--multiply").click();
    cy.get(".button--num5").click();
    cy.get(".button--decimal").click();
    cy.get(".button--num3").click();
    cy.get(".button--divide").click();    
    cy.get(".button--num2").click(); 
    cy.get(".button--equals").click();
    // Assert
    cy.get(".display").should("have.value", "62.54");
  })
})