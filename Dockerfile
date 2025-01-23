FROM node:16

WORKDIR /usr/src/app

# Copy only package.json and lock files first for caching
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Install build tools for native dependencies (if needed)
RUN apt-get update && apt-get install -y build-essential python3

# Install dependencies
RUN npm install --production --silent --legacy-peer-deps

# Copy the rest of the application code
COPY . .

EXPOSE 5000
CMD ["npm", "start"]
