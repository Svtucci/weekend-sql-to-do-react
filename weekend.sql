CREATE TABLE "taskList" (
	"id" SERIAL PRIMARY KEY,
	"task" varchar(255),
	"status" BOOLEAN DEFAULT false
);
	
SELECT * FROM "taskList" ;

INSERT INTO "taskList" ("task", "status") 