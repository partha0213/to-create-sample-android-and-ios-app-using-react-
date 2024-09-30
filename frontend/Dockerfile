# Use the official Node.js image as a base
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the app
RUN npm install -g serve

# Command to run the app
CMD ["serve", "-s", "build"]

# Expose port 3000
EXPOSE 3000
