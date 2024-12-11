const bcrypt = require('bcrypt');

async function verifyPassword() {

  const myPassword = 'admin 123 .202';
  const hash = 'dsfasfsdfsfsdfdsf';

  const isMatch =  await bcrypt.compare(myPassword, hash);
}

verifyPassword();
