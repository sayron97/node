const express = require("express");
let text = 'Hello, my dear';

exports.getText = (data) => {
    return text + data;
};


