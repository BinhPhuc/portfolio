-- Insert sample blog posts for testing
INSERT INTO public.blog_posts (title, content, excerpt, slug, published, user_id) VALUES
(
  'Bắt đầu với Next.js 15: Những tính năng mới đáng chú ý',
  '# Bắt đầu với Next.js 15

Next.js 15 đã ra mắt với nhiều tính năng mới thú vị. Trong bài viết này, chúng ta sẽ khám phá những cải tiến quan trọng nhất.

## App Router Improvements

App Router trong Next.js 15 đã được cải thiện đáng kể về performance và developer experience.

## Server Components

React Server Components giờ đây hoạt động mượt mà hơn với streaming và partial prerendering.

## Turbopack

Turbopack giờ đây stable và nhanh hơn Webpack đáng kể trong development mode.

Đây chỉ là một số điểm nổi bật. Hãy cùng khám phá chi tiết trong các phần tiếp theo!',
  'Khám phá những tính năng mới và cải tiến trong Next.js 15, từ App Router đến Turbopack và React Server Components.',
  'nextjs-15-tinh-nang-moi',
  true,
  '00000000-0000-0000-0000-000000000000'
),
(
  'TypeScript Tips: Viết code an toàn và hiệu quả hơn',
  '# TypeScript Tips cho Developers

TypeScript đã trở thành standard trong phát triển JavaScript hiện đại. Dưới đây là những tips hữu ích.

## Utility Types

TypeScript cung cấp nhiều utility types mạnh mẽ như `Pick`, `Omit`, `Partial`.

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

type UserPreview = Pick<User, "id" | "name">;
