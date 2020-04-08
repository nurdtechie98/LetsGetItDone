const MongooseErrorHandler = (error,request, response, next) => {

	if (error.name === "CastError" && error.kind === "ObjectId") {
		return response.status(400).send({
			error: "malformatted id"
		});
	} else if (error.name === "ValidationError") {
		return response.status(400).json({
			error: error._message || error.message
		});
	} else if (error.name === "MongoError") {
		return response.status(500).json({
			error: error._message || error.message
		})
	} else if (error.name === "UnknownError") {
		return response.status(error.statusCode).json({
			error: error._message || error.message
		});
	}

	next(error);
}

const unknownEndpoint = (request, response) => {
	response.status(404).send({
		error: `unknown endpoint ${request.path}`
	});
};

module.exports = {
	MongooseErrorHandler,
	unknownEndpoint
}