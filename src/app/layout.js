import Sidebar from "@/components/sidebar/Sidebar";
import "../app/globals.css";

export const metadata = {
  title: "School App",
  description: "Приватна школа — панель",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
