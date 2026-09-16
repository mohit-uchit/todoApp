class CommonHelper {
  /**
   * Returns the pagination fields to format the getAll api's response
   * @param {int} currentPage Current page Default 1
   * @param {int} limit Per page limit Defaul 10
   * @param {int} total Total records present according to the filters applied
   * @returns {object} pagination Return the object consisting of all necessary pagination fields.
   */
   static paginate(currentPage=1, limit=10, total){
      const totalPages = Math.ceil(total/limit);
      return { 
         page : parseInt(currentPage),
         limit,
         total,
         totalPages
      }
   }
}

module.exports = CommonHelper;