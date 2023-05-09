# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To be honest I did not know the answer to this question fully so i had to look it up. I just know you would have to generate a migration, the forign key would be named cohort_id and that the foriegn key will be inserted into the student model. 

Researched answer: From what I've gathered from research, you would have to generate a migration, then add the reference to the cohort. That would generate the migration file. There will be a new reference colum with the foriegn key named cohort_id. The foriegn key will be inserted into the student model. 

2. Which RESTful routes must always be passed params? Why?

Your answer: Show, Update and Delete. They require params because they are performing a certain action on a specific item. Therefore, you would need to know which item you are going to perform these actions on. If not, each item will be changed or no items at all, depending on how the code is written.

Researched answer: Restful routes is the map of an http verb. Meaning, It gives developers a direct understanding of how to navigate through an application. Tells what each route is in charge of. 

3. Name three rails generator commands. What is created by each?

Your answer: Rails generate model, creats a migrate, a model and a test file. Rails generate controller, creates a controller view and test files. Rails generate devise creates a migration, a model, a spec and a routes file. 

Researched answer: I read a lot on rails generators located at this link https://guides.rubyonrails.org/command_line.html. There was just so much information thre that repeated what I had plus stuff that I couldn't paraphrase back. This is where I found a lot of information on rails generators.       

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Index will get and display all students
action: "POST" location: /students
create will create a new student
action: "GET" location: /students/new
New should contain a form to fill out to add new student
action: "GET" location: /students/2
Show will show student with the id of 2
action: "GET" location: /students/2/edit
Edit should contain a form to fill out to edit student 2
action: "PATCH" location: /students/2
Update will change and update student 2
action: "DELETE" location: /students/2
Destroy will delete student 2 and index should be updated reflecting such a change

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

0) As a user, I want to be able to create an new list of albums I would like to listen to.
1) As a user, I want to be able to show a complete complied list of albums I would like to listen to.
2) As a user, I want to be able to add an new albums I would like to listen to.
3) As a user, I want to be able to mark an album as listened to.
4) As a user, I want to be able to edit an album I would like to listen to.
5) As a user, I want to be able to edit an album I have already listened to.
9) As a user, I want to be able to be able to add a priority box that is clickable to depict the albums I would like to listen to the most.
6) As a user, I want to be able to search my list of albums.
7) As a user, I want to be able to be able to delete an album on my list.
8) As a user, I want to be able to be able to make albums as favorites.

User Story Stretch
I would like to have this album list password protected.
I would like to have this album list in alphabetical order