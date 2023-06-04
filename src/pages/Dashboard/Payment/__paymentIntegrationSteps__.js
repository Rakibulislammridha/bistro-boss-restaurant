/**
 * 
 * 1. Install stripe and react stripe js
 * 2. Create a checkout form with card element (card element contents: card number, card expiration day, cvs, zip code)
 * 3. create account on stripe and get publishable key
 * 4. get card info 
 * 5. create a payment method
 * 6. use test card to test payment
 * 7. on the server site:  install stripe: npm install --save stripe 
 * 8. create a payment intent api with payment method types: ["card"], make sure you provide amount in clients (multiply price with 100)
 * 9. call payment intent api to get client secret and store it in a state
 * 10. use confirm card payment api with client secret and card info
 * 11. display confirm card error
 * 12. display confirm card success
 * 13. do thinks after payment --->>
 * 
 */