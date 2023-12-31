# FROM node:14

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# VOLUME /app/files

# # ENV DB3=mongodb://localhost:27024/

# ENV token=enter_token
# ENV SECRET=enter_key
# ENV APIKEY=enter_key

# EXPOSE 5002

# CMD ["npm", "start"]



# # docker build -t my-mern-app .

# # docker run -p 5000:5000 my-mern-app

# # docker inspect mongo-db | findstr "IPAddress"
