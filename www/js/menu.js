BasicGame.MainMenu = function (game) {
    this.playBtn;
    this.txtScore;
    this.txtlastscore;
    this.n;
    this.bg;
    this.bgscore;
    this.bghighscore;
    var scores;
    var j1;
    var j2;
    var gameWidth = 640;
    var ht = screen.height;
    var m;
};

// set Game function prototype
BasicGame.MainMenu.prototype = {
    
    
    preload: function(){
        //kategori jawaban 1
        this.load.image('bg', 'img/bg1.jpg');
        
        this.load.image('picture0', 'img/number/0.png');
        this.load.image('picture1', 'img/number/3.png');
        this.load.image('picture2', 'img/number/5.png');
        this.load.image('picture3', 'img/number/2.png');
        this.load.image('picture4', 'img/number/4.png');
        this.load.image('picture5', 'img/number/25.png');
        this.load.image('picture6', 'img/number/8.png');
        //kategori jawaban 2
        this.load.image('picture7', 'img/number/9.png');
        this.load.image('picture8', 'img/number/6.png');
        this.load.image('picture9', 'img/number/31.png');
        this.load.image('picture10', 'img/number/19.png');
        this.load.image('picture11', 'img/number/23.png');
        this.load.image('picture12', 'img/number/55.png');
        this.load.image('picture13', 'img/number/15.png');
        this.load.image('picture14', 'img/number/16.png');
        this.load.image('picture15', 'img/number/12.png');
        //kategori jawaban 3
        this.load.image('picture16', 'img/number/50.png');
        this.load.image('picture17', 'img/number/21.png');
        this.load.image('picture18', 'img/number/32.png');
        this.load.image('picture19', 'img/number/13.png');
        this.load.image('picture20', 'img/number/24.png');
        this.load.image('picture21', 'img/number/10.png');
        this.load.image('picture22', 'img/number/26.png');
        this.load.image('picture23', 'img/number/29.png');
        this.load.image('picture24', 'img/number/30.png');
        //kategori jawaban 4
        this.load.image('picture25', 'img/number/11.png');
        this.load.image('picture26', 'img/number/22.png');
        this.load.image('picture27', 'img/number/33.png');
        this.load.image('picture28', 'img/number/34.png');
        this.load.image('picture29', 'img/number/36.png');
        this.load.image('picture30', 'img/number/40.png');
        this.load.image('picture31', 'img/number/61.png');
        this.load.image('picture32', 'img/number/20.png');
        this.load.image('picture33', 'img/number/51.png');
        //kategori jawaban 5
        this.load.image('picture34', 'img/number/14.png');
        this.load.image('picture35', 'img/number/59.png');
        this.load.image('picture36', 'img/number/41.png');
        this.load.image('picture37', 'img/number/62.png');
        this.load.image('picture38', 'img/number/77.png');
        this.load.image('picture39', 'img/number/68.png');
        this.load.image('picture40', 'img/number/70.png');
        this.load.image('picture41', 'img/number/71.png');
        this.load.image('picture42', 'img/number/75.png');
        //kategori jawaban 6
        this.load.image('picture43', 'img/number/67.png');
        this.load.image('picture44', 'img/number/80.png');
        this.load.image('picture45', 'img/number/99.png');
        this.load.image('picture46', 'img/number/100.png');
        this.load.image('picture47', 'img/number/175.png');
        this.load.image('picture48', 'img/number/128.png');
        this.load.image('picture49', 'img/number/179.png');
        this.load.image('picture50', 'img/number/130.png');
        this.load.image('picture51', 'img/number/138.png');
        //kategori jawaban 7
        this.load.image('picture52', 'img/number/54.png');
        this.load.image('picture53', 'img/number/144.png');
        this.load.image('picture54', 'img/number/160.png');
        this.load.image('picture55', 'img/number/123.png');
        this.load.image('picture56', 'img/number/176.png');
        this.load.image('picture57', 'img/number/178.png');
        this.load.image('picture58', 'img/number/129.png');
        this.load.image('picture59', 'img/number/200.png');
        this.load.image('picture60', 'img/number/290.png');
        this.load.image('playButton', 'img/button-play.png');
        
        
    },
    
    create: function(){
        
        if(AdMob) AdMob.createBanner({
            adId: admobid.banner,
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            
            autoShow: true });
        //AdMob.showBannerAtXY(0, 1000);
        // preppare and load ad resource in background, e.g. at begining of game level
        if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
        this.bg = this.add.image(0, 0, 'bg');
        this.add.image(20, 20, 'meth');
        this.bgscore = this.add.image(this.world.centerX+70, 500, 'score');
        this.bgscore.anchor.setTo(0.5, 0.5);
        this.bgscore.scale.set(0.75, 0.75);
        this.txtScore = this.add.text(this.world.centerX+70, 500, ' ', { font: "50px Arial", fill: "#ff0044", wordWrap: true, wordWrapWidth: this.bgscore.width, align: "center" });
        this.txtScore.anchor.setTo(0.5, 0.5);
        //this.bghighscore = this.add.image(this.world.centerX+100, 420, 'highscore');
        this.bghighscore = this.add.image(this.world.centerX, 420, 'highscore');
        this.bghighscore.anchor.setTo(0.5, 0.5);
        this.bghighscore.scale.set(0.75, 0.75);
        
        m = this.add.sprite(140, 140, 'm');
        m.anchor.setTo(0.5, 0.5);
        //m.scale.setTo(0.5, 0.5);
        m.animations.add('run');
        m.animations.play('run', 5, true);
        //localStorage.removeItem('highscore');
        //this.bg.anchor.setTo(0.5, 0.5);
        //score = this.add.text(this.world.centerX, 175, 'Score : 0',{ font: "30px Arial", fill: "#ff0044" });
        //score.anchor.setTo(0.5, 0.5);
        
        
        scores = localStorage.getItem('highscore');
        if(scores === null){
            this.txtScore.text = '0';
        } else{
            this.txtScore.text = ' '+scores;
        }
            
        
        //this.txtScore.anchor.setTo(0.5, 0.5);
        //this.txtScore.inputEnabled = true;
        //this.txtScore.events.onInputDown.add(level, this);
        this.playBtn = this.add.button(this.world.centerX, this.world.centerY+50, 'playButton', this.startTheGame, this, 'buttonOver', 'buttonOut', 'buttonOver');
        this.playBtn.scale.set(0.25, 0.25);
        this.playBtn.anchor.setTo(0.5, 0.5);
        
        /*this.add.text(0, 0, 'ht');*/
       /* if(AdMob) AdMob.createBanner({
            adId: admobid.banner,
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            isTesting: true, // TODO: remove this line when release
            autoShow: true
        });*/
        //document.addEventListener("backbutton", onBackDown, false);
    },
    
    update: function(){
        //this.state.start('play');
        //this.txtScore.text = scores;
    },
    
    /*leaveIncorrectOrientation: function(){
        scaleStage.call(this);
    },*/
    
    //var rando;
    startTheGame: function(){
                
        this.state.start('play');
    }
};