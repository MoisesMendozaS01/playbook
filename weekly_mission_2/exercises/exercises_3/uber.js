class uber{
    constructor(name,perfil_image, travels,qualification,months,languages,user,user_image,cel,direction){
        this.name=name
        this.perfil_image=perfil_image
        this.travels=travels
        this.qualification=qualification
        this.months=months
        this.languages=languages
        this.user=user
        this.user_image=user_image
        this.cel=cel
        this.direction=direction
    }
}

const uberr = new uber("Moises","/image",1000,4.70,5,["Spanish","English"],"Pablito123","/image","########","centrer street")
console.log(uberr)