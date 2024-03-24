// This file was for the sole purpose of testing of displaying the flags in the Countries page

// const america = [
//     {id : 1 , image: <img src="https://flagsapi.com/BR/shiny/64.png" alt=""></img>, countryName: "Brazil" , info: "Brazil is a country in South America. It is the largest country in South America and the fifth largest country in the world. It is the only Portuguese-speaking country in the Americas and the largest lusophone country in the world."},
//     {id : 2 ,image: <img src="https://flagsapi.com/CL/shiny/64.png" alt=""></img>, countryName: "Chile", info: "Chile is a long, narrow country stretching along South America's western edge, with more than 6,000km of Pacific Ocean coastline. Santiago, its capital, sits in a valley surrounded by the Andes and Chilean Coast Range mountains. The city's palm-lined Plaza de Armas contains the neoclassical cathedral and the National History Museum. The massive Parque Metropolitano offers swimming pools, a botanical garden and zoo."},
//     {id : 3 ,image: <img src="https://flagsapi.com/CA/shiny/64.png" alt=""></img>, countryName: "Canada", info: "Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometers, making it the world's second-largest country by total area."},
//     {id : 4 ,image: <img src="https://flagsapi.com/CO/shiny/64.png" alt=""></img>, countryName: "Colombia", info: "Colombia, officially the Republic of Colombia, is a country in South America. It is bordered by Venezuela, Brazil, Peru, Ecuador, and Panama. Colombia is the only country in South America with coastlines on both the Pacific Ocean and Caribbean Sea."},
// ]

// const europe = [
//     {id : 5 ,image: <img src="https://flagsapi.com/GR/shiny/64.png" alt=""></img>, countryName: "Greece", info: "Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas. Influential in ancient times, it's often called the cradle of Western civilization. Athens, its capital, retains landmarks including the 5th-century B.C. Acropolis citadel with the Parthenon temple. Greece is also known for its beaches, from the black sands of Santorini to the party resorts of Mykonos."},
//     {id : 6 ,image: <img src="https://flagsapi.com/PL/shiny/64.png" alt=""></img>, countryName: "Poland", info: "Poland is an eastern European country on the Baltic Sea known for its medieval architecture and Jewish heritage. Warsaw, the capital, has shopping and nightlife, plus the Warsaw Uprising Museum, honoring the city's WWII-era resistance to German occupation. In the city of Kraków, 14th-century Wawel Castle rises above the medieval old town, home to Cloth Hall, a Renaissance trading post in Rynek Glówny (market square)."},
//     {id : 7 ,image: <img src="https://flagsapi.com/UA/shiny/64.png" alt=""></img>, countryName: "Ukraine", info: "Ukraine is a large country in Eastern Europe known for its Orthodox churches, Black Sea coastline and forested mountains. Its capital, Kiev, features the gold-domed St. Sophia's Cathedral, with 11th-century mosaics and frescoes. Overlooking the Dnieper River is the Kiev Pechersk Lavra monastery complex, a Christian pilgrimage site housing Scythian tomb relics and catacombs containing mummified Orthodox monks."},
//     {id : 8 ,image: <img src="https://flagsapi.com/FR/shiny/64.png" alt=""></img>, countryName: "France", info: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history."}
// ]

// const asia = [
//     {id : 9 ,image: <img src="https://flagsapi.com/IN/shiny/64.png" alt=""></img>, countryName: "India", info: "India is a vast South Asian country with diverse terrain – from Himalayan peaks to Indian Ocean coastline – and history reaching back 5 millennia. In the north, Mughal Empire landmarks include Delhi’s Red Fort complex, massive Jama Masjid mosque and Agra’s iconic Taj Mahal mausoleum. Pilgrims bathe in the Ganges in Varanasi, and Rishikesh is a yoga center and base for Himalayan trekking."},
//     {id : 10 ,iamge: <img src="https://flagsapi.com/LB/shiny/64.png" alt=""></img>, countryName: "Lebanon", info: "Lebanon, officially known as the Lebanese Republic, is a country in the Levant region of Western Asia, and the transcontinental region of the Middle East. It is bordered by Syria to the north and east and"},
//     {id : 11,image: <img src="https://flagsapi.com/KW/shiny/64.png" alt=""></img>, countryName: "Kuwait", info: "Kuwait, officially the State of Kuwait, is a country in Western Asia. Situated in the northern edge of Eastern Arabia at the tip of the Persian Gulf, it borders Iraq to the north and Saudi Arabia to the south."},
//     {id : 12 ,image: <img src="https://flagsapi.com/BH/shiny/64.png" alt=""></img>, countryName: "Bahrain", info: "Bahrain, officially the Kingdom of Bahrain, is a country in the Persian Gulf. The island nation comprises a small archipelago made up of 40 natural islands and an additional 51 artificial islands, centered around Bahrain Island which makes up around 83 percent of the country's landmass."}
// ]

// const africa = [
//     {id : 13 ,image: <img src="https://flagsapi.com/EG/shiny/64.png" alt=""></img>, countryName: "Egypt", info: "Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. Millennia-old monuments sit along the fertile Nile River Valley, including Giza's colossal Pyramids and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple and Valley of the Kings tombs. The capital, Cairo, is home to Ottoman landmarks like Muhammad Ali Mosque and the Egyptian Museum, a trove of antiquities."},
//     {id : 14 ,image: <img src="https://flagsapi.com/MA/shiny/64.png" alt=""></img>, countryName: "Morocco", info: "Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea, is distinguished by its Berber, Arabian and European cultural influences. Marrakesh’s medina, a mazelike medieval quarter, offers entertainment in its Djemaa el-Fna square and souks selling ceramics, jewelry and metal lanterns. The capital Rabat’s Kasbah of the Udayas is a 12th-century royal fort overlooking the water."},
//     {id : 15 ,image: <img src="https://flagsapi.com/SD/shiny/64.png" alt=""></img>, countryName: "Sudan", info: "Sudan, officially the Republic of the Sudan, is a country in northeastern Africa. It is bordered by Egypt to the north, Libya to the northwest, Chad to the west, the Central African Republic to the southwest, South Sudan to the south, Ethiopia to the southeast, Eritrea to the east, and the Red Sea to the northeast."},
//     {id : 16 ,image: <img src="https://flagsapi.com/SY/shiny/64.png" alt=""></img>, countryName: "Syria", info: "Syria, officially the Syrian Arab Republic, is a country in Western Asia. It is bordered by Turkey to the north, Iraq to the east, Jordan"}
// ]

// const americas = america.map((country) => {
//     return <America key={country.id} name={country.countryName} image={country.image} info={country.info}/>
// })

// // const africas = africa.map((country) => {
// //     return <Africa key={country.id} name={country.countryName} image={country.image} info={country.info}/>
// // })

// // const europes = europe.map((country) => {
// //     return <Europe key={country.id} name={country.countryName} image={country.image} info={country.info}/>
// // })

// // const asias = asia.map((country) => {
// //     return <Asia key={country.id} name={country.countryName} image={country.image} info={country.info}/>
// // })

// export {americas , europes , asias , africas}
