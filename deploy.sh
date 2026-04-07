#!/bin/bash

echo "===== Deployment started ====="

echo "1. Pulling latest code from GitHub..."
git pull origin main

echo "2. Installing dependencies..."
npm install

echo "3. Restarting application with PM2..."
pm2 restart my-app || pm2 start ecosystem.config.js

echo "4. Showing PM2 status..."
pm2 list

echo "===== Deployment completed ====="
