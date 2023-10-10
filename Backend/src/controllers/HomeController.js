 class HomeClontroller {
    index(req, res) {
        res.json({
            tudoCerto: true,
        })
    }
 }

 export default new HomeClontroller();