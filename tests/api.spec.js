const{test,expect} = require('@playwright/test');
test('GET a post returns 200', async({request})=>
{
 const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
 expect(response.status()).toBe(200);
});

test('GET a post returns the right data', async({request})=>
{
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body.userId).toBe(1);
});

test('GET a post has the right title', async ({ request }) => {
  // get the post, read the body, check body.title contains your piece
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  const body = await response.json();

  await expect(body.title).toContain('sunt aut facere');
});