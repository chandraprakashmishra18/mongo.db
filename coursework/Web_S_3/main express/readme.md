1. node vs express - node is the main thing express ke code se hum server ka code likh pate and server kasisa react kargega wo bhi express ki help se likhta hai
2. what is express js - package,routing
3. why express js - http is difficult to use , express makes this easier
4. routing - routes bannnae ke prcess ko hum khate hai routing ex- /profile,/home,/contact
5. middleware - middleware ek aisa function hota hai jo har rout se pahle chalta hai, iska matlab saare routes mein koi bhi chale usse pahle middleware chalta hai and usmein likha code pahle execute hota hai
request and response - req mein saara data hota hai aane waale user ki request  ki taraf ka, jaise ki uski location, device info and other things, res mein controls hote hai jinke basis pe hum server se response bhej paate hai, next is just a push so that our requesr moves to the next thing which should be executed 
6. route parameters - to make any route dynamic you can use : at the place where you want make it dynamic, and to access there value use req.params
ex:- /auther/books/issued/harsh
ex:- /auther/books/issued/harshita
ex:- /auther/books/issued/harshit

/auther/books/issued:username
7. template engines -  ejs    is very very similar to html or ek markup style jo ki baad mein convert hojaayegi html mein
ejs setup ke liye
1)ejs install
npm i ejs
2)configure ejs
app.set("view engine","ejs");
3)ek views folder banao
4)usmein ejs files banao
5)send ki jagah render karo => render karte wakt make sure aap views folder ke andar waali koi file ka nam likhe, aur usmein ejs add na kara(render function m.ejs  mention na kara)
8. static files
images,stylessheets,frontend js setup karana

1)create a folder called public
2)create three folders inside it, image ,stylesheets,javascripts
3)configure the express static in script.js file
4)understand the path

9. http methods - get post

10. error handling