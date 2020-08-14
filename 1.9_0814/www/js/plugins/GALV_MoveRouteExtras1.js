* ----------------------------------------------------------------------------

 *   SCRIPT calls for MOVE ROUTES

 * ----------------------------------------------------------------------------

 * this.jump_forward(x);        // x 타일 만큼 아래로 점프

 * this.jump_to(x,y);           // xy로 점프한다.

 * this.jump_to(i);             // i = 이벤트 id로 점프한다 or 0 은 플레이어

 *

 * this.step_toward(x,y);       // x, y 로 걸어간다.

 * this.step_toward(i);         // i = 이벤트 id로 걸어간다 or 0 은 플레이어

 *

 * this.step_away(x,y);         // x, y 로 멀어진다.

 * this.step_away(i);           // i = 이벤트 id로 멀어진다 or 0 은 플레이어

 *                              

 * this.turn_toward(x,y);       // 이벤트 id를 향해 돌아서 걸어간다.

 * this.turn_toward(i);         // i = 이벤트 id로 돌아서 걸어간다. or 0 은 플레이어

 * this.turn_away(x,y);         // x,y 로 부터 돌아서 멀어진다.

 * this.turn_away(i);           // i = 이벤트 id로 돌아서 멀어진다 or 0 은 플레이어

 *                              // 

 * this.sswitch("n",status);    // " n " 셀프 스위치를 끄고 킨다. status 에 true/false 선택

 * this.rwait(low,high);        // low, high 사이의 속도를 기다린다.

 *

 * this.fade(s);                // s 는 페이드 속도.

 *                              // 양수는 페이트 인, 음수는 페이트 아웃

 *

 * this.step_rand(id,id,id);    // Move randomly only on specified region id's

 *                              // Multiple id's can be used, comma separated

 *

 * this.repeat_begin(n);        // repeat_begin과 repeat_end 사이의 움직임을 반복한다.

 * this.repeat_end();           // n는 횟수를 정할 수 있다.

 *

 *

 *  // Below are a couple of useful codes that work without this script

 *

 * this.requestBalloon(n);      // 위에 해당 n 의 풍선을 팝업

 * this.requestAnimation(n);    // n 아이디의 애니메이션 (움직임) 재생

 *

 * ----------------------------------------------------------------------------

 *   EXAMPLES OF USE 사용 예시

 * ----------------------------------------------------------------------------

 * this.jump_forward(3);        // Jumps 3 tiles the direction character faces

 * this.jump_to(5);             // Jump to event 5's position

 * this.jump_to(10,16);         // Jump to x10, y15

 * this.step_toward(3);         // Takes a step toward event 3's position

 * this.step_away(12,8);        // Takes a step away from x12, y8 co-ordinates

 * this.sswitch("A",true);      // Turns self switch "A" ON for event

 * this.sswitch("B",false);     // Turns self switch "B" OFF for event

 * this.rwait(60,120);          // Waits randomly between 60 and 120 frames

 * this.fade(-10);              // Fades out character

 * this.stepRand(1,4,7);        // Take a step randomly, only on regions 1,4,7

 * this.requestAnimation(2);    // Shows animation 2 on character