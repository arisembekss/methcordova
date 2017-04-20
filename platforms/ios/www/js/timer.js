/*var conter=10;
var txt;
var timerku;
function create() {

    var sprite = game.add.sprite(0, 0, 'phaser');
    sprite.inputEnabled = true;
    sprite.events.onInputDown.add(tes, this);
    txt = game.add.text(200, 0, 'counter', { font: "50px Arial", fill: "#ff0044"});
    
    timerku=game.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
    

}*/

function updateCounter(){
    
    //this.txttimer.text='boo';
    detik--;
    this.txttimer.text = menit+' : '+detik;
    if(detik==0){
        
        detik=60;
        menit--;
        
        
        
    }
    else if(menit<0 ){
        //conter=0;
            this.txttimer.text = '0 : 0';
            //this.timerku.stop();
            stopByTimer.call(this);
            //this.state.start('over');
            
        } 
}

function stopByTimer(){
    this.timerShow.stop();
    //tweenShow.pause();
    //this.appName.text = this.pictureanswer.key;
    if (j1.alpha === 1){
        //j1.alpha = 1;
        //this.appName.text = this.pictureanswer.key+" "+j1.key;
        if(j1.key !== this.pictureanswer.key){
            this.appName.text = 'Jawaban anda salah';
            
            currentscore = this.scoreplay;
            if(localStorage.getItem('highscore')===null){
                localStorage.setItem('highscore', this.scoreplay);
            } else{
                if(this.scoreplay > localStorage.getItem('highscore')){
                    localStorage.setItem('highscore', this.scoreplay);
                }
            }
            /*scorelast = game.add.text(game.world.centerX, 175, 'score: '+scores, { font: "30px Arial", fill: "#ff0044" });
            scorelast.anchor.setTo(0.5, 0.5);*/
            AdMob.hideBanner();
            this.state.start('over');
            
        } else{
            this.appName.text = 'benar';
            this.scoreplay = this.scoreplay + 5;
            this.txtscoreplay.text = 'Score : '+this.scoreplay;
            this.txtcorrect.alpha = 1;
            this.pictureanswer.alpha = 1;
            //this.nextlvl = this.add.button(this.world.centerX+175, 800, 'next', nextlevel, this, 'buttonOver', 'buttonOut', 'buttonOver');
            //this.nextlvl.scale.set(1.5, 1.5);
            //this.nextlvl.anchor.setTo(0.5, 0.5);
            //this.nextlvl.alpha = 1;
            //this.btnstop.alpha =0;
            /*this.splicelevel = this.arraylevel.indexOf(currentlevel);
            level.call(this);
            this.timerShow.start();*/
            this.state.start('over');
        }
    }else{
        //j2.alpha = 1;
        if(j2.key !== this.pictureanswer.key){
            this.appName.text = 'Jawaban anda salah';
            currentscore = this.scoreplay;
            if(localStorage.getItem('highscore')===null){
                localStorage.setItem('highscore', this.scoreplay);
            } else{
                if(this.scoreplay > localStorage.getItem('highscore')){
                    localStorage.setItem('highscore', this.scoreplay);
                }
            }
            /*scorelast = game.add.text(game.world.centerX, 175, 'score: '+scores, { font: "30px Arial", fill: "#ff0044" });
            scorelast.anchor.setTo(0.5, 0.5);*/
            AdMob.hideBanner();
            this.state.start('over');
        } else{
            this.appName.text = 'benar';
            this.scoreplay = this.scoreplay + 5;
            this.txtscoreplay.text = 'Score : '+this.scoreplay;
            this.txtcorrect.alpha = 1;
            this.pictureanswer.alpha = 1;
            //this.nextlvl = this.add.button(this.world.centerX+175, 800, 'next', nextlevel, this, 'buttonOver', 'buttonOut', 'buttonOver');
            //this.nextlvl.scale.set(1.5, 1.5);
            //this.nextlvl.anchor.setTo(0.5, 0.5);
            //this.nextlvl.alpha = 1;
            //this.btnstop.alpha =0;
            
            /*this.splicelevel = this.arraylevel.indexOf(currentlevel);
            level.call(this);
            this.timerShow.start();*/
            this.state.start('over');
        }
    }
    
}
