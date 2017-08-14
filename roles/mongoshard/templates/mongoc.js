var cfg = { 
    _id: "rc",
    configsvr: true,
    members: [
        { _id: 0, host: "{{ mongoc1 }}:27019"},
        { _id: 1, host: "{{ mongoc2 }}:27019"},
        { _id: 2, host: "{{ mongoc3 }}:27019"}
    ]
};

var error = rs.initiate(cfg);
printjson(error);