// 1-9 arasında random sayı döner
module.exports.post = async function(phone,score,name,surname){
    let message = "Sayın " +name+" " + surname +", hesaplanan skorunuz: "+score + ".";
    this.sendSms(phone,message)
}

sendSms = function(target,message){
    // Burada sms servisi üzerinden mesaj gönderilir
}