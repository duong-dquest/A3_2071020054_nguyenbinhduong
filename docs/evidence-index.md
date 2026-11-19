# Bảng minh chứng

Quy tắc: chưa thử thì ghi **Chưa kiểm tra**. Ảnh chụp phải cắt bỏ tab lạ, email/tài khoản, thông báo. Link minh chứng phải mở được bằng cửa sổ ẩn danh.

| Mã | Tuyên bố | Phép thử | Kết quả thật | Minh chứng |
|----|----------|----------|--------------|------------|
| E1 | Menu cuộn tới đúng 4 mục và tô sáng mục đang xem | Bấm từng mục menu trên URL Pages | Đạt cục bộ; cả 4 mục (19/11/2026) | |
| E2 | Ảnh đại diện và ảnh nền hiển thị | Mở URL Pages, xem tab Network (không 404) | Đạt cục bộ; hai ảnh tải được (19/11/2026) | |
| E3 | `css/style.css` được tải trên Pages | Tab Network: trạng thái 200 | Đạt cục bộ; stylesheet đã tải (19/11/2026) | |
| E4 | Liên kết liên hệ mở đúng hồ sơ GitHub | Bấm "Mở GitHub", xác nhận hồ sơ | Chưa kiểm tra | |
| E5 | Không tràn ngang ở nhiều kích thước màn hình | DevTools responsive, kiểm tra `scrollWidth` | Đạt cục bộ ở 320 / 360 / 390 / 600 / 768 / 1280px (19/11/2026) | |
| E6 | URL Pages khớp phiên bản nộp | Đối chiếu commit triển khai và nội dung URL live | Đạt; workflow Pages deploy commit [`1aaa16c`](https://github.com/duong-dquest/trang-gioi-thieu-ban-than/commit/1aaa16c97a3a44ab4ec5b26a678e01e4b695f412) thành công (18/11/2026) | |
| E7 | Link minh chứng mở được | Mở bằng cửa sổ ẩn danh | Chưa kiểm tra | |
| E8 | Tab Dự án đổi nội dung | Bấm 2 tab; dùng phím ← → | Đạt trên Pages (18/11/2026) | |
| E9 | Nút "Sao chép liên kết GitHub" hoạt động | Bấm nút, dán thử vào ô bất kỳ | Chưa kiểm tra | |
| E10 | Menu không vỡ trên màn hình 320px | DevTools 320px, kiểm tra cuộn ngang | Đạt cục bộ; không tràn ngang (19/11/2026) | |
| E11 | Hiệu ứng xuất hiện khi cuộn không che nội dung | Cuộn qua các khu vực và kiểm tra trạng thái từng phần | Đạt cục bộ; 10 phần tử được bật hiệu ứng (19/11/2026) | |
| E12 | Nút lên đầu trang chỉ hiện sau khi cuộn | Cuộn xuống quá 420px, bấm nút, kiểm tra quay về đầu | Đạt trên Pages (18/11/2026) | |
| E13 | Chuyển động được giảm theo cài đặt hệ thống | Bật Reduce motion và kiểm tra chuyển động/hiệu ứng cuộn | Đạt cục bộ (19/11/2026) | |
| E14 | Liên kết GitHub mở đúng repository | Bấm liên kết ở Dự án và Liên hệ | Chưa kiểm tra | |
| E15 | Nội dung vẫn hiện khi trình duyệt không hỗ trợ IntersectionObserver | Tắt/hạn chế IntersectionObserver, nạp lại trang | Chưa kiểm tra | |
| E16 | Chọn một avatar và bình chọn thử | Chọn avatar; gửi một lượt; kiểm tra điểm/trạng thái và thử bấm lại | Đạt cục bộ; một vote, không cộng lặp và có trạng thái rõ ràng (19/11/2026) | |
| E17 | Chuyển tab giữa AVATAR PARADE và portfolio | Dùng phím ← →; kiểm tra panel tương ứng | Đạt cục bộ; phím mũi tên chuyển đúng tab (19/11/2026) | |
| E18 | Sao chép tóm tắt concept AVATAR PARADE | Bấm nút sao chép và dán thử vào ô văn bản | Trình duyệt chặn clipboard ở chế độ xem tệp; thông báo dự phòng hoạt động (19/11/2026) | |

Ghi chú: Từ V9, chức năng sao chép dùng liên kết GitHub thay cho email mẫu.
Ghi chú V10: bình chọn AVATAR PARADE chỉ là mô phỏng cục bộ trên trình duyệt, không kết nối nền tảng trực tiếp.
