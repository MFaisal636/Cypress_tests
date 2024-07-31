  // open "leads" dropdown
  cy.contains('Leads ').click({ force: true });

  // // click on "patient pool Builder"
  cy.wait(2000);
  cy.contains('Patient Pool Builder ').click({ force: true });
  cy.wait(2000);

  cy.contains(' Create New ').click({ force: true });
  // create a New Patient Pool
  // Pool Name
  cy.get('input[placeholder="Enter Pool Name"]').type('Auto-test#123');
  // // Pool Description
  // cy.get('#poolDescription').type('testing#20')
  //click on "continue" Button
  cy.get('button[class="btn btn-primary"]').click({ force: true });
  // // DEFINE LIST

  // // Select State
  cy.get('span.ng-star-inserted').contains('Select State').click({ force: true });
  // cy.wait('2000')
 // cy.contains('New York').click({ force: true })
  cy.contains('New Jersey').click({ force: true });

  // // status
  cy.contains('Select Status').click({ force: true });
  // cy.wait('2000')
  //cy.contains('Deceased').click({ force: true })
  cy.contains('Pre Booking').click({ force: true });


  // // The age range selection
  cy.get('.ngx-slider-pointer-min')
      .focus()
      .type('{rightArrow}'.repeat(6));

  cy.get('.ngx-slider-pointer-max')
      .focus()
      .type('{leftArrow}'.repeat(2));

  // This is for Reset Criteria
      //cy.contains(' Reset Criteria ').click( {force:true} );
       //For create a pool click on continue
      cy.get('button[class="btn btn-primary btn-next"]').click({ force: true }); 
      //Selection in intended Study
      cy.wait(2000)
      cy.contains('Select Intended Study').click( { force: true} );
      cy.contains('Moderna 1273-p301').click( { force: true} );
      cy.get('button[class="btn btn-primary btn-sm btn-next"]').click( {force: true} );
