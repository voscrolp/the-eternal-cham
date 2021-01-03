class Form {
    constructor(){
        this.title = createSprite(windowWidth/2,windowHeight/5,10,10);
        this.titleImage = loadImage("gameFiles/title.png");
        this.title.scale = 2;
        this.title.depth = 4;

        this.playButton = createSprite(windowWidth/2,windowHeight/2,10,10);
        this.playButtonImage = loadImage("gameFiles/playButton.png");
        this.playButton.depth = 4;
        this.playButton.scale = 1.5;

        this.playButtonInput = createButton('Play');
        this.playButtonInput.position(this.playButton.x - 37,this.playButton.y - 32);
        this.playButtonInput.size(86,35);

        this.background = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
        this.backgroundImg = loadImage("gameFiles/background.png");
        this.background.depth = -1;
        this.background.depth = 2;

        this.inputBox = createInput("Name");
        this.inputBox.position(windowWidth/2 - 100,windowHeight/2);

        this.nameButton = createButton('Enter');
        this.nameButton.position(windowWidth/2 - 40,windowHeight/2 + 30);

        //this.element = createElement('h3');
    }

    display(){
        this.title.addImage(this.titleImage);
        this.playButton.addImage(this.playButtonImage);
        this.background.addImage(this.backgroundImg);

        this.inputBox.hide();
        this.nameText = createElement('h2',"Enter Your Name");
        this.nameButton.hide();
        drawSprites();

        this.playButtonInput.mousePressed(()=>{
            this.title.visible = false;
            this.playButton.x = 3000;
            this.playButtonInput.hide();
            
            this.inputBox.show();
            //this.nameText.show();
            this.nameButton.show();

            //this.nameText.html('Enter Your Name');
            this.nameText.position(displayWidth/2 - 100,displayHeight/4);
            this.nameText.style('color','#FFFFFF');

            this.nameButton.mousePressed(()=>{
                player.name = this.inputBox.value();
                player.createPlayer();
                playerCount++;
                player.index = playerCount;
                player.updateCount(playerCount);
            })

        })
    }

        
}