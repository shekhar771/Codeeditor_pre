# syntax=docker/dockerfile:1

ARG NODE_VERSION=20

# Development stage
FROM node:${NODE_VERSION}-alpine AS development

# Use development node environment
ENV NODE_ENV=development

WORKDIR /usr/src/app

# Copy package files first
COPY package*.json ./

# Install ALL dependencies (including dev dependencies like nodemon, tsx)
RUN npm ci

# Copy source code
COPY . .

# Expose port
EXPOSE 3022

# Run the dev command - FIXED: "run" was missing!
CMD ["npm", "run", "dev"]