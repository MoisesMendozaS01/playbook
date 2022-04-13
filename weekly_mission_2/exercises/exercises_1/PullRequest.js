const PullRequest ={
    title:'"lunchX aporte"',
    barnchName:"main",
    dateCreated:"13 abril",
    status:"CI build Succeeded",
    repositoryNameAssociated:"Playbook",
    autor:"MoisesMendozaS01",
    getStatus : function(){
        console.log("Estado del Pull Request "+this.title+" es "+this.status)
    },
    getTitleAndAutor:function(){
        console.log("EL nombre del Pull Request es "+this.title+" y su autor es "+this.autor)
    }
}
PullRequest.getStatus()
PullRequest.getTitleAndAutor()