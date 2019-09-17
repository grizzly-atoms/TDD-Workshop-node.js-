# Let's Do Some TDD

## Feature

  Scenario: User requests user profile 
  Given the user record exists
  When I make a request to GET /users/:emailAddress
  Then the server responds with a 200 code
    and the server returns the header "Content-Type: application/vnd.api+json"
    and the server returns a user resource object
    and the user object id is the email address
    and the user object type is "user"
    and the user object contains a data object
    and data.attributes.firstName contains the user's first name
