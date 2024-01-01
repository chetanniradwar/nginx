FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV PORT=3001
EXPOSE 3001
CMD ["npm", "start"]
