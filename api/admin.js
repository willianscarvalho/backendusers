module.exports = app => {
    const get = (req, res) => {
        res.send(' Minha Pagina Inicial do tipo GET')
    }
    const post = (req, res) => {
        res.send(' Minha Pagina Inicial do tipo POST')
    }

    return {get, post}
}