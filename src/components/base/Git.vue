<template>
    <div class="Git-content">
        <h1>형상 관리 시스템</h1>
        <br>
        <br>
            <h2>◆형상 관리의 정의</h2>
            <br>
            <li>SW개발 및 유지보수 과정에서 발생하는 소스코드, 문서, 인터페이스 등 각종 결과물에 대해
            형상을 만들고, 이들 형상에 대한 변경을 체계적으로 관리, 제어하기 위한 활동이라고 한다. 단순히 말해 프로젝트를 진행하면서 생성하는 소스코드를 CVS나 SVN, 또는 GIT와 같은 버
            전 관리 시스템을 이용하는 것이라고 이해할 수 있다.</li>
            <br>
            <br>
            <h2>◆형상 관리사용 목적</h2>
            <br>
            <li>개발 하는 동안 소스 코드의 변경 사항을 보존하기 위해서이다. 자세하게 설명하자면 버그 및 문제점 발생 시 추적에 용이하고 과거의 특정 시점의 소스파일
                및 디렉토리의 내용을 쉽게 파악이 가능하고 그 특정시점으로 되돌릴 수 있다.</li>
            <li>협동작업이 가능하기 때문이다. 대부분의 프로젝트는 팀 단위로 이루어진다. 전체 팀원이 하
                나의 소스를 가지고 효율적으로 작업할 수 있고 인터넷을 통한 전세계의 개발자들이 협업하여
                개발하는 오픈 소스 프로젝트가 가능해진다.</li>
                <br>
                <br>
            <h2>◆버전 관리 시스템의 종류</h2>
            <br>
            <li> 버전 관리 시스템은 상용과 비상용(오픈소스)로 구분 할 수 있다.</li> 
            <div class="sang">
                <h3 class="sang-name">상용</h3>
                <li v-for="value in sangObj" class="sang-content" :key="value">
                    {{ value }}
                </li>
            </div>

            <div class="besang">
                <h3 class="besng-name">비상용(오픈소스)</h3>
                <li v-for="value in besangObj" class="besang-content" :key="value">
                    {{ value }}
                </li>
            </div>
            <br>
            <br>
            <h1>git이란?</h1>
            <br>
            <br>
            <h2>◆정의</h2>
            <br>
            <li> 
            여러명의 개발자가 특정 프로젝트를 자신의 컴퓨터로 협업하여 개발하면서 버전을 관리할 수
            있는 시스템</li>
            <br>
            <br>
            <h2>◆ git의 버전 관리 방식</h2>
            <li>
            중앙 서버 컴퓨터와 여러개의 컴퓨터들이 연결되어 모두 같은 버전의 데이터베이스를 유지한
            다. 이 버전은 업데이트가 될 때마다 자동으로 생성된다. 따라서 이 파일들은 최신버전으로
            모든 컴퓨터에서 유지될 수 있을 것이다.</li>
            <br>
            <li>컴퓨터 A에서 업데이트한 것을 중앙 서버에 올리면 버전이 업데이트 되고, 컴퓨터 B는 이를
            중앙 서버 컴퓨터로부터 최신화시키면서 버전과 파일을 모두 컴퓨터 A와 동일하게 유지할 수
            있다. 이와 같이 작동하는 방식을 우리는 분산 버전 관리 시스템이라고 한다.</li>
            <br>
            <br>
            <h2> git 용어 정리</h2>
            <li>커밋(commit) : Git 저장소에 여러분의 디렉토리에 있는 모든 파일에 대한 스냅샷을 기록하
                는 것</li>
                <br>
            <li>브랜치(branch) : "하나의 커밋과 그 부모 커밋들을 포함하는 작업 내역“ 합치기(merge) : 두 개의 부모(parent)를 가리키는 특별한 커밋을 만들어 냅니다.
               </li>
            <br>
            <br>
            <h2> Git과 SourceTree의 활용</h2>
            <li>IDE 툴인 이클립스에서 git을 연결해서 사용하거나 git bash등을 사용해 CLI환경에서 직접
                명령어를 쳐서 git을 이용할 수도 있다.</li>
                <li>
                그러나 GUI환경에 익숙한 개발자들의 경우에는 CLI가 매우 낯설기 때문에 이 과정을 좀더
                시각화하여 쉽게 git을 사용하게 도와주는 프로그램이 ‘소스트리’이다.</li>
                <li>
                    (GUI :그래픽 유저 인터페이스) (CLI : 명령 줄 인터페이스)</li>
                <br>
                <br>
                <h1>Git Flow</h1>
                <br>
                <br>
                    <h2>◆ 정의</h2>
                    <br>
                    <li>Vincent Driessen의 브랜칭 모델을 적용하여 고수준으로 저장소를 관리하기 위한 git의 확장
                    개념이다.</li>
                    <br>
                    <br>
                <h2> ◆ git flow의 종류</h2>
                <br>
                <h3>develop과 master 브랜치</h3>
                    <li>중심이 되는 브랜치이며 git flow에서는 무조건 존재해야 하는 브랜치 입니다. develop에서
                        개발된 프로젝트는 release브랜치를 통해 릴리즈를 준비하며, 릴리즈 준비가 완료되었다면
                        master 브랜치에 병합하게 됩니다. -Feature 브랜치
                        새로운 기능을 추가하기 위해 사용되는 브랜치이며 origin에는 업로드하지 않고, 개발자의
                        local에서만 존재합니다</li>
                    <br>
                    <br>
                <h3>Release 브랜치</h3>
                <br>
                <li>릴리즈를 준비하기 위한 브랜치 입니다. 지금까지 개발한 기능들을 develop 브랜치로부터
                    따내어 release 브랜치를 만들고 release 브랜치에서는 발견되는 버그들을 수정하며 릴리즈를
                준비합니다. 그동안 develop 브랜치에서는 다음 릴리즈를 위한 개발을 진행합니다.</li>
                <br>
                <h3>Hotfix브랜치</h3>
                <br>
                <li>릴리즈된 Product에서 발생한 버그들을 수정하기 위한 브랜치 입니다. 따라서 hotfix 브랜
                치는 master로부터 파생되며 수정한 버그들을 적용하기 위해 master와 develop 브랜치 모
                두에 병합됩니다.</li>
                <br>
                <br>
                <h1>마크다운</h1>
                <br>
                <h2>◆ 마크다운의 특징</h2>
                <br>
                <li>마크다운(Markdown)은 웹상에서 글을 쓰는 모든 사람들을 위한 글쓰기 도구(서식, 포맷, 양
                    식) 입니다. -마크다운(Markdown)은 HTML을 몰라도 약간의 노력으로 글자를 HTML형식-으로 변환시켜
                    줍니다. (단 변환도구는 따로 있어야 함)</li>
                <h2>◆ 마크다운 태그의 종류</h2>
                <br>
                <li>제목 : # , ===== 인용 : ></li>
                <li>강조 : * , _ 링크 : [텍스트](주소 "설명 생략가능")</li>
                <li>이미지 : ![텍스트](이미지주소 "설명 생략가능")</li>
                <li>리스트 : 1 , * , - , +</li>
                <li>코드표시 : <code>코드</code> , 한줄 띄우고 스페이스 4칸 , ```코드``` 줄바꿈 : 엔터 2번 , 강제 줄바꿈은 문장끝에 스페이스바 2칸</li>
                <li>가로선 : ----- , ***** , +++++</li>






    </div>
</template>
<script>
export default {
    data(){
        return {
        sangObj:[
            'IBM Rational ClearCase',
            'Perforce',
            'PTC Integrity'
        ],
        besangObj:[
            'Subversion(SVN)',
            'CVS',
            'Git'
        ]}
    }
}
</script>
<style>
    .Git-content{
        padding: 100px;
    }
    .sang{
        float: left;
        padding: 10px;
    }
    .besang{
        
        padding: 10px;
    }
</style>
