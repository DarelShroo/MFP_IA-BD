
REGISTER piggybank.jar

FLIGHTS = LOAD '$flights_file' USING
       org.apache.pig.piggybank.storage.CSVExcelStorage(',', 'NO_MULTILINE', 'UNIX', 'SKIP_INPUT_HEADER')
       AS (dayofmonth:int, dayofweek:int, carrier:chararray, 
           depairportid:chararray, arrairportid:chararray, depdelay:int, arrdelay:int);

DELAYED_FLIGHTS = FILTER FLIGHTS BY arrdelay > 15;

GROUPED_CARRIER = GROUP DELAYED_FLIGHTS BY carrier;

COUNTER_ARR_DELAY = FOREACH GROUPED_CARRIER GENERATE
    group AS carrier,
    COUNT(DELAYED_FLIGHTS) AS delayed_flights;

ORDERED = ORDER COUNTER_ARR_DELAY BY delayed_flights DESC;

FLIGHTS_5 = LIMIT ORDERED 5;

DUMP FLIGHTS_5;
