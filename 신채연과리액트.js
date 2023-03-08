import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <table>
    <tr>
      <td style={{backgroundColor:"rgb(160, 149, 131)", fontWeight: "bold", "color": "white"}}>이름</td>
      <td style={{backgroundColor:"rgb(239, 238, 233)"}}>
        <input type= "text" style={{width: "150px"}} />
        </td>
    </tr>
    <tr>
      <td style={{backgroundColor: "rgb(233, 229, 224)", fontWeight: "bold", color:"white"}}>비밀번호</td>
      <td  style={{backgroundColor: "rgb(239, 238, 233)"}}> 
      <input type= "password" style={{width: "200px"}}/>
      </td>
    </tr>
    <tr>
      <td style={{backgroundColor: "rgb(160, 149, 131)",  fontWeight:"bold", color:"white"}}>전화번호</td>
      <td  style={{backgroundColor:"rgb(239, 238, 233)"}}><input type="text" style={{width: "150px"}} /></td>
    </tr>
    <tr>
      <td style={{backgroundColor:"rgb(233, 229, 224)",  fontWeight:"bold", color:"white"}}>국적</td>
      <td style={{backgroundColor:"rgb(239, 238, 233)"}}><input type="text"/></td>
    </tr>
    <tr>
      <td style={{backgroundColor:"rgb(160, 149, 131)", fontWeight:"bold", color:"white"}}>좋아하는 음료</td>
      <td  style={{backgroundColor:"rgb(239, 238, 233)"}}>
        <input type="checkbox"value="참이슬"/>참이슬
        <input type="checkbox"value="생수"/>생수
        <input type="checkbox"value="음료수"/>음료수
        <input type="checkbox"value="커피"/>커피</td>
    </tr>
    <tr>
      <td style={{backgroundColor:"rgb(233, 229, 224)", fontWeight:"bold", color:"white"}}>좋아하는 꽃</td>
      <td style={{backgroundColor:"rgb(239, 238, 233)"}}>장미<input type="radio" value="rose"/>
        튤립<input type="radio"value="tulip"/>
        안개꽃<input type="radio"value="gypsophila"/>
        목화<input type="radio"value="cotton"/></td>
    </tr>
    <tr>
      <td style={{backgroundColor:"rgb(160, 149, 131)", fontweight:"bold", color:"white"}}>좋아하는 캐릭터</td>
      <td style={{backgroundcolor:"rgb(239, 238, 233)"}}>
        <select name="character">
        <option value="dora">도라에몽</option>
        <option value="zzang">짱구</option>
        <option value="conan">코난</option>
      </select>
      </td>
    </tr>
    <tr>
      <td style={{backgroundcolor:"rgb(233, 229, 224)", fontWeight:"bold", color:"white"}}>키우는 동물</td>
      <td style={{backgroundColor:"rgb(239, 238, 233)"}}><select name = "pet" size="5" multiple="multiple">
        <option value="강아지">강아지</option>
        <option value="강아지">고양이</option>
        <option value="강아지">토끼</option>
        <option value="강아지">판다</option>
        <option value="강아지">너구리</option>
      </select></td>
    </tr>
    <tr>
      <td style={{backgroundColor:"rgb(160, 149, 131)", fontWeight:"bold", color:"white"}}>좋아하는 동물</td>
      <td  style={{backgroundColor:"rgb(239, 238, 233)"}}><select name = "pet" size="5" multiple="multiple">
        <option value="강아지">강아지</option>
        <option value="강아지">고양이</option>
        <option value="강아지">토끼</option>
        <option value="강아지">판다</option>
        <option value="강아지">너구리</option>
      </select></td>
    </tr>
    <tr>
      <td style={{backgroundColor:"rgb(233, 229, 224)", fontWeight:"bold", color:"white"}}>하고싶은 말</td>
      <td  style={{backgroundColor:"rgb(239, 238, 233)"}}><textarea rows="10" cols="50"></textarea></td>
    </tr>
    <tr>
      <td style={{backgroundColor:"rgb(160, 149, 131)", fontWeight:"bold", color:"white"}}>사진</td>
      <td  style={{backgroundColor:"rgb(239, 238, 233)"}}><input type = "file"/></td>
    </tr>
    <tr>
    <td><button>확인</button>
      <button>취소</button></td>
    </tr>
  </table>
  </div>
  );
}

export default App;
