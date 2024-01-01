FROM node:12-slim
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV PORT=6002
EXPOSE 6002
CMD ["npm", "start"]
