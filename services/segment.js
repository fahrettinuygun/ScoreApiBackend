// 1-9 arasında random sayı döner
module.exports.get = async function(userId){
    let segment = Math.floor(Math.random() * 9) + 1 // Burada ilgili servise http request ile userId gönderilecek 
    console.log("Segment: ", segment);
    return {success: true, message:'', data: segment};
}