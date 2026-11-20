# Trang cá nhân — Nguyễn Bình Dương

Website giới thiệu Nguyễn Bình Dương, sinh viên ngành Công nghệ Thông tin yêu thích phát triển game, Roblox Studio và trải nghiệm trực tiếp có tương tác. Dự án được xây dựng bằng HTML, CSS và JavaScript thuần, không cần máy chủ hay cài đặt thư viện.

## Xem trang

- **GitHub repository:** [duong-dquest/trang-gioi-thieu-ban-than](https://github.com/duong-dquest/trang-gioi-thieu-ban-than)
- **GitHub Pages:** [https://duong-dquest.github.io/trang-gioi-thieu-ban-than/](https://duong-dquest.github.io/trang-gioi-thieu-ban-than/)

## Tính năng

- Bố cục một trang, co giãn từ điện thoại 320px tới màn hình rộng.
- Menu cố định, cuộn mượt và tự đánh dấu khu vực đang xem; nền phong cảnh trong nhẹ với sao trời lấp lánh.
- Hỗ trợ bàn phím: liên kết bỏ qua điều hướng, trạng thái focus rõ ràng và phần mô tả dự án có thể mở bằng bàn phím.
- Tinh linh 24 biểu cảm (12 dễ thương, 12 meme), lượn theo quỹ đạo mềm, tự trò chuyện; có thể kéo, thả, ném, thả cá cho ăn, tự ngủ và né con trỏ.
- NITRO DASH chơi thử trên canvas; 12 huy hiệu; chế độ ngày/đêm; tour và ô hỏi đáp offline với tinh linh; nút “Đừng bấm”; easter egg; âm thanh WebAudio mặc định tắt. Dữ liệu (huy hiệu, coin, kỷ lục) chỉ lưu trên máy người xem bằng localStorage.
- Ban ngày có mặt trời, mây, bướm và phấn hoa; ban đêm có trăng, sao, đom đóm; chuyển ngày/đêm bằng vòng tròn loe ra từ nút bấm.
- Sao nền ngẫu nhiên, sao băng, vệt sáng theo chuột và ánh kim trên tên.
- Hiệu ứng xuất hiện khi cuộn, ảnh đại diện chuyển động nhẹ và nút lên đầu trang.
- Mục Về mình có thêm Học vấn, Kỹ năng hiện có và Mục tiêu; mục Dự án có ba thẻ (AVATAR PARADE, NITRO DASH, game bắn súng 2D).
- Sáu thẻ sở thích trình bày các mối quan tâm về game, Roblox Studio, TikTok LIVE, công nghệ, khởi nghiệp online và âm nhạc.
- Hai dự án concept (AVATAR PARADE, NITRO DASH) có phần mô tả mở rộng/thu gọn và nút sao chép tóm tắt.
- Tôn trọng cài đặt **Reduce motion** của hệ điều hành.
- Sao chép liên kết GitHub hoặc tóm tắt dự án; có thông báo nếu trình duyệt không cấp quyền clipboard.
- Không dùng framework, dịch vụ bên thứ ba hay thu thập dữ liệu.

## Chạy thử

1. Tải hoặc clone repository.
2. Mở `index.html` trong trình duyệt.

Không cần cài dependency hoặc chạy lệnh build. Clipboard có thể chỉ hoạt động trên HTTPS hoặc localhost; các liên kết GitHub vẫn dùng được khi mở tệp trực tiếp.

## Cấu trúc

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── fairy.js
│   ├── game.js
│   └── extras.js
├── assets/
│   ├── avatar.jpg
│   └── background.webp
│   ├── fairy.png
│   └── fairy/            # idle + 24 biểu cảm (.webp)
├── docs/
│   ├── AI_LOG.md
│   ├── evidence-index.md
│   └── yeu-cau-thiet-ke.md
├── README.md
└── CHANGELOG.md
```

## Kiểm thử và giới hạn

Các phép thử giao diện và tương tác cơ bản đã được kiểm tra trên GitHub Pages; chi tiết từng phép thử và những giới hạn còn lại nằm tại [docs/evidence-index.md](docs/evidence-index.md).

- GitHub Pages đã hoạt động. Các kết quả kiểm thử giao diện trên URL live được ghi tại [docs/evidence-index.md](docs/evidence-index.md).
- Chưa kiểm thử trên thiết bị di động thật, nhiều trình duyệt hoặc bằng Lighthouse.
- Chưa có email liên hệ; hiện dùng liên kết GitHub thay vì địa chỉ email mẫu.
- Nguồn/giấy phép của ảnh nền chưa được xác minh; cần bổ sung thông tin nguồn trước khi phát hành công khai.
- Thông tin học vấn, kỹ năng và mục tiêu do tác giả cung cấp; trang chưa có hành trình, chứng chỉ hay sản phẩm đã hoàn thiện.
- AVATAR PARADE, NITRO DASH và game bắn súng 2D là ý tưởng; trang không kết nối Roblox, TikTok LIVE và chưa có bản chơi thử.

## Nguồn và khai báo AI

- Ảnh đại diện: ảnh cá nhân của tác giả; ảnh gốc có watermark Humi Media (Year Book), đã cắt vuông 480px.
- Ảnh nền: chưa xác minh được nguồn; xem giới hạn phía trên.
- Tinh linh: hình mặc định và hai bảng biểu cảm do người dùng cung cấp (ảnh AI, meme vẽ lại theo phong cách mèo); bản dùng trên trang đã tách nền và cắt gọn.
- Quá trình sử dụng AI được ghi tại [docs/AI_LOG.md](docs/AI_LOG.md).
