BasicGame.Play = function (game) {
    this.appName;
    this.question;
    this.bg;
    this.batas;
    this.header;
    this.txtcorrect;
    this.btnstop;
    this.nextlvl;
    var tween1 = null;
    this.rndm = null;
    this.splicelevel;
    this.arraylevel;
    this.i;
    this.scoreplay;
    this.txtscoreplay;
    this.pictureanswer;
    var currentlevel;
    var currentlevelanswer;
    var current;
    var currentscore;
    var randx;
    var randy;
    var tweenShow = null;
    this.timerShow;
    this.timerPlay;
    
    this.tempcurrentlevel;
    this.anim;
    var detik;
    this.txttimer;
    this.timerku;
    var menit;
    //this.j1;
};

// set Game function prototype
BasicGame.Play.prototype = {

    
    
    preload: function(){
        this.load.image('bg', 'img/bg-play.jpg');
        this.load.image('soal', 'img/newsoal1.png');
        this.load.image('header', 'img/header.jpg');
        this.load.image('stop', 'img/button-stop.png');
        this.load.image('next', 'img/button-next.png');
        //this.load.image('batas', 'img/pembatas.png');
        this.load.image('batas', 'img/newsoal.png');
        this.load.atlasJSONHash('me', 'img/eyes.png', 'img/eyes.json');
        //this.load.image('2', 'img/number/2.png')
    },
    
    /*var tween1;
    var tween2;*/
    create: function(){
        //scaleStage.call(this);
        detik = 30;
        menit = 3;
        this.bg = this.add.image(0, 0, 'bg');
        //this.bg.anchor.setTo(0.5, 0.5);
        this.scoreplay = 0;
        this.txtscoreplay = this.add.text(this.world.centerX, 50, 'Score : '+this.scoreplay, { font: "45px Arial", fill: "#ff0044" });
        this.txtscoreplay.anchor.setTo(0.5, 0.5);
        this.batas = this.add.image(this.world.centerX, 350, 'batas');
        this.batas.anchor.setTo(0.5, 0.5);
        this.batas.scale.setTo(1.5, 3.5);
        this.arraylevel = new Array();
        for (this.i = 1; this.i <= 100; this.i++){
            this.arraylevel[this.arraylevel.length] = this.i;
        }
        this.splicelevel = Math.floor((Math.random() * 7) + 1);
        
        this.tempcurrentlevel = this.add.text(50, 50, '', {font: "45px Arial"});
        this.tempcurrentlevel.alpha = 0;
        //this.header = this.add.sprite(-200, 0, 'header');
        //this.header.anchor.setTo(0.5, 0.5);
        //tween1 = this.add.tween(this.header).to({x: 0}, 4000, Phaser.Easing.Bounce.Out, true);
        //tween1.onComplete.add(level, this);
        this.anim=this.add.sprite(this.world.centerX-100, 800, 'me');
        this.anim.anchor.setTo(0.5, 0.5);
        this.anim.scale.setTo(0.5, 0.5);
        this.anim.animations.add('play');
        this.anim.animations.play('play', 5, true);
        
        this.appName = this.add.text(this.world.centerX, 50, 'Meth', { font: "45px Arial", fill: "#ff0044" });
        this.appName.anchor.setTo(0.5, 0.5);
        this.appName.alpha = 0;
        this.header = this.add.sprite(this.world.centerX, 650, 'soal');
        this.header.anchor.setTo(0.5, 0.5);
        this.header.scale.setTo(0.75, 0.75);
        this.question = this.add.text(this.world.centerX, 650, 'questions', { font: "40px Arial", fill: "#ff0044",wordWrap: true, wordWrapWidth: this.header.width, align: "center" });
        this.question.anchor.setTo(0.5, 0.5);
        this.pictureanswer = this.add.sprite(this.world.centerX+50, 185, 'picture0');
        this.pictureanswer.anchor.setTo(0.5, 0.5);
        this.pictureanswer.scale.setTo(0.5, 0.5);
        this.pictureanswer.alpha = 0;
        this.txtcorrect = this.add.text(this.world.centerX-50, 180, 'Correct : ', { font: "25px Arial", fill: "#ff0044" });
        this.txtcorrect.anchor.setTo(0.5, 0.5);
        this.txtcorrect.alpha = 0;
        this.txttimer=this.add.text(25, 775, 'timer', { font: "50px Arial", fill: "#ff0044"});
        
        //j1 = this.add.sprite(this.world.centerX, 450, 'picture0');
        j1 = this.add.sprite(this.rnd.between(0, 400), this.rnd.between(200, 500), 'picture0');
        j1.anchor.setTo(0.5, 0.5);
        //j1.scale.setTo(0.75, 0.75);
        //j2 = this.add.sprite(this.world.centerX, 450, 'picture1');
        j2 = this.add.sprite(this.rnd.between(0, 400), this.rnd.between(200, 500), 'picture0');
        j2.anchor.setTo(0.5, 0.5);
        //j2.scale.setTo(0.75, 0.75);
        j2.alpha = 0;
        this.timerShow = this.time.create(false);
        //this.splc = 0;
        level.call(this);
        //timerku=this.time..create(false);
        /*
        this.timerShow.add(300, fadePicture, this);
        this.timerShow.start();*/
        /*this.add.text(0, 0, '0');
        this.add.text(0, 50, '50');
        this.add.text(0, 100, '100');
        this.add.text(0, 150, '150');
        this.add.text(0, 200, '200');
        this.add.text(0, 250, '250');
        this.add.text(0, 300, '300');
        this.add.text(0, 350, '350');
        this.add.text(0, 400, '400');
        this.add.text(0, 450, '450');
        this.add.text(0, 500, '500');
        this.add.text(0, 550, '550');
        this.add.text(0, 600, '600');
        this.add.text(0, 650, '650');
        this.add.text(0, 700, '700');
        this.add.text(0, 750, '750');
        this.add.text(0, 800, '800');
        this.add.text(0, 850, '850');
        this.add.text(0, 900, '900');
        this.add.text(0, 950, '950');
        this.add.text(0, 1000, '1000');*/
        //this.add.text(50, ht, 'innerheight');
        this.timerku=this.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
        //document.addEventListener("backbutton", onBackKeyDown, false);
        
    },
    
    update: function(){
        //this.state.start('over');
        //this.onComplete.add(levelSatu, this);
        this.anim.angle += 1;
        
    },
    
    /*leaveIncorrectOrientation: function(){
        scaleStage.call(this);
    }*/
    
    /*stoptimer: function(){
        this.timerShow.stop();
    }*/
    
    
    
};
/*
function onBackKeyDown() {
    this.state.start('menu');
}
*/

