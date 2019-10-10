"use strict";
let path = require("path");
let _ = require("lodash");

function getConfig(lookPath, log) {
    let pjsonPath = path.join(lookPath, "package.json");
    log.silly("CFG", "Looking for package.json in: '" + pjsonPath + "'.");
    try {
        let json = require(pjsonPath);
        log.silly("CFG", "Loaded:\n" + JSON.stringify(json));
        if (_.isPlainObject(json) && _.isPlainObject(json["cmake-js"])) {
            log.silly("CFG", "Config found.");
            return json["cmake-js"];
        }
        else {
            log.silly("CFG", "Config not found.");
            return null;
        }
    }
    catch (e) {
        log.silly("CFG", "'package.json' not found.");
        return null;
    }
}

module.exports = function (projectPath, log) {
    log.verbose("CFG", "Looking for application level CMake.js config in '" + projectPath + ".");
    let currPath = projectPath;
    let lastConfig = null;
    let currConfig;
    for (; ;) {
        currConfig = getConfig(currPath, log);
        if (currConfig) {
            lastConfig = currConfig;
        }
        try {
            log.silly("CFG", "Looking for parent path.");
            let lastPath = currPath;
            currPath = path.normalize(path.join(currPath, ".."));
            if (lastPath === currPath) {
                currPath = null; // root
            }
            if (currPath) {
                log.silly("CFG", "Parent path: '" + currPath + "'.");
            }
        }
        catch (e) {
            log.silly("CFG", "Exception:\n" + e.stack);
            break;
        }
        if (currPath === null) {
            log.silly("CFG", "Parent path with package.json file doesn't exists. Done.");
            break;
        }
    }
    if (lastConfig) {
        log.verbose("CFG", "Application level CMake.js config found:\n" + JSON.stringify(lastConfig));
    }
    else {
        log.verbose("CFG", "Application level CMake.js config doesn't exists.");
    }
    return lastConfig;
};
