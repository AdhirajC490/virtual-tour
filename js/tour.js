AFRAME.registerComponent("tour" , {
    init: function(){
        this.placesContainer = this.el
        this.createCards()
    },
    createCards: function(){
        const thumbnailsRef = [
            {
                id:"tajmahal" , 
                title:"TajMahal",
                url:"./assests/thumbnails/taj_mahal.png"
            },
            {
                id:"budapest" , 
                title:"Budapest",
                url:"./assests/thumbnails/budapest.jpg"
            },
            {
                id:"eiffelTower" , 
                title:"Eiffel-Tower",
                url:"./assests/thumbnails/eiffel_tower.jpg"
            },
            {
                id:"newYork" , 
                title:"New-York",
                url:"./assests/thumbnails/new_york_city.png"
            }
        ];
        let initialXposition = -60
        for(var item of thumbnailsRef){
            const posX = initialXposition+25
            const posY = 10
            const posZ = -40
            const pos = {x:posX , y:posY , z:posZ}
            initialXposition = posX

            const borderEl = this.createBorder(pos , item.id)
        }
        },

        createBorder:function(pos , id){
            const entityel = document.createElement("a-entity")
            entityel.setAttribute("id", id)
            entityel.setAttribute("visible" , true)
            entityel.setAttribute("geometry" , {
                primitive:"ring"

            })
        }

})