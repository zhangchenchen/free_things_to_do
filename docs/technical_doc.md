# Free Things To Do - Technical Documentation

## Project Overview
A web application that generates personalized free activity recommendations based on user input using AI technology.

## Technical Stack

### Frontend
- Next.js 14 (App Router)
- Tailwind CSS + Shadcn/ui
- TypeScript

### Backend
- Next.js API Routes
- Deepseek API

### Deployment
- Vercel

## Core Features

### 1. Activity Recommendation Engine
- Accepts user input (location, group size, preferences)
- Processes data through Deepseek API
- Returns 5 personalized recommendations
- Option to generate more recommendations

### 2. Basic Project Structure

src/
├── app/ # Next.js app router
├── components/ # React components
├── lib/ # Utilities and configurations
└── types/ # TypeScript types

