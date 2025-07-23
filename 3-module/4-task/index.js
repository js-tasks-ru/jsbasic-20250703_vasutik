function showSalary(users, age) {

  const filteredUsers = users.filter(user => user.age <= age);

  const resultLines = filteredUsers.map(user => {

    if (!user.name || !user.balance) {return '';}

    return `${user.name}, ${user.balance}`;
  });

  const validLines = resultLines.filter(line => line !== '');

  return validLines.join('\n');
}
