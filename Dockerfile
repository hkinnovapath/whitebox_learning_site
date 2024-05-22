# Use the official Node.js image with version 18
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port Next.js app runs on (usually 3000)
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "start"]
