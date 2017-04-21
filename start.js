require.extensions[".sass"] = () => {
    return "";
};

require.extensions[".scss"] = () => {
    return "";
};

require("babel-register");
require("./src/server");
