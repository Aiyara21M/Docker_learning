# ใช้ Node.js image เป็น base image เพื่อ build แอปพลิเคชัน
FROM node:latest AS build

# ตั้ง working directory
WORKDIR /usr/src/app

# คัดลอกไฟล์ package.json และ package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดแอปพลิเคชันทั้งหมด
COPY . .

# สร้างแอปพลิเคชัน
RUN npm run build

# ใช้ nginx เป็น web server
FROM nginx:alpine
# คัดลอกไฟล์การตั้งค่าของ NGINX ไปที่ container
COPY nginx/nginx.conf /etc/nginx/nginx.conf
# คัดลอกไฟล์ที่ build เสร็จแล้วไปยังตำแหน่งที่ nginx ใช้ให้บริการไฟล์
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

ENTRYPOINT ["/docker-entrypoint.sh"]
# เปิดพอร์ตที่ nginx ใช้
EXPOSE 80

# รัน nginx
CMD ["nginx", "-g", "daemon off;"]
