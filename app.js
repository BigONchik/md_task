document.addEventListener("DOMContentLoaded", () => {
  const reportDropdown = document.getElementById("reportDropdown");
  const tableContainer = document.getElementById("tableContainer");

  // функция которая создаёт случайные данные для таблицы (Заглушка)
  function generateRandomData() {
    const randomFloat = () => Math.random() * 1000;
    const randomInt = () => Math.floor(Math.random() * 100);
    const randomBool = () => Math.random() < 0.5;
    const randomString = (length) => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
    };

    const numColumns = Math.floor(Math.random() * 5) + 2; // случайное число колонок (2-6)
    const numRows = Math.floor(Math.random() * 5) + 3; // случайное число строк (3-7)

    const header = [];
    const data = [];

    for (let i = 0; i < numColumns; i++) {
      const type = Math.random() < 0.5 ? "float" : "string";
      const align = ["left", "right", "center"][Math.floor(Math.random() * 3)];
      const caption = randomString(8);
      header.push({ id: `column_${i}`, type, caption, align });
    }

    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < numColumns; j++) {
        if (header[j].type === "float") {
          row.push(randomFloat());
        } else if (header[j].type === "int") {
          row.push(randomInt());
        } else if (header[j].type === "bool") {
          row.push(randomBool());
        } else {
          row.push(randomString(10));
        }
      }
      data.push(row);
    }

    return { header, data };
  }

  // Функция для отображения таблицы на основе выбранного отчета
  function displayTable(report) {
    const header = report.header;
    const data = report.data;

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Создание заголовков таблицы
    const headerRow = document.createElement("tr");
    header.forEach((column) => {
      const th = document.createElement("th");
      th.textContent = column.caption;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Добавление данных в таблицу
    data.forEach((rowData) => {
      const tr = document.createElement("tr");
      rowData.forEach((cellData, columnIndex) => {
        const td = document.createElement("td");
        if (typeof cellData === "object" && cellData !== null) {
          // Если ячейка представлена объектом, берем данные из свойства d
          cellData = cellData.d;
        }
        td.textContent = cellData;
        const dataType = header[columnIndex].type;
        if (dataType === "string") {
          td.classList.add("left-align");
        } else if (dataType === "float" || dataType === "int") {
          td.classList.add("right-align");
        } else if (dataType === "bool") {
          td.classList.add("center-align");
        }
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    tableContainer.innerHTML = ""; // Очищаем контейнер перед добавлением новой таблицы
    tableContainer.appendChild(table);
  }

  reportDropdown.addEventListener("change", async () => {
    const selectedReportKey = reportDropdown.value;
    if (selectedReportKey === "mock") {
      // Если выбрана заглушка, генерируем случайные данные
      const mockReport = generateRandomData();
      displayTable(mockReport);
    } else {
      // Динамически импортируем данные из data.js
      const { default: selectedReport } = await import(`./data.js`);

      // Отображаем выбранный отчет
      displayTable(selectedReport[selectedReportKey]);
    }
  });

  // По умолчанию отображаем первый отчет (заглушку)
  const mockReport = generateRandomData();
  displayTable(mockReport);

  // Обработчик изменения выбранного отчета в выпадающем списке
  reportDropdown.addEventListener("change", () => {
    const selectedReportKey = reportDropdown.value;
    const selectedReport = reports[selectedReportKey];
    displayTable(selectedReport);
  });

  // По умолчанию отображаем первый отчет
  displayTable(reports.report1);
});
