FROM node:12-slim
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV PORT=4001
EXPOSE 4001
CMD ["npm", "start"]
