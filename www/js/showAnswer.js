function showAnswer(){
    this.tempcurrentlevel.text = currentlevel;
    
    /*document.addEventListener("backbutton", onBackDown, false);*/
    
    if (currentlevel == 4 || currentlevel ==7||currentlevel ==88||currentlevel ==2||currentlevel ==84||currentlevel ==1||currentlevel ==18||currentlevel ==50||currentlevel ==34||currentlevel ==87||currentlevel ==91){
            j1.loadTexture('picture1');
            j2.loadTexture('picture2');
           
            current = 3;
            this.timerShow.add(750, fadePicture, this);
    } 
    else if(currentlevel ==28||currentlevel ==5||currentlevel ==29||currentlevel ==20||currentlevel ==31||currentlevel ==27||currentlevel ==52||currentlevel ==82||currentlevel ==17||currentlevel ==48||currentlevel ==51||currentlevel ==53||currentlevel ==10||currentlevel ==13||currentlevel ==22||currentlevel ==3||currentlevel ==41||currentlevel ==47||currentlevel ==90){
            j1.loadTexture('picture7');
            j2.loadTexture('picture8');
        
            current = 9;
            this.timerShow.add(750, fadePicture, this);
    } 
    else if(currentlevel == 6||currentlevel == 67||currentlevel == 36||currentlevel == 43||currentlevel == 9||currentlevel == 26||currentlevel == 93||currentlevel == 23||currentlevel == 39||currentlevel == 11||currentlevel == 79||currentlevel == 12||currentlevel == 83||currentlevel == 89||currentlevel == 19||currentlevel == 32||currentlevel == 33||currentlevel == 35||currentlevel == 44||currentlevel == 81){
            j1.loadTexture('picture16');
            j2.loadTexture('picture17');
        
            current = 18;
            this.timerShow.add(750, fadePicture, this);
    } 
    else if(currentlevel == 8||currentlevel == 92||currentlevel == 14||currentlevel == 15||currentlevel == 16||currentlevel == 56||currentlevel == 24||currentlevel == 40||currentlevel == 57||currentlevel == 25||currentlevel == 21||currentlevel == 100||currentlevel == 46||currentlevel == 45||currentlevel == 37||currentlevel == 49||currentlevel == 74){
            j1.loadTexture('picture25');
            j2.loadTexture('picture26');
        
            current = 27;
            this.timerShow.add(750, fadePicture, this);
    }
    else if(currentlevel == 54||currentlevel == 77||currentlevel == 30||currentlevel == 42||currentlevel == 62||currentlevel == 94||currentlevel == 95||currentlevel == 69||currentlevel == 63||currentlevel == 85||currentlevel == 76||currentlevel == 98){
            j1.loadTexture('picture34');
            j2.loadTexture('picture35');
       
            current = 36;
            this.timerShow.add(750, fadePicture, this);
    }
    else if(currentlevel == 38||currentlevel == 75||currentlevel == 66||currentlevel == 96||currentlevel == 99||currentlevel == 61||currentlevel == 71||currentlevel == 64||currentlevel == 80||currentlevel == 97){
            j1.loadTexture('picture43');
            j2.loadTexture('picture44');
        
            current = 45;
            this.timerShow.add(750, fadePicture, this);
    }
    else if(currentlevel == 55||currentlevel == 68||currentlevel == 60||currentlevel == 73||currentlevel == 65||currentlevel == 70||currentlevel == 59||currentlevel == 72||currentlevel == 58||currentlevel == 86||currentlevel == 78){
            j1.loadTexture('picture52');
            j2.loadTexture('picture53');
        
            current = 54;
            this.timerShow.add(750, fadePicture, this);
    }
    else {
        this.debug.text('check function changePicture()', 0, 0);
    }
    
    
    
    //this.timerShow = this.time.create(false);
    //this.timerShow.add(750, fadePicture, this);
    this.timerShow.start();
    /*this.debug.text('timer has start', 0, 0);*/
    /*this.bg.inputEnabled = true;
        this.bg.events.onInputDown.add(stopTimer, this);*/
    this.btnstop = this.add.button(this.world.centerX+175, 800, 'stop', stopTimer, this, 'buttonOver', 'buttonOut', 'buttonOver');
        //this.btnstop.scale.set(1.5, 1.5);
        this.btnstop.anchor.setTo(0.5, 0.5);
    this.btnstop.alpha = 0;
    
}



function fadePicture(){
    if(j1.alpha === 1){
        tweenShow = this.add.tween(j1).to({alpha: 0}, 100, Phaser.Easing.Linear.None, true);
        this.add.tween(j2).to({alpha: 1}, 100, Phaser.Easing.Linear.None, true);
        /*j2.inputEnabled=true;
        j2.events.onInputDown.add(stopTimer, this);*/
    } else{
        this.add.tween(j1).to({alpha: 1}, 100, Phaser.Easing.Linear.None, true);
        /*j1.inputEnabled=true;
        j1.events.onInputDown.add(stopTimer, this);*/
        tweenShow = this.add.tween(j2).to({alpha: 0}, 100, Phaser.Easing.Linear.None, true);
    }
    
    tweenShow.onComplete.add(changePicture, this);
    
}

function changePicture(){
    if(j1.alpha === 0){
        j1.loadTexture('picture'+current);
        //===
            j1.x = this.rnd.between(100, 550);
            j1.y = this.rnd.between(250, 450);
            
            //===
        j1.inputEnabled=true;
        j1.events.onInputDown.add(stopTimer, this);
    } else{
        j2.loadTexture('picture'+current);
        j2.x = this.rnd.between(100,550);
            j2.y = this.rnd.between(250, 450);
        j2.inputEnabled=true;
        j2.events.onInputDown.add(stopTimer, this);
    }
    
    current++;
    if (currentlevel == 4 || currentlevel ==7||currentlevel ==88||currentlevel ==2||currentlevel ==84||currentlevel ==1||currentlevel ==18||currentlevel ==50||currentlevel ==34||currentlevel ==87||currentlevel ==91){
        if(current > 6){
            current = 1;
        }
    } 
    else if(currentlevel ==28||currentlevel ==5||currentlevel ==29||currentlevel ==20||currentlevel ==31||currentlevel ==27||currentlevel ==52||currentlevel ==82||currentlevel ==17||currentlevel ==48||currentlevel ==51||currentlevel ==53||currentlevel ==10||currentlevel ==13||currentlevel ==22||currentlevel ==3||currentlevel ==41||currentlevel ==47||currentlevel ==90){
        if(current > 15){
            current = 7;
        }
    } 
    else if(currentlevel == 6||currentlevel == 67||currentlevel == 36||currentlevel == 43||currentlevel == 9||currentlevel == 26||currentlevel == 93||currentlevel == 23||currentlevel == 39||currentlevel == 11||currentlevel == 79||currentlevel == 12||currentlevel == 83||currentlevel == 89||currentlevel == 19||currentlevel == 32||currentlevel == 33||currentlevel == 35||currentlevel == 44||currentlevel == 81){
        if(current > 24){
            current = 16;
        }
    } 
    else if(currentlevel == 8||currentlevel == 92||currentlevel == 14||currentlevel == 15||currentlevel == 16||currentlevel == 56||currentlevel == 24||currentlevel == 40||currentlevel == 57||currentlevel == 25||currentlevel == 21||currentlevel == 100||currentlevel == 46||currentlevel == 45||currentlevel == 37||currentlevel == 49||currentlevel == 74){
        if(current > 33){
            current = 25;
        }
    }
    else if(currentlevel == 54||currentlevel == 77||currentlevel == 30||currentlevel == 42||currentlevel == 62||currentlevel == 94||currentlevel == 95||currentlevel == 69||currentlevel == 63||currentlevel == 85||currentlevel == 76||currentlevel == 98){
        if(current > 42){
            current = 34;
        }
    }
    else if(currentlevel == 38||currentlevel == 75||currentlevel == 66||currentlevel == 96||currentlevel == 99||currentlevel == 61||currentlevel == 71||currentlevel == 64||currentlevel == 80||currentlevel == 97){
        if(current > 51){
            current = 43;
        }
    }
    else if(currentlevel == 55||currentlevel == 68||currentlevel == 60||currentlevel == 73||currentlevel == 65||currentlevel == 70||currentlevel == 59||currentlevel == 72||currentlevel == 58||currentlevel == 86||currentlevel == 78){
        if(current > 60){
            current = 52;
        }
    }
    else {
        this.debug.text('check function changePicture()', 0, 0);
    }
    
    
    this.timerShow.add(750, fadePicture, this);
    
}

function stopTimer(){
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
            this.nextlvl = this.add.button(this.world.centerX+175, 800, 'next', nextlevel, this, 'buttonOver', 'buttonOut', 'buttonOver');
            //this.nextlvl.scale.set(1.5, 1.5);
            this.nextlvl.anchor.setTo(0.5, 0.5);
            this.nextlvl.alpha = 1;
            this.btnstop.alpha =0;
            /*this.splicelevel = this.arraylevel.indexOf(currentlevel);
            level.call(this);
            this.timerShow.start();*/
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
            this.nextlvl = this.add.button(this.world.centerX+175, 800, 'next', nextlevel, this, 'buttonOver', 'buttonOut', 'buttonOver');
            //this.nextlvl.scale.set(1.5, 1.5);
            this.nextlvl.anchor.setTo(0.5, 0.5);
            this.nextlvl.alpha = 1;
            this.btnstop.alpha =0;
            
            /*this.splicelevel = this.arraylevel.indexOf(currentlevel);
            level.call(this);
            this.timerShow.start();*/
        }
    }
    
}

function nextlevel(){
    this.splicelevel = this.arraylevel.indexOf(currentlevel);
    this.pictureanswer.alpha = 0;
    this.nextlvl.alpha = 0;
    this.txtcorrect.alpha = 0;
    level.call(this);
    this.timerShow.start();
}


/*function updateCounter(){
    
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
            this.timerku.stop();
            
            
        } 
}*/