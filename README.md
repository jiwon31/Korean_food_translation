# 한국어 메뉴판을 외국어로 번역해주는 웹페이지
## @프로젝트 소개
> 한국어 메뉴판을 외국어로 번역해주는 웹페이지로 Google Cloud Vision API와 Google Cloud Translate API를 사용한다.      
   

## @프로젝트 규칙
> 1. github에 소스코드 커밋해서 공유       
   

## @프로젝트 개발 환경
> node.js를 사용
> ### Google Cloud Vision API 설치:
> npm install --save @google-cloud/vision
> ### Google Cloud Translate API 설치:
> npm install --save @google-cloud/translate
      

## @자주 쓰이는 git 명령어들
> 브랜치 생성:   
> git branch <브랜치명>   
>
> ### 브랜치 바꾸기:   
> git checkout <브랜치명>   
>
> 현재 브랜치 확인:   
> git branch   
>
> 스테이지에 올리기:   
> git add *   
>
> 커밋하기:      
> git commit -m <메시지>   
>
> ### 스테이지에 올리고 커밋하기(add와 commit을 동시에):   
> git commit -a -m <메시지>   
>
> ### 특정 브랜치 복제해오기:   
> git clone -b {branch_name} --single-branch {저장소 URL}       
> ex) git clone -b f/upload --single-branch https://github.com/Namjiwoon/FOOD-translation/edit/master/README.md   
>
> remote 저장소 add(url에 별명 붙여주는 명령어):   
> git remote add [단축이름] [url]       
> ex) git remote add web1 https://github.com/Namjiwoon/FOOD-translation/edit/master/README.md   
> => url의 다축이름을 web1으로 설정      
> 
> branch를 remote저장소(git hub)에 push:   
> git push remote branch      

## 브랜치 덮어쓰기 명령어
> 브랜치를 덮어쓰기 위해서는 일단 병합하기 위한 두개의 브런치가 필요하다.
>    
>    
> 두개의 브런치가 없을 경우에만 실행:
> 원격 브런치 확인
> git branch -a
>   
> 병합하는 데 필요한 브런치를 가져옴
> git checkout -b 새브랜치명 origin/가져올브랜치명
> 
> ### 두 개의 경우 중 하나 선택
> 1. 내 브런치를 다른 브랜치에 덮어 씌울 경우(내 것으로 auto merge)
> git merge -X ours 다른브랜치명
>
> 2. 다른 브랜치를 내 브랜치에 덮어 씌울 경우(상대 것으로 auto merge)
> git merge -X theirs 다른브랜치명
>
> git commit -a -m "커밋 메시지"
> git push origin 브랜치명
