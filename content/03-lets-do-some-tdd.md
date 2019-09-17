# Let's Do Some TDD

## Feature


```
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
```

Remember,  the 3 laws of TDD are: 

1. You are not allowed to write any production code unless it is to make a failing test pass.
2. You are not allowed to write anty more of a unit test than is sufficient to fail.
3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

So the first thing we need to do is write a failing test, and once we have a failing test we need to stop writing that test!

### user.test.js
```javascript
'use strict';

const request = require('supertest');
const app = require('../../app');

describe('/users/:email', () => {
  it('has a users page', async () => {
    const response = await request(app).get('/user/jack.torrance@overlook.com');
    expect(response.status).toBe(200);
  });
});
```

