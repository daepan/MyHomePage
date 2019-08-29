<template>
    <div classs="mainpage">
        <div class="row">

    
     <div class="col-md-6"> 
            <div class="main-tab">
              
                       <h1>Welcome to my page</h1>
                       <h2>this is first project page</h2>
                       <p>have good time</p>
                       <p>thank you</p>    
                 
            </div>
    </div>
    <div class="col-md-6">
            <div class="signUp-tab">
                <form class="form" action="">
                    <ol>
                        <li>
                            <label for="userid">아이디</label>
                            <input class="input-tag" id="userid" name="userid" type="text" equired autofocus>
                        </li>
                         <li>
                            <label for="pwd1">비밀번호</label>
                            <input  class="input-tag" id="pwd1" name="pwd1" type="password"  required>
                        </li>
                        <li>
                            <label pwd="pwd2">비밀번호 확인</label>
                            <input  class="input-tag" id="pwd2" name="pwd2" type="password" required>
                        </li>  
                    </ol>
                </form>
            </div>
       </div>
           </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
  
    .main-tab{
        text-align: center;   
        padding: 150px;

    }
    .signUp-tab{
        border: black solid;
        background-color: gray;
        padding-top: 100px;
        padding-bottom: 100px;
        margin: 100px;
    }
    .form{
          background-color: white;
          border: black solid;
          padding:50px;
            margin: 25px;
    }
    .input-tag{
        padding: 3px;
        margin: 25px;
    }

				
</style>