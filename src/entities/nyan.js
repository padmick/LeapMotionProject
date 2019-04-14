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