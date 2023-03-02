const getColor=()=>{
   
   /* math.random use karna hoga aur usko ek particular number se multiply karwana hoga the usko convert karwana hoga HeacDecimal format me
  color code is in HEXA Decimal format */


                /*    logic wala part 1*/
  const randomNumber=Math.floor(Math.random() * 16777215)
  /* ye jo number hai 16777215 hum iss se isiliye multiply kar wa rahe hai kyuki hume chayie ek 
aisa random number jo HexaDecimal code ban sake 
 */

//hum """#""" ye hash use karenge kyu ki hex ColorCode # se shuru hota hai



                         /*    logic wala part 2*/

/* ab har number ke phele # lagana hai aur usko AUR hum kya kar rahe hai jo """randomNumber""" wala variable hai 
jo random number generate kar raha hai """.toString""" iss se hum uss number ko string me convert kar rahe hai kyu ki strings bhi 
aate hai usme aate hai usme(maybe isiliye) string me jab aap convert karoge aur aap suppose """toString""" likh ke chodh dete ho 
toh ye kya karega normal sa string bana ke de dega jo hai waisa hi return kardega but hum usme andr """16"""
toString(16) why 16? because """16"""stands for HexaDecimal code, we need Hex code Hex ki unit"""16""" pass kie */
const randomCode="#" +randomNumber.toString(16)

            /*    logic wala part 3*/       
/* ab hume likhna hai """document""" me jaao """body""" ko laao aur uske"""Style""" ko laao aur uske """background-color"""
me jaake ye randomCode daal dena hai taki ye randomCode humare boody me apply hojae */

/* steps dekho """document(HTML)""" ke andar """body""" hoti hai uske andar """style""" hota hai aur """style ke andr backgroundColor"""
document.body.style.backgroundColor=randomCode
 */
}

// yaha jaise hi btn jo hai wo button ki id hai yaha jaise button click hoga woh getColor ke function ko call karega
document.getElementById("btn").addEventListener("click",getColor)