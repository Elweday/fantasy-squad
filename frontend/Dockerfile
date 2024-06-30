# frontend/Dockerfile

# Use the official Node.js image from the Docker Hub
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and pnpm lockfile
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["pnpm", "run", "dev"]
