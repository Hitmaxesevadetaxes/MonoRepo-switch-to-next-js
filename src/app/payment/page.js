import Sidebar from "@/components/sidebar/Sidebar"; // шлях до твого компонента

export default function Home() {
  return (
    <main>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="mainContent">
        <header>
          <div className="heading-welcome">Оплата </div>
          <p className="p">
            Отримувач ЄРМОЛЕНКО ТЕТЯНА МАРКІВНА
            <div>IBAN UA503052990000026000036306210 </div>
            <div>РНОКПП/ЄДРПОУ 3161712360</div>
            <div>Призначення платежу: Поповнення рахунку</div>
          </p>{" "}
        </header>{" "}
      </div>
    </main>
  );
}
