
# Nomad React MasterClass를 수강하며 배운점! 


react-query는 편리한 방식으로 데이터를 fetch 할 수 있다.
## Usequery()

```JS
const {isLoading,data}=useQuery("key",패치함수)
//이렇게 useQuery는 isLoading과 data를 반환한다. 그리고 key와 패치함수를 변수인자로 받는다.
//그리고 이때 data에 대한 설명은 필요하다.
```
const {isLoading, data} =useQuery<데이터에대한설명>("key",패치함수)

## Router
router는 어떠한 URL로 이동을 가능하게 한다. 이동했을 때의 어떤 컴포넌트를 보여줄지는 <Route>를 사용하면된다.
```JS
<Route path="/:변수명/chart">// /:다음에 오는 변수명은 URL이 어떤 변수값을 갖는다고 말해준다.
//이 변수는 Useparams()로 해당 컴포넌트에서 불러올수있다.
```

### Nested Router(중첩된 라우터)

한 스크린 내에 2개 이상의 Router가 필요할 때 쓰인다.

### Link 사용법
Link는 string을 a태그로 변경하는 것과 같다. Link는 URL을 옮김과 동시에 데이터도 함께 보낼 수 있다.
```JS
//어떤 URL주소로 보내면 된다면
<Link to={`URL`}></Link> 
//어떤 URL주소 + 데이터를 보내고 싶다면
<Link to={{path:~~, state:{ ~~: ~~ }}
//즉, to=오브젝트 의 형태이면 데이터까지 전달이 가능하다. 해당 데이터를 받기위해서는 useLocation()을 사용하면된다.

```
 *Link를 눌렀을 때 URL은 변경되는데 페이지 전환이 안될때*
 React-ristrict를 제거 or Route exact 넣기

UseRouteMatch("")는 ""에있는 URL에 현재 지금 있는지를 확인하고 boolean타입을 return한다.
이를 이용해 뒤로가기버튼을 만들었다.

### Recoil
Recoil은 React-Js에서 사용할 수 있는 state management library이다.
Recoil이 없다면 props는 최상위 컴포넌트에서 최하위 컴포넌트까지 보내야하는 일이 발생 할 수 있다.
이렇게 되면 props를 보내고 type에 대한 설명을 계속해서 해주어야하는 번거로움이 발생한다.

*Recoil은 이런 번거로운 작업을 간단하게 해준다.*
Recoil은 Bubble(atom)을 만들고 데이터를 저장한다.

```JS

useRecoilvalue(atomname)//이렇게 데이터(버블)을 불러오고 사용한다.

//atom만드는법
const atomname = atom({key:"",default:~~])
//setState하는 방법은 
UsesetRecoilstate()

```

## 타입스크립트 학습

### 타입스크립트는 강타입 프로그래밍 언어로 코드를 실행하기 전에 오류를 알려준다.

타입스크립트에서 타입을 정의해주는 방법은 크게 두 가지가 있다.

1. 데이터와 변수의 타입을 명시적으로 정의
```TS
const arr:string = ""

```
2. 데이터와 변수의 타입이 추론되어 자동으로 정의됨
```TS
const arr ="" //=>string으로 자동인식
```
*명시적 정의는 적을수록 좋다*
Type을 설명할 때 기본은 : 로 설명한다.

```TS
const :{name:string, age:number}   ={
name:"sangha"
age:26
}
```

type을 지정하는 방법 중 Alias 가 있다.

```TS
type CanCan{
name:string,
age?:number//?를 붙이면 number|undefined로 정의된다. 즉 없을 수 도 있다는 말


const wow : CanCan= { //이렇게 타입을 정의해주는 방법이 Alias
name:"sangha",
age:26

}

}
```

타입앞에 readonly를 붙여주면 수정이 안되게 해준다.
```TS
const arr:readonly number[] =[1,2,3]

arr.push(4) //이러면 오류가 남 readonly를 붙여줘서 수정이 불가능하기 때문이다.
```

## any

이는 비어있는 값을 쓰면 주로 나온다. 타입스크립트를 벗어나고 싶을 때 쓰면 된다.
자주쓰는것은 지양해야한다.

## unknown , void , never

### unknown 
unknown은 TS의 보호를 받는다. 
```TS
let a: unknown; //TS의 보호를받음 => 어떤 작업을 하려면 이 변수의 타입을 먼저 확인해야함
let b = a + 1;
if (typeof a === "number") {
  let b = a + 1;
} //타입에 따른 결과가 다를때 이렇게 사용

```
이렇게 unknown은 아직 타입에 대한 정보를 확신할 수 없을때 사용하면된다.

### void

void는 아무것도 return 하지않는함수에 쓰인다.
```TS
function hello(): void {
  console.log("x");
}
const c = hello();

//만약
c.toUpperCase()//오류발생

```
return 값이 없기 때문이다.(void)

## never
never은 함수가 절대 return 하지 않을 때 발생한다.
```TS
function EEE(): never {
  throw new Error("오류!");
}
//이렇게 절대 return 값이 없을 때 사용

```
 ## call signature
 함수에서 타입을 분리할 수 있게해준다.
 ```TS
 type ADD = (a: number, b: number) => number;//이게 call signature
 //이를 call signuture라고한다. 분리가가능!
const add: ADD = (a, b) => a + b;
//원래
 const add=(a:string,b:string)=>{console.log("asd"}
 ```
 ## overloading 
 이는 call signature가 2개 이상일 때이다.
 
 ```TS
 type Call={
 (a:string,b:string):string
 (a:number,b:number):number
 }//이처럼 call signature가 2개 이상 사용될 때 overloading 이라한다.
```
 ## 다형성(polymorphism)
 인자의 타입이 다양한 형태를 가질때
Generic타입!
 
```TS
type SuperPrint = {
  <Placeholder>(arr: Placeholder[]): void;
};
const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};
superPrint([1, 2, 3, 4]);//이렇게하면 함수 안의 인자에 따라 arr의 타입이 변경된다.
   //any와 다른점은 인자의 타입에 대한 정보를 잃지 않는다는 점이다.
```
