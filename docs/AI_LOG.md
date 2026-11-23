# AI_LOG — khai báo AI

| Câu hỏi | Trả lời |
|---------|---------|
| Dùng AI để làm gì? | Claude hỗ trợ tách CSS và soạn khung tài liệu V8. Copilot hỗ trợ nội dung, bố cục, animation và tương tác trong V9–V13. |
| AI hỗ trợ phần nào? | Cấu trúc/tài liệu, giao diện HTML/CSS/JavaScript, concept mô phỏng bình chọn, tương tác tinh linh và kiểm tra tính nhất quán của mô tả tính năng. |
| Phần cần tác giả xác nhận | Nội dung giới thiệu cá nhân, thông tin liên hệ và nguồn/giấy phép ảnh nền. Không tự điền dữ liệu chưa được cung cấp. |
| Tự kiểm tra thế nào? | Các phép thử và kết quả thực tế được ghi tại [evidence-index.md](evidence-index.md); các bước chưa chạy vẫn để “Chưa kiểm tra”. |

## Nhật ký

| Ngày | Công cụ | Yêu cầu | Kết quả | Giữ/sửa |
|------|---------|---------|---------|---------|
| 17/11/2026 | Claude | Chuẩn hóa repo, soạn khung tài liệu V8 | Bộ tệp khung | Tác giả cần rà soát nội dung |
| 18/11/2026 | Claude | Cắt ảnh đại diện; thêm menu, tab Dự án, sao chép email; soạn docs/yeu-cau-thiet-ke.md | Mã HTML/CSS/JS và tài liệu | Tác giả cần rà soát nội dung |
| 18/11/2026 | Copilot | Hoàn thiện README; cải thiện bố cục, chuyển động, trợ năng và liên hệ GitHub | Cập nhật HTML/CSS/JS và tài liệu V9 | Cần tác giả rà soát thông tin cá nhân và nguồn ảnh |
| 19/11/2026 | Copilot | Bổ sung sở thích nổi bật, concept AVATAR PARADE, đồ họa game và demo bình chọn | Cập nhật HTML/CSS/JS và tài liệu V10 | Concept và điểm vote được ghi rõ là mô phỏng; tác giả cần duyệt câu chữ |
| 19/11/2026 | Copilot | Làm dịu màu giao diện, nền phong cảnh và tinh giản phần dự án | Cập nhật HTML/CSS/JS và tài liệu V11 | Thay demo bình chọn/tab bằng phần mô tả mở rộng; tác giả cần duyệt |
| 19/11/2026 | Copilot | Thêm sao lấp lánh và tinh linh tương tác có hỗ trợ Reduce Motion | Cập nhật HTML/CSS/JS và tài liệu V12 | Tinh linh là hoạt ảnh cục bộ; tác giả cần duyệt |
| 19/11/2026 | Copilot | Dùng hình tinh linh người dùng gửi, làm mượt đường bay và thêm lời thoại tự động/nhấp chuột | Cập nhật asset, HTML/CSS/JS và tài liệu V13 | Đã giữ bản gốc đính kèm; asset trang là PNG nền trong suốt |
| 19/11/2026 | Claude | Tách 12 biểu cảm tinh linh, thêm kéo/thả/ném, thả cá, ngủ/né chuột, sao băng và hiệu ứng lấp lánh (V14) | `js/fairy.js`, `assets/fairy/*.webp`, cập nhật HTML/CSS và tài liệu | Bảng biểu cảm do người dùng cung cấp; cần tác giả xác nhận nguồn/giấy phép ảnh và duyệt lời thoại |
| 19/11/2026 | Claude | Sửa lỗi nhãn thẻ sở thích, bỏ biểu cảm ngại ngùng, viết lại lời thoại, thêm thẻ dự án NITRO DASH (V15) | Cập nhật HTML/CSS/JS và tài liệu | Tên NITRO DASH là tên tạm do AI đề xuất; tác giả cần xác nhận tên, giá skin và câu chữ |
| 19/11/2026 | Claude | Thêm game NITRO DASH chơi thử, huy hiệu, ngày/đêm, tour, hỏi tinh linh, âm thanh, Đừng bấm, easter egg, bầy tinh linh (V16) | `js/game.js`, `js/extras.js`, cập nhật HTML/CSS/JS và tài liệu | Bản chơi thử là mô phỏng rút gọn; tác giả cần duyệt cân bằng game, câu trả lời của “Hỏi tinh linh” và lời thoại |
| 19/11/2026 | Claude | Đưa thông tin do tác giả cung cấp vào trang: học vấn, kỹ năng, mục tiêu, thẻ game bắn súng 2D (V17) | Cập nhật HTML/CSS/JS và tài liệu | Nội dung lấy nguyên từ tác giả, không bổ sung dữ kiện; tác giả cần duyệt câu chữ và họ tên hiển thị |
| 19/11/2026 | Claude | Tách 24 biểu cảm mới từ hai bảng ảnh, thay biểu cảm cũ, giữ hình mặc định (V18) | `assets/fairy/*.webp`, cập nhật `js/fairy.js`, `js/extras.js` và tài liệu | Ảnh biểu cảm do tác giả tạo bằng AI; các meme là bản vẽ lại phong cách mèo, tác giả cần cân nhắc nếu dùng ngoài mục đích cá nhân |
| 19/11/2026 | Claude | Làm lại ảnh tinh linh (viền mềm, độ phân giải cao hơn) và nâng cấp hoạt ảnh lò xo, co giãn, đổi mặt mượt (V19) | `assets/fairy/*.webp`, `js/fairy.js`, CSS/HTML và tài liệu | Phiên bản đầu của lần xử lý này làm thủng ảnh và đã được loại bỏ; bản cuối đã xem trên nền tối |
| 20/11/2026 | Claude | Thêm hiệu ứng ban ngày (mặt trời, mây, bướm, phấn hoa), mặt trăng và chuyển cảnh ngày/đêm dạng vòng tròn (V20) | Cập nhật `js/extras.js`, CSS và tài liệu | Hiệu ứng chạy cục bộ; tác giả cần duyệt mật độ và độ nổi của hiệu ứng |
| 20/11/2026 | Claude | Vẽ lại bướm bằng SVG, bay lượn tự nhiên và né con trỏ; vẽ lại con trỏ đũa phép nhỏ gọn hơn (V21) | Cập nhật `js/extras.js`, CSS và tài liệu | Tác giả cần duyệt kích thước và độ nổi của bướm, con trỏ |
| 20/11/2026 | Claude | Thêm hiệu ứng khi cuộn, làm tinh linh mềm hơn, viết lại README đầy đủ (V22) | `js/scroll.js`, cập nhật `js/fairy.js`, CSS, HTML, README và tài liệu | README đối chiếu với mã nguồn; tác giả cần duyệt câu chữ |
| 21/11/2026 | Claude | Thêm bốn buổi trong ngày, thời tiết, cầu vồng, nhạc nền, bản tiếng Anh (V23) | `js/i18n.js`, cập nhật `js/extras.js`, `js/fairy.js`, `js/game.js`, CSS, HTML, README | Bản dịch tiếng Anh do AI soạn, tác giả cần duyệt; thông tin mục 1 và 2 (dòng thời gian, đang học) chưa thêm vì chờ tác giả cung cấp |
| 21/11/2026 | Claude | Thêm Hành trình và Đang học theo lời tác giả, bỏ bốn buổi trong ngày, thêm easter egg avatar, viết lại nhạc nền (V24) | `js/extras.js`, `js/fairy.js`, `js/i18n.js`, CSS, HTML, README và tài liệu | Mốc thời gian do tác giả kể; thứ tự “Cấp 2” và “Lớp 9”, nhãn “Song song” và mốc 11/2026 do AI suy ra, tác giả cần xác nhận; chưa ai nghe thử nhạc mới |
| 22/11/2026 | Claude | Thêm chế độ nhẹ giảm lag: tự phát hiện máy yếu, đo khung hình, nút ⚡, tối ưu hiệu ứng (V25) | `js/perf.js`, cập nhật CSS, `js/fairy.js`, `js/extras.js`, `js/scroll.js`, `js/game.js`, README | Ngưỡng phát hiện máy yếu và đo khung hình do AI chọn, chưa kiểm chứng trên thiết bị yếu thật; tác giả cần thử trên điện thoại/máy cũ |
