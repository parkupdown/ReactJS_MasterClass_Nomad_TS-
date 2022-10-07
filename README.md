
# Nomad React MasterClass를 수강하며 배운점! 


react-query는 편리한 방식으로 데이터를 fetch 할 수 있다.
```JS
const {isLoading,data}=useQuery("key",패치함수)
//이렇게 useQuery는 isLoading과 data를 반환한다. 그리고 key와 패치함수를 변수인자로 받는다.
//그리고 이때 data에 대한 설명은 필요하다.(타입스크립트) ~~패치해온 데이터에 대한 설명~~
```
또 router에 대해 학습하였다.
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

###Recoil
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








