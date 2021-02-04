const router = require("express").Router();
const connection = require("../db_connection");

router.get("/", (req, res) => {
  const sql =
    "SELECT * FROM artiste ORDER BY artiste.nom ASC";
  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: "Error 500" });
    } else {
      res.status(200).json(result);
    }
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM artiste WHERE id=?`;
  connection.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else if (result.length === 0) {
      res.status(404).json({ errorMessage: "Artiste not found !!!" });
    } else {
      res.status(200).json(result);
    }
  });
});

router.post("/", (req, res) => {
  const { nom, photo, genre } = req.body;
  connection.query(
    "INSERT INTO artiste(nom, photo, genre) VALUES(?, ?, ?)",
    [nom, photo, genre],
    (err, result) => {
      if (err) {
        res.status(500).json("Error creating an artiste");
      } else {
        const sql = "SELECT * FROM artiste WHERE id=?";
        connection.query(sql, [result.insertId], (errTwo, resTwo) => {
          if (err) {
            res.status(500).json({ errorMessage: errTwo.message });
          } else {
            res.status(201).json(resTwo[0]);
          }
        });
      }
    }
  );
});

router.put("/:id", (req, res) => {
  const idArtiste = req.params.id;
  const newArtiste = req.body;
  connection.query(
    "UPDATE artiste SET ? WHERE id = ?",
    [newArtiste, idArtiste],
    (err, result) => {
      if (err) {
        res.status(500).json("Error updating an artiste");
      } else {
        const sql = "SELECT * FROM artiste WHERE id=?";
        connection.query(sql, [idArtiste], (errTwo, resTwo) => {
          if (err) {
            res.status(500).json({ errorMessage: errTwo.message });
          } else {
            res.status(201).json(resTwo[0]);
          }
        });
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  const idArtiste = req.params.id;
  connection.query(
    "DELETE FROM artiste WHERE id= ?",
    [idArtiste],
    (err, result) => {
      if (err) {
        res.status(500).json("Error deleting an artiste");
      } else {
        res.status(200).json(result);
      }
    }
  );
});

module.exports = router;
