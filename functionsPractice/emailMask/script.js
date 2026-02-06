let email = "visacciallanz14@gmmail.com";

const maskEmail = (email) =>{
  const maskedChars = email.slice(1, (email.indexOf("@") - 1));
  const domainPortion = email.slice(email.indexOf("@"));
  const firstChar = email[0];
  const lastChar = email[email.indexOf("@") - 1];
  const stars = "*".repeat(maskedChars.length);
     
  const finalEmail = `${firstChar}${stars}${lastChar}${domainPortion}`;

  return finalEmail;
};

console.log(maskEmail(email));
