This is a very nice app that let's you request essential services.
Please make good use of this. To do so effectively, keep reading on!

# Usage
1. Sign up or Log in.
2. Request a service
   1. We will be with you in a short amount of time. Please be patient, we are only human

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
