// import type { Metadata } from 'next';

// import './globals.css';
// import Footer from '@/components/Footer/Footer';
// import Header from '@/components/Header/Header';
// import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';

// export const metadata: Metadata = {};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <TanStackProvider>
//           <Header />
//           {children}
//           <Footer />
//         </TanStackProvider>
//       </body>
//     </html>
//   );
// }

//////////////////////////

import type { Metadata } from 'next';

import './globals.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';

export const metadata: Metadata = {
  // Додайте тут ваші метадані, якщо вони є. Наприклад:
  title: 'Notehub App',
  description: 'Your personal note-taking application',
};

// 1. Визначаємо інтерфейс для пропсів Layout
interface RootLayoutProps {
  children: React.ReactNode;
  // Додаємо пропс 'modal' - це назва вашого паралельного маршруту
  // Якщо ваш паралельний маршрут називається @mymodal, то тут буде mymodal: React.ReactNode;
  modal: React.ReactNode;
}

// 2. Змінюємо функцію RootLayout, щоб вона приймала 'modal'
export default function RootLayout({
  children,
  modal, // Додайте 'modal' сюди
}: RootLayoutProps) {
  // Використовуйте визначений інтерфейс
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children} {/* Це основний вміст вашої сторінки */}
          {modal} {/* Рендеримо модальне вікно (паралельний маршрут) */}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
