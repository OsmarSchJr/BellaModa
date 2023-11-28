import ProductModel from '../../models/ProductModel';
import CategoryModel from '../../models/CategoryModel';


class StoreController {
    async store(req, res) {
        
        //req.body.price = req.body.Number(price).toFixed(2);

        try {
            if (req.body.discount_datatime_start) {
                req.body.discount_datatime_start = new Date(
                    req.body.discount_datatime_start
                );
            if (req.body.discount_datatime_end) {
                req.body.discount_datatime_end = new Date(
                    req.body.discount_datatime_end
                );
            } 

            const category = await CategoryModel.findByPk(req.body.category_id);

            if (!category) {
                return res.status(400).json({ message: "category not found" });
            }

            const product = await ProductModel.create(req.body);

            return res.json(product);
            }
        } catch(error) {
            console.error(new Date().toUTCString(), '-', error);
            return res.status(500).json({ message: 'internal error' });
        }

    }
}

export default new StoreController();