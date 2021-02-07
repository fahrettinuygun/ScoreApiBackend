const SegmentService = require('./segment');
const CityScoreService = require('./cityScore');
const IncomeService = require('./incomeFactor');


let cacheDB = [];
module.exports.get = async function(id,name,surname,phone,city,income){

    return new Promise(async resolve => {
        let segment;
        let cityScore;
        let incomeFactor;
        let score;
        let response = {success,message,data};
        // bir cache dbsinin olduğu varsayılarak önce cacheden okumaya çalıştım
        try {
            cacheDB.forEach(cache => {
                if(cache.id == id && cache.city == city && cache.income == income){
                    response.success = true;
                    response.message = "From Cache";
                    response.data = cache.score;
                }
            }) 
        } catch (error) {
            console.error("Cache DB Error: ", error);
        }
        if(!response.success){
            try {
                segment = (await SegmentService.get(id)).data;
                response.success = true;
            } catch (error) {
                response.success = false;
                response.message = "Segment bilgisine erişilemedi. Kısa süre sonra tekrar deneyiniz."
            }
            try {
                cityScore = (await CityScoreService.get(city)).data;
                response.success = true;
            } catch (error) {
                response.success = false;
                response.message = "Şehir skoru bilgisine erişilemedi. Kısa süre sonra tekrar deneyiniz."
            }
            try {
                incomeFactor = (await IncomeService.get(income)).data;
                response.success = true;
            } catch (error) {
                response.success = false;
                response.message = "Gelir dilim çarpanı bilgisine erişilemedi. Kısa süre sonra tekrar deneyiniz."
            }
            if(response.success){
                score = segment * incomeFactor + cityScore;
                // sonucu cache ekledim
                cacheDB.push({id:id,city:city,segment:segment,cityScore:cityScore,income:income,incomeFactor:incomeFactor, score:score})
                response.message = 'Calculated Score'
            }
        }
      resolve(response);
    })
}