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
2. You are not allowed to write any more of a unit test than is sufficient to fail.
3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

Rule #1 says we can't write production code unless it's to pass a test, so the first thing we need to do is write a failing test.

### [user.test.js](https://github.com/grizzly-atoms/TDD-Workshop-node.js-/blob/0f7bf974d97e3c0c62ac8af7b837cea24fbf1787/example/__tests__/integration/user.test.js#L1-L11)
```javascript
'use strict';

const request = require('supertest');
const app = require('../../app');

describe('/users/:email', () => {
  it('returns user objects', async () => {
    const response = await request(app).get('/users/jack.torrance@overlook.com');
    expect(response.status).toBe(200);
  });
});
```

When we run this we see output similar to the following:

![](04/04.1.png)

So we expected to see a 200 response from our application and instead got a 404. We could write more tests, but rule #2 says we must stop. Now we iterate back through our rules. We are now allowed to write production code because we have a failing test:

