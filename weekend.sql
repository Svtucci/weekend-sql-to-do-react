CREATE TABLE "taskList" (
	"id" SERIAL PRIMARY KEY,
	"task" varchar(255),
	"description" varchar(255),
	"completionstatus" BOOLEAN DEFAULT FALSE
);
	
SELECT * FROM "taskList";

INSERT INTO "taskList" ("task", "description", "completionstatus") 
			VALUES ('Mow the lawn', 'The grass grew, go mow it', FALSE);

			