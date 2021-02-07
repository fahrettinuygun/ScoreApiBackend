// 0-20000 arasında random sayı döner
module.exports.get = async function(cityCode){
      let cityScore = Math.floor(Math.random() * 20000); // Burada http request ile ilgili servise cityCode gönderip response alınacak
      console.log("City Score: ", cityScore);
      return {success: true, message:'', data: cityScore};
}