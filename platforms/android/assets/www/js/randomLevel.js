//var arrlevel;
//var i;
var removelevel;
var crndm;
var tst;

function level(){
    //start randomize level
    //this.timerku=this.time.events.loop(Phaser.Timer.SECOND, updateCounter, this);
    removelevel = this.splicelevel;
    //this.arraylevel.splice(removelevel, 1);
    if (this.scoreplay == 0){
        tst = removelevel;
        this.appName.text = 'splice '+this.splicelevel;
    }
    else{
        this.arraylevel.splice(removelevel, 1);
        crndm = Math.floor((Math.random()*this.arraylevel.length-1)+1); 
        tst = this.arraylevel[crndm];
        this.appName.text = this.arraylevel.length+" "+removelevel+" "+crndm;
        //this.appName.text = 'ini dibagian else '+tst;
    }
    
    //this.appName.text = removelevel;
    //this.question.text =this.arraylevel.valueOf();
    /*var fruit = ['apel', 'jeruk', 'mangga', 'melon'];
    arrlevel = new Array();
    for (i = 1; i<=3; i++){
        arrlevel[arrlevel.length]=i;
    }*/
    //remlevel = arrlevel[this.splc];
    
    //crndm = Math.floor((Math.random()*arrlevel.length-1)+1);
    //tst = arrlevel[crndm];
    //crndm = this.rnd.integerInRange(tst);
    //crndm = arrlevel.length;
    //this.question.text = arrlevel.valueOf();
    //this.question.text = 'index ke '+crndm+'<br> value nya '+tst;

    
    //this.rndm = this.rnd.integerInRange(0,3);
        //this.question.text = rndm;
        switch(tst){
          case 1:
                soal1.call(this);
                break;
            case 2:
                soal2.call(this);
                break;
            case 3:
                soal3.call(this);
                break;
            case 4:
                soal4.call(this);
                break;
            case 5:
                soal5.call(this);
                break;
            case 6:
                soal6.call(this);
                break;
            case 7:
                soal7.call(this);
                break;
            case 8:
                soal8.call(this);
                break;
            case 9:
                soal9.call(this);
                break;
            case 10:
                soal10.call(this);
                break;
            case 11:
                soal11.call(this);
                break;
            case 12:
                soal12.call(this);
                break;
            case 13:
                soal13.call(this);
                break;
            case 14:
                soal14.call(this);
                break;
            case 15:
                soal15.call(this);
                break;
            case 16:
                soal16.call(this);
                break;
            case 17:
                soal17.call(this);
                break;
            case 18:
                soal18.call(this);
                break;
            case 19:
                soal19.call(this);
                break;
            case 20:
                soal20.call(this);
                break;
            case 21:
                soal21.call(this);
                break;
            case 22:
                soal22.call(this);
                break;
            case 23:
                soal23.call(this);
                break;
            case 24:
                soal24.call(this);
                break;
            case 25:
                soal25.call(this);
                break;
            case 26:
                soal26.call(this);
                break;
            case 27:
                soal27.call(this);
                break;
            case 28:
                soal28.call(this);
                break;
            case 29:
                soal29.call(this);
                break;
            case 30:
                soal30.call(this);
                break;
            case 31:
                soal31.call(this);
                break;
            case 32:
                soal32.call(this);
                break;
            case 33:
                soal33.call(this);
                break;
            case 34:
                soal34.call(this);
                break;
            case 35:
                soal35.call(this);
                break;
            case 36:
                soal36.call(this);
                break;
            case 37:
                soal37.call(this);
                break;
            case 38:
                soal38.call(this);
                break;
            case 39:
                soal39.call(this);
                break;
            case 40:
                soal40.call(this);
                break;
            case 41:
                soal41.call(this);
                break;
            case 42:
                soal42.call(this);
                break;
            case 43:
                soal43.call(this);
                break;
            case 44:
                soal44.call(this);
                break;
            case 45:
                soal45.call(this);
                break;
            case 46:
                soal46.call(this);
                break;
            case 47:
                soal47.call(this);
                break;
            case 48:
                soal48.call(this);
                break;
            case 49:
                soal49.call(this);
                break;
            case 50:
                soal50.call(this);
                break;
            case 51:
                soal51.call(this);
                break;
            case 52:
                soal52.call(this);
                break;
            case 53:
                soal53.call(this);
                break;
            case 54:
                soal54.call(this);
                break;
            case 55:
                soal55.call(this);
                break;
            case 56:
                soal56.call(this);
                break;
            case 57:
                soal57.call(this);
                break;
            case 58:
                soal58.call(this);
                break;
            case 59:
                soal59.call(this);
                break;
            case 60:
                soal60.call(this);
                break;
            case 61:
                soal61.call(this);
                break;
            case 62:
                soal62.call(this);
                break;
            case 63:
                soal63.call(this);
                break;
            case 64:
                soal64.call(this);
                break;
            case 65:
                soal65.call(this);
                break;
            case 66:
                soal66.call(this);
                break;
            case 67:
                soal67.call(this);
                break;
            case 68:
                soal68.call(this);
                break;
            case 69:
                soal69.call(this);
                break;
            case 70:
                soal70.call(this);
                break;
            case 71:
                soal71.call(this);
                break;
            case 72:
                soal72.call(this);
                break;
            case 73:
                soal73.call(this);
                break;
            case 74:
                soal74.call(this);
                break;
            case 75:
                soal75.call(this);
                break;
            case 76:
                soal76.call(this);
                break;
            case 77:
                soal77.call(this);
                break;
            case 78:
                soal78.call(this);
                break;
            case 79:
                soal79.call(this);
                break;
            case 80:
                soal80.call(this);
                break;
            case 81:
                soal81.call(this);
                break;
            case 82:
                soal82.call(this);
                break;
            case 83:
                soal83.call(this);
                break;
            case 84:
                soal84.call(this);
                break;
            case 85:
                soal85.call(this);
                break;
            case 86:
                soal86.call(this);
                break;
            case 87:
                soal87.call(this);
                break;
            case 88:
                soal88.call(this);
                break;
            case 89:
                soal89.call(this);
                break;
            case 90:
                soal90.call(this);
                break;
            case 91:
                soal91.call(this);
                break;
            case 92:
                soal92.call(this);
                break;
            case 93:
                soal93.call(this);
                break;
            case 94:
                soal94.call(this);
                break;
            case 95:
                soal95.call(this);
                break;
            case 96:
                soal96.call(this);
                break;
            case 97:
                soal97.call(this);
                break;
            case 98:
                soal98.call(this);
                break;
            case 99:
                soal99.call(this);
                break;
            case 100:
                soal100.call(this);
                break;
                            
            default:
                 this.question.text = 'question';
                break;
        };
    
   
}

function soal1() {
    this.question.text = '3 + 1';
    currentlevel = 1;
    this.pictureanswer.loadTexture('picture4');
    showAnswer.call(this);
}

function soal2(){
    this.question.text = '4 - 2 =';
    currentlevel = 2;
    this.pictureanswer.loadTexture('picture3');
    showAnswer.call(this);
}

function soal3(){
    this.question.text = '7 + 5 =';
    currentlevel = 3;
    this.pictureanswer.loadTexture('picture15');
    showAnswer.call(this);
}

function soal4(){
    this.question.text = '8 - 5 =';
    currentlevel = 4;
    this.pictureanswer.loadTexture('picture1');
    showAnswer.call(this);
}

function soal5(){
    this.question.text = '10 - 4 =';
    currentlevel = 5;
    this.pictureanswer.loadTexture('picture8');
    showAnswer.call(this);
}

function soal6(){
    this.question.text = '12 + 9 =';
    currentlevel = 6;
    this.pictureanswer.loadTexture('picture17');
    showAnswer.call(this);
}

function soal7(){
    this.question.text = '5 - 2 =';
    currentlevel = 7;
    this.pictureanswer.loadTexture('picture1');
    showAnswer.call(this);
}

function soal8(){
    this.question.text = '17 - 6 =';
    currentlevel = 8;
    this.pictureanswer.loadTexture('picture25');
    showAnswer.call(this);
}

function soal9(){
    this.question.text = '25 + 7 =';
    currentlevel = 9;
    this.pictureanswer.loadTexture('picture18');
    showAnswer.call(this);
}

function soal10(){
    this.question.text = '7 + 9 =';
    currentlevel = 10;
    this.pictureanswer.loadTexture('picture14');
    
    showAnswer.call(this);
}
//first 10 level
function soal11() {
    this.question.text = '19 + 5 =';
    currentlevel = 11;
    this.pictureanswer.loadTexture('picture20');
    showAnswer.call(this);
}

function soal12(){
    this.question.text = '20 - 10 =';
    currentlevel = 12;
    this.pictureanswer.loadTexture('picture21');
    showAnswer.call(this);
}

function soal13(){
    this.question.text = '25 - 9 =';
    currentlevel = 13;
    this.pictureanswer.loadTexture('picture14');
    showAnswer.call(this);
}

function soal14(){
    this.question.text = '15 + 7 =';
    currentlevel = 14;
    this.pictureanswer.loadTexture('picture26');
    showAnswer.call(this);
}

function soal15(){
    this.question.text = '35 - 13 =';
    currentlevel = 15;
    this.pictureanswer.loadTexture('picture26');
    showAnswer.call(this);
}

function soal16(){
    this.question.text = '21 + 12 =';
    currentlevel = 16;
    this.pictureanswer.loadTexture('picture27');
    showAnswer.call(this);
}

function soal17(){
    this.question.text = '7 + 8 =';
    currentlevel = 17;
    this.pictureanswer.loadTexture('picture13');
    showAnswer.call(this);
}

function soal18(){
    this.question.text = '16 + 9 =';
    currentlevel = 18;
    this.pictureanswer.loadTexture('picture5');
    showAnswer.call(this);
}

function soal19(){
    this.question.text = '17 + 9 =';
    currentlevel = 19;
    this.pictureanswer.loadTexture('picture22');
    showAnswer.call(this);
}

function soal20(){
    this.question.text = '30 - 11 =';
    currentlevel = 20;
    this.pictureanswer.loadTexture('picture10');
    
    showAnswer.call(this);
}
//second 10 level
function soal21() {
    this.question.text = '29 + 7 =';
    currentlevel = 21;
    this.pictureanswer.loadTexture('picture29');
    showAnswer.call(this);
}

function soal22(){
    this.question.text = '19 - 3 =';
    currentlevel = 22;
    this.pictureanswer.loadTexture('picture14');
    showAnswer.call(this);
}

function soal23(){
    this.question.text = '26 - 13 =';
    currentlevel = 23;
    this.pictureanswer.loadTexture('picture19');
    showAnswer.call(this);
}

function soal24(){
    this.question.text = '6 + 27 =';
    currentlevel = 24;
    this.pictureanswer.loadTexture('picture27');
    showAnswer.call(this);
}

function soal25(){
    this.question.text = '17 + 17 =';
    currentlevel = 25;
    this.pictureanswer.loadTexture('picture28');
    showAnswer.call(this);
}

function soal26(){
    this.question.text = '11 + 21 =';
    currentlevel = 26;
    this.pictureanswer.loadTexture('picture18');
    showAnswer.call(this);
}

function soal27(){
    this.question.text = '27 - 4 =';
    currentlevel = 27;
    this.pictureanswer.loadTexture('picture11');
    showAnswer.call(this);
}

function soal28(){
    this.question.text = '18 - 9 =';
    currentlevel = 28;
    this.pictureanswer.loadTexture('picture7');
    showAnswer.call(this);
}

function soal29(){
    this.question.text = '13 + 18 =';
    currentlevel = 29;
    this.pictureanswer.loadTexture('picture9');
    showAnswer.call(this);
}

function soal30(){
    this.question.text = '30 + 11 =';
    currentlevel = 30;
    this.pictureanswer.loadTexture('picture36');
    
    showAnswer.call(this);
}
//third 10 level
function soal31() {
    this.question.text = '15 + 7 - 3 =';
    currentlevel = 31;
    this.pictureanswer.loadTexture('picture10');
    showAnswer.call(this);
}

function soal32(){
    this.question.text = '30 - 12 + 8 =';
    currentlevel = 32;
    this.pictureanswer.loadTexture('picture22');
    showAnswer.call(this);
}

function soal33(){
    this.question.text = '2 + 17 + 7 =';
    currentlevel = 33;
    this.pictureanswer.loadTexture('picture22');
    showAnswer.call(this);
}

function soal34(){
    this.question.text = '19 + 9 - 20 =';
    currentlevel = 34;
    this.pictureanswer.loadTexture('picture6');
    showAnswer.call(this);
}

function soal35(){
    this.question.text = '43 - 21 + 7 =';
    currentlevel = 35;
    this.pictureanswer.loadTexture('picture23');
    showAnswer.call(this);
}

function soal36(){
    this.question.text = '19 + 19 - 17 =';
    currentlevel = 6;
    this.pictureanswer.loadTexture('picture17');
    showAnswer.call(this);
}

function soal37(){
    this.question.text = '6 + 23 - 9 =';
    currentlevel = 37;
    this.pictureanswer.loadTexture('picture32');
    showAnswer.call(this);
}

function soal38(){
    this.question.text = '53 + 17 - 3 =';
    currentlevel = 38;
    this.pictureanswer.loadTexture('picture43');
    showAnswer.call(this);
}

function soal39(){
    this.question.text = '33 - 3 - 17 =';
    currentlevel = 39;
    this.pictureanswer.loadTexture('picture19');
    showAnswer.call(this);
}

function soal40(){
    this.question.text = '44 - 18 + 7 =';
    currentlevel = 40;
    this.pictureanswer.loadTexture('picture27');
    
    showAnswer.call(this);
}
//fourth 10 level
function soal41() {
    this.question.text = '37 - 25 =';
    currentlevel = 41;
    this.pictureanswer.loadTexture('picture15');
    showAnswer.call(this);
}

function soal42(){
    this.question.text = '50 + 35 - 44 =';
    currentlevel = 42;
    this.pictureanswer.loadTexture('picture36');
    showAnswer.call(this);
}

function soal43(){
    this.question.text = '29 + 11 - 19 =';
    currentlevel = 43;
    this.pictureanswer.loadTexture('picture17');
    showAnswer.call(this);
}

function soal44(){
    this.question.text = '75 - 48 + 2 =';
    currentlevel = 44;
    this.pictureanswer.loadTexture('picture23');
    showAnswer.call(this);
}

function soal45(){
    this.question.text = '81 - 36 + 16 =';
    currentlevel = 45;
    this.pictureanswer.loadTexture('picture31');
    showAnswer.call(this);
}

function soal46(){
    this.question.text = '21 + 54 - 35 =';
    currentlevel = 46;
    this.pictureanswer.loadTexture('picture30');
    showAnswer.call(this);
}

function soal47(){
    this.question.text = '10 - 4 + 6 =';
    currentlevel = 47;
    this.pictureanswer.loadTexture('picture15');
    showAnswer.call(this);
}

function soal48(){
    this.question.text = '19 + 5 - 9 =';
    currentlevel = 48;
    this.pictureanswer.loadTexture('picture13');
    showAnswer.call(this);
}

function soal49(){
    this.question.text = '21 + 12 - 13 =';
    currentlevel = 49;
    this.pictureanswer.loadTexture('picture32');
    showAnswer.call(this);
}

function soal50(){
    this.question.text = '29 + 7 - 11 =';
    currentlevel = 50;
    this.pictureanswer.loadTexture('picture5');
    
    showAnswer.call(this);
}
//fifth 10 level
function soal51() {
    this.question.text = '3 x 5 =';
    currentlevel = 51;
    this.pictureanswer.loadTexture('picture13');
    showAnswer.call(this);
}

function soal52(){
    this.question.text = '2 + 7 x 3 =';
    currentlevel = 52;
    this.pictureanswer.loadTexture('picture11');
    showAnswer.call(this);
}

function soal53(){
    this.question.text = '4 x 5 - 5 =';
    currentlevel = 53;
    this.pictureanswer.loadTexture('picture13');
    showAnswer.call(this);
}

function soal54(){
    this.question.text = '7 x 2 =';
    currentlevel = 54;
    this.pictureanswer.loadTexture('picture34');
    showAnswer.call(this);
}

function soal55(){
    this.question.text = '6 x 9 =';
    currentlevel = 55;
    this.pictureanswer.loadTexture('picture52');
    showAnswer.call(this);
}

function soal56(){
    this.question.text = '7 + 5 x 3 =';
    currentlevel = 56;
    this.pictureanswer.loadTexture('picture26');
    showAnswer.call(this);
}

function soal57(){
    this.question.text = '13 x 3 - 6 =';
    currentlevel = 57;
    this.pictureanswer.loadTexture('picture27');
    showAnswer.call(this);
}

function soal58(){
    this.question.text = '18 x 7 + 3 =';
    currentlevel = 58;
    this.pictureanswer.loadTexture('picture58');
    showAnswer.call(this);
}

function soal59(){
    this.question.text = '19 x 9 + 7 =';
    currentlevel = 59;
    this.pictureanswer.loadTexture('picture57');
    showAnswer.call(this);
}

function soal60(){
    this.question.text = '12 x 12 =';
    currentlevel = 60;
    this.pictureanswer.loadTexture('picture53');
    
    showAnswer.call(this);
}
//sixth 10 level
function soal61() {
    this.question.text = '7 x 25 =';
    currentlevel = 61;
    this.pictureanswer.loadTexture('picture47');
    showAnswer.call(this);
}

function soal62(){
    this.question.text = '4 x 9 + 5 =';
    currentlevel = 62;
    this.pictureanswer.loadTexture('picture36');
    showAnswer.call(this);
}

function soal63(){
    this.question.text = '100 - 37 + 5 =';
    currentlevel = 63;
    this.pictureanswer.loadTexture('picture39');
    showAnswer.call(this);
}

function soal64(){
    this.question.text = '245 - 103 + 37 =';
    currentlevel = 64;
    this.pictureanswer.loadTexture('picture49');
    showAnswer.call(this);
}

function soal65(){
    this.question.text = '75 + 48 =';
    currentlevel = 65;
    this.pictureanswer.loadTexture('picture55');
    showAnswer.call(this);
}

function soal66(){
    this.question.text = '9 x 9 + 18 =';
    currentlevel = 66;
    this.pictureanswer.loadTexture('picture45');
    showAnswer.call(this);
}

function soal67(){
    this.question.text = '(95 - 70) x 2 =';
    currentlevel = 67;
    this.pictureanswer.loadTexture('picture16');
    showAnswer.call(this);
}

function soal68(){
    this.question.text = '71 - 17 =';
    currentlevel = 68;
    this.pictureanswer.loadTexture('picture52');
    showAnswer.call(this);
}

function soal69(){
    this.question.text = '130 + 31 - 99 =';
    currentlevel = 69;
    this.pictureanswer.loadTexture('picture37');
    showAnswer.call(this);
}

function soal70(){
    this.question.text = '88 x 2 =';
    currentlevel = 70;
    this.pictureanswer.loadTexture('picture56');
    
    showAnswer.call(this);
}
//sixth 10 level
function soal71() {
    this.question.text = '171 - 43 =';
    currentlevel = 71;
    this.pictureanswer.loadTexture('picture48');
    showAnswer.call(this);
}

function soal72(){
    this.question.text = '83 + 95 =';
    currentlevel = 72;
    this.pictureanswer.loadTexture('picture57');
    showAnswer.call(this);
}

function soal73(){
    this.question.text = '87 + 95 - 22 =';
    currentlevel = 73;
    this.pictureanswer.loadTexture('picture54');
    showAnswer.call(this);
}

function soal74(){
    this.question.text = '17 x 3 =';
    currentlevel = 74;
    this.pictureanswer.loadTexture('picture33');
    showAnswer.call(this);
}

function soal75(){
    this.question.text = '7 x 4 + 95 - 43 =';
    currentlevel = 75;
    this.pictureanswer.loadTexture('picture44');
    showAnswer.call(this);
}

function soal76(){
    this.question.text = '59 + 33 - 21 =';
    currentlevel = 76;
    this.pictureanswer.loadTexture('picture41');
    showAnswer.call(this);
}

function soal77(){
    this.question.text = '37 + 41 - 19 =';
    currentlevel = 77;
    this.pictureanswer.loadTexture('picture35');
    showAnswer.call(this);
}

function soal78(){
    this.question.text = '17 x 17 + 1 =';
    currentlevel = 78;
    this.pictureanswer.loadTexture('picture60');
    showAnswer.call(this);
}

function soal79(){
    this.question.text = '4 x 3 + 12 =';
    currentlevel = 79;
    this.pictureanswer.loadTexture('picture20');
    showAnswer.call(this);
}

function soal80(){
    this.question.text = '11 x 11 + 9 =';
    currentlevel = 80;
    this.pictureanswer.loadTexture('picture50');
    
    showAnswer.call(this);
}
//eighth 10 level
function soal81() {
    this.question.text = '7 x 4 + 4 : 2 =';
    currentlevel = 81;
    this.pictureanswer.loadTexture('picture24');
    showAnswer.call(this);
}

function soal82(){
    this.question.text = '110 : 2 =';
    currentlevel = 82;
    this.pictureanswer.loadTexture('picture12');
    showAnswer.call(this);
}

function soal83(){
    this.question.text = '27 : 3 + 1 =';
    currentlevel = 83;
    this.pictureanswer.loadTexture('picture21');
    showAnswer.call(this);
}

function soal84(){
    this.question.text = '(11 + 21) : 16 =';
    currentlevel = 84;
    this.pictureanswer.loadTexture('picture3');
    showAnswer.call(this);
}

function soal85(){
    this.question.text = '350 : 5 =';
    currentlevel = 85;
    this.pictureanswer.loadTexture('picture40');
    showAnswer.call(this);
}

function soal86(){
    this.question.text = '50 : 2 x 8 =';
    currentlevel = 86;
    this.pictureanswer.loadTexture('picture59');
    showAnswer.call(this);
}

function soal87(){
    this.question.text = '(33 - 13) x 2 : 5 =';
    currentlevel = 87;
    this.pictureanswer.loadTexture('picture6');
    showAnswer.call(this);
}

function soal88(){
    this.question.text = '60 : 12 =';
    currentlevel = 88;
    this.pictureanswer.loadTexture('picture2');
    showAnswer.call(this);
}

function soal89(){
    this.question.text = '48 : 8 + 4 =';
    currentlevel = 89;
    this.pictureanswer.loadTexture('picture21');
    showAnswer.call(this);
}

function soal90(){
    this.question.text = '72 : 6 =';
    currentlevel = 90;
    this.pictureanswer.loadTexture('picture15');
    
    showAnswer.call(this);
}
//nineth 10 level
function soal91() {
    this.question.text = '4 x 2 + 90 : 15 - 6 =';
    currentlevel = 91;
    this.pictureanswer.loadTexture('picture6');
    showAnswer.call(this);
}

function soal92(){
    this.question.text = '33 x 3 / 9 =';
    currentlevel = 92;
    this.pictureanswer.loadTexture('picture25');
    showAnswer.call(this);
}

function soal93(){
    this.question.text = '17 x 4 / 2 - 2 =';
    currentlevel = 93;
    this.pictureanswer.loadTexture('picture18');
    showAnswer.call(this);
}

function soal94(){
    this.question.text = '205 x 2 /10 =';
    currentlevel = 94;
    this.pictureanswer.loadTexture('picture36');
    showAnswer.call(this);
}

function soal95(){
    this.question.text = '175 x 4 : 7 - 50 + 27 =';
    currentlevel = 95;
    this.pictureanswer.loadTexture('picture38');
    showAnswer.call(this);
}

function soal96(){
    this.question.text = '18 : 3 x 7 - 2 + 60 =';
    currentlevel = 96;
    this.pictureanswer.loadTexture('picture46');
    showAnswer.call(this);
}

function soal97(){
    this.question.text = '(85 - 39) x 3 =';
    currentlevel = 97;
    this.pictureanswer.loadTexture('picture51');
    showAnswer.call(this);
}

function soal98(){
    this.question.text = '96 + 4 - 500 / 20 =';
    currentlevel = 98;
    this.pictureanswer.loadTexture('picture42');
    showAnswer.call(this);
}

function soal99(){
    this.question.text = '81 : 9 x 11 + 1 =';
    currentlevel = 99;
    this.pictureanswer.loadTexture('picture46');
    showAnswer.call(this);
}

function soal100(){
    this.question.text = '(64 + 8) / 2 =';
    currentlevel = 100;
    this.pictureanswer.loadTexture('picture29');
    
    showAnswer.call(this);
}
//nineth 10 level