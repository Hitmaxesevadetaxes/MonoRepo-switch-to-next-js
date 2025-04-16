import Sidebar from "@/components/sidebar/Sidebar"; 
import MenuTable from "@/components/menu/Menu"; 

export default function Home() {
  return (
    <main>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="mainContent">
        <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Меню</h1>
        <MenuTable />
      </div>
    </main>
  );
}
