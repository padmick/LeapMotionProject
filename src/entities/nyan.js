var FlappyNyan = function(state, x, y){
    Kiwi.GameObjects.Sprite.call(this, state, state.textures['FlappyNyanCat'], x, y);
    this.state = state;
    this.animation.add('walk', [0, 1, 2, 3, 4, 5], 0.1, true);    
    this.animation.play('walk');
 
    FlappyNyan.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
    }
}
Kiwi.extend(FlappyNyan,Kiwi.GameObjects.Sprite);
FlappyNyan.prototype.spawnBoxes = function(one, two, three, four, five){
 
    if(one){    
        this.state.streamerGroup.addChild(new MovingBox(this.state, this.x , this.y + 05,  'yellowBox'));
        }
        if(two){ 
            this.state.streamerGroup.addChild(new MovingBox(this.state, this.x , this.y+ 15, 'orangeBox'));
        }
     
        if(three){ 
            this.state.streamerGroup.addChild(new MovingBox(this.state, this.x , this.y + 25,  'greenBox'));
        }
     
        if(four){ 
            this.state.streamerGroup.addChild(new MovingBox(this.state, this.x, this.y + 35,  'pinkBox'));
        }
     
        if(five){ 
            this.state.streamerGroup.addChild(new MovingBox(this.state, this.x, this.y + 45, 'blueBox'));
        }
    }