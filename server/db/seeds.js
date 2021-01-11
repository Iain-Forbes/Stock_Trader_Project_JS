use portfolio;
db.dropDatabase();

db.positions.insertMany([
{
    code: "BT.L",
    name: "BT",
    price: "150",
    numberOfShares: 10,
    userId: "123456"
}, 

{
    code: "AV.L",
    name: "AVIVA",
    price: "348.6",
    numberOfShares: 20, 
    userId: "123456"
}
]);