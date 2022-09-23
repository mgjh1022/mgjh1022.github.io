
var express = require('express');
var router = express.Router();
const conn = require('./maria');

router.get('/', function(req, res, next) {
	const { headers: { uuid } } = req;
	
	conn.query(`
		SELECT A.image, count, IF(B.image is NULL, FALSE, TRUE) isLiked FROM (
		    SELECT IMAGE image, COUNT(UUID) count
		    FROM likes
		    GROUP BY IMAGE 
		) A LEFT JOIN (
		    SELECT IMAGE image
		    FROM likes
		    WHERE UUID = ?
		) B ON A.image = B.Image`, 
		uuid, 
		function(err, rows, fields) {
		const data = {};
		
		rows.forEach(el => {
			data[el.image] = { count: el.count, isLiked: !!el.isLiked};
		});

		res.status(200).json(data);
	})
});

router.post('/:id', function(req, res, next) {
	const { params: { id }, headers: { uuid } } = req;

	conn.query(`INSERT INTO likes(IMAGE, UUID) VALUES(?, ?)`, [id, uuid], function(err, rows, fields) {
		if(rows) res.status(200).send();
		else res.status(400).send();
	});	
});

router.delete('/:id', function(req, res, next) {
    const { params: { id }, headers: { uuid } } = req;

    conn.query(`DELETE FROM likes WHERE IMAGE=? AND UUID=? LIMIT 1`,[id, uuid], function(err, rows, fields) {
        if(rows) res.status(200).send();
        else res.status(400).send();
    });
});

module.exports = router;
