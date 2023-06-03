/**
 * -----------------------
 *    Basic
 * -----------------------
 * 
 * 1. Don't show the link who should not see it
 *    only show to the person/type of users 
 *    who should see it 
 * 
 * 2. Don't allow to visit to visit the link 
 *    by typing on the url use admin route 
 *    that will check whether the user is admin
 *    or not >> if not admin then redirect to
 *    any other page >> you could logout user
 *    and send them to login page
 * 
 * ----------------------
 *    To send data
 * ----------------------
 * 
 * 1. verify JWT Token (send authorization 
 *    token in the header to the server)
 *    (if possible  use axios to send jwt
 *     token by intercepting the request).
 * 
 * 2. If it is an admin activity , make sure
 *    only admin user is posting data by using
 *    verifyAdmin.
 * 
 * 3. 
 */