# CHANGELOG

## V18 — thay bộ biểu cảm tinh linh (24 biểu cảm)
Ngày: 19/11/2026

**Thay đổi**
- Thay toàn bộ biểu cảm cũ bằng 24 biểu cảm mới từ hai bảng ảnh của tác giả: 12 biểu cảm dễ thương và 12 biểu cảm meme (Sigma, Khóc thumbs-up, Pop Cat, Side-Eye, This Is Fine, Success Kid, Smudge, Hoang mang, Grumpy, Doge, Ngỡ ngàng, Siuuu).
- Giữ hình tinh linh đầu tiên (`idle.webp`) làm trạng thái mặc định; nếu một ảnh biểu cảm lỗi hoặc chưa có thì tinh linh tự quay về hình này.
- Tên tâm trạng trong code ánh xạ sang một hoặc nhiều ảnh (bảng `ALIAS` trong `js/fairy.js`) nên cùng một tình huống có thể ra mặt khác nhau.
- Thêm lời thoại và phản ứng mới cho các biểu cảm mới; đổi ảnh bầy tinh linh và biểu cảm ngáp ban đêm.

## V17 — bổ sung thông tin thật của tác giả
Ngày: 19/11/2026

**Thay đổi**
- Thêm khối “Mình đang xây gì?” trong mục Về mình: Học vấn (Đại học Đại Nam, ngành CNTT, năm nhất), Kỹ năng hiện có và Mục tiêu, theo thông tin tác giả cung cấp.
- Thêm thẻ dự án “Game bắn súng 2D” ở mức ý tưởng, không thêm chi tiết chưa được cung cấp; cập nhật chú thích dự án và câu giới thiệu đầu trang.
- Mở rộng câu trả lời của “Hỏi tinh linh” (trường, kỹ năng, mục tiêu, game bắn súng 2D) và lời thoại tour.

## V16 — NITRO DASH chơi thử, huy hiệu, ngày/đêm và nhiều trò của tinh linh
Ngày: 19/11/2026

**Thay đổi**
- `js/game.js`: bản chơi thử NITRO DASH trên canvas (3 làn, xe và người qua đường, xu +10, tim 10%, khiên 5%, cảnh sát truy đuổi 15 giây, tốc độ tăng dần, skin màu mua bằng coin, kỷ lục lưu trên máy). Chưa có bộ phận xe, lắp động cơ, nâng cấp và gara; các xe Tesla, Ford, Ferrari… vẫn là concept.
- `js/extras.js`: dock công cụ; 12 huy hiệu (lưu localStorage); chế độ ngày/đêm tự theo giờ, có đom đóm; tour “Dẫn tớ đi xem”; ô “Hỏi tinh linh” trả lời offline theo từ khóa; âm thanh WebAudio mặc định tắt; con trỏ đũa phép.
- Nút “Đừng bấm”: trang rung, tinh linh gặm một thẻ, các khối rơi, có nút “Khôi phục trang” (Esc cũng khôi phục).
- Easter egg: mã Konami, gõ “sigma”, nhấp đúp để mưa cá. Bầy tinh linh xuất hiện ở lần bắt thứ 15.
- Tinh linh phản ứng theo ngữ cảnh: cuộn quá nhanh, rê vào thẻ Nghe nhạc/Phát triển game, khuya, rời tab đổi tiêu đề.
- `js/fairy.js` phát sự kiện `fairy` và mở API `window.Fairy`; bấm vào canvas, bảng và dock không còn thả cá.

**Kiểm tra:** xem E35–E41 tại `docs/evidence-index.md`.

## V15 — thêm dự án NITRO DASH, chỉnh lời thoại tinh linh
Ngày: 19/11/2026

**Thay đổi**
- Thêm thẻ dự án NITRO DASH (concept game đua xe vô tận) với phần cơ chế mở rộng/thu gọn và nút sao chép tóm tắt riêng; cập nhật chú thích concept, giới thiệu và mô tả meta.
- Sửa lỗi V14 làm nhãn “01 / PLAY”… trên thẻ sở thích bị lệch xuống sát tiêu đề; nhãn trở lại góc phải thẻ.
- Bỏ biểu cảm ngại ngùng của tinh linh (còn 11 biểu cảm + trạng thái nghỉ); xóa `assets/fairy/ngai-ngung.webp`.
- Viết lại lời thoại tinh linh theo hướng kháy nhẹ, meme và joke lập trình; gom vào `LINES`, `REACTIONS`, `IDLE` trong `js/fairy.js`.
- Thông báo sao chép theo từng nút (`data-copy-done`).

## V14 — tinh linh nhiều biểu cảm, kéo thả và hiệu ứng lấp lánh
Ngày: 19/11/2026

**Thay đổi**
- Tách 12 biểu cảm từ bảng ảnh người dùng cung cấp thành `assets/fairy/*.webp` (nền trong suốt, cùng khung hình); thêm `idle.webp` từ hình tinh linh gốc.
- Tinh linh có thể kéo, thả và ném (rơi, nảy khỏi mép màn hình); đổi biểu cảm theo tình huống: bị bắt, chóng mặt, dỗi, vui, quẩy, ngại ngùng, suy tư, sigma…
- Bấm vào chỗ trống để thả cá: tinh linh bay tới ăn. Thỉnh thoảng né con trỏ chuột, tự biểu diễn, tự ngủ sau 30 giây không thao tác và thức khi có người quay lại.
- Đếm số lần bắt; mỗi 5 lần có lời chúc riêng. Enter hoặc Space cũng “bắt” được tinh linh.
- Thêm sao nền ngẫu nhiên, sao băng, vệt sáng theo chuột, ánh kim chạy trên tên, đốm sáng theo con trỏ trên thẻ sở thích.
- Tách logic tinh linh và hiệu ứng ra `js/fairy.js`; gỡ khối tinh linh cũ khỏi `js/main.js`.
- Giữ Reduce motion: tinh linh đứng yên, không ném, không hạt sáng; vẫn kéo và đổi biểu cảm được.

**Kiểm tra:** xem E24–E30 tại `docs/evidence-index.md`; các bước chưa chạy vẫn ghi “Chưa kiểm tra”.

## V13 — tinh chỉnh tinh linh tương tác
Ngày: 19/11/2026

**Thay đổi**
- Thay tạo hình SVG bằng hình tinh linh do người dùng cung cấp; tạo PNG nền trong suốt và cắt gọn khung hình.
- Làm đường bay chậm, ngắn và có nhịp nghỉ để chuyển động tự nhiên hơn.
- Thêm bong bóng thoại ngẫu nhiên theo thời gian; bấm/chạm khiến tinh linh phản ứng và đổi hướng.
- Giữ hỗ trợ bàn phím, màn hình nhỏ và Reduce Motion.

## V12 — thêm tinh linh và hiệu ứng sao
Ngày: 19/11/2026

**Thay đổi**
- Thêm sao trời và hạt sáng lấp lánh nhẹ trên nền phong cảnh; tăng độ trong của khung trang.
- Thêm tinh linh AI tự bay quanh trang, đổi hướng khi di chuyển và có lời thoại khi được bấm/chạm.
- Tôn trọng cài đặt giảm chuyển động; tinh linh đứng yên khi Reduce motion được bật.

## V11 — làm dịu màu sắc và tinh giản dự án
Ngày: 19/11/2026

**Thay đổi**
- Chuyển giao diện sang tông kem, xanh lá và đất nung; làm ảnh nền phong cảnh rõ hơn với ánh màu chuyển động nhẹ.
- Rút gọn AVATAR PARADE thành một thẻ dự án; thay tab và demo bình chọn bằng phần mô tả mở rộng/thu gọn.
- Giữ thao tác sao chép tóm tắt và cập nhật mô tả tính năng trong tài liệu.

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
