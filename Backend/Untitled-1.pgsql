CREATE TABLE "Visitor"(
	"visitorId" INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
	"ipAddress" VARCHAR(15),
    "city" VARCHAR(100),
    "country" VARCHAR(100),   
	"createdOn" TIMESTAMP WITHOUT TIME ZONE NOT NULL,
	CONSTRAINT "Visitor_pkey" PRIMARY KEY ("visitorId"),
	CONSTRAINT "Visitor_ipAddress_ukey" UNIQUE ("ipAddress")
	);


    	    INSERT INTO "Visitor"("ipAddress", "city", "country",  "createdOn")
	    VALUES ('207.46.13.206', 'Toronto', 'Canada', NOW());


        SELECT * FROM "Visitor";


        DROP TABLE "Visitor";