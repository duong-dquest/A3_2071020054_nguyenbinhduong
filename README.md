# Trang cá nhân — Nguyễn Bình Dương

Website giới thiệu Nguyễn Bình Dương, sinh viên ngành Công nghệ Thông tin yêu thích phát triển game, Roblox Studio và trải nghiệm trực tiếp có tương tác. Dự án được xây dựng bằng HTML, CSS và JavaScript thuần, không cần máy chủ hay cài đặt thư viện.

## Xem trang

- **GitHub repository:** [duong-dquest/trang-gioi-thieu-ban-than](https://github.com/duong-dquest/trang-gioi-thieu-ban-than)
- **GitHub Pages:** [https://duong-dquest.github.io/trang-gioi-thieu-ban-than/](https://duong-dquest.github.io/trang-gioi-thieu-ban-than/)

## Tính năng

- Bố cục một trang, co giãn từ điện thoại 320px tới màn hình rộng.
- Menu cố định, cuộn mượt và tự đánh dấu khu vực đang xem.
- Hỗ trợ bàn phím: liên kết bỏ qua điều hướng, trạng thái focus rõ ràng và chuyển tab dự án bằng phím mũi tên.
- Hiệu ứng xuất hiện khi cuộn, ảnh đại diện chuyển động nhẹ và nút lên đầu trang.
- Sáu thẻ sở thích trình bày các mối quan tâm về game, Roblox Studio, TikTok LIVE, công nghệ, khởi nghiệp online và âm nhạc.
- Dự án AVATAR PARADE được trình bày như concept Roblox × TikTok LIVE, với bình luận, chấm điểm, quà cổ vũ và luồng chơi tới bảng xếp hạng.
- Bản demo bình chọn avatar tương tác: chọn thí sinh, gửi một lượt bình chọn và xem trạng thái cập nhật ngay trên trang.
- Tôn trọng cài đặt **Reduce motion** của hệ điều hành.
- Sao chép liên kết GitHub hoặc tóm tắt dự án; có thông báo nếu trình duyệt không cấp quyền clipboard.
- Có tab chuyển giữa AVATAR PARADE và portfolio; các nút tab dùng được bằng bàn phím.
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
│   └── main.js
├── assets/
│   ├── avatar.jpg
│   └── background.webp
├── docs/
│   ├── AI_LOG.md
│   ├── evidence-index.md
│   └── yeu-cau-thiet-ke.md
├── README.md
└── CHANGELOG.md
```

## Kiểm thử và giới hạn

Các phép thử thủ công, trạng thái và minh chứng được theo dõi tại [docs/evidence-index.md](docs/evidence-index.md). Một số tương tác đã được thử trên trình duyệt cục bộ; các phép thử yêu cầu GitHub Pages vẫn chưa xác minh.

- GitHub Pages đã hoạt động. Các kết quả kiểm thử giao diện trên URL live được ghi tại [docs/evidence-index.md](docs/evidence-index.md).
- Chưa kiểm thử trên thiết bị di động thật, nhiều trình duyệt hoặc bằng Lighthouse.
- Chưa có email liên hệ; hiện dùng liên kết GitHub thay vì địa chỉ email mẫu.
- Nguồn/giấy phép của ảnh nền chưa được xác minh; cần bổ sung thông tin nguồn trước khi phát hành công khai.
- AVATAR PARADE là concept; bình chọn trên trang chỉ mô phỏng tại trình duyệt, không kết nối Roblox, TikTok LIVE hay lưu kết quả lên máy chủ.

## Nguồn và khai báo AI

- Ảnh đại diện: ảnh cá nhân của tác giả; ảnh gốc có watermark Humi Media (Year Book), đã cắt vuông 480px.
- Ảnh nền: chưa xác minh được nguồn; xem giới hạn phía trên.
- Quá trình sử dụng AI được ghi tại [docs/AI_LOG.md](docs/AI_LOG.md).
