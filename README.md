# 한국어 메뉴판을 외국어로 번역해주는 웹페이지
### @프로젝트 소개
한국어 메뉴판을 외국어로 번역해주는 웹페이지로 Google Cloud Vision API와 Google Cloud Translate API를 사용한다.      


### @프로젝트 규칙
1. github에 소스코드 커밋해서 공유       


### @프로젝트 개발 환경
node.js를 사용
#### Google Cloud Vision API 설치:
npm install --save @google-cloud/vision
#### Google Cloud Translate API 설치:    
   

### @자주 쓰이는 git 명령어들
브랜치 생성:
git branch <브랜치명>

#### 브랜치 바꾸기:
git checkout <브랜치명>

현재 브랜치 확인:
git branch

스테이지에 올리기:
git add *

커밋하기:
git commit -m <메시지>

#### 스테이지에 올리고 커밋하기(add와 commit을 동시에):
git commit -a -m <메시지>

#### 특정 브랜치 복제해오기:
git clone -b {branch_name} --single-branch {저장소 URL}
ex) git clone -b f/upload --single-branch https://github.com/Namjiwoon/FOOD-translation/edit/master/README.md

remote 저장소 add(url에 별명 붙여주는 명령어):
git remote add [단축이름] [url]
ex) git remote add web1 https://github.com/Namjiwoon/FOOD-translation/edit/master/README.md
=> url의 다축이름을 web1으로 설정

<branch>를 remote저장소(git hub)에 push:
git push <remote> <branch>

