module.exports = {
    index(req,res){
        return res.send('selamat datang diperpustakaan')
    },
    home(req, res) { // <--
        return res.send({
            user: req.user
        })
    }
}
