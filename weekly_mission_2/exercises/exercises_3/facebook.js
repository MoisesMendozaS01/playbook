class facebook{
    constructor(name,perfil_picture,coverpage_picture,age,friends,post_1,post_2,biography){
        this.name=name
        this.perfil_picture=perfil_picture
        this.coverpage_picture=coverpage_picture
        this.age=age
        this.friends=friends
        this.post_1=post_1
        this.post_2=post_2
        this.biography=biography
    }
}

const face=new facebook("Moises Mendoza","/imageperfil","/imagecover",24,500,['tilte:"firts post"','date:"##/##/####"','text:"Hi, this is my first post"','image:"/image"','friends_tags:["juanito","Paco"]','link:"link.org"'],['tilte:"second post"','date:"##/##/####"','text:"Hi, this is my second post"','image:"/image"','friends_tags:["juanito","Paco"]','link:"link.org"'],['country:"México"','work:"hola.inc"','emotional_situation:"single"','School:"SchoolNew"','gender:"male"','city:"Monterrey"'])
console.log(face)