const { fifaData } = require('./fifa.js')


/* Görev 1: 
	Verilen datayı parçalayarak aşağıdaki verileri (console.log-ing) elde ederek pratik yapın. 
	
	💡 İPUCU: Öncelikle datayı filtrelemek isteyebilirsiniz */

//(a) 2014 Dünya kupası Finali Evsahibi takım ismi (dizide "Home Team Name" anahtarı)


const filteredName=fifaData.filter((diziItem)=>{
	//console.log("dizi:",diziItem)
	if(diziItem.Year===2014 && diziItem.Stage==="Final"){
		//console.log("dizi2:",diziItem)
		return true
	}
})


console.log("filtredname:",filteredName)
console.log("Görev 1 a =>",filteredName[0]["Home Team Name"])

//(b) 2014 Dünya kupası Finali Deplasman takım ismi  (dizide "Away Team Name" anahtarı)
const deplasmanTakım=fifaData.filter(function(diziItems){
if(diziItems.Year===2014 && diziItems.Stage==="Final"){
	return true;
	}
})
console.log("Görev 1 b =>" ,deplasmanTakım[0]["Away Team Name"])

//(c) 2014 Dünya kupası finali Ev sahibi takım golleri (dizide "Home Team Goals" anahtarı)
   const evSahibiGolleri=fifaData.filter(function(dizi){
    if(dizi.Year===2014 && dizi.Stage==="Final"){
				return dizi;
	}

})
console.log("Görev 1 c =>",evSahibiGolleri[0]["Home Team Goals"])
//(d)2014 Dünya kupası finali Deplasman takım golleri  (dizide "Away Team Goals" anahtarı)
const deplasmanTakımGolleri=fifaData.filter(function(diziItem){
	if(diziItem.Year===2014 && diziItem.Stage==="Final"){
		return true;
	}           
})
console.log("Görev 1 d =>",deplasmanTakımGolleri[0]["Away Team Goals"])
//(e) 2014 Dünya kupası finali kazananı*/
const dünyaKupasıKazananı=fifaData.filter(function(diziItem){
	if(diziItem.Year===2014)
	return true
})
console.log("Görev 1 e =>",dünyaKupasıKazananı)

/*  Görev 2: 
	Finaller adlı fonksiyonu kullanarak aşağıdakileri uygulayın:
	1. Bir dizi(array) olan Fifa datasını fonksiyonun birinci parametresi olarak alacak
	2. Sadece final maçlarını içeren nesnenin(object) datalarını filtreleyerek, bir dizi olarak döndürecek(return)
	
	💡 İPUCU - verilen data içindeki nesnelerin(objects) "Stage" anahtarına bakmalısınız
*/

function Finaller(dizi) {
	const finalDizileri = dizi.filter(function(diziItem){
		if(diziItem.Stage==="Final"){
			return true
		}

		

	})
	console.log("finalDizileri",finalDizileri)
	return finalDizileri

}
	
	


console.log("Görev 2 =>",Finaller(fifaData))


/*  Görev 3: 
	Bir higher-order fonksiyonu olan Yillar isimli fonksiyona aşağıdakileri uygulayın: 
	1. fifaData dizisini(array) fonksiyonun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Finaller data setindeki tüm yılları içeren "years" adındaki diziyi(array) döndürecek
	*/

function Yillar(dizi,fonksiyon) {
	
    const finalMacları=fonksiyon(dizi)
	const yıllar=finalMacları.map(function(diziItem){
		const yıl=diziItem.Year
		console.log("yıl :",yıl)
		
		return yıl
		
	})
	console.log("yıllar",yıllar)
	return yıllar

	
}
console.log("Görev 3 => ", Yillar(fifaData,Finaller))

/*  Görev 4: 
	Bir higher-order fonksiyonunu olan Kazananlar isimli fonksiyona aşağıdakileri uygulayın:  
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Her final maçının kazananını (evsahibi ya da deplasman) belirleyecek
	💡 İPUCU: Beraberlikler(ties) için şimdilik endişelenmeyin (Detaylı bilgi için README dosyasına bakabilirsiniz.)
	4. Tüm kazanan ülkelerin isimlerini içeren `kazananlar` adında bir dizi(array) döndürecek(return)  */ 

function Kazananlar(dizi,fonksiyon,) {
	
    const finalMacları=fonksiyon(dizi)
	const kazananlar=finalMacları.map(function(diziItem){
		if(diziItem["Home Team Goals"]>diziItem["Away Team Goals"]){
			return diziItem["Home Team Name"]
		}else{
			return diziItem["Away Team Name"]
		}
			
	});
	return kazananlar
}

console.log("Görev 4 =>",Kazananlar(fifaData,Finaller))

/*  Görev 5: 
	Bir higher-order fonksiyonu olan YillaraGoreKazananlar isimli fonksiyona aşağıdakileri uygulayın:
	1. fifaData dizisini(array) fonksiyonunun birinci parametresi olarak alacak
	2. Görev 2'de yazdığınız Finaller fonksiyonunu, geriçağırım(callback) olarak fonksiyonun ikinci parametresi olarak alacak
	3. Görev 3'de yazdığınız Yillar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun üçüncü parametresi olarak alacak
	4. Görev 4'de yazdığınız Kazananlar fonksiyonunu, geriçağırım(callback) olarak fonksiyonun dördüncü parametresi olarak alacak
	5. Her yıl için "{yıl} yılında, {ülke} dünya kupasını kazandı!" cümlesini(string) içeren bir diziyi(array) döndürecek
	
	💡 İPUCU: her cümlenin adım 4'te belirtilen cümleyle birebir aynı olması gerekmektedir.
*/

function YillaraGoreKazananlar(dizi,fonksiyon1,fonksiyon2,fonksiyon3) {
	
const finaller=fonksiyon1(dizi)
const yıllar=fonksiyon2(finaller,fonksiyon1)
const kazananlar=fonksiyon3(finaller,fonksiyon1)
const sonuc=yıllar.map(function(diziItem,index){
	
	return diziItem.Year + "yılında"+ "," + diziItem[index]+ " dünya kupasını kazandı !"
})

}
 console.log("Görev 5 =>",YillaraGoreKazananlar(fifaData,Finaller,Yillar,Kazananlar) )


/*  Görev 6: 
	Bir higher order fonksiyonu olan `OrtalamaGolSayisi` isimli fonksiyona aşağıdakileri uygulayın: 
	1. Görev 2'de yazdığınız `Finaller` fonksiyonunu birinci parametre olarak alacak; 'fifaData' dizisini argüman olarak eklediğinizden emin olun
	
	💡 İPUCU: Çağırma örneği: `OrtalamaGolSayisi(Finaller(fifaData));`
	
	2. Her maç için Ortalama toplam evsahibi gol sayısı ve toplam deplasman gol sayısını hesaplayacak (her maçta atılan toplam gol sayısı)
	
	3. Sonucun 2. ondalığını yuvarlayıp, bulunan değeri döndürecek(return)
	
	💡 İPUCU: .reduce, .toFixed (dizilim(syntax) için MDN'ye bakın) kullan, ve bunu 2 adımda yapın) 
	
*/

function OrtalamaGolSayisi(/* kodlar buraya */) {
	
    /* kodlar buraya */
	
}



/// EKSTRA ÇALIŞMALAR ///

/*  BONUS 1:  
	`UlkelerinKazanmaSayilari` isminde bir fonksiyon oluşturun, parametre olarak `data` ve `takım kısaltmalarını` alacak ve hangi ülkenin kaç dünya kupası olduğunu döndürecek
	
	İpucu: "takım kısaltmaları" (team initials) için datada araştırma yapın!
İpucu: `.reduce` Kullanın*/

function UlkelerinKazanmaSayilari(/* kodlar buraya */) {
	
    /* kodlar buraya */
	
}



/*  BONUS 2:  
EnCokGolAtan() isminde bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupası finallerinde en çok gol atan takımı döndürsün */

function EnCokGolAtan(/* kodlar buraya */) {
	
    /* kodlar buraya */
	
}


/*  BONUS 3: 
EnKotuDefans() adında bir fonksiyon yazın, `data` yı parametre olarak alsın ve Dünya kupasında finallerinde en çok golü yiyen takımı döndürsün*/

function EnKotuDefans(/* kodlar buraya */) {
	
    /* kodlar buraya */
	
}


/* Hala vaktiniz varsa, README dosyasında listelenen hedeflerden istediğinizi aşağıdaki boşluğa yazabilirsiniz. */


/* Bu satırın aşağısındaki kodları lütfen değiştirmeyin */
function sa(){
    console.log('Kodlar çalışıyor');
    return 'as';
}
sa();
module.exports = {
    sa,
    Finaller,
    Yillar,
    Kazananlar,
    YillaraGoreKazananlar,
    OrtalamaGolSayisi
}
