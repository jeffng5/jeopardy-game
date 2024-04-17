//API request
async function getQuestions(){
    baseUrl = "https://jeopardy-api-08c22fd2e683.herokuapp.com";
    const response = await axios.get(`${baseUrl}/api/categories`, { headers: { 'Content-Type' : 'application/json' },
        params: { count: 6 } } )
        
                                                                   )
    console.log(response)
    // categoryKey=[]
    // for (let i =0; i<20; i++) {categoryKey.push(response.data[i].id)}
    // unfilteredList=[]
    // for (key of categoryKey){
    // const resp = await axios.get('http://jservice.io/api/category?id='+key)
    // unfilteredList.push(resp)};
    
// //GENERATE RANDOM INTEGERS
//     randomInt=[]
//     for (let i=0; i<20; i++){
//     randomInt.push(Math.floor(Math.random() * 20))}
//     let randomInt1= Array.from(new Set (randomInt))
//     let randomInt2=randomInt1.slice(0,6)
//creating the column heading/categories    
    container=[]
    for (let x of randomInt2) {
        let td = document.createElement('td')
        td.append(response.data[x].title)
        container.push(td); 
    
        }
    
    const heading= document.getElementById('heading')
    for (let x of container){
        heading.append(x)
    }
    
    
    
    ele= document.getElementById('heading')
    
    ele.innerHTML += '<tr id="heading"></tr>'
    
    
console.log(unfilteredList)
// GET ROWS FROM UNFILTERED LIST

allJeopardyQuestions=[]
for (let x of randomInt2) {allJeopardyQuestions.push(unfilteredList[x])}

//constructing the rows of teh gameboard
    for (let i=0; i<5; i++){
    let tbody=document.querySelector('tbody')
//creating row tags and putting data cells in each row 
    let trs= document.createElement('tr')
//creating 6 columns 
    for (let i=0; i<6; i++){
         let tds= document.createElement('td')
         trs.append(tds)
            }
    tbody.append(trs)}
    
    for (let i=1; i<6; i++){
    $('tr').eq(i).addClass('questions'+[i])}


//making the table or gameboard
    for (let i =0; i<6; i++){
    $('.questions1 td').get(i).append("?")}              
    for (let i =0; i<6; i++){
    $('.questions2 td').get(i).append("?")}
    for (let i =0; i<6; i++){
    $('.questions3 td').get(i).append("?")}
    for (let i =0; i<6; i++){
    $('.questions4 td').get(i).append("?")}
    for (let i =0; i<6; i++){
    $('.questions5 td').get(i).append('?')}
    

    
    



//allJeopardyQuestions divided up by category, question and answer
const cat1q1 = {q: allJeopardyQuestions[0].data.clues[0].question,
                 a: allJeopardyQuestions[0].data.clues[0].answer}
const cat2q1 = {q: allJeopardyQuestions[1].data.clues[0].question,
                 a: allJeopardyQuestions[1].data.clues[0].answer}           
const cat3q1 = {q: allJeopardyQuestions[2].data.clues[0].question,
                 a: allJeopardyQuestions[2].data.clues[0].answer}
const cat4q1 = {q: allJeopardyQuestions[3].data.clues[0].question,
    a: allJeopardyQuestions[3].data.clues[0].answer}
const cat5q1 ={q: allJeopardyQuestions[4].data.clues[0].question,
    a: allJeopardyQuestions[4].data.clues[0].answer}
const cat6q1 = {q: allJeopardyQuestions[5].data.clues[0].question,
    a: allJeopardyQuestions[5].data.clues[0].answer}

const cat1q2 = {q: allJeopardyQuestions[0].data.clues[1].question,
        a: allJeopardyQuestions[0].data.clues[1].answer}
const cat2q2 = {q: allJeopardyQuestions[1].data.clues[1].question,
            a: allJeopardyQuestions[1].data.clues[1].answer}
const cat3q2 = {q: allJeopardyQuestions[2].data.clues[1].question,
                a: allJeopardyQuestions[2].data.clues[1].answer}
const cat4q2 = {q: allJeopardyQuestions[3].data.clues[1].question,
                a: allJeopardyQuestions[3].data.clues[1].answer}
const cat5q2 = {q: allJeopardyQuestions[4].data.clues[1].question,
                a: allJeopardyQuestions[4].data.clues[1].answer}
const cat6q2 = {q: allJeopardyQuestions[5].data.clues[1].question,
                a: allJeopardyQuestions[5].data.clues[1].answer}

const cat1q3 = {q: allJeopardyQuestions[0].data.clues[2].question,
                a: allJeopardyQuestions[0].data.clues[2].answer}
const cat2q3 = {q: allJeopardyQuestions[1].data.clues[2].question,
                a: allJeopardyQuestions[1].data.clues[2].answer}
const cat3q3 = {q: allJeopardyQuestions[2].data.clues[2].question,
                    a: allJeopardyQuestions[2].data.clues[2].answer}
const cat4q3 = {q: allJeopardyQuestions[3].data.clues[2].question,
a: allJeopardyQuestions[3].data.clues[2].answer}
const cat5q3 = {q: allJeopardyQuestions[4].data.clues[2].question,
a: allJeopardyQuestions[4].data.clues[2].answer}
const cat6q3 = {q: allJeopardyQuestions[5].data.clues[2].question,
a: allJeopardyQuestions[5].data.clues[2].answer}

const cat1q4 = {q: allJeopardyQuestions[0].data.clues[3].question,
a: allJeopardyQuestions[0].data.clues[3].answer}
const cat2q4 = {q: allJeopardyQuestions[1].data.clues[3].question,
a: allJeopardyQuestions[1].data.clues[3].answer}                
const cat3q4 = {q: allJeopardyQuestions[2].data.clues[3].question,
a: allJeopardyQuestions[2].data.clues[3].answer}
const cat4q4 = {q: allJeopardyQuestions[3].data.clues[3].question,
a: allJeopardyQuestions[3].data.clues[3].answer}
const cat5q4 = {q: allJeopardyQuestions[4].data.clues[3].question,
a: allJeopardyQuestions[4].data.clues[3].answer}
const cat6q4 = {q: allJeopardyQuestions[5].data.clues[3].question,
a: allJeopardyQuestions[5].data.clues[3].answer}

const cat1q5 = {q: allJeopardyQuestions[0].data.clues[4].question,
a: allJeopardyQuestions[0].data.clues[4].answer}
const cat2q5 = {q: allJeopardyQuestions[1].data.clues[4].question,
a: allJeopardyQuestions[1].data.clues[4].answer}                
const cat3q5 = {q: allJeopardyQuestions[2].data.clues[4].question,
a: allJeopardyQuestions[2].data.clues[4].answer}
const cat4q5 = {q: allJeopardyQuestions[3].data.clues[4].question,
a: allJeopardyQuestions[3].data.clues[4].answer}
const cat5q5 = {q: allJeopardyQuestions[4].data.clues[4].question,
a: allJeopardyQuestions[4].data.clues[4].answer}
const cat6q5 = {q: allJeopardyQuestions[5].data.clues[4].question,
a: allJeopardyQuestions[5].data.clues[4].answer}



//ROW 1 questions
let obj = $('.questions1 td').get(0)
 obj.addEventListener('click', function(e){e.preventDefault(); obj.innerHTML = cat1q1.q})
obj.addEventListener('dblclick', function(e){e.preventDefault(); obj.innerHTML= "" ; obj.innerHTML =cat1q1.a})
let obj1 = $('.questions1 td').get(1)
obj1.addEventListener('click', function(e){e.preventDefault(); obj1.innerHTML = cat2q1.q})
obj1.addEventListener('dblclick', function(e){e.preventDefault(); obj1.innerHTML = "" ;obj1.innerHTML=cat2q1.a})
let obj2 = $('.questions1 td').get(2)
obj2.addEventListener('click', function(e){e.preventDefault(); obj2.innerHTML = cat3q1.q})
obj2.addEventListener('dblclick', function(e){e.preventDefault(); obj2.innerHTML = "" ;obj2.innerHTML=cat3q1.a})
let obj3 = $('.questions1 td').get(3)
obj3.addEventListener('click', function(e){e.preventDefault(); obj3.innerHTML = cat4q1.q})
obj3.addEventListener('dblclick', function(e){e.preventDefault(); obj3.innerHTML = "" ;obj3.innerHTML=cat4q1.a})
let obj4 = $('.questions1 td').get(4)
obj4.addEventListener('click', function(e){e.preventDefault(); obj4.innerHTML = cat5q1.q})
obj4.addEventListener('dblclick', function(e){e.preventDefault(); obj4.innerHTML = "" ;obj4.innerHTML=cat5q1.a})
let obj5 = $('.questions1 td').get(5)
obj5.addEventListener('click', function(e){e.preventDefault(); obj5.innerHTML = cat6q1.q})
obj5.addEventListener('dblclick', function(e){e.preventDefault(); obj5.innerHTML = "" ;obj5.innerHTML=cat6q1.a})

//ROW 2 questions
let obj6 = $('.questions2 td').get(0)
obj6.addEventListener('click', function(e){e.preventDefault(); obj6.innerHTML = cat1q2.q})
obj6.addEventListener('dblclick', function(e){e.preventDefault(); obj6.innerHTML = "" ;obj6.innerHTML=cat1q2.a})
let obj7 = $('.questions2 td').get(1)
obj7.addEventListener('click', function(e){e.preventDefault(); obj7.innerHTML = cat2q2.q})
obj7.addEventListener('dblclick', function(e){e.preventDefault(); obj7.innerHTML = "" ;obj7.innerHTML=cat2q2.a})
let obj8 = $('.questions2 td').get(2)
obj8.addEventListener('click', function(e){e.preventDefault(); obj8.innerHTML = cat3q2.q})
obj8.addEventListener('dblclick', function(e){e.preventDefault(); obj8.innerHTML = "" ;obj8.innerHTML=cat3q2.a})
let obj9 = $('.questions2 td').get(3)
obj9.addEventListener('click', function(e){e.preventDefault(); obj9.innerHTML = cat4q2.q})
obj9.addEventListener('dblclick', function(e){e.preventDefault(); obj9.innerHTML = "" ;obj9.innerHTML=cat4q2.a})
let obj10 = $('.questions2 td').get(4)
obj10.addEventListener('click', function(e){e.preventDefault(); obj10.innerHTML = cat5q2.q})
obj10.addEventListener('dblclick', function(e){e.preventDefault(); obj10.innerHTML = "" ;obj8.innerHTML=cat5q2.a})
let obj11 = $('.questions2 td').get(5)
obj11.addEventListener('click', function(e){e.preventDefault(); obj11.innerHTML = cat6q2.q})
obj11.addEventListener('dblclick', function(e){e.preventDefault(); obj11.innerHTML = "" ;obj11.innerHTML=cat6q2.a})

//ROW 3 QUESTIONS
let obj12 = $('.questions3 td').get(0)
obj12.addEventListener('click', function(e){e.preventDefault(); obj12.innerHTML = cat1q3.q})
obj12.addEventListener('dblclick', function(e){e.preventDefault(); obj12.innerHTML = "" ;obj12.innerHTML=cat1q3.a})
let obj13 = $('.questions3 td').get(1)
obj13.addEventListener('click', function(e){e.preventDefault(); obj13.innerHTML = cat2q3.q})
obj13.addEventListener('dblclick', function(e){e.preventDefault(); obj13.innerHTML = "" ;obj13.innerHTML=cat2q3.a})
let obj14 = $('.questions3 td').get(2)
obj14.addEventListener('click', function(e){e.preventDefault(); obj14.innerHTML = cat3q3.q})
obj14.addEventListener('dblclick', function(e){e.preventDefault(); obj14.innerHTML = "" ;obj14.innerHTML=cat3q3.a})
let obj15 = $('.questions3 td').get(3)
obj15.addEventListener('click', function(e){e.preventDefault(); obj15.innerHTML = cat4q3.q})
obj15.addEventListener('dblclick', function(e){e.preventDefault(); obj15.innerHTML = "" ;obj15.innerHTML=cat4q3.a})
let obj16 = $('.questions3 td').get(4)
obj16.addEventListener('click', function(e){e.preventDefault(); obj16.innerHTML = cat5q3.q})
obj16.addEventListener('dblclick', function(e){e.preventDefault(); obj16.innerHTML = "" ;obj16.innerHTML=cat5q3.a})
let obj17 = $('.questions3 td').get(5)
obj17.addEventListener('click', function(e){e.preventDefault(); obj17.innerHTML = cat6q3.q})
obj17.addEventListener('dblclick', function(e){e.preventDefault(); obj17.innerHTML = "" ;obj17.innerHTML=cat6q3.a})

//ADD ROW 4 QUESTIONS
let obj18 = $('.questions4 td').get(0)
obj18.addEventListener('click', function(e){e.preventDefault(); obj18.innerHTML = cat1q4.q})
obj18.addEventListener('dblclick', function(e){e.preventDefault(); obj18.innerHTML = "" ;obj18.innerHTML=cat1q4.a})
let obj19 = $('.questions4 td').get(1)
obj19.addEventListener('click', function(e){e.preventDefault(); obj19.innerHTML = cat2q4.q})
obj19.addEventListener('dblclick', function(e){e.preventDefault(); obj19.innerHTML = "" ;obj19.innerHTML=cat2q4.a})
let obj20 = $('.questions4 td').get(2)
obj20.addEventListener('click', function(e){e.preventDefault(); obj20.innerHTML = cat3q4.q})
obj20.addEventListener('dblclick', function(e){e.preventDefault(); obj20.innerHTML = "" ;obj20.innerHTML=cat3q4.a})
let obj21 = $('.questions4 td').get(3)
obj21.addEventListener('click', function(e){e.preventDefault(); obj21.innerHTML = cat4q4.q})
obj21.addEventListener('dblclick', function(e){e.preventDefault(); obj21.innerHTML = "" ;obj21.innerHTML=cat4q4.a})
let obj22 = $('.questions4 td').get(4)
obj22.addEventListener('click', function(e){e.preventDefault(); obj22.innerHTML = cat5q4.q})
obj22.addEventListener('dblclick', function(e){e.preventDefault(); obj22.innerHTML = "" ;obj22.innerHTML=cat5q4.a})
let obj23 = $('.questions4 td').get(5)
obj23.addEventListener('click', function(e){e.preventDefault(); obj23.innerHTML = cat6q4.q})
obj23.addEventListener('dblclick', function(e){e.preventDefault(); obj23.innerHTML = "" ;obj23.innerHTML=cat6q4.a})

//ROW 5 QUESTIONS
let obj24 = $('.questions5 td').get(0)
obj24.addEventListener('click', function(e){e.preventDefault(); obj24.innerHTML = cat1q5.q})
obj24.addEventListener('dblclick', function(e){e.preventDefault(); obj24.innerHTML = "" ;obj24.innerHTML=cat1q5.a})
let obj25 = $('.questions5 td').get(1)
obj25.addEventListener('click', function(e){e.preventDefault(); obj25.innerHTML = cat2q5.q})
obj25.addEventListener('dblclick', function(e){e.preventDefault(); obj25.innerHTML = "" ;obj25.innerHTML=cat2q5.a})
let obj26 = $('.questions5 td').get(2)
obj26.addEventListener('click', function(e){e.preventDefault(); obj26.innerHTML = cat3q5.q})
obj26.addEventListener('dblclick', function(e){e.preventDefault(); obj26.innerHTML = "" ;obj26.innerHTML=cat3q5.a})
let obj27 = $('.questions5 td').get(3)
obj27.addEventListener('click', function(e){e.preventDefault(); obj27.innerHTML = cat4q5.q})
obj27.addEventListener('dblclick', function(e){e.preventDefault(); obj27.innerHTML = "" ;obj27.innerHTML=cat4q5.a})
let obj28 = $('.questions5 td').get(4)
obj28.addEventListener('click', function(e){e.preventDefault(); obj28.innerHTML = cat5q5.q})
obj28.addEventListener('dblclick', function(e){e.preventDefault(); obj28.innerHTML = "" ;obj28.innerHTML=cat5q5.a})
let obj29 = $('.questions5 td').get(5)
obj29.addEventListener('click', function(e){e.preventDefault(); obj29.innerHTML = cat6q5.q})
obj29.addEventListener('dblclick', function(e){e.preventDefault(); obj29.innerHTML = "" ;obj29.innerHTML=cat6q5.a})
}



//event Listener button to set up the screen '1885' is not a good category since it only as 2 questions, only bug in program
let resetButton= document.querySelector('button')
resetButton.addEventListener("click", function(e){e.preventDefault(); 
    getQuestions()})

