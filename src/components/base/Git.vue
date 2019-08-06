<template>
    <div class="Git-content">
        <h1>형상 관리 시스템</h1>
        <br>
        <br>
            <h2>형상 관리의 정의</h2>
            <br>
            <li>SW개발 및 유지보수 과정에서 발생하는 소스코드, 문서, 인터페이스 등 각종 결과물에 대해
            형상을 만들고, 이들 형상에 대한 변경을 체계적으로 관리, 제어하기 위한 활동이라고 한다. 단순히 말해 프로젝트를 진행하면서 생성하는 소스코드를 CVS나 SVN, 또는 GIT와 같은 버
            전 관리 시스템을 이용하는 것이라고 이해할 수 있다.</li>
            <br>
            <br>
            <h2>형상 관리사용 목적</h2>
            <br>
            <li>개발 하는 동안 소스 코드의 변경 사항을 보존하기 위해서이다. 자세하게 설명하자면 버그 및 문제점 발생 시 추적에 용이하고 과거의 특정 시점의 소스파일
                및 디렉토리의 내용을 쉽게 파악이 가능하고 그 특정시점으로 되돌릴 수 있다.</li>
            <li>협동작업이 가능하기 때문이다. 대부분의 프로젝트는 팀 단위로 이루어진다. 전체 팀원이 하
                나의 소스를 가지고 효율적으로 작업할 수 있고 인터넷을 통한 전세계의 개발자들이 협업하여
                개발하는 오픈 소스 프로젝트가 가능해진다.</li>
                <br>
                <br>
            <h2>버전 관리 시스템의 종류</h2>
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
        float: left;
        padding: 10px;
    }
</style>
