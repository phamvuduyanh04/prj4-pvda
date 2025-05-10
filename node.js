// app.js - File chính để chạy server

const express = require('express');
const path = require('path');
const fs = require('fs');

// Khởi tạo ứng dụng Express
const app = express();
const PORT = process.env.PORT || 3000;

// Cấu hình thư mục tĩnh để phục vụ các file CSS, JS, hình ảnh
app.use(express.static(path.join(__dirname, 'public')));

// Định nghĩa route cho trang chủ
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Định nghĩa route cho các trang khác
app.get('/collections', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'collections.html'));
});

app.get('/products/:id', (req, res) => {
  // Trong thực tế, bạn sẽ lấy thông tin sản phẩm từ database
  // Ở đây chúng ta chỉ trả về trang sản phẩm mẫu
  res.sendFile(path.join(__dirname, 'views', 'product.html'));
});

// Xử lý 404 khi không tìm thấy trang
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});