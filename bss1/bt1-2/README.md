Đăy là 1 dự án [Next.js](https://nextjs.org/) được bootstrap với[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Bắt đầu với

Đầu tiên, Chạy phần máy chủ phát triển:

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
# hoặc
bun dev
```

Mở [http://localhost:3000](http://localhost:3000) với trình duyệt của bạn để xem kết quả.

Bạn có thể bắt đầu chỉnh sửa trang bằng cách sửa đổi `pages/index.js`. Trang sẽ tự động lưu khi bạn sửa tài liệu.

[API routes](https://nextjs.org/docs/api-routes/introduction) có thể được truy cập trên [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Điểm cuối này có thể được chỉnh sửa trong `pages/api/hello.js`.

Thư mục `pages/api` được đối chiếu đến `/api/*`. Tài liệu trong thư mục này có thể được coi là [API routes](https://nextjs.org/docs/api-routes/introduction) thay vì là 1 trang React.

Dự án này sử dụng [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) để tự động tối ưu hóa và tải Inter, 1 Google Font tùy chỉnh.

## Tìm hiểu thêm

Để tìm hiểu thêm về NextJS, bạn có thể xem qua các nguồn tài nguyên sau:

- [Next.js Documentation](https://nextjs.org/docs) - Học thêm về API và tính năng của NextJS.
- [Learn Next.js](https://nextjs.org/learn) - là 1 hướng dẫn tương tác của Next.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
