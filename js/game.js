class Game{
    constructor(){

    }

    getState(){
        database.ref('gameState').on("value",(data)=>{
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        form = new Form();
        if(gameState === 0){
            form.display();
        }
    }

    play(){
        if(keyDown(LEFT_ARROW) && player.index != null){
            player.writePosition(-3,0);
        }
        else if(keyDown(RIGHT_ARROW) && player.index != null){
            player.writePosition(3,0);
        }
        else if(keyDown(UP_ARROW) && player.index != null){
            player.writePosition(0,-3);
        }
        else if(keyDown(DOWN_ARROW) && player.index != null){
            player.writePosition(0,+3);
        }
    }
}