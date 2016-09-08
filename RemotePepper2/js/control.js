var self = this;


// 移動
// ALMotion.moveTo(X, Y, theta)
// X,Y (メートル)
//theta (Degree:Max180)
function move(to){
	if (self.alMotion){
		console.log("move to");
		switch (to){
			case 0: //右
				self.alMotion.moveTo(0, 0.5, 0).fail(function(err){console.log(err);});
				break;

			case 1: //左
				self.alMotion.moveTo(0, -0.5, 0).fail(function(err){console.log(err);});
				break;

			case 2: //前
				self.alMotion.moveTo(0.3, 0, 0).fail(function(err){console.log(err);});
				break;

			case 3: //後
				self.alMotion.moveTo(-0.3, 0, 0).fail(function(err){console.log(err);});
				break;

			case 4: //右前
				self.alMotion.moveTo(0.3, -0.3, 0).fail(function(err){console.log(err);});
				break;

			case 5: //左前
				self.alMotion.moveTo(0.3, 0.3, 0).fail(function(err){console.log(err);});
				break;

			case 6: //右後
				self.alMotion.moveTo(-0.3, -0.3, 0).fail(function(err){console.log(err);});
				break;

			case 7: //左後
				self.alMotion.moveTo(-0.3, 0.3, 0).fail(function(err){console.log(err);});
				break;

			case 8:　//右振向き
				self.alMotion.moveTo(0, 0, -20).fail(function(err){console.log(err);});
				break;

			case 9: //左振向き
				self.alMotion.moveTo(0, 0, 20).fail(function(err){console.log(err);});
				break;

			case 10:　//真ん中
				self.alAnimatedSpeech.say("愛してるよ。");
				break;

		}
	}
}

// ビヘイビアアクション
function action(num){
	switch (num){
		case 0:
			self.alBehavior.stopAllBehaviors();
			break;
		case 1:
			self.alBehavior.runBehavior("qrreader-165fd0/.");
			break;
		case 2:
			self.alBehavior.runBehavior("pepper_self_introduction_waist_sample/.");
			break;
		case 3:
			self.alBehavior.runBehavior("pepper_tongue_twister_sample/.");
			break;
		case 4:
			self.alBehavior.runBehavior("animations/Stand/Emotions/Positive/Laugh_1");
			break;
		case 5:
			self.alBehavior.runBehavior("animations/Stand/Emotions/Negative/Sad_1");
			break;
		case 6:
			self.alBehavior.runBehavior("animations/Stand/Gestures/ComeOn_1");
			break;
		case 7:
			self.alBehavior.runBehavior("pepper_anim_sample/d-110-owata");
			break;
		case 8:
			self.alBehavior.runBehavior("pepper_anim_sample/d-110-glad-3");
			break;
		case 9:
			self.alBehavior.runBehavior("animations/Stand/Gestures/Angry_1");
			break;

	}


function toTabletHandler(value) {
        console.log("PepperQiMessaging/Recoイベント発生: " + value);
        $(".memory").text(value);
}
