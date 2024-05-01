const UpdateListService = async (Request, DataModel, updateType) => {
  try {
    let UserEmail = Request.headers["email"];
    let Childs = Request.body["Childs"];

    let updates;
    if (updateType === "add") {
      updates = Childs.map((product) => ({
        updateOne: {
          filter: { _id: product.ProductID, email: UserEmail },
          update: { $inc: { Stock: product.Qty } },
        },
      }));
    } else {
      updates = Childs.map((product) => ({
        updateOne: {
          filter: { _id: product.ProductID, email: UserEmail },
          update: { $inc: { Stock: -product.Qty } },
        },
      }));
    }

    let data = await DataModel.bulkWrite(updates);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error };
  }
};
module.exports = UpdateListService;
