BasicGame.Over = function (game) {
    this.txtover;
    this.lastscore;
    this.highscore;
    this.btnmenu;
    var scorehigh;
    var scorelast;
    this.board;
};

// set Game function prototype
BasicGame.Over.prototype = {
    
    preload: function(){
        this.load.image('bg', 'img/bg1.jpg');
        this.load.image('menu', 'img/menu-button.png');
        this.load.image('overboard', 'img/over.png');
        
    },
    
    create: function(){
        //showInterstitialFunc.call(this);
        this.add.image(0, 0, 'bg');
        scorelast = currentscore;
        scorehigh = scores;
        this.board = this.add.image(this.world.centerX, 285, 'overboard');
        this.board.anchor.setTo(0.5, 0.5);
        this.board.scale.setTo(1.75, 2);
        
        this.txtover = this.add.text(this.world.centerX, 200, 'Game Over', { font: "50px Arial", fill: "#ff0044",wordWrap: true, wordWrapWidth: this.board.width, align: "center" });
        this.txtover.anchor.setTo(0.5, 0.5);
        this.txtover.inputEnabled = true;
        this.txtover.angle = 13;
        //this.txtover.events.onInputDown.add(this.backToMenu, this);
        
        this.lastscore = this.add.text(this.world.centerX, 275, '', { font: "30px Arial", fill: "#ff0044",wordWrap: true, wordWrapWidth: this.board.width, align: "center" });
        this.lastscore.anchor.setTo(0.5, 0.5);
        this.lastscore.angle = 13;
        this.highscore = this.add.text(this.world.centerX, 350, '', { font: "30px Arial", fill: "#ff0044",wordWrap: true, wordWrapWidth: this.board.width, align: "center" });
        this.highscore.anchor.setTo(0.5, 0.5);
        this.highscore.angle = 13;
        if(scorelast <= scorehigh){
           this.lastscore.text = 'Your Score : '+scorelast;
            this.highscore.text = 'Your Highscore : '+scorehigh;
        }else{
            this.lastscore.text = 'Congrats, you have new Score';
            this.highscore.text = scorelast;
        }
        
        this.btnmenu = this.add.button(this.world.centerX, this.world.centerY, 'menu', this.backToMenu, this, 'buttonOver', 'buttonOut', 'buttonOver');
        this.btnmenu.scale.set(0.25, 0.25);
        this.btnmenu.anchor.setTo(0.5, 0.5);
        //scorelast = game.add.text(game.world.centerX, 275, 'score: '+scores, { font: "30px Arial", fill: "#ff0044" });
          //  scorelast.anchor.setTo(0.5, 0.5);
        //document.addEventListener("backbutton", backToMenu, false);
        
    },
    
    update: function(){
        // preppare and load ad resource in background, e.g. at begining of game level
        //if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );

        // show the interstitial later, e.g. at end of game level
        if(AdMob) AdMob.showInterstitial();
    },
    
    backToMenu: function(){
        this.state.start('menu');
        //this.txtover.text  = 'Boo';
    }
    
};