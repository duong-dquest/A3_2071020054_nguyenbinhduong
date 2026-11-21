# Bảng minh chứng

Quy tắc: chưa thử thì ghi **Chưa kiểm tra**. Ảnh chụp phải cắt bỏ tab lạ, email/tài khoản, thông báo. Link minh chứng phải mở được bằng cửa sổ ẩn danh.

| Mã | Tuyên bố | Phép thử | Kết quả thật | Minh chứng |
|----|----------|----------|--------------|------------|
| E1 | Menu cuộn tới đúng 4 mục và tô sáng mục đang xem | Bấm từng mục menu trên URL Pages | Đạt trên Pages; cả 4 mục (19/11/2026) | |
| E2 | Ảnh đại diện và ảnh nền hiển thị | Mở URL Pages, xem tab Network (không 404) | Đạt trên Pages; avatar và ảnh nền tải được (19/11/2026) | |
| E3 | `css/style.css` được tải trên Pages | Tab Network: trạng thái 200 | Đạt trên Pages; stylesheet v12 đã tải (19/11/2026) | |
| E4 | Liên kết liên hệ mở đúng hồ sơ GitHub | Bấm "Mở GitHub", xác nhận hồ sơ | Chưa kiểm tra | |
| E5 | Không tràn ngang ở nhiều kích thước màn hình | DevTools responsive, kiểm tra `scrollWidth` | Đạt trên Pages ở 320 / 360 / 390 / 600 / 768 / 1280px (19/11/2026) | |
| E6 | URL Pages khớp phiên bản nộp | Đối chiếu commit triển khai và nội dung URL live | Đạt; workflow Pages triển khai commit [`a73d1a0`](https://github.com/duong-dquest/trang-gioi-thieu-ban-than/commit/a73d1a06d1854606191abdcc25387624be43e54f) thành công (19/11/2026) | |
| E7 | Link minh chứng mở được | Mở bằng cửa sổ ẩn danh | Chưa kiểm tra | |
| E8 | Tab Dự án đổi nội dung | Bấm 2 tab; dùng phím ← → | Đã bỏ trong V11; kết quả Pages bên dưới ghi nhận phiên bản V10 | |
| E9 | Nút "Sao chép liên kết GitHub" hoạt động | Bấm nút, dán thử vào ô bất kỳ | Chưa kiểm tra | |
| E10 | Menu không vỡ trên màn hình 320px | DevTools 320px, kiểm tra cuộn ngang | Đạt trên Pages; không tràn ngang (19/11/2026) | |
| E11 | Hiệu ứng xuất hiện khi cuộn không che nội dung | Cuộn qua các khu vực và kiểm tra trạng thái từng phần | Đạt trên Pages; 10 phần tử hiện đầy đủ, có cơ chế dự phòng (19/11/2026) | |
| E12 | Nút lên đầu trang chỉ hiện sau khi cuộn | Cuộn xuống quá 420px, bấm nút, kiểm tra quay về đầu | Đạt trên Pages (18/11/2026) | |
| E13 | Chuyển động được giảm theo cài đặt hệ thống | Bật Reduce motion và kiểm tra chuyển động/hiệu ứng cuộn | Đạt trên Pages (19/11/2026) | |
| E14 | Liên kết GitHub mở đúng repository | Bấm liên kết ở Dự án và Liên hệ | Chưa kiểm tra | |
| E15 | Nội dung vẫn hiện khi trình duyệt không hỗ trợ IntersectionObserver | Tắt/hạn chế IntersectionObserver, nạp lại trang | Chưa kiểm tra | |
| E16 | Chọn một avatar và bình chọn thử | Chọn avatar; gửi một lượt; kiểm tra điểm/trạng thái và thử bấm lại | Đã bỏ trong V11; kết quả Pages bên dưới ghi nhận phiên bản V10 | |
| E17 | Chuyển tab giữa AVATAR PARADE và portfolio | Dùng phím ← →; kiểm tra panel tương ứng | Đã bỏ trong V11; kết quả Pages bên dưới ghi nhận phiên bản V10 | |
| E18 | Sao chép tóm tắt concept AVATAR PARADE | Bấm nút sao chép và kiểm tra phản hồi clipboard | Nút báo sao chép thành công trên Pages; chưa xác nhận thao tác dán (19/11/2026) | |
| E19 | Mở/đóng phần mô tả mở rộng của dự án | Bấm “Khám phá ý tưởng”; mở rồi đóng bằng bàn phím và chuột | Chưa kiểm tra | |
| E20 | Nền phong cảnh và màu giao diện ở màn hình hẹp | Kiểm tra 320px, 768px, 1280px; xác nhận không tràn ngang | Chưa kiểm tra | |
| E21 | Tinh linh lượn, thỉnh thoảng trò chuyện và phản hồi khi bấm | Theo dõi vị trí/lời thoại tự động; bấm và kiểm tra lời thoại mới | Đạt cục bộ; đường bay đổi vị trí mềm, bong bóng tự hiện và click phản hồi (19/11/2026) | |
| E22 | Sao nền và Reduce motion | Kiểm tra các lớp sao; bật Reduce motion và xác nhận animation dừng | Đạt cục bộ; animation tinh linh dừng, không tràn ngang ở 320px (19/11/2026) | |
| E23 | Hình tinh linh nền trong suốt | Tải `assets/fairy.png`; kiểm tra ảnh hiển thị và không còn nền trắng | Đạt cục bộ; ảnh PNG tải đúng với alpha trong suốt (19/11/2026) | |

| E24 | Kéo, thả tinh linh bằng chuột | Kéo tinh linh; kiểm tra vị trí đổi, biểu cảm “sợ hãi” khi đang bị giữ | Đạt cục bộ (Chromium headless, 1280 và 320px; 19/11/2026); chưa thử cảm ứng thật | |
| E25 | Bấm vào tinh linh cho biểu cảm và lời thoại | Bấm tinh linh; kiểm tra bong bóng thoại hiện | Đạt cục bộ (Chromium headless; 19/11/2026); chưa duyệt bằng mắt từng biểu cảm trong trang | |
| E26 | Thả cá: tinh linh bay tới ăn | Bấm vào chỗ trống; kiểm tra cá xuất hiện rồi biến mất sau khi tinh linh tới | Đạt cục bộ (Chromium headless; 19/11/2026) | |
| E27 | Ném tinh linh, tự ngủ, né con trỏ | Thả khi đang kéo nhanh; chờ 30 giây; rê chuột lại gần | Chưa kiểm tra | |
| E28 | Reduce motion với V14 | Bật Reduce motion; kiểm tra không tự bay, không hạt sáng, không ném | Chưa kiểm tra | |
| E29 | Sao ngẫu nhiên, sao băng, vệt sáng chuột | Đếm lớp sao; chờ sao băng; rê chuột | Đạt một phần cục bộ: tạo 30 sao (16 ở 320px), không lỗi console, không tràn ngang; chưa xác nhận sao băng bằng mắt (19/11/2026) | |
| E30 | 12 ảnh biểu cảm nền trong suốt | Ghép ảnh `assets/fairy/*.webp` trên nền kem; xem viền và nhãn chữ | Đạt cục bộ; bảng ghép đã xem, nhãn chữ đã loại (19/11/2026) | |

| E31 | Nhãn “01 / PLAY”… nằm đúng góc thẻ sở thích | Mở trang, xem 6 thẻ ở 1280px | Đạt cục bộ (Chromium headless; 19/11/2026) | |
| E32 | Thẻ NITRO DASH hiển thị, mở/đóng cơ chế, không tràn ngang | Bấm “Xem cơ chế game”; kiểm tra 320px và 1280px | Đạt cục bộ (Chromium headless; 19/11/2026) | |
| E33 | Sao chép tóm tắt NITRO DASH | Bấm nút sao chép và dán thử | Chưa kiểm tra | |
| E34 | Lời thoại mới vừa bong bóng; không còn biểu cảm ngại ngùng | Bấm tinh linh nhiều lần, đọc lời thoại ở 320px | Đã bỏ tệp biểu cảm; chưa duyệt từng lời thoại trên màn hình nhỏ | |

| E35 | NITRO DASH chơi thử: bắt đầu, đổi làn, va chạm, cảnh sát 15 giây | Mở “Chơi thử”, bấm canvas, dùng phím mũi tên | Đạt cục bộ (Chromium headless, 1280 và 320px; 19/11/2026); chưa kiểm tra tim/khiên/xu bằng mắt, kết thúc ván và mua skin | |
| E36 | Điều khiển cảm ứng của game | Chạm nửa trái/phải canvas trên điện thoại thật | Chưa kiểm tra | |
| E37 | Huy hiệu mở khóa, lưu lại sau khi tải lại trang | Thực hiện vài hành động; đếm trên nút 🏆; nạp lại | Đạt một phần cục bộ: mở khóa và đếm đúng (6/12); chưa kiểm tra lưu sau khi nạp lại (19/11/2026) | |
| E38 | Chế độ đêm và đom đóm | Bật/tắt nút 🌙; xem độ tương phản | Đạt cục bộ; đã xem ảnh chụp ở 1280px (19/11/2026) | |
| E39 | Nút Đừng bấm và Khôi phục | Bấm ⚠️; chờ thẻ rơi, tinh linh gặm thẻ; bấm Khôi phục | Đạt cục bộ (Chromium headless; 19/11/2026) | |
| E40 | Tour, Hỏi tinh linh, mưa cá | Bấm 🧭; hỏi “dự án”; nhấp đúp vào chỗ trống | Đạt cục bộ (Chromium headless; 19/11/2026); chưa kiểm tra đủ 4 điểm dừng của tour | |
| E41 | Konami, gõ “sigma”, âm thanh, bầy tinh linh, Reduce motion với V16 | Thử từng thao tác; bật âm thanh; bắt 15 lần; bật Reduce motion | Chưa kiểm tra | |

| E42 | Khối Học vấn, Kỹ năng, Mục tiêu hiển thị đủ và không tràn ngang | Xem mục Về mình ở 320px và 1280px | Đạt cục bộ (Chromium headless; 19/11/2026) | |
| E43 | Thẻ Game bắn súng 2D và chú thích dự án | Cuộn tới Dự án, đọc ba thẻ | Đạt cục bộ (Chromium headless; 19/11/2026) | |
| E44 | “Hỏi tinh linh” trả lời đúng về trường, kỹ năng, mục tiêu | Hỏi “học trường nào”, “biết làm gì”, “mục tiêu” | Chưa kiểm tra | |

| E45 | 25 ảnh tinh linh (hình mặc định + 24 biểu cảm) nền trong suốt, không bị cắt | Ghép trên nền kem và xem từng ảnh | Đạt cục bộ; bảng ghép đã xem (19/11/2026) | |
| E46 | Mọi biểu cảm tải được, không 404, và hình mặc định vẫn hiện khi chưa có biểu cảm | Bấm tinh linh nhiều lần; theo dõi lỗi tải ảnh | Đạt cục bộ (Chromium headless; 19/11/2026) | |
| E47 | Từng cặp tình huống và biểu cảm hợp ngữ cảnh | Thử bắt, ném, thả cá, ngủ, đêm khuya, game | Chưa kiểm tra từng tình huống | |

| E48 | Ảnh tinh linh có viền mềm, không thủng, không còn rìa kem trên nền tối | Ghép ảnh lên nền tối và xem; đếm điểm ảnh bán trong suốt | Đạt cục bộ; đã xem bảng ghép trên nền tối (19/11/2026) | |
| E49 | Chuyển động lò xo, nghiêng, co giãn, đổi mặt mượt, đung đưa khi bị giữ | Quan sát tinh linh lượn, bị giữ, bị ném, đổi biểu cảm | Chưa kiểm tra bằng mắt; chỉ xác nhận không lỗi và biến đổi được áp dụng (19/11/2026) | |
| E50 | Ảnh mới không bị cache cũ trên Pages | Nạp lại trang sau khi triển khai, xem tab Network | Chưa kiểm tra | |

| E51 | Hiệu ứng ban ngày hiển thị (mặt trời, mây, bướm, phấn hoa) và mờ đi khi sang đêm | Xem trang ban ngày; bật 🌙 và xem lại | Đạt cục bộ (Chromium headless; 20/11/2026); chưa đánh giá mật độ bằng mắt trên nhiều màn hình | |
| E52 | Chuyển cảnh vòng tròn và phương án dự phòng | Bấm 🌙/☀️; thử lại khi tắt View Transitions | Đạt cục bộ (Chromium headless; 20/11/2026); chưa thử Safari, Firefox | |
| E53 | Tự đổi ngày/đêm đúng giờ khi chưa chọn tay | Chờ qua mốc 19:00 hoặc 05:00 | Chưa kiểm tra | |

| E54 | Bướm nhỏ, bay uốn lượn, quay lại khi chạm mép và né con trỏ | Quan sát bướm; rê chuột lại gần | Đạt cục bộ (Chromium headless): 3 bướm, vị trí đổi và nằm trong màn hình, bướm lùi xa khi con trỏ tới gần; chưa đánh giá độ tự nhiên bằng mắt (20/11/2026) | |
| E55 | Con trỏ đũa phép rõ nét ở kích thước nhỏ | Xem ảnh phóng to trên nền sáng và tối; rê chuột trên trang | Đã xem ảnh phóng to; chưa kiểm tra con trỏ thật trên Safari, Firefox (20/11/2026) | |

| E56 | Thanh tiến độ cuộn; menu ẩn khi cuộn xuống, hiện khi cuộn lên | Cuộn xuống, cuộn lên; xem thanh và menu | Đạt cục bộ (Chromium headless, 1280 và 320px; 20/11/2026) | |
| E57 | Khối nội dung trượt vào khi cuộn lại và không ẩn nhầm nội dung đang xem | Cuộn từng bước qua cả trang, kiểm tra độ đục của mọi khối trong màn hình | Đạt cục bộ: 0 khối ẩn nhầm ở 1280 và 320px; chưa đánh giá độ mượt bằng mắt (20/11/2026) | |
| E58 | Tinh linh bị gió cuốn khi cuộn, nghiêng theo con trỏ, đung đưa, hiệu ứng nhảy/xoay mới | Cuộn nhanh; rê chuột quanh tinh linh; bấm nhiều lần | Chưa kiểm tra bằng mắt; chạy không lỗi (20/11/2026) | |
| E59 | README liệt kê đủ 12 huy hiệu và các tính năng | Đối chiếu tên huy hiệu và chức năng với mã nguồn | Đã đối chiếu tên 12 huy hiệu bằng lệnh; các chi tiết còn lại đối chiếu thủ công (20/11/2026) | |

| E60 | Bốn buổi trong ngày | (đã bỏ) | Đã bỏ trong V24 vì hiệu ứng không rõ; quay lại hai chế độ ngày/đêm | |
| E61 | Thời tiết: mưa, tuyết, hoa anh đào; tinh linh che ô; cầu vồng sau mưa | Bấm nút thời tiết; chờ hơn 6 giây rồi đổi hiệu ứng | Đạt cục bộ (Chromium headless, 1280 và 320px; 21/11/2026); mưa tự tạnh sau 45 giây chưa chờ kiểm tra | |
| E62 | Nhạc nền bật/tắt, thẻ Nghe nhạc đổi trạng thái | Bấm nút nhạc ở dock và ở thẻ | Bật/tắt và đổi nhãn đạt cục bộ; chưa nghe âm thanh thật trên thiết bị (21/11/2026) | |
| E63 | Bản tiếng Anh: không lệch phần tử dịch, huy hiệu và hỏi đáp đúng ngôn ngữ | Mở với ngôn ngữ en; kiểm tra cảnh báo i18n, tên huy hiệu, câu trả lời | Đạt cục bộ ở 1280 và 320px; 97 khóa dịch lời thoại khớp mã nguồn; chưa rà soát câu chữ bằng người (21/11/2026) | |
| E64 | Menu “⋯” trên điện thoại hẹp không tràn | Mở menu ở 320px | Không tràn ngang ở 320px; chưa thử cảm ứng thật (21/11/2026) | |

| E65 | Chuyển ngày/đêm bằng nút; số huy hiệu hiển thị 0/15 | Bấm nút 🌙/☀️ ba lần; xem số huy hiệu | Đạt cục bộ (Chromium headless; 21/11/2026) | |
| E66 | Mục Hành trình và Đang học hiển thị đủ, có bản tiếng Anh, không tràn ngang | Xem hai mục ở 1280 và 320px, tiếng Việt và tiếng Anh | Đạt cục bộ: 6 mốc, 11 thẻ, không cảnh báo dịch, không tràn ngang (21/11/2026); chưa xem lại bố cục bằng mắt | |
| E67 | Easter egg avatar: tinh linh bình luận khi đến gần ảnh đại diện | Bấm vào ảnh đại diện để thả cá; chờ tinh linh ăn xong | Đạt cục bộ ở cả tiếng Việt và tiếng Anh; huy hiệu 🥚 mở; chưa thử khi tinh linh tự bay tới (21/11/2026) | |
| E68 | Nhạc nền mới phát đều, không lỗi | Bật nhạc 5 giây, đếm nốt phát ra | Đạt cục bộ: khoảng 20 nốt trong 5 giây, không lỗi; **chưa ai nghe thử nên chưa biết nhạc có dễ nghe không** (21/11/2026) | |
| E69 | Hỏi tinh linh trả lời đúng về hành trình và việc đang học | Hỏi “hành trình thế nào”, “đang học gì”; thử bằng tiếng Anh | Đạt cục bộ ở cả hai ngôn ngữ (21/11/2026) | |

Ghi chú: Từ V9, chức năng sao chép dùng liên kết GitHub thay cho email mẫu.
Ghi chú: các kết quả trên Pages hiện có thuộc phiên bản V10; các thay đổi V11–V24 cần kiểm tra lại sau khi triển khai.
