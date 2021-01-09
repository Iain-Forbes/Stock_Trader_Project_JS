use portfolio;
db.dropDatabase();

db.stocks.insertMany([
{
    code: "BT.L",
    name: "BT",
    price: "150",
    change: "+2.5"
}, 

{
    code: "AV.L",
    name: "AVIVA",
    price: "348.6",
    change: "-1.3"   
}
]);