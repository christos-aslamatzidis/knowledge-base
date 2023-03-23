SELECT *, UNIX_TIMESTAMP(modified_on) AS unix_ts_in_secs FROM dataset WHERE (UNIX_TIMESTAMP(modified_on) > :sql_last_value AND modified_on < NOW()) ORDER BY modified_on ASC