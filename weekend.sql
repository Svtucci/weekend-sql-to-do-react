CREATE TABLE "taskList" (
	"id" SERIAL PRIMARY KEY,
	"task" varchar(255),
	"description" varchar(255)
);
	
SELECT * FROM "taskList";

INSERT INTO "taskList" ("task", "description") 
			VALUES ('Mow the lawn', 'The grass grew, go mow it');