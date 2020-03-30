const ideasdb = require('../../ideasdb');

module.exports = {
  index(request, response) {
    ideasdb.all(`SELECT * FROM ideas`, function(err, rows) {
      if (err) {
        console.log(err)
        return response.send("[ERROR] Sistema temporariamente inativo!"
        + 
        "\n[ERROR] Estamos enfrentando problemas com o banco de dados!")
      }
  
      const reversedIdeas = [...rows].reverse()
  
      let lastIdeas = []
      for (let idea of reversedIdeas) {
        if(lastIdeas.length < 2) {
          lastIdeas.push(idea)
        }
      }
      return response.render("index.html", { ideas : lastIdeas });
    });
  },
  ideias(request, response) {
    ideasdb.all(`SELECT * FROM ideas`, function(err, rows) {
      if (err) {
        console.log(err)
        return response.send("[ERROR] Sistema temporariamente inativo!"
        + 
        "\n[ERROR] Estamos enfrentando problemas com o banco de dados!")
      }
  
      const reversedIdeas = [...rows].reverse()
      return response.render("ideias.html", { ideas: reversedIdeas});
    });
  }
}