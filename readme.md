This is a very nice app that let's you request essential services.
Please make good use of this. To do so effectively, keep reading on!

# Usage
1. Sign up or Log in.
![image](https://user-images.githubusercontent.com/79750694/229893869-17b7456f-8f18-459f-ba35-6e454f882cc5.png)


2. Request a service
   1. We will be with you in a short amount of time. Please be patient, we are only human
![image](https://user-images.githubusercontent.com/79750694/229894054-53526ad2-9de7-4ebd-8cdc-a5de463ab021.png)

3. Go to you profile to track all the services that you have ordered. Also please pay.
![image](https://user-images.githubusercontent.com/79750694/229894517-0ad27cff-ea68-47f1-a1d6-339fb4a2acd8.png)
![image](https://user-images.githubusercontent.com/79750694/229894894-e96aa103-94f9-412a-b95b-342905b93854.png)

If you are an admin, you can go to http://localhost:3000/admin to see and manage all requests
![image](https://user-images.githubusercontent.com/79750694/229895050-9936c5e7-9262-4289-8285-f04f806a09ed.png)


# Running
## Frontend
1. Go into the frontend folder (`cd frontend`)
2. Install dependencies (`npm i`)
3. Run the app (`npm start`)
4. The app should open in a browser. If it does not, go to http://localhost:3000

## Backend
This is a little more work. Keep reading on.
1. Go into the backend folder (`cd backend`)
2. Create a file called `.env`. The contents of this file should be as follows:
   ```
    DATABASE_URL = <mongodb connection uri>
    EMAIL = <email address to which to send feedback to>
    PASSWORD = <password for said email address>
   ```
   - You will need to set up a mongodb server. Please do that first
3. Install the dependencies (`npm i`)
4. Run the app (`npm start`)
5. The server should start. Nothing more needs to be done. Simply use the website that was opened.
