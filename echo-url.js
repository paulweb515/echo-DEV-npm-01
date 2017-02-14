/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2016. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
/*eslint-env node, express */
"use strict";

const express = require("express");

const router = express.Router();

module.exports = router;

/*
 * A debugging controller that echoes all the URL that it received.
 * Useful to see if the reverse proxy has been messing with the request.
 */
router.all("*", function(req, res) {
    res.status(200)
        .set("Content-Type", "text/plain")
        .send("I got: " + req.url);
});
