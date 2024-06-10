FROM node:lts-iron
 
WORKDIR /sharma_prachi_ui_garden/
 
COPY public/ /sharma_prachi_ui_garden/public
COPY src/ /sharma_prachi_ui_garden/src
COPY package.json /sharma_prachi_ui_garden/
COPY . /sharma_prachi_ui_garden
 
RUN npm install
 
CMD ["npm", "run", "storybook"]