<template>
    <div>
        <div class="login-html">
          <h1>로그인 폼 만들기</h1>
          <br>
          <li>로그인 폼 예제</li>
<figure class="highlight html">
    <table>
        <tr><td class="code">
            <pre><span class="line"><span class="tag">&lt;<span class="name">div</span> <span class="class">class</span>=<span class="string">"login-form"</span></span></span>&gt;<span class="line"><span class="tag"><br>&lt;<span class="tag">div</span> <span class="class">class</span>= <span class="string">"Id-input"</span>&gt;<br>   &lt;<span class="tag">label</span> for=<span class="string">"loginId"</span> class=<span class="string">"screen_out"</span>&gt;아이디&lt;<span class="tag">/label</span>&gt;
      &lt;<span class="tag">input</span> type=<span class="string">"email"</span> id=<span class="string">"loginId"</span> name=<span class="string">"loginId"</span> <span class="placeholder">placeholder=</span><span class="string">"ID"</span>&gt;&lt;<span class="tag">/input</span>&gt;<br>&lt;<span class="tag">/div</span>&gt;
&lt;<span class="tag">div</span> <span class="class">class</span>= <span class="string">"Pw-input"</span>&gt;
    &lt;<span class="tag">label</span> for=<span class="string">"loginPw"</span>  class= <span class="string">"screen_out" </span>&gt; 비밀번호&lt;<span class="tag">/label</span>&gt;
            &lt;<span class="tag">input</span> type=<span class="string">"password"</span> <span class="id">id="loginPw"</span><span class="name">name="loginPw"</span> <span class="placeholder">placeholder="PW"</span>&gt;&lt;<span class="tag">/input</span>&gt;
            &lt;<span class="tag">button</span> <span class="type">type="submit</span><span class="class">class="btn_login"</span> &gt;로그인&lt;<span class="tag">/button</span>&gt;
            <br>&lt;/<span class="name">div</span>&gt;</span></span><br></pre></td></tr>
            </table>
            </figure>
            <br>
            <br>
          <h3>위와 같은 코드를 작성하여 템플릿을 실행한다면 아래와 같은 결과를 확인 할 수 있다.</h3>
        
        <div class="login-form">
          <div class= "Id-input">
            <label for="loginId" class="screen_out">아이디</label><br>
            <input type="email" id="loginId" name="loginId" placeholder="ID">
          </div>
          <div class= "Pw-input">
            <label for="loginPw"  class= "screen_out" > 비밀번호</label><br>
            <input type="password" id="loginPw" name="loginPw" placeholder="PW">
            <button type="submit" class="btn-login" >로그인</button>
        </div>
            </div>
       

     
            <br>
            <br>
            
    </div>
    </div>


</template>
<script>
export default {
    
}
</script>
<style scoped>
.btn-login{
  padding: 10px;
  background-color: #2973b7;
  color:white;
  float: center;
}
.login-form{
  padding:5px;
  border: white 2px solid;
  width: 50%
}
.login-html{
    padding-top: 100px;
    padding-right: 15%;
    padding-left: 15%;
}
.gutter pre {
  color: #999;
}
pre {
  color: #525252;
}
pre .function .keyword,
pre .constant {
  color: #0092db;
}
pre .keyword,
pre .attribute {
  color: #e96900;
}
pre .number,
pre .literal {
  color: #ae81ff;
}
pre .tag,
pre .tag .title,
pre .change,
pre .winutils,
pre .flow,
pre .lisp .title,
pre .clojure .built_in,
pre .nginx .title,
pre .tex .special {
  color: #2973b7;
}
pre .class .title {
  color: #fff;
}
pre .symbol,
pre .symbol .string,
pre .value,
pre .regexp {
  color: #42b983;
}
pre .title {
  color: #a6e22e;
}
pre .tag .value,
pre .string,
pre .subst,
pre .haskell .type,
pre .preprocessor,
pre .ruby .class .parent,
pre .built_in,
pre .sql .aggregate,
pre .django .template_tag,
pre .django .variable,
pre .smalltalk .class,
pre .javadoc,
pre .django .filter .argument,
pre .smalltalk .localvars,
pre .smalltalk .array,
pre .attr_selector,
pre .pseudo,
pre .addition,
pre .stream,
pre .envvar,
pre .apache .tag,
pre .apache .cbracket,
pre .tex .command,
pre .prompt {
  color: #42b983;
}
pre .comment,
pre .java .annotation,
pre .python .decorator,
pre .template_comment,
pre .pi,
pre .doctype,
pre .deletion,
pre .shebang,
pre .apache .sqbracket,
pre .tex .formula {
  color: #b3b3b3;
}
pre .coffeescript .javascript,
pre .javascript .xml,
pre .tex .formula,
pre .xml .javascript,
pre .xml .vbscript,
pre .xml .css,
pre .xml .cdata {
  opacity: 0.5;
}
#ad {
  width: 125px;
  position: fixed;
  z-index: 99;
  bottom: 10px;
  right: 10px;
  padding: 10px;
 
  border-radius: 3px;
  font-size: 13px;
}
#ad a {
  display: inline-block;
  color: #7f8c8d;
  font-weight: normal;
}
#ad span {
  color: #7f8c8d;
  display: inline-block;
  margin-bottom: 5px;
}
#ad img {
  width: 125px;
}
#ad .carbon-img,
#ad .carbon-text {
  display: block;
  margin-bottom: 6px;
  font-weight: normal;
  color: #34495e;
}
#ad .carbon-poweredby {
  color: #aaa;
  font-weight: normal;
}
.bsa-cpc {
  font-size: 1em;
  background-color: #f8f8f8;
}
.bsa-cpc a._default_ {
  text-align: left;
  display: block;
  padding: 10px 15px 12px;
  margin-bottom: 20px;
  color: #666;
  font-weight: 400;
  line-height: 18px;
}
.bsa-cpc a._default_ .default-image,
.bsa-cpc a._default_ .default-title,
.bsa-cpc a._default_ .default-description {
  display: inline;
  vertical-align: middle;
  margin-right: 6px;
}
.bsa-cpc a._default_ .default-image img {
  height: 20px;
  border-radius: 3px;
  vertical-align: middle;
  position: relative;
  top: -1px;
}
.bsa-cpc a._default_ .default-title {
  font-weight: 600;
}
.bsa-cpc a._default_ .default-description:after {
  font-size: 0.85em;
  content: "Sponsored";
  color: #1c90f3;
  border: 1px solid #1c90f3;
  border-radius: 3px;
  padding: 0 4px 1px;
  margin-left: 6px;
}
.bsa-cpc .default-ad {
  display: none;
}
@media print {
  #ad {
    display: none;
  }
}
body {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin: 0;
}
body.docs {
  padding-top: 61px;
}
@media screen and (max-width: 900px) {
  body.docs {
    padding-top: 0;
  }
}
a {
  text-decoration: none;
  color: #34495e;
}
img {
  border: none;
}
h1,
h2,
h3,
h4,
strong {
  font-weight: 600;
  color: white;
}
code,
pre {
  font-family: "Roboto Mono", Monaco, courier, monospace;
  font-size: 0.8em;
  background-color: #f8f8f8;
  -webkit-font-smoothing: initial;
  -moz-osx-font-smoothing: initial;
}
code {
  color: #e96900;
  padding: 3px 5px;
  margin: 0 2px;
  border-radius: 2px;
  white-space: nowrap;
}
em {
  color: #7f8c8d;
}
p {
  word-spacing: 0.05em;
}
a.button {
  padding: 0.75em 2em;
  border-radius: 2em;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}
a.button.has-icon {
  position: relative;
  text-indent: 1.4em;
}
a.button.has-icon > svg {
  position: absolute;
  left: 0.4em;
  top: 0.4em;
  width: 2em;
}
a.button.white {
  background-color: #fff;
  color: #42b983;
}
a.button.gray {
  background-color: #f6f6f6;
  color: #7f8c8d;
  border-color: #f6f6f6;
}
.highlight {
  overflow-x: auto;
  background-color: #f8f8f8;
  padding: 0.4em 0 0;
  line-height: 1.1em;
  border-radius: 2px;
  position: relative;
}
.highlight table,
.highlight tr,
.highlight td {
  width: 100%;
  border-collapse: collapse;
  padding: 0;
  margin: 0;
}
.highlight .gutter {
  width: 1.5em;
}
.highlight .code pre {
  padding: 1.2em 1.4em;
  line-height: 1.5em;
  margin: 0;
}
.highlight .code .line {
  min-height: 1.5em;
}
.highlight.html .code:before,
.highlight.js .code:before,
.highlight.bash .code:before,
.highlight.css .code:before, 
.highlight.php .code:before{
  position: absolute;
  top: 0;
  right: 0;
  color: #ccc;
  text-align: right;
  font-size: 0.75em;
  padding: 5px 10px 0;
  line-height: 15px;
  height: 15px;
  font-weight: 600;
}
.highlight.html .code:before {
  content: "HTML";
}
.highlight.js .code:before {
  content: "JS";
}
.highlight.bash .code:before {
  content: "Shell";
}
.highlight.css .code:before {
  content: "CSS";
}
.highlight.php .code:before{
  content : "PHP"
}
#main {
  position: relative;
  z-index: 1;
  padding: 0 60px 30px;
  overflow-x: hidden;
}

@media print {
  body {
    color: #000;
  }
  .highlight {
    padding: 0;
    page-break-inside: avoid;
  }
  .highlight .code pre {
    color: #000;
    background-color: #fff;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: #e8e8e8;
    page-break-inside: avoid;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #000;
    page-break-after: avoid;
    page-break-before: avoid;
  }
 
  h2+p {
    page-break-before: avoid;
  }


.content {
  position: relative;
  padding: 2.2em 0;
  max-width: 600px;
  margin: 0 auto;
  padding-left: 50px;
}

.content a.button {
  font-size: 0.9em;
  color: #fff;
  margin: 0.2em 0;
  width: 180px;
  text-align: center;
  padding: 12px 24px;
  display: inline-block;
  vertical-align: middle;
}
.content img {
  max-width: 100%;
}
.content span.light {
  color: #7f8c8d;
}
.content span.info {
  font-size: 0.85em;
  display: inline-block;
  vertical-align: middle;
  width: 280px;
  margin-left: 20px;
}
.content h1 {
  margin: 0 0 1em;
}
.content h2,
.content h3 {
  pointer-events: none;
}
.content h2 a,
.content h3 a,
.content h2 button,
.content h3 button {
  pointer-events: auto;
  color: #2c3e50;
}
.content h2:before,
.content h3:before {
  content: "";
  display: block;
  margin-top: -91px;
  height: 91px;
  visibility: hidden;
}
.content h2 {
  margin: 45px 0 0.8em;
  padding-bottom: 0.7em;
  border-bottom: 1px solid #ddd;
}
.content h3 {
  margin: 52px 0 1.2em;
  line-height: 1.2;
  position: relative;
}
.content h3 > a:before {
  content: "#";
  color: #42b983;
  position: absolute;
  left: -0.7em;
  margin-top: -0.05em;
  padding-right: 0.5em;
  font-size: 1.2em;
  line-height: 1;
  font-weight: bold;
}
.content figure {
  margin: 1.2em 0;
}
.content p,
.content ul,
.content ol {
  line-height: 1.6em;
  margin: 1.2em 0 -1.2em;
  padding-bottom: 1.2em;
  position: relative;
  z-index: 1;
}
.content ul,
.content ol {
  padding-left: 1.5em;
  position: inherit;
}
.content a {
  color: #42b983;
  font-weight: 600;
}
.content blockquote {
  margin: 2em 0;
  padding-left: 20px;
  border-left: 4px solid #42b983;
}
.content blockquote p {
  font-weight: 600;
  margin-left: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}
.content iframe {
  margin: 1em 0;
}
.content > table {
  border-spacing: 0;
  border-collapse: collapse;
  margin: 1.2em auto;
  padding: 0;
  display: block;
  overflow-x: auto;
}
.content > table td,
.content > table th {
  line-height: 1.5em;
  padding: 0.4em 0.8em;
  border: none;
  border: 1px solid #ddd;
}
.content > table th {
  font-weight: bold;
  text-align: left;
}
.content > table th,
.content > table tr:nth-child(2n) {
  background-color: #f8f8f8;
}
.content > table th code,
.content > table tr:nth-child(2n) code {
  background-color: #efefef;
}
.content p.tip,
.content p.success {
  padding: 12px 24px 12px 30px;
  margin: 2em 0;
  border-left-width: 4px;
  border-left-style: solid;
  background-color: #f8f8f8;
  position: relative;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
}
.content p.tip:before,
.content p.success:before {
  position: absolute;
  top: 14px;
  left: -12px;
  color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  text-align: center;
  line-height: 20px;
  font-weight: bold;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
}
.content p.tip code,
.content p.success code {
  background-color: #efefef;
}
.content p.tip em,
.content p.success em {
  color: #34495e;
}
.content p.tip {
  border-left-color: #f66;
}
.content p.tip:before {
  content: "!";
  background-color: #f66;
}
.content p.success {
  border-left-color: #42b983;
}
.content p.success:before {
  content: "\f00c";
  font-family: FontAwesome;
  background-color: #42b983;
}



@media screen and (max-width: 900px) {
  body {
    -webkit-text-size-adjust: none;
    font-size: 14px;
  }
  #header {
    display: none;
  }
 
  .content {
    padding-left: 0;
  }
  .content.with-sidebar {
    margin: auto;
  }
  .content h2:before,
  .content h3:before {
    content: "";
    display: block;
    margin-top: -70px;
    height: 70px;
    visibility: hidden;
  }
  .footer {
    margin-left: 0;
    text-align: center;
  }
}
@media screen and (max-width: 560px) {
  #downloads {
    text-align: center;
    margin-bottom: 25px;
  }
  #downloads .info {
    margin-top: 5px;
    margin-left: 0;
  }
  iframe {
    margin: 0 !important;
  }
}
@media print {
  .footer {
    display: none;
  }
  .content {
    padding-left: 0px;
  }
  .content p {
    line-height: 1.35em;
  }
  .content p.tip {
    border: 2px solid #e8e8e8;
    border-left: 4px solid #f66;
  }
}
}

</style>
