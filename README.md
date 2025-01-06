# MERN Stack E-Commerce Website<br/>
![image](https://github.com/user-attachments/assets/e7aa6986-78ff-414e-b34d-5d0041244c92)


## Key Components of the Website<br/>
1. Home Page
2. Login Page
3. SignUp Page
4. Admin Panel- 
    - All Products Page
    - All Users Page
5. Category Page
6. Product Details Page
7. Search Product Page
8. Order Page - 
   - Success Page
   - Cancel Page


### The Header Component - Comprises of 3 parts the website icon, the search bar to search the products and the login page clicking the login button takes us to the login page and where we can switch between login and signup and store the user details using the MongoDB by creating a configuration in the backend.
![image](https://github.com/user-attachments/assets/b699577c-0d60-451a-a727-34bcf2cf1711)

The login page - <br/>

![image](https://github.com/user-attachments/assets/c0a8e255-1329-4499-a99a-b801b6e7c676)

Where we can see our profile as well and enter our credentials.

The signup page - <br/>

![image](https://github.com/user-attachments/assets/a697e419-abe9-4360-91b1-15eeb974fa74)

Where we can upload our profile and clicking on the signup button creates a user account in MongoDB.

The Users Database in MongoDB - <br/>
![image](https://github.com/user-attachments/assets/13affadb-c12c-4f62-bbc3-2ec9337b50e8)

The password is hashed using bcrypt - A library for securing passwords.


After getting signed In the a session is created using the JWT Token and passed to the client side using the payload and the cart, profile pic icons get rendered - <br/>

![image](https://github.com/user-attachments/assets/c14157e3-7865-4cc7-8259-a52efcd6d803)

So we get a toastify message which comes from the react-toastify on Successfully getting logged In. 







