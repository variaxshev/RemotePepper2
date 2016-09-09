var self = this;

// 移動
// ALMotion.moveToward(X, Y, theta)
// X,Y (メートル)
//theta (Degree:Max180)
function move(to){
	if (self.alMotion){
		console.log("move to");
		switch (to){
			case 0: //右
				self.alMotion.moveToward(0, 0.5, 0).fail(function(err){console.log(err);});
				break;

			case 1: //左
				self.alMotion.moveToward(0, -0.5, 0).fail(function(err){console.log(err);});
				break;

			case 2: //前
				self.alMotion.moveToward(0.3, 0, 0).fail(function(err){console.log(err);});
				break;

			case 3: //後
				self.alMotion.moveToward(-0.3, 0, 0).fail(function(err){console.log(err);});
				break;

			case 4: //右前
				self.alMotion.moveToward(0.3, -0.3, 0).fail(function(err){console.log(err);});
				break;

			case 5: //左前
				self.alMotion.moveToward(0.3, 0.3, 0).fail(function(err){console.log(err);});
				break;

			case 6: //右後
				self.alMotion.moveToward(-0.3, -0.3, 0).fail(function(err){console.log(err);});
				break;

			case 7: //左後
				self.alMotion.moveToward(-0.3, 0.3, 0).fail(function(err){console.log(err);});
				break;

			case 8:　//右振向き
				self.alMotion.moveToward(0, 0, -20).fail(function(err){console.log(err);});
				break;

			case 9: //左振向き
				self.alMotion.moveToward(0, 0, 20).fail(function(err){console.log(err);});
				break;

			case 10:　//真ん中
				self.alTextToSpeech.say("愛してるよ。");
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
			self.alBehavior.startBehavior("qrreader-165fd0/behavior_1");
			break;
		case 2:
			self.alBehavior.startBehavior("pepper_self_introduction_waist_sample/.");
			break;
		case 3:
			self.alBehavior.runBehavior("animations/Stand/Emotions/Negative/Sad_1");
			break;
		case 4:
			self.alBehavior.runBehavior("animations/Stand/Emotions/Positive/Laugh_1");
			break;
		case 5:
			self.alBehavior.runBehavior("animations/Stand/Gestures/Angry_1");
			break;

	}
}

function toTabletHandler(value) {
        console.log("PepperQiMessaging/Recoイベント発生: " + value);
        $(".memory").text(value);
}
