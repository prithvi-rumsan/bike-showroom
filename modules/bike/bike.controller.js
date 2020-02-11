const BikeModel = require("./bike.model");

class BikeController {
  constructor() {}

  async list(start, limit, name) {
    //input start, limit, query
    try {
      let $match = {};
      if (name) {
        $match.name = new RegExp(name, "gi");
      }
      return await BikeModel.aggregate([
        {
          $match
        }
      ]);
    } catch {
      e => next(e);
    }

    //output data,total, start, limit, page(start/limit+1)
  }

  updateById(id, payload) {
    return BikeModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: payload.name,
          engine: payload.engine,
          color: payload.color,
          brand: payload.brand,
          price: payload.price,
          category: payload.category,
          image_url: payload.image_url,
          details: payload.details
        }
      }
    );
  }

  create(payload) {
    return BikeModel.create(payload);
  }

  remove(id) {
    return BikeModel.findOneAndDelete({ _id: id });
  }

  async getById(id) {
    return await BikeModel.findById({ _id: id });
  }
}

module.exports = new BikeController();
