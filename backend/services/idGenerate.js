function generateRandomID() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const object = {}
    let id = '';
  
    // Genera los primeros dos caracteres (letras)
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      id += letters.charAt(randomIndex);
    }
  
    // Genera los siguientes 7 caracteres (números)
    for (let i = 0; i < 7; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      id += randomDigit;
    }
  
    return id;
  }
  
  const generatedID = generateRandomID;
  
  module.exports = generateRandomID;
  