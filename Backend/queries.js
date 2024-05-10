const Pool = require('pg').Pool
const pool = new Pool({
  user: 'mobtepat',
  host: 'isilo.db.elephantsql.com',
  database: 'mobtepat',
  password: 'Cg7b_DFN1d5iP5BnOo61GWTTowMhuAv7',
  port: 5432,
})

const getSites = (request, response) => {
    console.log('hello')
    console.log(request.params.zip)
    const zip = request.params.zip
    pool.query('SELECT * FROM sitedetails where zip_code=$1',[zip], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })

    // response.status(200).json([{siteid: '1234'}])
  }

  module.exports = {
    getSites
  }
  