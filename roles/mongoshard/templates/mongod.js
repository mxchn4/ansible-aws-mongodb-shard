var cfg = { 
    _id: "rs",
    members: [
        { _id: 0, host: "{{ mongod1 }}:27018"},
        { _id: 1, host: "{{ mongod2 }}:27018"},
        { _id: 2, host: "{{ mongod3 }}:27018"}
    ]
};

var error = rs.initiate(cfg);
printjson(error);

