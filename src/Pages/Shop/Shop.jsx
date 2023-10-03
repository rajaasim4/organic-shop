import ShopAside from "../../Layout/ShopAside/ShopAside"
import Helmet from "../../Components/Helmet/Helmet"
import Brands from "../../Layout/Brands/Brands"
const Shop = () => {
    return (
        <>
            <Helmet>

                <ShopAside />
            </Helmet>
            <div className="h-24"></div>
            <Brands />
        </>
    )
}

export default Shop