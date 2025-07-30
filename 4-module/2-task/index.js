function makeDiagonalRed(table) {

  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cell = row.cells[i];

    if (cell) {
      cell.style.backgroundColor = 'red';
    }
  }
}
