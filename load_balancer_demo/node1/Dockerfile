FROM node:12-slim
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV PORT=6001
EXPOSE 6001
CMD ["npm", "start"]
