/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2016. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
/*eslint-env node, express*/
'use strict';

var express = require('express');

var router = express.Router();

module.exports = router;

/*
 * A debugging controller that echoes all the body that it received. 
 */
router.all('*', function(req, res) {
    res.status(200)
        .set('Content-Type', 'text/plain')
        .send(JSON.stringify(req.body, null, 4));
});
