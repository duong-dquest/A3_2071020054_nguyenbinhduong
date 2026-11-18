# Bảng minh chứng

Quy tắc: chưa thử thì ghi **Chưa kiểm tra**. Ảnh chụp phải cắt bỏ tab lạ, email/tài khoản, thông báo. Link minh chứng phải mở được bằng cửa sổ ẩn danh.

| Mã | Tuyên bố | Phép thử | Kết quả thật | Minh chứng |
|----|----------|----------|--------------|------------|
| E1 | Menu cuộn tới đúng 4 mục và tô sáng mục đang xem | Bấm từng mục menu trên URL Pages | Đạt trên trình duyệt cục bộ; cả 4 mục (18/11/2026) | |
| E2 | Ảnh đại diện và ảnh nền hiển thị | Mở URL Pages, xem tab Network (không 404) | Đạt trên Pages; cả hai ảnh tải được (18/11/2026) | |
| E3 | `css/style.css` được tải trên Pages | Tab Network: trạng thái 200 | Đạt trên Pages; stylesheet đã tải (18/11/2026) | |
| E4 | Liên kết liên hệ mở đúng hồ sơ GitHub | Bấm "Mở GitHub", xác nhận hồ sơ | Chưa kiểm tra | |
| E5 | Không tràn ngang ở 1280 / 768 / 390 px | DevTools responsive, kiểm tra `scrollWidth` | Đạt trên Pages ở 320 / 390 / 768 / 1280px (18/11/2026) | |
| E6 | URL Pages khớp phiên bản nộp | Đối chiếu commit triển khai và nội dung URL live | Đạt; workflow Pages deploy commit `9a460ce` thành công (18/11/2026) | |
| E7 | Link minh chứng mở được | Mở bằng cửa sổ ẩn danh | Chưa kiểm tra | |
| E8 | Tab Dự án đổi nội dung | Bấm 2 tab; dùng phím ← → | Đạt trên Pages (18/11/2026) | |
| E9 | Nút "Sao chép liên kết GitHub" hoạt động | Bấm nút, dán thử vào ô bất kỳ | Chưa kiểm tra | |
| E10 | Menu không vỡ trên màn hình 320px | DevTools 320px, chụp đầu trang | Đạt trên Pages; không tràn ngang (18/11/2026) | |
| E11 | Hiệu ứng xuất hiện khi cuộn không che nội dung | Cuộn lần lượt qua các khu vực và kiểm tra từng phần hiện ra | Đạt trên Pages; 7 phần tử hiện sau khi cuộn (18/11/2026) | |
| E12 | Nút lên đầu trang chỉ hiện sau khi cuộn | Cuộn xuống quá 420px, bấm nút, kiểm tra quay về đầu | Đạt trên Pages (18/11/2026) | |
| E13 | Chuyển động được giảm theo cài đặt hệ thống | Bật Reduce motion và kiểm tra chuyển động/hiệu ứng cuộn | Đạt trên Pages (18/11/2026) | |
| E14 | Liên kết GitHub mở đúng repository | Bấm liên kết ở Dự án và Liên hệ | Chưa kiểm tra | |
| E15 | Nội dung vẫn hiện khi trình duyệt không hỗ trợ IntersectionObserver | Tắt/hạn chế IntersectionObserver, nạp lại trang | Chưa kiểm tra | |

Ghi chú: Từ V9, chức năng sao chép dùng liên kết GitHub thay cho email mẫu.
