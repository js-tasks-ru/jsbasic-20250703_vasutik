/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.#createTable(rows);
  }

  #createTable(rows) {
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    ['Имя', 'Возраст', 'Зарплата', 'Город', ''].forEach(text => {
      const th = document.createElement('th');
      th.textContent = text;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    this.elem.appendChild(thead);

    const tbody = document.createElement('tbody');
    this.elem.appendChild(tbody);

    rows.forEach(rowData => this.#addRow(rowData, tbody));
  }

  #addRow(rowData, tbody) {
    const row = document.createElement('tr');

    ['name', 'age', 'salary', 'city'].forEach(key => {
      const td = document.createElement('td');
      td.textContent = rowData[key];
      row.appendChild(td);
    });

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';

    deleteButton.addEventListener('click', () => {
      row.remove();
    });

    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    tbody.appendChild(row);
  }
}
