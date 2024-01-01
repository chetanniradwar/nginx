FROM node:12-slim
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV PORT=5001
EXPOSE 5001
CMD ["npm", "start"]
