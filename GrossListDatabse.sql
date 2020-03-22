CREATE SCHEMA GrossListDatabase;

CREATE TABLE GrossListDatabase.GrossList (
    ID INT AUTO_INCREMENT,
    IName VARCHAR(30) NOT NULL,
    IPriority VARCHAR(6) NOT NULL,
    IStore VARCHAR(15),
    IStatus BOOL NOT NULL DEFAULT FALSE,
    PRIMARY KEY (ID)
);

INSERT INTO GrossListDatabase.GrossList(IName, IPriority, IStore) values("Toilet papers", "HIGH", "Walmart");
INSERT INTO GrossListDatabase.GrossList(IName, IPriority, IStore) values("Lemon cakes", "LOW", "ALDI");
INSERT INTO GrossListDatabase.GrossList(IName, IPriority, IStore) values("Milk", "MEDIUM", "CVS");
INSERT INTO GrossListDatabase.GrossList(IName, IPriority, IStore) values("Soda", "LOW", "Walmart");
INSERT INTO GrossListDatabase.GrossList(IName, IPriority, IStore) values("Bananas", "HIGH", "Valli");
INSERT INTO GrossListDatabase.GrossList(IName, IPriority, IStore) values("Apples", "LOW", "ALDI");

SELECT * FROM GrossListDatabase.GrossList;
