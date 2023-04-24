
async function getQuestions(){
const response = await axios.get('http://jservice.io/api/categories?count='+6)
console.log(response)
categoryKey=[]
for (let i =0; i<6; i++) {categoryKey.push(response.data[i].id)}
allJeopardyQuestions=[]
for (key of categoryKey){
const resp = await axios.get('http://jservice.io/api/category?id='+key)
allJeopardyQuestions.push(resp)}; 


container=[]
for (let i=0; i<6; i++) {
    let td = document.createElement('td')
    td.append(response.data[i].title)
    container.push(td); 

    }

const heading= document.getElementById('heading')
for (let x of container){
    heading.append(x)
}



ele= document.getElementById('heading')

ele.innerHTML += '<tr id="heading"></tr>'


console.log(allJeopardyQuestions)
for (let i=0; i<5; i++){
let tbody=document.querySelector('tbody')
let trs= document.createElement('tr')
 for (let i=0; i<6; i++){
     let tds= document.createElement('td')
     trs.append(tds)
        }
tbody.append(trs)}

for (let i=1; i<6; i++){
$('tr').eq(i).addClass('questions'+[i])}


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

let obj = $('.questions1 td').get(0)
console.log(typeof(obj)) 
obj.addEventListener('click', function(e){e.preventDefault(); obj.append(cat1q1.q)})
obj.addEventListener('dblclick', function(e){e.preventDefault(); obj.append(cat1q1.a)})

let obj1 = $('.questions1 td').get(1)
console.log(typeof(obj1)) 
obj1.addEventListener('click', function(e){e.preventDefault(); obj1.append(cat2q1.q)})
obj1.addEventListener('dblclick', function(e){e.preventDefault();obj1.append(cat2q1.a)})
}




let resetButton= document.querySelector('button')
resetButton.addEventListener("click", function(e){e.preventDefault(); 
    getQuestions()})

