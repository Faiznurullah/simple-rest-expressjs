const response = (status, data, message, res) => {

    res.status(status).json({
        status: status,
        message: message,
        data: data,
        pagination: {
          prev: "",
          next: "",
          current: "",
        }
    });

}

module.exports = response;