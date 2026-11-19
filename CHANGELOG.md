# CHANGELOG

## V10 — sở thích và dự án AVATAR PARADE
Ngày: 19/11/2026

**Thay đổi**
- Bổ sung sáu sở thích nổi bật, mô tả cụ thể đam mê phát triển game, Roblox Studio, TikTok LIVE, công nghệ, khởi nghiệp online và nghe nhạc.
- Đưa AVATAR PARADE — concept Roblox × TikTok LIVE — thành dự án chính; mô tả vòng chơi, bình luận, chấm điểm, quà cổ vũ và bảng xếp hạng.
- Thêm minh họa sân khấu game bằng CSS và bản demo bình chọn avatar chạy ngay trên trình duyệt.
- Làm mới đồ họa bằng tông màu neon, thẻ glass, lưới nền, bố cục dự án và animation; giữ hỗ trợ giảm chuyển động.
- Bổ sung nút sao chép tóm tắt dự án; cập nhật README và hồ sơ kiểm thử.

**Lưu ý:** dự án đang được trình bày như concept; demo bình chọn không kết nối dịch vụ trực tiếp hay gửi/lưu dữ liệu.

## V9 — hoàn thiện giao diện và trải nghiệm
Ngày: 18/11/2026

**Thay đổi**
- Hoàn thiện README, liên kết repository và mô tả rõ các giới hạn chưa xác minh.
- Bổ sung lời kêu gọi hành động, nhãn công nghệ dự án và liên hệ GitHub thay cho email mẫu.
- Thêm hiệu ứng xuất hiện khi cuộn, chuyển động nhẹ cho ảnh đại diện và nút lên đầu trang.
- Tôn trọng thiết lập giảm chuyển động; bổ sung liên kết bỏ qua điều hướng và trạng thái `aria-current`.
- Giữ đúng mục menu sau khi bấm điều hướng; bổ sung phiên bản tài nguyên để tránh dùng CSS/JS cũ từ cache.
- Cải thiện thông báo khi sao chép liên kết không thành công.

**Kiểm tra:** xem trạng thái các phép thử tại `docs/evidence-index.md`; chưa tự ghi nhận kết quả chưa chạy.

## V8 — release note
Ngày: 17/11/2026

**Thay đổi**
- Tách CSS ra `css/style.css`, sửa đường dẫn ảnh nền thành `../assets/background.webp`.
- Thêm `README.md`, `CHANGELOG.md`, `docs/evidence-index.md`, `docs/AI_LOG.md`, `.gitignore`.
- 18/11: thay ảnh đại diện bằng ảnh thật (cắt vuông 480px).
- 18/11: thêm menu điều hướng cố định đầu trang, tô sáng mục đang xem.
- 18/11: thêm mục Dự án dạng tab (bàn phím dùng được), nút Sao chép email, favicon.
- 18/11: sửa `aria-labelledby` của phần hero (trước đó trỏ tới id không tồn tại); thêm `js/main.js`.

**Đã kiểm tra:** chưa có kết quả được ghi nhận; xem trạng thái tại `docs/evidence-index.md`.

**Chưa kiểm tra:** triển khai Pages, các kích thước màn hình và thao tác trong trình duyệt.

## V7 — bản nền
- `index.html` một tệp (CSS nhúng), ảnh trong `assets/`.
