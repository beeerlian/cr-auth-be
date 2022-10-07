
exports.create = async (req, res) => {
       try {
              const response = await axios.post(`${endpoint.node}/item`, req.body);
              res.status(200).send({
                     status: "success",
                     data: response.data
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

exports.update = async (req, res) => {
       try {
              const response = await axios.put(`${endpoint.node}/item/${req.params.id}`, req.body);
              res.status(200).send({
                     status: "success",
                     data: response.data
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

exports.delete = async (req, res) => {
       try {
              const response = await axios.delete(`${endpoint.node}/item/${req.params.id}`);
              res.status(200).send({
                     status: "success",
                     data: response.data
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

exports.get = async (req, res) => {
       try {
              const response = await axios.get(`${endpoint.node}/item/${req.params.id}`);
              res.status(200).send({
                     status: "success",
                     data: response.data
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

exports.getAll = async (req, res) => {
       try {
              const response = await axios.get(`${endpoint.node}/item`);
              res.status(200).send({
                     status: "success",
                     data: response.data
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

function sendErrorRes(res, error) {
       res.status(error.status || 400).send({
              code: error.code || "BAD_REQUEST",
              error: error.response.data.message || error.response.data || error.message || error
       })
}