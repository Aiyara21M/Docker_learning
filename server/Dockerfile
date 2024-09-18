# ใช้ Node.js image เป็น base image
FROM node:latest

# ตั้ง working directory
WORKDIR /usr/src/app

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดแอปพลิเคชันทั้งหมด
COPY . .

# เปิดพอร์ตที่ server ใช้
EXPOSE 3007

# รัน server
CMD ["node", "server.js"]
