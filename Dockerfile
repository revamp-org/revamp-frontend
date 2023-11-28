FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY . .

RUN npm install -g pnpm

RUN pnpm install
RUN pnpm build

ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

CMD ["pnpm", "start"]
