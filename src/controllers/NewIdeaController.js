const ideasdb = require('../../ideasdb');

module.exports = {
  create(request, response) {
    const query =`
    INSERT INTO ideas(
      image,
      title,
      category,
      description,
      link
    ) VALUES (?,?,?,?,?);
    `
  
    const values = [
      request.body.image,
      request.body.title,
      request.body.category,
      request.body.description,
      request.body.link
    ]
  
    ideasdb.run(query, values, function(err) {
      if (err) {
        console.log(err)
        return response.send("[ERROR] Sistema temporariamente inativo!"
        + 
        "\n[ERROR] Estamos enfrentando problemas com o banco de dados!")
      }
  
      return response.redirect("/ideias")
    });
      
    



  }
}