

const myLibrary = [];

function Book(title,author,num_page,read){
    this.title=title;
    this.author=author;
    this.num_page=num_page;
    this.read=read;
    this.info = function(){return `${this.title},${this.num_page},${this.read}`;}
}

function addBookToLibrary(title,author,num_page,read) {
  const Book1 = new Book(title,author,num_page,read);
  myLibrary.push(Book1)
  
  let cover=document.createElement('div')
  let cover_title=document.createElement('h2')
  cover_title.textContent=Book1.title
  cover_title.setAttribute('style','border-bottom:1px solid black;overflow:clip')
  let cover_author=document.createElement('h3')
  cover_author.textContent=`Author: ${Book1.author}`
  let cover_num_page=document.createElement('h3')
  cover_num_page.textContent=`${Book1.num_page} pages`
  let cover_read=document.createElement('h3')
  if(Book1.read==true){
    cover_read.textContent='Finished'
  }else{
    cover_read.textContent='Unfinished'
  }
  let cover_text=document.createElement('div')
  cover_text.appendChild(cover_author)
  cover_text.appendChild(cover_num_page)
  cover_text.appendChild(cover_read)
  cover_text.setAttribute('style','width:100%;position:absolute;bottom:0')
  cover.appendChild(cover_title)
  cover.appendChild(cover_text)
  library=document.querySelector('.books')
  cover.setAttribute('style','background:#9A7E6F;height:450px;box-sizing:border-box;text-align:center;border:2px solid black;position:relative;overflow:clip;box-shadow:10px 10px 10px 0 #2c4226')

  let delete_btn=document.createElement('button')
  delete_btn.textContent='Delete'
  delete_btn.setAttribute('class','small_btn')
  delete_btn.setAttribute('id','delete')
  let read_btn=document.createElement('button')
  read_btn.setAttribute('class','small_btn')
  read_btn.setAttribute('id','read')
  read_btn.textContent='Read'

  read_btn.addEventListener('click',()=>{
    cover_read.textContent='Finished'
    
  })
  delete_btn.addEventListener('click',()=>{
    library.removeChild(cover)
  })

  cover.appendChild(read_btn)
  cover.appendChild(delete_btn)

  library.appendChild(cover)
}

function readBooks(){
  myLibrary.forEach(item=>{
    console.log(item.info())
  })
}


dialog=undefined
let butt= document.querySelector('#button')
butt.addEventListener('click',()=>{
  let popup=document.createElement('dialog')
  let form=document.createElement('form')
  let btn=document.createElement('button')
  let p=document.createElement('p')
  

  form.setAttribute('method','dialog')
  form.setAttribute('name','my_form')
  btn.textContent='ok'
  btn.setAttribute('type','submit')
  p.textContent='Add the book informations please:'
  p.setAttribute('style','text-align:center')
  
  

  form.appendChild(p)
  for(i=0;i<4;i+=1){
    let div = document.createElement('div')
    let label=document.createElement('label')
    let input=document.createElement('input')
    if (i==0){
      label.textContent='Author: '
      input.setAttribute('type','text')
      input.setAttribute('name','Author')
    }else if(i==1){
      label.textContent='Title: '
      input.setAttribute('type','text')
      input.setAttribute('name','Title')
    }else if(i==2){
      label.textContent='Number of pages: '
      input.setAttribute('type','number')
      input.setAttribute('name','Num_page')
    }else if(i==3){
      label.textContent='Finished reading: '
      input.setAttribute('type','checkbox')
      input.setAttribute('name','finished')
    }
    
    div.appendChild(label)
    div.appendChild(input)
    div.setAttribute('style','margin-bottom:20px;width:200px')
    label.setAttribute('style','margin-right:10px')
    form.appendChild(div)
  }
  form.appendChild(btn)
  popup.appendChild(form)
  let newbook=document.querySelector('.newbook')
  newbook.appendChild(popup)
  popup.showModal()

  form.addEventListener('submit',()=>{
    author=document.forms['my_form'].Author.value
    title=document.forms['my_form'].Title.value
    num_page=document.forms['my_form'].Num_page.value
    if (document.forms['my_form'].finished.checked==true){
      read=true
    }else{
      read=false
    }
    addBookToLibrary(title,author,num_page,read)
    event.preventDefault()
    newbook.removeChild(popup)
  })
  

})

