let left=null;
let right=null;
let operator=null;
let prevOp=null;

function add (a,b){
    return a+b;
} 


function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,operator){
    if(operator=="add")
     return add(a,b);
    if(operator=="subtract")
     return subtract(a,b);
    if(operator=="multiply")
     return multiply(a,b);
    if(operator=="divide")
     return divide(a,b);
}



let btn = document.querySelectorAll('button');

let res=document.querySelector('.result > p');

let btnArr = Array.from(btn);

for(let i =0;i<btnArr.length;i++)
  btnArr[i].addEventListener('click', () => {
    if(!isNaN(Number(btnArr[i].textContent)))
        {
            if(left==null)
                {
                    left=Number(btnArr[i].textContent);
                    res.textContent=left;
                }
            else{
                if(operator!=null)
                    {
                        if(right==null)
                        {
                            right=Number(btnArr[i].textContent);
                        }
                        else 
                        {
                            right *=10;
                            right+=Number(btnArr[i].textContent);
                        }
                        res.textContent=right;
                    }
                else{
                    left*=10;
                    left+=Number(btnArr[i].textContent);
                    res.textContent=left;
                }
            }
        }
    else{
        let AC=document.querySelector(".AC")
        if(btnArr[i].textContent=="AC")
            {
                left=null;
                right=null;
                res.textContent="";
            }


        if(btnArr[i].textContent=="+/-")
        {
            let newRes= parseInt(res.textContent)*-1;
            if(right==res.textContent)
                right=newRes;
            else left=newRes;
            res.textContent=newRes;
        }
        if(btnArr[i].textContent=="C")
        {
            right=null;
            res.textContent="";
        }
        if(btnArr[i].textContent=="%"){
            let newRes= parseInt(res.textContent)/100;
            if(right==res.textContent)
                right=newRes;
            else left=newRes;
            res.textContent=newRes;
        }
        if(btnArr[i].textContent=="×")
            {
                let all=document.querySelectorAll(".yellow");
                let work=Array.from(all);
                for(let j=0;j<work.length;j++)
                 {
                    work[j].classList.remove("clicked")
                    work[j].classList.add("test")
                 }
                operator="multiply";
                btnArr[i].classList.add("clicked")
                AC.textContent="C";
            }
        if(btnArr[i].textContent=="+")
            {
                let all=document.querySelectorAll(".yellow");
                let work=Array.from(all);
                for(let j=0;j<work.length;j++)
                 {
                    work[j].classList.remove("clicked")
                    work[j].classList.add("test")
                 }
                operator="add";
                btnArr[i].classList.add("clicked")
                AC.textContent="C";
            }
        if(btnArr[i].textContent=="–")
            {
                let all=document.querySelectorAll(".yellow");
                let work=Array.from(all);
                for(let j=0;j<work.length;j++)
                 {
                    work[j].classList.remove("clicked")
                    work[j].classList.add("test")
                 }
                operator="subtract";
                btnArr[i].classList.add("clicked")
                    //here
               
                AC.textContent="C";
            }
        if(btnArr[i].textContent=="÷")
            {

                let all=document.querySelectorAll(".yellow");
                let work=Array.from(all);
                for(let j=0;j<work.length;j++)
                 {
                    work[j].classList.remove("clicked")
                    work[j].classList.add("test")
                 }


                operator="divide";
                btnArr[i].classList.add("clicked")
                
                // btnArr[i].removeEventListener('mouseenter',addEvent(e));
                // btnArr[i].removeEventListener('mouseleave',removeEvent(e));
                
                
                AC.textContent="C";
            }
        if(btnArr[i].textContent=="=")
            {
                if(right==null)
                right=left;
                if(operator==null)
                operator=prevOp;
                let value=operate(left,right,operator);
                prevOp=operator;
                right=null;
                operator=null;
                left=value;
                res.textContent=value;
                let all=document.querySelectorAll(".yellow");
                let work=Array.from(all);
                for(let j=0;j<work.length;j++)
                 {
                    work[j].classList.remove("clicked")
                    work[j].classList.add("test")
                    // work[j].style.backgroundColor="orange";
                    // work[j].style.color="white";
                    // work[j].addEventListener('mouseenter',addEvent(e));
                    // work[j].addEventListener('mouseleave',removeEvent(e));
                    

                 }
                 AC.textContent="AC";
            }
        
    }
  })

console.log(parseInt("%"));


function addEvent(event) {
    event.style.backgroundColor="#5c5c5c";
}

function removeEvent(e){
    e.style.backgroundColor="orange";
}