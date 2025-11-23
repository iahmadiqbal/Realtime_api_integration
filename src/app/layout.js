import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider/page";

// export const metadata = {
//   title: "CRUD OPERATION",
//   description: "Crud operation using tanstack Query",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body>{children}</body>
      </ReactQueryProvider>
    </html>
  );
}
