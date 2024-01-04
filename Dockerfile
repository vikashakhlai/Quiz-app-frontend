# Используйте Node.js в качестве базового образа
FROM node:20

# Установите рабочую директорию внутри контейнера
WORKDIR /front/app

# Копируйте файлы package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN yarn install

# Копируйте все файлы из текущего каталога внутрь контейнера
COPY . .

# Соберите приложение
# RUN yarn build

# Указываем порт, который будет слушать приложение
EXPOSE 3000

# Команда для запуска приложения
CMD ["yarn", "dev"]