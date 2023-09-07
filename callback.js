// function callBack(cb) {
//     cb(2002);
//   }
//   callBack(function (orderNmber) {
//     console.log("Call Back", orderNmber);
//   });



// function call(a){
//     a();

// }


//     call( function(){
//         const container =document.getElementById('container');
//         const h1 = document.createElement("h1");
//         h1.innerText =("Hello World")
//         container.append(h1);
//     })


//     function paragraph (text){
//      text()
//     }

//     paragraph (function(){
//         const p= document.createElement('p');
//         p.innerText = ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quae eligendi autem in eos eum dolorem repudiandae! Quae laborum nulla ullam quo impedit aut quia consequuntur ipsa nam accusantium. Aliquid?');
//         container.append(p); 
//     })

//     function array (data){
//        data(100) 

//     }

//     array(function(orderNmber){
//          const students = ['Compulsory-ENGLISH', 100 , ['CHEMISTRY-III', 100]] ;

//         const h2 =document.createElement('h2');
//         h2.innerText =(students[2] + ' ' + orderNmber);
//         container.append(h2) 

//     })

setTimeout(function () {
  const container = document.getElementById('container');
  const mainDiv = document.createElement('div');
  const heading = document.createElement('h1');
  heading.innerText = ('Set Time Out');
  mainDiv.append(heading);
  mainDiv.style.width = '100%';
  mainDiv.style.backgroundColor = 'gray';
  container.append(mainDiv);
  setTimeout(function () {
    const text = document.createElement('p');
    text.style.backgroundColor = 'lightgray';
    text.innerText = ('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iste voluptas dolor ea rem recusandae est veniam voluptates iusto perferendis, consequatur ab delectus, totam corrupti pariatur neque excepturi eum eos!');
    mainDiv.append(text);
    setTimeout(function () {
      const text2 = document.createElement('p');
      text2.style.backgroundColor = 'lightgray';
      text2.innerText = ('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iste voluptas dolor ea rem recusandae est veniam voluptates iusto perferendis, consequatur ab delectus, totam corrupti pariatur neque excepturi eum eos!');
      mainDiv.append(text2);
      setTimeout(function () {
        const text3 = document.createElement('p');
        text3.style.backgroundColor = 'lightgray';
        text3.innerText = ('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iste voluptas dolor ea rem recusandae est veniam voluptates iusto perferendis, consequatur ab delectus, totam corrupti pariatur neque excepturi eum eos!');
        mainDiv.append(text3);
        setTimeout(function () {
          const text4 = document.createElement('p');
          text4.style.backgroundColor = 'lightgray';
          text4.innerText = ('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iste voluptas dolor ea rem recusandae est veniam voluptates iusto perferendis, consequatur ab delectus, totam corrupti pariatur neque excepturi eum eos!');
          mainDiv.append(text4);
          setTimeout(function () {
            const text5 = document.createElement('p');
            text5.style.backgroundColor = 'lightgray';
            text5.innerText = ('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iste voluptas dolor ea rem recusandae est veniam voluptates iusto perferendis, consequatur ab delectus, totam corrupti pariatur neque excepturi eum eos!');
            mainDiv.append(text5);
            setTimeout(function () {
              const text6 = document.createElement('p');
              text6.style.backgroundColor = 'lightgray';
              text6.innerText = ('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iste voluptas dolor ea rem recusandae est veniam voluptates iusto perferendis, consequatur ab delectus, totam corrupti pariatur neque excepturi eum eos!');
              mainDiv.append(text6);
              setTimeout(function () {
                const text7 = document.createElement('p');
                text7.style.backgroundColor = 'lightgray';
                text7.innerText = ('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iste voluptas dolor ea rem recusandae est veniam voluptates iusto perferendis, consequatur ab delectus, totam corrupti pariatur neque excepturi eum eos!');
                mainDiv.append(text7);
                setTimeout(function () {
                  const text8 = document.createElement('p');
                  text8.style.backgroundColor = 'lightgray';
                  text8.innerText = ('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iste voluptas dolor ea rem recusandae est veniam voluptates iusto perferendis, consequatur ab delectus, totam corrupti pariatur neque excepturi eum eos!');
                  mainDiv.append(text8);
                  setTimeout(function () {
                    const text9 = document.createElement('p');
                    text9.style.backgroundColor = 'lightgray';
                    text9.innerText = ('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iste voluptas dolor ea rem recusandae est veniam voluptates iusto perferendis, consequatur ab delectus, totam corrupti pariatur neque excepturi eum eos!');
                    mainDiv.append(text9);
                    setTimeout(function () {
                      const text10 = document.createElement('p');
                      text10.style.backgroundColor = 'lightgray';
                      text10.innerText = ('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo iste voluptas dolor ea rem recusandae est veniam voluptates iusto perferendis, consequatur ab delectus, totam corrupti pariatur neque excepturi eum eos!');
                      mainDiv.append(text10);
                    }, 1000)
                  }, 1000)
                }, 1000)
              }, 1000)
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)

