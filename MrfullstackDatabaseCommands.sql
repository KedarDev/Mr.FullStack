
	- Visitor -
	CREATE TABLE "Visitor"(
	"visitorId" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
	"ipAddress" VARCHAR(15),   
	"createdOn" TIMESTAMP WITHOUT TIME ZONE NOT NULL,
	CONSTRAINT "Visitor_pkey" PRIMARY KEY ("visitorId"),
	CONSTRAINT "Visitor_ipAddress_ukey" UNIQUE ("ipAddress")
	);
	
	-- INSERT DATA INTO "visitor" TABLE
	    INSERT INTO "Visitor"("ipAddress", "createdOn")
	    VALUES ('207.46.13.206', NOW());
		
	   INSERT INTO "Visitor"("ipAddress", "createdOn")
	   VALUES ('555.55.55.555', NOW());
	
	
	        INSERT INTO "Visitor"("ipAddress", "createdOn")
	    VALUES (2074613206, NOW());
	           INSERT INTO "Visitor"("ipAddress", "createdOn")
	       VALUES (1555555555, NOW());
	
	
		
	   SELECT * FROM "Visitor";
	
	
-- 	- Canvas -
-- 	CREATE TABLE "Canvas"(  
-- 	"canvasId"  INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
-- 	"initial" VARCHAR NOT NULL,
-- 	"ipAddress" VARCHAR(15),
-- 	"jobTitle" VARCHAR NOT NULL,
-- 	"picture" VARCHAR NOT NULL,
-- 	CONSTRAINT "Canvas_pkey" PRIMARY KEY ("initial"),
-- 	CONSTRAINT "Canvas_visitorIP_fkey" FOREIGN KEY ("ipAddress")
-- 	REFERENCES "Visitor" ("ipAddress")
-- 	);
	
-- -- INSERT DATA INTO "Canvas" TABLE
--     INSERT INTO "Canvas"("initial", "ipAddress", "jobTitle","picture")
--     VALUES ('F.S', '207.46.13.206', 'Freelance Dev', 'example.png'),
--                    ('M.S','555.55.55.555','Frontend Dev','example.png');
	
-- 	SELECT * FROM "Canvas";
	
	

	-  User -
	   CREATE TABLE "User"(
	   "userId" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
	   "firstName" VARCHAR NOT NULL,
	   "lastName" VARCHAR NOT NULL,
	   "username" VARCHAR NOT NULL,
	   "phone" VARCHAR,
	   "emailId" VARCHAR NOT NULL,
	   "password" VARCHAR NOT NULL,
	   "emailVerified" BOOLEAN NOT NULL,
	   "createdOn" TIMESTAMP WITHOUT TIME ZONE NOT NULL,
	   CONSTRAINT "User_pkey" PRIMARY KEY("userId"),
	   CONSTRAINT "User_emailId_key" UNIQUE ("emailId"),
	   CONSTRAINT "User_username_key" UNIQUE ("username")
);

-- INSERT MULTIPLE USERS WITH A SINGLE QUERY USING A VALUES LIST
      INSERT INTO "User"("firstName", "lastName", "username", "phone", "emailId", "password", "emailVerified", "createdOn") 
      VALUES ('mr', 'fullStack', 'mrfullstack', '+1-555-5555', 'mrfullstack@example.com', 'fullstack', true, NOW()),
             ('mrs', 'fullstack', 'mrsfullstack', '+1-555-4555', 'mrsfullstack@example.com', 'miss', false, NOW());

	- Procedure -
	
	--create a procedure
	
	CREATE OR REPLACE PROCEDURE user_insert_feed("_userId" INTEGER,"_content" VARCHAR,"_picture" VARCHAR)
	LANGUAGE plpgsql
	AS
	$$
	DECLARE 
	userExists INTEGER=0;
	BEGIN
	SELECT COUNT(*) FROM "User" into userExists WHERE "userId"="_userId";
	IF userExists!=1 THEN
	RAISE NOTICE 'Invalid User details';
	ELSE
	INSERT INTO "Feed"("userId","content","picture","createdOn") VALUES("_userId","_content","_picture",now());
	END IF;
	END;
	$$
	
	Test procedure -
	CALL user_insert_feed(10,'Feed 10','example10.png');
	

      SELECT * FROM "User";


	- Profile -
	CREATE TABLE "Profile"(
	"profileId" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
	"userId" INTEGER NOT NULL,
	"headline" VARCHAR NOT NULL,
	"bio" VARCHAR NOT NULL,
	"city" VARCHAR,
	"country" VARCHAR,
	"picture" VARCHAR,
	CONSTRAINT "Profile_pkey" PRIMARY KEY ("profileId"),
	CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId")
	REFERENCES "User" ("userId")
);


-- INSERT DATA INTO "Blog" TABLE
   INSERT INTO "Blog"("userId", "headline", "bio", "country", "picture")
   VALUES (1, 'JAVA PRACTICE', 'Learn Java In A Day', 'Canada', 'example.png'),
                  (2, 'Music For the Soul', 'Hip Hop aint Dead its asleep', 'USA', 'example.png');
  
  SELECT * FROM "Blog"


          
	-  Feed -
	CREATE TABLE "Feed"(
	"feedId" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
	"userId" INTEGER NOT NULL,
	"content" VARCHAR NOT NULL,
	"picture" VARCHAR NOT NULL,
	"createdOn" TIMESTAMP WITHOUT TIME ZONE NOT NULL,
	CONSTRAINT "Feed_pkey" PRIMARY KEY ("feedId"),
	CONSTRAINT "Feed_userId_fkey" FOREIGN KEY ("userId")
	REFERENCES "User" ("userId")
	);
	
-- INSERT NEW ROW INTO "Feed" table
    INSERT INTO "Feed"("userId", "content", "picture", "createdOn")
    VALUES (1, 'My first post', 'example.png', now());

    INSERT INTO "Feed"("userId", "content", "picture", "createdOn")
    VALUES (2, 'My Second post', 'example.png', now());

    SELECT * FROM "Feed";


	- FeedMetaData -
	CREATE TABLE "FeedMetaData"(
	"feedMetaDataId" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
	"actionUserId" INTEGER NOT NULL,
	"feedId" INTEGER NOT NULL,
	"isLike" BOOLEAN NOT NULL,
	"comment" VARCHAR,
	"createdOn" TIMESTAMP WITHOUT TIME ZONE NOT NULL,
	CONSTRAINT "FeedMetaData_pkey" PRIMARY KEY ("feedMetaDataId"),
	CONSTRAINT "FeedMetaData_actionUserId_fkey" FOREIGN KEY ("actionUserId")
	REFERENCES "User"("userId"),
	CONSTRAINT "FeedMetaData_feedId_fkey" FOREIGN KEY ("feedId")
	REFERENCES "Feed" ("feedId")
);

-- INSERT A ROW INTO "FeedMetaData" TABLE
    INSERT INTO "FeedMetaData" ("actionUserId", "feedId", "isLike", "comment", "createdOn")
    VALUES (2, 2, true, 'Great Post!', NOW()),
	       (2, 2, true, 'Great Post!', '2023-02-22 15:30:00');

    SELECT * FROM "FeedMetaData";


	- Repo -
	CREATE TABLE "Repo"(
	"repoId" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
	"userId" INTEGER NOT NULL,
	"description" CHARACTER VARYING NOT NULL,
	"tags" VARCHAR NOT NULL,
	"demo" VARCHAR NOT NULL,
	"github" VARCHAR NOT NULL,
	CONSTRAINT "Repo_pkey" PRIMARY KEY ("repoId"),
	CONSTRAINT "Repo_userId_fkey" FOREIGN KEY ("userId")
	REFERENCES "User" ("userId")
);

-- INSERT DATA INTO "Repo" TABLE
    INSERT INTO "Repo"("userId", "description", "tags", "demo", "github")
    VALUES (1,'FullStack Feed App','React,Maven,SpringBoot,NPM,Postgres,VS Code,AWS,Java,Tailwind,ect','example.com','github.com/mrfullstack'),
	       (2,'FullStack Weather App','JPA,Maven,JBDC,SpringBoot,NPM,Postgres,VS Code,AWS,Java,Tailwind,ect','example.com','github.com/mrsfullstack');
	
    SELECT * FROM "Repo";