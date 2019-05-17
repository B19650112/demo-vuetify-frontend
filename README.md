Installation Software
---------------------
- Install NodeJs, link download: https://nodejs.org/en/
- Install Git,    link download: https://git-scm.com/downloads
- Install VS Code link download: https://code.visualstudio.com/Download


Preparation before to run demo-vuetify-frontend
-----------------------------------------------
Type from Command Prompt (C:\ or other drive) as follow:

- npm install @vue/cli -g
- vue create demo-vuetify-frontend&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*select default (babel, eslint)*
- cd demo-vuetify-frontend
- vue add vuetify&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*select Default (recommended)*
- npm install axios
- npm install matrial-design-icons-iconfont
- npm install vue-router
- npm install --save vue-lodash


generate program
----------------
- npm run serve&nbsp;&nbsp;&nbsp;&nbsp;OR
- yarn run serve

if no error, the screen below will appear:

- Local:   http://localhost:8080/
- Network: http://192.168.56.1:8080/


  Note that the development build is not optimized.
  To create a production build, run yarn build.

- Press Ctrl-C to Terminate batch job


TEST REST API
-------------
Download repository 'golang-backend' from https://github.com/B19650112/golang-backend

Compile and Run Program golang-backend
--------------------------------------
- cd c:\Goweb\src\golang-backend
- go build
- golang-backend.exe

Run Program demo-vuetify-frontend
---------------------------------
- npm run serve

- Hold Ctrl + click to follow link  to run program, select Local or Network<br/>

- Local:   http://localhost:8080/<br/>
- Network: http://192.168.56.1:8080/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*(change to your IP address)*


Test Program demo-vuetify-frontend
----------------------------------
- Test dashboard 'My Product'
  - type initial to search product name on input Search Product, press enter
  - click button cross and press enter to go back first page

- For dashboard 'Leaders', 'History' and 'Lists' just a sample programs without pagination button.

Notes
-----
If you want create/update/delete record on 'tabelproduct', please download repository 'crud-angular-frontend'
from https://github.com/B19650112/crud-angular-frontend
<br/>
<br/>
<br/>
&nbsp;I'm sorry, my english is not good..
