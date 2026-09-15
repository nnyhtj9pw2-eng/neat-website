# N_AET — GitHub Pages Demo

یک پروتوتایپ تعاملی برای ارائه ایده‌ی وب‌سایت N_AET.

## اجرا
1. این پوشه را در یک Repository در GitHub آپلود کنید.
2. از مسیر `Settings → Pages`، گزینه‌ی Deploy from a branch را انتخاب کنید.
3. Branch را روی `main` و Folder را روی `/ (root)` بگذارید.
4. چند دقیقه بعد لینک GitHub Pages ساخته می‌شود.

## چه چیزهایی قابل تغییر است؟
دکمه‌ی `EDIT` در بالای صفحه یک پنل ویرایش باز می‌کند:
- Hero headline
- متن معرفی
- Mission
- Event title/date
- لینک QR Code
- عنوان QR Code

تغییرات در `localStorage` مرورگر ذخیره می‌شوند و با `RESET` پاک می‌شوند.

## ساختار
- `index.html` — ساختار سایت
- `style.css` — طراحی
- `script.js` — تعاملات، مودال‌ها، ادیتور و QR
- `assets/` — تصاویر محلی

این نسخه برای Pitch/Prototype ساخته شده و می‌توان بعداً آن را به CMS، WhatsApp links، فرم ثبت‌نام و دیتابیس واقعی متصل کرد.
