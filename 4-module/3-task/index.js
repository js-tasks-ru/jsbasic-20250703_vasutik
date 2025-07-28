function highlight(table) {
  // 1. Получаем все строки таблицы (кроме заголовка <thead>)
  const rows = table.querySelectorAll('tbody tr');

  // 2. Перебираем каждую строку
  rows.forEach(row => {
    const cells = row.cells; // Получаем ячейки строки

    // 3. Проверяем статус (4-я ячейка, индекс 3)
    const statusCell = cells[3];
    if (statusCell.hasAttribute('data-available')) {
      const isAvailable = statusCell.dataset.available === 'true';
      row.classList.add(isAvailable ? 'available' : 'unavailable');
    } else {
      row.hidden = true; // Скрываем строку, если нет атрибута
    }

    // 4. Проверяем пол (3-я ячейка, индекс 2)
    const genderCell = cells[2];
    if (genderCell.textContent === 'm') {
      row.classList.add('male');
    } else if (genderCell.textContent === 'f') {
      row.classList.add('female');
    }

    // 5. Проверяем возраст (2-я ячейка, индекс 1)
    const ageCell = cells[1];
    const age = parseInt(ageCell.textContent, 10);
    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  });
}
