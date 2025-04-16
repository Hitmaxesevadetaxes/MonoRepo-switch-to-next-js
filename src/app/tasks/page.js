import Sidebar from "@/components/sidebar/Sidebar"; // шлях до твого компонента

export default function Home() {
  return (
    <main className="main-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="mainContent">
        <header>
          <div className="heading-welcome">Завдання</div>
        </header>

        <div className="container-2">
          <div className="tablist">
            <div className="tab">
              <div className="text-wrapper-13">Всі</div>
            </div>
            <div className="tab-in-progress">В роботі</div>
            <div className="tab-completed">Завершені</div>
            <div className="tab-not-started">Не початі</div>
            <div className="tab-overdue">Прострочені</div>
          </div>

          <div className="background-border">
            <div className="heading">Завдання</div>
            <p className="p">Відслідковуйте домашні завдання вашої дитини</p>

            <div className="container-wrapper">
              <div className="container-3">
                <div className="background-border-2">
                  <div className="heading-math">Метематика завдання 12</div>
                  <div className="background-2">
                    <div className="text-wrapper-14">Завершено</div>
                  </div>
                  <p className="text-wrapper-15">
                    Завдання 1-20 на сторінці 145.
                  </p>
                  <p className="div-2">
                    <span className="span">Предмет: </span>{" "}
                    <span className="text-wrapper-16">Математика</span>
                  </p>
                  <p className="element-2">
                    <span className="span">До: </span>{" "}
                    <span className="text-wrapper-16">10/15/2025</span>
                  </p>
                  <p className="element-3">
                    <span className="span">Завершено: </span>{" "}
                    <span className="text-wrapper-16">10/13/2025</span>
                  </p>
                  <p className="element-4">
                    <span className="span">Оцінка: </span>{" "}
                    <span className="text-wrapper-16">95/100</span>
                  </p>
                  <div className="paragraph-background">
                    <div className="heading-teacher">
                      Коментар від викладача:
                    </div>
                    <p className="text-wrapper-17">
                      Звернути увагу на завдання 16.
                    </p>
                  </div>
                  <div className="button-wrapper">
                    <button className="button-2">
                      <div className="text-wrapper-18">Деталі</div>
                    </button>
                  </div>
                </div>
                <div className="background-border-3">
                  <div className="heading-english">
                    Есе - Вбити переслішника
                  </div>
                  <div className="background-3">
                    <div className="text-wrapper-14">В процесі</div>
                  </div>
                  <p className="text-wrapper-19">
                    Написати есе більше 1000 слів, проаналізувавши ріст
                    персонажа Скотта Фінча.
                  </p>
                  <p className="div-2">
                    <span className="span">Предмет: </span>{" "}
                    <span className="text-wrapper-16">
                      Зарубіжна література{" "}
                    </span>
                  </p>
                  <p className="element-5">
                    <span className="span">До: </span>{" "}
                    <span className="text-wrapper-16">10/20/2025</span>
                  </p>
                  <div className="text-wrapper-20">Прогрес</div>
                  <div className="text-wrapper-21">65%</div>
                  <div className="progressbar">
                    <div className="background-4"></div>
                  </div>
                  <div className="background-5">
                    <button className="button-3">
                      <div className="text-wrapper-22">Деталі</div>
                    </button>
                    <button className="button-4">
                      <div className="text-wrapper-23">Продовжити</div>
                    </button>
                  </div>
                </div>
                <div className="background-border-4">
                  <div className="heading-science">Лабораторна робота №3</div>
                  <div className="background-3">
                    <div className="text-wrapper-14">В процесі</div>
                  </div>
                  <p className="text-wrapper-24">
                    Завершити лабораторну роботу, почату в класі.
                  </p>
                  <p className="div-2">
                    <span className="span">Предмет: </span>{" "}
                    <span className="text-wrapper-16">Біологія</span>
                  </p>
                  <p className="element-6">
                    <span className="span">До: </span>{" "}
                    <span className="text-wrapper-16">10/18/2025</span>
                  </p>
                  <div className="text-wrapper-20">Прогрес</div>
                  <div className="text-wrapper-21">30%</div>
                  <div className="progressbar">
                    <div className="background-6"></div>
                  </div>
                  <div className="background-5">
                    <button className="button-3">
                      <div className="text-wrapper-18">Деталі</div>
                    </button>
                    <button className="button-4">
                      <div className="text-wrapper-23">Продовжити</div>
                    </button>
                  </div>
                </div>
                <div className="background-border-5">
                  <div className="heading-history">
                    History Research Project
                  </div>
                  <div className="background-7">
                    <div className="text-wrapper-25">Not Started</div>
                  </div>
                  <p className="text-wrapper-26">
                    Research and prepare a presentation on a significant
                    historical event of the 20th century.
                  </p>
                  <p className="div-3">
                    <span className="span">Subject: </span>{" "}
                    <span className="text-wrapper-16">History</span>
                  </p>
                  <p className="due">
                    <span className="span">Due: </span>{" "}
                    <span className="text-wrapper-16">10/25/2023</span>
                  </p>
                  <div className="background-8">
                    <button className="button-5">
                      <div className="text-wrapper-22">View Details</div>
                    </button>
                    <button className="button-6">
                      <div className="text-wrapper-27">Start Assignment</div>
                    </button>
                  </div>
                </div>
                <div className="background-border-6">
                  <div className="heading-french">
                    French Vocabulary Quiz Preparation
                  </div>
                  <div className="background-9">
                    <div className="text-wrapper-28">Overdue</div>
                  </div>
                  <p className="text-wrapper-29">
                    Study food and restaurant vocabulary for the upcoming quiz.
                  </p>
                  <p className="div-3">
                    <span className="span">Subject: </span>{" "}
                    <span className="text-wrapper-16">French</span>
                  </p>
                  <p className="due-2">
                    <span className="span">Due: </span>{" "}
                    <span className="text-wrapper-16">10/8/2023</span>
                  </p>
                  <div className="background-10">
                    <button className="button-7">
                      <div className="text-wrapper-22">View Details</div>
                    </button>
                    <button className="button-8">
                      <div className="text-wrapper-30">Continue Working</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
