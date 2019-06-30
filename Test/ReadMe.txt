*************** URL to see the project Live ****************

          http://nabujournals.com/angular/live/

************************************************************




************* Install the project on localhost  ************

1) git clone https://github.com/MahdiDhifi/Angular-Test.git
2) cd Angular-Test/Test
3) npm install
4) npm install ngx-order-pipe
5) ng serve —port [port number]
        Example : ng serve —port 4370
        open browser : localhost:4370


*************************************************************


************ Steps to create the project ********************

1) Create new angular project project
     ng create ProjectName   

2) Genarate Modules
     ng g m ModuleName
     - Created two modules OwnersModule and PetsModule and inmporte module pets in OwnerModule

3)  Generate Services
        ng g s ServiceName
        - Created service TypeScript file  to locate JSON file path and make a new function to get the all owners list.
        - Added an @Injectable() decorator on top of a service class.
        
4) Generate components 
    ng g c ComponenetName
    - Add new component and approvide name selector name , template URL , style path , service reference.
    - Create service object inconstructor.
    - call service function on ngOnInit event.

5) Create html code and design inside html page.
   - used let owner to create locat variable that will be availible inside our template.
   - Used *ngFor and *ngIf to filter and display list of cats as expected.
   - used ngx-order-pipe to order list of cat as expected.

6)  added node_modules references and styles files and bootstrap references and  add component selector name 
    to index.html page.


7)  generate AppRoutingModule and add routes
     ng g m app-routing --flat --module=app

8) run command ng serve --port [portnumber]

9) open browser and type on url localhost:[portnumber]

*************************************************************




*************************************************************

                    THANK YOU

*************************************************************
