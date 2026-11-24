# Trang cá nhân — Nguyễn Bình Dương

Website giới thiệu Nguyễn Bình Dương, sinh viên năm nhất ngành Công nghệ thông tin, Đại học Đại Nam. Trang làm bằng HTML, CSS và JavaScript thuần, không máy chủ, không thư viện, không dịch vụ bên thứ ba. Đây là dự án vui để học và thử nghiệm, nên ngoài phần giới thiệu còn có một tinh linh tương tác, game chơi thử và hệ huy hiệu.

- **GitHub repository:** [duong-dquest/A3_2071020054_nguyenbinhduong](https://github.com/duong-dquest/A3_2071020054_nguyenbinhduong)
- **GitHub Pages:** [https://duong-dquest.github.io/A3_2071020054_nguyenbinhduong/](https://duong-dquest.github.io/A3_2071020054_nguyenbinhduong/)

## Mục lục

1. [Nội dung trang](#1-nội-dung-trang)
2. [Hiệu ứng hình ảnh](#2-hiệu-ứng-hình-ảnh)
3. [Tinh linh](#3-tinh-linh)
4. [NITRO DASH chơi thử](#4-nitro-dash-chơi-thử)
5. [Thanh công cụ (dock)](#5-thanh-công-cụ-dock)
6. [Huy hiệu: 15 cách mở khóa](#6-huy-hiệu-15-cách-mở-khóa)
7. [Easter egg](#7-easter-egg)
8. [Hỏi tinh linh](#8-hỏi-tinh-linh)
9. [Phím tắt và trợ năng](#9-phím-tắt-và-trợ-năng)
10. [Dữ liệu và quyền riêng tư](#10-dữ-liệu-và-quyền-riêng-tư)
11. [Chạy thử, cấu trúc, kiểm thử và nguồn](#11-chạy-thử-cấu-trúc-kiểm-thử-và-nguồn)

## 1. Nội dung trang

Trang một cột, menu cố định 4 mục: **Giới thiệu, Về mình, Dự án, Liên hệ**.

- **Giới thiệu:** tên, ảnh đại diện, lời chào, nút xem dự án và kết nối.
- **Về mình:** sáu sở thích (phát triển game, Roblox Studio, TikTok LIVE, công nghệ, khởi nghiệp online, nghe nhạc); khối Học vấn, Kỹ năng hiện có và Mục tiêu theo thông tin tác giả cung cấp. Có thêm **Hành trình** (dòng thời gian 6 mốc: từ những dòng code đầu tiên đến trang này) và **Đang học** (tiếng Anh, làm việc với AI) theo lời tác giả kể.
- **Dự án:** ba thẻ ý tưởng: AVATAR PARADE (Roblox × TikTok LIVE), NITRO DASH (đua xe vô tận, có bản chơi thử) và game bắn súng 2D (mới ở mức ý tưởng). Hai thẻ đầu có phần mô tả mở rộng/thu gọn và nút sao chép tóm tắt.
- **Liên hệ:** liên kết GitHub, nút sao chép liên kết (chưa có email công khai).

## 2. Hiệu ứng hình ảnh

**Ngày và đêm**
- Tự chọn theo giờ: **19:00 đến 05:00 là đêm**, còn lại là ngày. Chưa chọn tay thì trang tự đổi đúng giờ ngay cả khi đang mở. Bấm nút 🌙/☀️ để tự chọn, trang nhớ lựa chọn.
- Chuyển cảnh bằng vòng tròn loe ra từ nút bấm; trình duyệt chưa hỗ trợ thì dùng màn phủ mờ dần.
- **Ban ngày:** mặt trời tỏa tia, mây trôi, 3 con bướm SVG bay uốn lượn (né con trỏ), phấn hoa vàng bay lên.
- **Ban đêm:** mặt trăng, đom đóm, giao diện tối.
- **Cả hai:** 30 sao nhấp nháy (16 trên màn hẹp), sao băng thỉnh thoảng xuất hiện, ánh kim chạy trên tên, đốm sáng đi theo con trỏ trên thẻ sở thích.

**Thời tiết (nút 🌦️ trong menu "⋯")**
- Bấm lần lượt: mưa → tuyết → hoa anh đào → tắt.
- Khi mưa: có lớp sương xám, tinh linh che ô ☂️, bướm và phấn hoa ẩn đi; **mưa tự tạnh sau 45 giây**.
- **Cầu vồng:** sau ít nhất 6 giây mưa, khi mưa tạnh (tự tạnh hoặc bạn đổi hiệu ứng) cầu vồng hiện 14 giây và bướm bay ra lại.
- Reduce motion: không có hạt mưa, tuyết, cánh hoa; vẫn có lớp sương, ô của tinh linh và cầu vồng.

**Nhạc nền (nút 🎵 hoặc nút trong thẻ "Nghe nhạc")**
- Giai điệu hộp nhạc nhẹ nhàng tạo ngay trong trình duyệt (WebAudio), không tải tệp âm thanh nào: các hợp âm Do trưởng 7, La thứ 7, Fa trưởng 7, Sol 6 rải đều, thêm vài nốt giai điệu ngẫu nhiên; ban đêm chậm hơn một chút. **Mặc định tắt**, chỉ phát khi bạn bật; tạm dừng khi rời tab.
- Thẻ "Nghe nhạc" hiện thanh nhấp nhô khi đang phát.

**Ngôn ngữ (nút 🌐 trong menu "⋯")**
- **Tiếng Việt và tiếng Anh.** Lần đầu vào trang, trang chọn theo ngôn ngữ trình duyệt (tiếng Việt thì tiếng Việt, còn lại tiếng Anh). Bấm 🌐 để đổi, trang tải lại và nhớ lựa chọn.
- Đã dịch: nội dung trang, thanh công cụ, huy hiệu, hỏi đáp, game và lời thoại của tinh linh. Lời thoại ngẫu nhiên nào chưa có bản dịch sẽ thay bằng một câu ngắn chung chung bằng tiếng Anh.

**Khi cuộn trang**
- Thanh tiến độ cuộn ở mép trên, màu xanh, vàng, đất nung.
- Menu **ẩn khi cuộn xuống, hiện lại khi cuộn lên** (và luôn hiện khi ở gần đầu trang hoặc khi đang dùng bàn phím trên menu).
- Các khối nội dung **rời màn hình thì ẩn, quay lại thì trượt vào từ đúng hướng cuộn** (cuộn xuống: từ dưới lên; cuộn lên: từ trên xuống).
- Nền trời (mặt trời, mặt trăng) trôi chậm hơn nội dung, tạo độ sâu.
- Tinh linh bị "gió cuốn" khi cuộn nhanh (xem mục 3).

**Chế độ nhẹ (giảm lag)**
- Nút ⚡ trong menu "⋯" bật/tắt chế độ nhẹ, có thông báo nhỏ khi đổi; trang nhớ lựa chọn.
- **Tự bật khi máy có vẻ yếu:** từ 4 luồng CPU trở xuống, RAM từ 4 GB trở xuống (trình duyệt báo), bật "tiết kiệm dữ liệu" hoặc mạng 2G/3G. Nếu chưa bị coi là yếu, trang **đo tốc độ khung hình** sau khi tải xong: dưới khoảng 34 khung hình/giây hai lần liên tiếp thì tự bật và báo bằng thông báo. Đã tự bật thì lần sau vào vẫn nhẹ; bấm ⚡ để về đầy đủ, khi đó trang không tự bật lại.
- **Ép bằng liên kết:** thêm `?lite=1` (nhẹ), `?lite=0` (đầy đủ) hoặc `?lite=auto` (trở về tự động) sau địa chỉ trang.
- **Chế độ nhẹ cắt:** làm mờ nền kính (`backdrop-filter`, thủ phạm lag số một trên máy yếu) và đổ bóng lớn; lớp màu nền chuyển động, tia mặt trời xoay, mây, phấn hoa, bướm, đom đóm, sao băng, ánh kim trên tên, vệt sáng theo chuột; còn lại 8 ngôi sao tĩnh. Hạt sáng ít hơn; mưa, tuyết, cánh hoa còn 12 hạt; mưa cá còn 8 con; chuyển ngày/đêm tức thì; khối nội dung không trượt vào khi cuộn lại và nền trời không trôi.
- **Tinh linh trong chế độ nhẹ:** chạy 30 khung hình/giây, không đổ bóng và phát sáng; chỉ tải sẵn hình mặc định, các biểu cảm tải khi cần. Các thao tác bắt, kéo, ném, thả cá, huy hiệu, game vẫn dùng bình thường.
- **Mọi chế độ:** khi đang chơi NITRO DASH, các hiệu ứng nền tạm dừng để game mượt hơn.
- Reduce motion của hệ điều hành vẫn được tôn trọng riêng.

**Con trỏ chuột:** con trỏ đũa phép; vệt hạt sáng nhỏ đi theo chuột (chỉ với chuột, không với cảm ứng).

## 3. Tinh linh

Nhân vật mèo ở góc màn hình, hình mặc định là `idle.webp`. Có **24 biểu cảm** (12 dễ thương, 12 meme) hiện vài giây theo tình huống rồi quay về hình mặc định; nếu một ảnh lỗi thì tự quay về hình mặc định.

**Chuyển động**
- Bay bằng lò xo: tăng tốc và giảm tốc tự nhiên, hơi nảy khi tới nơi; đung đưa nhẹ sang hai bên khi lơ lửng.
- Ngả người theo hướng bay; khi con trỏ lại gần thì **nghiêng người tò mò về phía con trỏ**; nhún thở khi nghỉ.
- Đổi biểu cảm bằng hiệu ứng chồng mờ kèm cú nhún; quay mặt trái/phải mượt.
- Bị giữ thì đung đưa như con lắc; bị ném thì lộn vòng và bẹp xuống khi chạm đất; cuộn trang nhanh thì bị gió cuốn lên xuống rồi lò xo kéo về.
- Để lại vệt sao khi bay nhanh; bóng thoại bật ra kiểu nảy lò xo, hình có ánh sáng ấm khi đang nói.

**Cách chơi cùng tinh linh**

| Thao tác | Kết quả |
|---|---|
| Bấm hoặc chạm | Đổi biểu cảm, nói một câu ngẫu nhiên, nhảy hoặc xoay; tính 1 lần bắt |
| Kéo và thả | Tính 1 lần bắt; thả nhẹ thì tinh linh cảm ơn |
| Kéo rồi thả nhanh | Ném đi: bay, nảy ở mép màn hình, hạ cánh, chóng mặt rồi lượn tiếp |
| Giữ lâu hơn 2 giây | Tinh linh dỗi |
| Bấm vào chỗ trống trên trang | Thả cá 🐟; tinh linh bay tới ăn |
| Rê chuột lại gần | Thỉnh thoảng (khoảng 30%, cách nhau tối thiểu 5 giây) tinh linh né |
| Enter hoặc Space khi đang focus tinh linh | Như bấm |
| Không thao tác 30 giây | Tinh linh bay về góc và ngủ; bấm, nhấn phím, cuộn hoặc chạm sẽ đánh thức |

- Mỗi **5 lần bắt** có câu thoại riêng; **lần thứ 10** mở huy hiệu; **lần thứ 15** tinh linh nhân bản thành bầy 3 con bay đuổi nhau (bấm từng con để làm biến mất).
- Tinh linh tự nói chuyện mỗi 11 đến 18 giây (câu kháy, meme, joke lập trình), tự biểu diễn nhảy, xoay.

**Phản ứng theo ngữ cảnh**
- Cuộn quá nhanh: "Chậm thôi! Tớ say xe rồi…".
- Rê vào thẻ **Nghe nhạc**: quẩy; rê vào thẻ **Phát triển game**: nhắc chơi thử NITRO DASH.
- Đến gần **ảnh đại diện**: một câu trêu nhỏ (xem easter egg ở mục 7).
- Từ 23:00 đến 05:00: ngáp sau vài giây.
- Rời tab: tiêu đề trang đổi thành "Tinh linh nhớ cậu 🥺"; quay lại thì tinh linh mừng.
- Đổi ngày/đêm, chơi NITRO DASH, mở khóa huy hiệu, đi tour: tinh linh bình luận.

## 4. NITRO DASH chơi thử

Mở ở thẻ dự án NITRO DASH, nút **Chơi thử ▶**. Đây là bản rút gọn của concept.

- **Điều khiển:** ← → hoặc A D để đổi làn; trên điện thoại chạm nửa trái hoặc nửa phải màn chơi; Space, Enter hoặc chạm để bắt đầu và chơi lại.
- **Luật:** 3 làn, 3 máu (tối đa 5). Xe và người qua đường là chướng ngại; tông trúng mất 1 máu, **xe cảnh sát truy đuổi trong 15 giây** (khi đó tông tiếp mất 2 máu và xe chạy nhanh hơn).
- **Tốc độ** tăng dần theo thời gian chơi (tối đa mức 14); điểm tính theo quãng đường.
- **Vật phẩm theo xác suất mỗi lần sinh:** xu 30% (+10 coin), tim hồi máu 10%, khiên 5% (chặn một lần va chạm), còn lại là xe (40%) hoặc người qua đường (15%).
- **Skin:** xe đỏ miễn phí; 5 màu khác (xanh lá, vàng, xanh dương, hồng, đen) 100 coin mỗi màu.
- Coin, kỷ lục và skin đã mua lưu trên máy người chơi.
- **Chưa có trong bản chơi thử:** bộ phận xe, lắp động cơ, nâng cấp, gara, Tesla, Ford, Ferrari… (vẫn là concept).

## 5. Thanh công cụ (dock)

Thanh nhỏ ở góc trái dưới có 5 nút; nút **⋯** mở thêm một hàng 6 nút nữa:

| Nút | Chức năng |
|---|---|
| 🏆 | Mở bảng huy hiệu, hiện số huy hiệu đã có |
| 🧭 | Tour: tinh linh dẫn qua 4 mục và bình luận từng mục |
| 💬 | Hỏi tinh linh (xem mục 8) |
| 🌙 / ☀️ | Đổi giữa ban ngày và ban đêm |
| ⋯ | Mở/đóng hàng nút thêm |
| 🌦️ | Thời tiết: mưa → tuyết → hoa anh đào → tắt |
| 🎵 | Bật/tắt nhạc nền (mặc định tắt) |
| 🔇 / 🔊 | Bật/tắt âm thanh hiệu ứng (mặc định tắt): tiếng pop khi bấm, tiếng "meo" khi bắt tinh linh hoặc hỏi đáp, âm hiệu trong game |
| 🌐 | Đổi giữa tiếng Việt và tiếng Anh |
| ⚡ | Chế độ nhẹ (giảm lag): bật/tắt, xem mục 2 |
| ⚠️ | Đừng bấm: trang rung, tinh linh bay tới gặm một thẻ sở thích, các khối rơi xuống; nút **Khôi phục trang** (hoặc phím Esc) đưa mọi thứ về như cũ |

## 6. Huy hiệu: 15 cách mở khóa

| # | Huy hiệu | Cách mở khóa |
|---|---|---|
| 1 | 🎯 Thợ săn tinh linh | Bắt tinh linh **10 lần** (bấm, chạm hoặc bắt đầu kéo; Enter/Space cũng tính) |
| 2 | ⏰ Kẻ phá giấc ngủ | Đánh thức tinh linh đang ngủ (để yên 30 giây rồi bấm, nhấn phím hoặc cuộn) |
| 3 | 🐟 Người nuôi mèo | Bấm vào chỗ trống để thả cá và để tinh linh ăn xong |
| 4 | 🧭 Nhà thám hiểm | Mở phần mô tả mở rộng của **cả hai** dự án: AVATAR PARADE và NITRO DASH |
| 5 | 🥚 Thợ săn bí mật | Tìm một easter egg (xem mục 7) |
| 6 | 🏎️ Tay đua mới | Bấm Chơi thử và bắt đầu một ván NITRO DASH |
| 7 | 🥷 Né như ninja | Đạt **500 điểm** trong NITRO DASH |
| 8 | 🌙 Cú đêm | Tự bật chế độ đêm bằng nút 🌙 |
| 9 | ⚠️ Cấm bấm mà vẫn bấm | Bấm nút ⚠️ |
| 10 | 🎫 Khách VIP | Đi hết tour 🧭 (cả 4 điểm dừng) |
| 11 | 🐱 Chúa tể bầy mèo | Bắt tinh linh **15 lần** để tinh linh nhân bản |
| 12 | 💬 Phóng viên | Hỏi tinh linh một câu trong khung 💬 |
| 13 | 🌦️ Nhà khí tượng | Thử đủ cả ba hiệu ứng thời tiết: mưa, tuyết, hoa anh đào (tiến độ lưu trên máy) |
| 14 | 🌈 Sau cơn mưa | Xem cầu vồng xuất hiện sau khi mưa tạnh (mưa ít nhất 6 giây) |
| 15 | 🎵 Người nghe nhạc | Bật nhạc nền |

Lưu ý: với chế độ **Reduce motion**, tinh linh không tự bay nên huy hiệu 3 (thả cá), 11 (bầy) và easter egg mưa cá không dùng được; các huy hiệu còn lại vẫn mở được. Huy hiệu lưu trên máy, xóa dữ liệu trình duyệt sẽ mất.

## 7. Easter egg

- **Mã Konami:** bấm ↑ ↑ ↓ ↓ ← → ← → B A: cả trang chuyển màu cầu vồng 9 giây.
- **Gõ `sigma`** (không đang ở ô nhập): cả trang chuyển đen trắng "sigma mode" 7 giây.
- **Nhấp đúp vào chỗ trống:** mưa cá 🐟 (không có khi bật Reduce motion).
- **Tinh linh đến gần ảnh đại diện:** tinh linh thốt lên "Ohh.. ai mà đẹp trai quá vậy ta, cho 10/100 điểm" (tối đa một lần mỗi 25 giây). Mẹo: bấm vào ảnh đại diện để thả cá ngay cạnh, tinh linh sẽ bay tới ăn rồi bình luận.

Cả bốn đều mở huy hiệu 🥚.

## 8. Hỏi tinh linh

Khung chat 💬 chạy hoàn toàn offline, trả lời theo từ khóa (không dấu cũng được) và chỉ nói điều có trên trang. Các chủ đề: trường và ngành, hành trình, việc đang học, kỹ năng (kể cả VPN, Ping), mục tiêu, dự án, game bắn súng 2D, game và Roblox, sở thích, liên hệ và GitHub, giới thiệu, tinh linh, lời chào. Hỏi tuổi, lương, địa chỉ, số điện thoại thì tinh linh từ chối trả lời thay vì bịa.

## 9. Phím tắt và trợ năng

- **Esc:** đóng bảng huy hiệu/hỏi đáp và khôi phục trang sau "Đừng bấm".
- **Tab:** liên kết bỏ qua điều hướng, trạng thái focus rõ ràng; các nút có nhãn; bong bóng thoại và thông báo huy hiệu dùng vùng thông báo (`aria-live`).
- **Reduce motion (cài đặt hệ điều hành):** tinh linh đứng yên (vẫn kéo và đổi biểu cảm được, không ném), đổi ngày/đêm tức thì, tắt bướm, phấn hoa, hạt mưa/tuyết/cánh hoa, vệt sao, menu ẩn/hiện, khối nội dung trượt, thanh tiến độ vẫn hiện.

## 10. Dữ liệu và quyền riêng tư

Trang không gửi dữ liệu đi đâu và không dùng dịch vụ bên thứ ba. Chỉ có `localStorage` trên máy người xem với các khóa: `badges` (huy hiệu), `phase` (ngày/đêm đã chọn tay), `wxSeen` (tiến độ huy hiệu thời tiết), `sound` (âm thanh hiệu ứng), `lang` (ngôn ngữ), `perf` (`lite` hoặc `full`, chế độ nhẹ), `nitro` (coin, kỷ lục, skin). Nhạc nền không lưu: luôn tắt khi mở trang. Xóa dữ liệu trình duyệt để đặt lại.

## 11. Chạy thử, cấu trúc, kiểm thử và nguồn

**Chạy thử:** tải hoặc clone repository, mở `index.html`. Không cần cài đặt hay build. Clipboard có thể chỉ hoạt động trên HTTPS hoặc localhost.

```text
.
├── index.html
├── css/style.css
├── js/
│   ├── perf.js      # phát hiện máy yếu, chế độ nhẹ (nạp ở phần đầu trang)
│   ├── i18n.js      # bản tiếng Anh của nội dung trang (chạy đầu tiên)
│   ├── main.js      # menu, hiệu ứng xuất hiện, sao chép
│   ├── fairy.js     # tinh linh: chuyển động, biểu cảm, bắt/ném, sao nền
│   ├── scroll.js    # thanh tiến độ, menu ẩn/hiện, khối trượt khi cuộn
│   ├── game.js      # NITRO DASH
│   └── extras.js    # dock, huy hiệu, buổi trong ngày, thời tiết, nhạc, tour, hỏi đáp, easter egg
├── assets/
│   ├── avatar.jpg, background.webp, fairy.png
│   └── fairy/       # idle + 24 biểu cảm (.webp)
├── docs/            # AI_LOG.md, evidence-index.md, yeu-cau-thiet-ke.md
├── README.md
└── CHANGELOG.md
```

**Kiểm thử:** các phép thử và trạng thái thật nằm ở [docs/evidence-index.md](docs/evidence-index.md); nhiều mục mới mới chạy cục bộ bằng Chromium không giao diện, mục chưa chạy ghi "Chưa kiểm tra".

**Giới hạn đã biết**
- Hiệu quả của chế độ nhẹ mới được đo trên Chromium không giao diện (1 nhân CPU, không GPU); đã đo trên điện thoại hay máy yếu thật.
- đã kiểm thử trên điện thoại thật, Safari, Firefox hoặc bằng Lighthouse; chuyển động đã được đánh giá bằng mắt trên nhiều thiết bị.
- Chưa có email liên hệ; hiện dùng liên kết GitHub.
- Nguồn và giấy phép ảnh nền đã được xác minh.
- AVATAR PARADE, NITRO DASH và game bắn súng 2D là ý tưởng; trang không kết nối Roblox hay TikTok LIVE.
- Trang đã có chứng chỉ hay sản phẩm đã hoàn thiện.

**Nguồn và khai báo AI**
- Ảnh đại diện: ảnh cá nhân của tác giả, đã cắt vuông 480px.
- Ảnh nền: nguồn uy tín từ google.
- Tinh linh: hình mặc định và hai bảng biểu cảm do tác giả cung cấp (ảnh AI; các meme là bản vẽ lại theo phong cách mèo); đã tách nền và chuẩn hóa khung.
- Thông tin học vấn, kỹ năng, mục tiêu, hành trình và việc đang học do tác giả cung cấp; mốc 11/2026 lấy từ lịch sử CHANGELOG của repo.
- Quá trình dùng AI ghi tại [docs/AI_LOG.md](docs/AI_LOG.md).
