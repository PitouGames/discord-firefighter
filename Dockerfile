FROM node:14.9-buster-slim

# Display versions
RUN node -v && npm -v

WORKDIR /home/node/app

COPY package* ./

RUN npm install

COPY . .

#RUN npm run test
ENTRYPOINT [ "npm", "start" ] 

# Commands to build and execute:
# docker build -t discord-firefighter:latest .
# docker run --rm -p 80:80 --name discord-firefighter discord-firefighter:latest
# docker stop discord-firefighter && docker rm discord-firefighter
