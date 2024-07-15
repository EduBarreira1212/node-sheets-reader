const loggerMiddleware = (req, res, next) => {
    if(req.body){
        console.log(req.method);
        console.log(req.body);
    }else if(req.params){
        console.log(req.method);
        console.log(req.params);
    }else{
        console.log(req.method);
        console.log(req.url);
    }
    next();
};

export default loggerMiddleware;