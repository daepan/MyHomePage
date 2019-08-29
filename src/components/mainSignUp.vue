<template>
    <div classs="mainpage">
        <div class="row">

    
     <div class="col-md-6"> 
            <div class="main-tab">
              
                       <h1>Welcome to my page</h1>
                       <h2>Think like a man of action and act like man of thought. </h2>
                        <h2>Courage is very important. Like a muscle, it is strengthened by use. </h2>
                        <h2>Life is the art of drawing sufficient conclusions from insufficient premises. </h2>
                        <h2>By doubting we come at the truth. </h2>
                        <h2>A man that hath no virtue in himself, ever envieth virtue in others. </h2>
                        <h2>When money speaks, the truth keeps silent. </h2>
                       
                       
                 
            </div>
    </div>
    <div class="col-md-6">
            <div class="signUp-tab">
                <h1>가입하기</h1>
                <form class="form" action="">
                  
                        <div>
                            <input class="input-tag" id="userid" name="userfirstname" type="text" placeholder="성" >
                            <input class="input-tag" id="userid" name="usermainname" type="text" placeholder="이름">
                        </div>
                         <div>
                            
                            <input  class="input-tag"  name="email"  placeholder="휴대폰 번호 또는 이메일"  required>
                        </div>
                        <div>
                            
                            <input  class="input-tag" id="pwd" name="pwd" type="password" placeholder="새 비밀번호" required>
                        </div>
                        <div>
                            생일
                            <br>
                           <select v-model="year">
                            <option disabled value="">년도</option>
                            <option>2001</option>
                            <option>2000</option>
                            <option>1999</option>
                            <option>1998</option>
                            <option>1997</option>
                            <option>1996</option>
                            <option>1995</option>
                            <option>1994</option>
                            <option>1993</option>
                            <option>1992</option>
                            <option>1991</option>
                            <option>1990</option>
                            </select>
                            <select v-model="month">
                                <option disabled value="">월</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                            <select v-model="day">일
                                <option disabled value="">일</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                        </div>  
                    
                </form>
            </div>
       </div>
           </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            year:'',
            month:'',
            day:''
        }
    }
}
</script>
<style lang="scss" scoped>
  
    .main-tab{
        text-align: center;   
        padding: 50px;

    }
    .signUp-tab{
        border: black solid 1px;
        border-radius: 25px 25px 25px 25px;
  
        padding-top: 20px;
        padding-bottom: 50px;
      
         margin-right: 70px;
          margin-left: 70px;
    }
    .form{
         
          border-radius: 25px 25px 25px 25px;
          border: black solid 1px;
          padding:20px;
        margin: 25px;
        font-display: white;
    }
    .input-tag{
        border: black solid 1px;
        border-radius: 5px 5px 5px 5px;
        padding: 3px;
        margin: 12px;
    }
    h1{
        padding-left: 25px;
    }
    ol{
        color:black;
    }
  



				
</style>