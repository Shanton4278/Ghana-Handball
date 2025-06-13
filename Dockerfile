# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy the yarn.lock and package.json first
# This is to take advantage of Docker caching to avoid reinstalling dependencies on every build
COPY package.json ./

# Step 4: Install app dependencies using npm
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the app (if you're using TypeScript, it will transpile to JS)
RUN npm run build

# Step 7: Expose the port the app runs on
EXPOSE 4200

# Step 8: Define the command to run the app in production
CMD ["npm", "run", "start"]
