# Yêu cầu và thiết kế (A3)

## 4 câu trước khi code
1. **Ai sẽ xem?** Giảng viên chấm bài, bạn học, nhà tuyển dụng thực tập.
2. **Họ cần làm gì?** Biết tác giả là ai, xem dự án, liên hệ nhanh.
3. **Website có gì?** Giới thiệu, sáu sở thích nổi bật, hai thẻ dự án (AVATAR PARADE, NITRO DASH) có thể mở rộng mô tả, Liên hệ; một trang, có menu.
4. **Kiểm tra bằng cách nào?** Các phép thử E1–E18 trong [evidence-index.md](evidence-index.md), chạy cục bộ và trên URL GitHub Pages.

Phạm vi: website tĩnh HTML5/CSS3 + JavaScript nhỏ, không có máy chủ, không thu thập dữ liệu.
Tiêu chí chấp nhận: mọi liên kết và nút hoạt động trên URL Pages; hiển thị được ở 320, 768 và 1280 px.

## Đánh giá phương án
| Tiêu chí | A. Một trang cuộn (chọn) | B. Nhiều trang |
|----------|--------------------------|----------------|
| Nội dung hiện có | Ít, vừa một trang | Dễ bị trang thưa |
| Đường dẫn trên Pages | Ít tệp, ít lỗi đường dẫn | Nhiều liên kết cần kiểm tra |
| Người xem | Thấy toàn bộ trong một lượt cuộn | Phải chuyển trang |

Chọn A vì nội dung còn ít; sẽ cân nhắc B khi có nhiều dự án.

## Bố cục và lý do
```
Màn hình rộng              Màn hình hẹp
[Brand]  [Menu x4]         [Menu x4]
[Giới thiệu  | Ảnh]        [Ảnh]
[Thẻ | Thẻ]                [Giới thiệu]
[Sở thích]                 [Thẻ]
[Dự án: hai thẻ gọn]      [Sở thích]
[Liên hệ]                  [Dự án] [Liên hệ]
```
- Menu cố định đầu trang để người xem luôn đổi được mục.
- Ảnh đứng cạnh phần giới thiệu trên màn rộng, xuống trên cùng khi màn hẹp (mốc 680px, 480px).
- Nút liên hệ ở cuối vì đó là bước cuối của người xem.
- Có liên kết bỏ qua điều hướng, focus bàn phím dễ thấy và hỗ trợ giảm chuyển động.
- Hiệu ứng xuất hiện khi cuộn, chuyển động ảnh nhẹ và nút lên đầu trang hỗ trợ khám phá nội dung.
- Liên hệ hiện dùng GitHub vì chưa có địa chỉ email được xác nhận.
- Sở thích trình bày thành lưới sáu thẻ theo chủ đề game, sáng tạo nội dung, công nghệ và âm nhạc.
- AVATAR PARADE được mô tả là concept Roblox × TikTok LIVE; phần nội dung mở rộng giải thích ý tưởng, không mô phỏng kết nối dịch vụ thật.
