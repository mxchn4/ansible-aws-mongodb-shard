sh.addShard("rs/{{ mongod1 }}:27018");
sh.addShard("rs/{{ mongod2 }}:27018");
sh.addShard("rs/{{ mongod3 }}:27018");

db.products.insertMany( [
    { item: "card", qty: 15 },
    { item: "envelope", qty: 20 },
    { item: "stamps" , qty: 30 }
] );

sh.enableSharding("test");

