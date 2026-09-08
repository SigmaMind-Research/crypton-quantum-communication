FROM node:22-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --no-audit --no-fund

COPY . .

ENV NODE_ENV=development
ENV HOST=0.0.0.0
ENV PORT=3000
ENV VITE_HMR_HOST=crypton.sigmamind.xyz
ENV VITE_HMR_PROTOCOL=wss
ENV VITE_HMR_CLIENT_PORT=443

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
