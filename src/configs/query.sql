/* 
- The result lists the broker name 
  followed by his customer count.

- The results are sorted from
  high to low number of customers. 

- If brokers have the same number of customers, 
  then sorted alphabetically. 
 */
SELECT b.NAME, COUNT(c.BROKER_ID) AS CUSTOMER_COUNT
FROM customer c
INNER JOIN broker b ON c.BROKER_ID=b.ID
GROUP BY b.NAME
ORDER BY CUSTOMER_COUNT DESC, NAME


/*
          CUSTOMER TABLE
    ID  NAME    AMOUNT  BROKER_ID
    1   sam     3000    4
    2   john    4000    2
    3   mack    5000    2
    4   test    3000    3
    5   june    2000    3
    6   mike    4000    1
    7   annie   4000    2
    8   micheal 2000    1
    9   tom     2000    4
    10  jason   6000    4
 */


 /* 
          BROKER TABLE
    ID  NAME
    1   Ted
    2   Mark
    3   Aaron
    4   Luke
  */


  /* 
    SCRIPT TO CREATE TABLES

      CREATE TABLE customer 
      ( 
          ID          NVARCHAR(4000), 
          NAME        NVARCHAR(200), 
          AMOUNT      NVARCHAR(200),
          BROKER_ID   NVARCHAR(4000)
      ); 

      CREATE TABLE broker
      ( 
          ID          NVARCHAR(4000),
          NAME        NVARCHAR(200), 
      );

      INSERT INTO customer (ID, NAME, AMOUNT, BROKER_ID) VALUES ('1', 'sam', '3000', '4');
      INSERT INTO customer (ID, NAME, AMOUNT, BROKER_ID) VALUES ('2', 'john', '4000', '2');
      INSERT INTO customer (ID, NAME, AMOUNT, BROKER_ID) VALUES ('3', 'mack', '5000', '2');
      INSERT INTO customer (ID, NAME, AMOUNT, BROKER_ID) VALUES ('4', 'test', '3000', '3');
      INSERT INTO customer (ID, NAME, AMOUNT, BROKER_ID) VALUES ('5', 'june', '2000', '3');
      INSERT INTO customer (ID, NAME, AMOUNT, BROKER_ID) VALUES ('6', 'mike', '4000', '1');
      INSERT INTO customer (ID, NAME, AMOUNT, BROKER_ID) VALUES ('7', 'annie', '4000', '2');
      INSERT INTO customer (ID, NAME, AMOUNT, BROKER_ID) VALUES ('8', 'micheal', '2000', '1');
      INSERT INTO customer (ID, NAME, AMOUNT, BROKER_ID) VALUES ('9', 'tom', '2000', '4');
      INSERT INTO customer (ID, NAME, AMOUNT, BROKER_ID) VALUES ('10', 'jason', '6000', '4');

      INSERT INTO broker (ID, NAME) VALUES ('1', 'Ted');
      INSERT INTO broker (ID, NAME) VALUES ('2', 'Mark');
      INSERT INTO broker (ID, NAME) VALUES ('3', 'Aaron');
      INSERT INTO broker (ID, NAME) VALUES ('4', 'Luke');
  
   */